import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { z } from "zod";
import { Lock, Mail, User as UserIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "sonner";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/hooks/useAuth";

const signInSchema = z.object({
  email: z.string().trim().email("Invalid email").max(255),
  password: z.string().min(6, "Min 6 characters").max(100),
});

const signUpSchema = signInSchema.extend({
  fullName: z.string().trim().min(1, "Name required").max(100),
});

const Auth = () => {
  const navigate = useNavigate();
  const { user, loading: authLoading } = useAuth();
  const [loading, setLoading] = useState(false);
  const [signIn, setSignIn] = useState({ email: "", password: "" });
  const [signUp, setSignUp] = useState({ fullName: "", email: "", password: "" });

  useEffect(() => {
    if (!authLoading && user) navigate("/admin", { replace: true });
  }, [user, authLoading, navigate]);

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = signInSchema.safeParse(signIn);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signInWithPassword({
      email: parsed.data.email,
      password: parsed.data.password,
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Welcome back!");
    navigate("/admin");
  };

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = signUpSchema.safeParse(signUp);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0].message);
      return;
    }
    setLoading(true);
    const { error } = await supabase.auth.signUp({
      email: parsed.data.email,
      password: parsed.data.password,
      options: {
        emailRedirectTo: `${window.location.origin}/admin`,
        data: { full_name: parsed.data.fullName },
      },
    });
    setLoading(false);
    if (error) {
      toast.error(error.message);
      return;
    }
    toast.success("Account created! Check your email to confirm, then sign in.");
  };

  return (
    <section className="min-h-screen flex items-center justify-center container-tight py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md silver-border rounded-3xl p-8 md:p-10"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-block text-xs uppercase tracking-[0.25em] text-silver border border-silver/30 rounded-full px-3 py-1 mb-4">
            <span className="brand-name">Brandigo</span> Admin
          </Link>
          <h1 className="text-3xl font-bold text-silver-bright">Lead Dashboard Access</h1>
          <p className="text-muted-foreground text-sm mt-2">Sign in to view all leads</p>
        </div>

        <Tabs defaultValue="signin" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-6">
            <TabsTrigger value="signin">Sign In</TabsTrigger>
            <TabsTrigger value="signup">Sign Up</TabsTrigger>
          </TabsList>

          <TabsContent value="signin">
            <form onSubmit={handleSignIn} className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-silver-dim" size={18} />
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={signIn.email}
                  onChange={(e) => setSignIn({ ...signIn, email: e.target.value })}
                  className="h-12 pl-11 bg-jet border-border"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-silver-dim" size={18} />
                <Input
                  type="password"
                  placeholder="Password"
                  value={signIn.password}
                  onChange={(e) => setSignIn({ ...signIn, password: e.target.value })}
                  className="h-12 pl-11 bg-jet border-border"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                {loading ? "Signing in..." : "Sign In"}
              </Button>
            </form>
          </TabsContent>

          <TabsContent value="signup">
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="relative">
                <UserIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-silver-dim" size={18} />
                <Input
                  placeholder="Full name"
                  value={signUp.fullName}
                  onChange={(e) => setSignUp({ ...signUp, fullName: e.target.value })}
                  className="h-12 pl-11 bg-jet border-border"
                />
              </div>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-silver-dim" size={18} />
                <Input
                  type="email"
                  placeholder="you@example.com"
                  value={signUp.email}
                  onChange={(e) => setSignUp({ ...signUp, email: e.target.value })}
                  className="h-12 pl-11 bg-jet border-border"
                />
              </div>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-silver-dim" size={18} />
                <Input
                  type="password"
                  placeholder="Password (min 6 chars)"
                  value={signUp.password}
                  onChange={(e) => setSignUp({ ...signUp, password: e.target.value })}
                  className="h-12 pl-11 bg-jet border-border"
                />
              </div>
              <Button type="submit" variant="hero" size="lg" className="w-full" disabled={loading}>
                {loading ? "Creating..." : "Create Account"}
              </Button>
              <p className="text-xs text-muted-foreground text-center">
                The first signup automatically becomes admin.
              </p>
            </form>
          </TabsContent>
        </Tabs>

        <div className="mt-6 text-center">
          <Link to="/" className="text-sm text-silver-dim hover:text-silver-bright">← Back to website</Link>
        </div>
      </motion.div>
    </section>
  );
};

export default Auth;
