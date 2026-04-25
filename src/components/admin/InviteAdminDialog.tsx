import { useState } from "react";
import { UserPlus, Mail, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { toast } from "sonner";
import { z } from "zod";
import { supabase } from "@/integrations/supabase/client";

const emailSchema = z
  .string()
  .trim()
  .email({ message: "Please enter a valid email address" })
  .max(255);

export const InviteAdminDialog = () => {
  const [open, setOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handlePromote = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = emailSchema.safeParse(email);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }

    setLoading(true);
    try {
      // 1. Look up the user by email in profiles
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("id, email, full_name")
        .ilike("email", parsed.data)
        .maybeSingle();

      if (profileError) throw profileError;

      if (!profile) {
        toast.error("No user found with that email", {
          description: "Ask them to sign up at /auth first, then promote them.",
        });
        return;
      }

      // 2. Check if they're already admin
      const { data: existingRole } = await supabase
        .from("user_roles")
        .select("id")
        .eq("user_id", profile.id)
        .eq("role", "admin")
        .maybeSingle();

      if (existingRole) {
        toast.info(`${profile.full_name || profile.email} is already an admin`);
        return;
      }

      // 3. Insert admin role
      const { error: insertError } = await supabase
        .from("user_roles")
        .insert({ user_id: profile.id, role: "admin" });

      if (insertError) throw insertError;

      toast.success("Admin promoted!", {
        description: `${profile.full_name || profile.email} can now access the dashboard.`,
      });
      setEmail("");
      setOpen(false);
    } catch (err: any) {
      toast.error(err.message || "Failed to promote user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="outline" size="lg">
          <UserPlus size={16} /> Invite Admin
        </Button>
      </DialogTrigger>
      <DialogContent className="bg-jet border-border">
        <DialogHeader>
          <DialogTitle className="text-2xl text-silver-bright">Invite Admin</DialogTitle>
          <DialogDescription>
            Promote an existing user to admin. They must first sign up at{" "}
            <span className="text-silver-bright font-medium">/auth</span> using
            this email address.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handlePromote} className="space-y-4 pt-2">
          <div className="space-y-2">
            <Label htmlFor="invite-email">User email</Label>
            <div className="relative">
              <Mail
                className="absolute left-3 top-1/2 -translate-y-1/2 text-silver-dim"
                size={16}
              />
              <Input
                id="invite-email"
                type="email"
                placeholder="person@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="pl-10 bg-background border-border"
                disabled={loading}
                autoFocus
                required
              />
            </div>
          </div>
          <DialogFooter className="gap-2 sm:gap-0">
            <Button
              type="button"
              variant="ghost"
              onClick={() => setOpen(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" variant="hero" disabled={loading || !email}>
              {loading ? (
                <>
                  <Loader2 size={16} className="animate-spin" /> Promoting...
                </>
              ) : (
                <>
                  <UserPlus size={16} /> Promote to Admin
                </>
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
