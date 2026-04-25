import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Phone, MessageCircle, Download, LogOut, Search, Trash2, RefreshCw, Inbox } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";
import { InviteAdminDialog } from "@/components/admin/InviteAdminDialog";
import logo from "@/assets/logo.png";

interface Lead {
  id: string;
  name: string;
  phone: string;
  business_type: string;
  source: string | null;
  notes: string | null;
  status: string;
  created_at: string;
}

const Admin = () => {
  const { user, isAdmin, loading: authLoading, signOut } = useAuth();
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  const fetchLeads = async () => {
    setLoading(true);
    const { data, error } = await supabase
      .from("leads")
      .select("*")
      .order("created_at", { ascending: false });
    if (error) toast.error(error.message);
    else setLeads(data || []);
    setLoading(false);
  };

  useEffect(() => {
    if (isAdmin) fetchLeads();
  }, [isAdmin]);

  if (authLoading) {
    return <div className="min-h-screen flex items-center justify-center text-silver-dim">Loading...</div>;
  }
  if (!user) return <Navigate to="/auth" replace />;
  if (!isAdmin) {
    return (
      <div className="min-h-screen flex items-center justify-center container-tight">
        <div className="text-center max-w-md">
          <h1 className="text-3xl font-bold text-silver-bright mb-3">Access Denied</h1>
          <p className="text-muted-foreground mb-6">Your account doesn't have admin privileges. Ask an existing admin to invite you.</p>
          <Button onClick={signOut} variant="outline"><LogOut /> Sign Out</Button>
        </div>
      </div>
    );
  }

  const filtered = leads.filter((l) => {
    const q = search.toLowerCase();
    return (
      l.name.toLowerCase().includes(q) ||
      l.phone.toLowerCase().includes(q) ||
      l.business_type.toLowerCase().includes(q)
    );
  });

  const exportCSV = () => {
    const headers = ["Date", "Name", "Phone", "Business Type", "Source", "Status", "Notes"];
    const rows = filtered.map((l) => [
      new Date(l.created_at).toLocaleString(),
      l.name,
      l.phone,
      l.business_type,
      l.source || "",
      l.status,
      l.notes || "",
    ]);
    const csv = [headers, ...rows]
      .map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(","))
      .join("\n");
    const blob = new Blob([csv], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `brandigo-leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    toast.success(`Exported ${filtered.length} leads`);
  };

  const deleteLead = async (id: string) => {
    if (!confirm("Delete this lead?")) return;
    const { error } = await supabase.from("leads").delete().eq("id", id);
    if (error) return toast.error(error.message);
    setLeads(leads.filter((l) => l.id !== id));
    toast.success("Lead deleted");
  };

  const updateStatus = async (id: string, status: string) => {
    const { error } = await supabase.from("leads").update({ status }).eq("id", id);
    if (error) return toast.error(error.message);
    setLeads(leads.map((l) => (l.id === id ? { ...l, status } : l)));
  };

  const newCount = leads.filter((l) => l.status === "new").length;

  return (
    <div className="min-h-screen bg-jet">
      {/* Header */}
      <header className="border-b border-border sticky top-0 z-30 bg-jet/90 backdrop-blur-xl">
        <div className="container-tight h-20 flex items-center justify-between gap-4">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Brandigo" className="h-8 w-auto" />
            <Badge variant="outline" className="hidden sm:inline-flex">Admin</Badge>
          </Link>
          <div className="flex items-center gap-2">
            <span className="hidden md:block text-sm text-silver-dim">{user.email}</span>
            <Button onClick={signOut} variant="outline" size="sm"><LogOut size={16} /> Sign Out</Button>
          </div>
        </div>
      </header>

      <main className="container-tight py-10">
        {/* Title */}
        <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-silver-bright tracking-tighter">Leads Dashboard</h1>
          <p className="text-muted-foreground mt-2">All form submissions from your website.</p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
          <div className="silver-border rounded-2xl p-5">
            <div className="text-xs uppercase tracking-wider text-silver-dim mb-1">Total Leads</div>
            <div className="text-3xl font-bold text-silver-bright">{leads.length}</div>
          </div>
          <div className="silver-border rounded-2xl p-5">
            <div className="text-xs uppercase tracking-wider text-silver-dim mb-1">New</div>
            <div className="text-3xl font-bold text-silver-bright">{newCount}</div>
          </div>
          <div className="silver-border rounded-2xl p-5 col-span-2 md:col-span-1">
            <div className="text-xs uppercase tracking-wider text-silver-dim mb-1">Today</div>
            <div className="text-3xl font-bold text-silver-bright">
              {leads.filter((l) => new Date(l.created_at).toDateString() === new Date().toDateString()).length}
            </div>
          </div>
        </div>

        {/* Toolbar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-6">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-silver-dim" size={18} />
            <Input
              placeholder="Search by name, phone, or business..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-11 h-11 bg-jet border-border"
            />
          </div>
          <Button onClick={fetchLeads} variant="outline" size="lg"><RefreshCw size={16} /> Refresh</Button>
          <InviteAdminDialog />
          <Button onClick={exportCSV} variant="hero" size="lg" disabled={filtered.length === 0}>
            <Download size={16} /> Export CSV
          </Button>
        </div>

        {/* Leads list */}
        {loading ? (
          <div className="text-center py-20 text-silver-dim">Loading leads...</div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 silver-border rounded-2xl">
            <Inbox className="mx-auto text-silver-dim mb-4" size={48} />
            <h3 className="text-xl font-semibold text-silver-bright mb-2">
              {leads.length === 0 ? "No leads yet" : "No matches"}
            </h3>
            <p className="text-muted-foreground">
              {leads.length === 0 ? "Leads from the contact form will show up here." : "Try a different search."}
            </p>
          </div>
        ) : (
          <div className="space-y-3">
            {filtered.map((lead, i) => (
              <motion.div
                key={lead.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: Math.min(i * 0.03, 0.3) }}
                className="silver-border rounded-2xl p-5 md:p-6 hover-silver"
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-2 flex-wrap">
                      <h3 className="text-xl font-bold text-silver-bright">{lead.name}</h3>
                      <Badge
                        variant={lead.status === "new" ? "default" : "outline"}
                        className="cursor-pointer"
                        onClick={() => updateStatus(lead.id, lead.status === "new" ? "contacted" : "new")}
                      >
                        {lead.status}
                      </Badge>
                      <span className="text-xs text-silver-dim">
                        {new Date(lead.created_at).toLocaleString("en-IN", {
                          dateStyle: "medium",
                          timeStyle: "short",
                        })}
                      </span>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-x-6 gap-y-1 text-sm">
                      <div className="text-muted-foreground">
                        <span className="text-silver-dim">Phone:</span>{" "}
                        <span className="text-foreground font-medium">{lead.phone}</span>
                      </div>
                      <div className="text-muted-foreground">
                        <span className="text-silver-dim">Business:</span>{" "}
                        <span className="text-foreground font-medium">{lead.business_type}</span>
                      </div>
                    </div>
                    {lead.notes && (
                      <p className="text-sm text-muted-foreground mt-2 italic">"{lead.notes}"</p>
                    )}
                  </div>
                  <div className="flex gap-2 md:flex-col lg:flex-row shrink-0">
                    <Button asChild size="sm" variant="whatsapp">
                      <a
                        href={`https://wa.me/${lead.phone.replace(/\D/g, "")}`}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MessageCircle size={14} /> WhatsApp
                      </a>
                    </Button>
                    <Button asChild size="sm" variant="outline">
                      <a href={`tel:${lead.phone}`}><Phone size={14} /> Call</a>
                    </Button>
                    <Button onClick={() => deleteLead(lead.id)} size="sm" variant="ghost" className="text-destructive hover:text-destructive">
                      <Trash2 size={14} />
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default Admin;
