import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Mail, Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "", business: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.business) {
      toast.error("Please fill all fields");
      return;
    }
    const text = `Hi Brandigo!%0A%0AName: ${form.name}%0APhone: ${form.phone}%0ABusiness Type: ${form.business}%0A%0AI'd like to book a free strategy call.`;
    window.open(`https://wa.me/918669736979?text=${text}`, "_blank");
    setSubmitted(true);
    toast.success("Opening WhatsApp — we'll reply within 30 minutes!");
  };

  return (
    <>
      <section className="pt-40 pb-16 container-tight">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-silver border border-silver/30 rounded-full px-3 py-1 mb-6">
            Let's Talk
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            <span className="text-silver-gradient">Book your free</span>
            <br />strategy call.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Tell us about your business. We'll audit your current marketing and show you exactly how to get more leads — within 30 minutes, free of cost.
          </p>
        </motion.div>
      </section>

      <section className="container-tight pb-24">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 silver-border rounded-3xl p-8 md:p-10"
          >
            {submitted ? (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto rounded-full bg-silver-gradient flex items-center justify-center text-jet mb-6">
                  <CheckCircle2 size={36} />
                </div>
                <h3 className="text-3xl font-bold text-silver-bright mb-3">Thanks, {form.name}!</h3>
                <p className="text-muted-foreground mb-8">We've opened WhatsApp for you. Our team will respond within 30 minutes.</p>
                <Button onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", business: "" }); }} variant="outline">Send Another</Button>
              </div>
            ) : (
              <>
                <h2 className="text-2xl md:text-3xl font-bold text-silver-bright mb-2">Get your free audit</h2>
                <p className="text-muted-foreground mb-8">Fill in your details — we'll reach you on WhatsApp within minutes.</p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="text-sm font-medium text-silver-bright mb-2 block">Your Name</label>
                    <Input
                      placeholder="e.g. Mohammad Sharjeel"
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="h-12 bg-jet border-border text-foreground"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-silver-bright mb-2 block">Phone / WhatsApp Number</label>
                    <Input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="h-12 bg-jet border-border text-foreground"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-silver-bright mb-2 block">Business Type</label>
                    <Input
                      placeholder="e.g. NEET coaching, Retail store, Real estate"
                      value={form.business}
                      onChange={(e) => setForm({ ...form, business: e.target.value })}
                      className="h-12 bg-jet border-border text-foreground"
                    />
                  </div>
                  <Button type="submit" variant="hero" size="lg" className="w-full">
                    Book Free Strategy Call <Send />
                  </Button>
                  <p className="text-xs text-muted-foreground text-center">We respect your privacy. No spam, ever.</p>
                </form>
              </>
            )}
          </motion.div>

          {/* Contact info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-2 space-y-4"
          >
            <a
              href="https://wa.me/918669736979"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-7 rounded-2xl bg-whatsapp text-white hover:scale-[1.02] transition-transform shadow-lg shadow-whatsapp/30"
            >
              <MessageCircle size={28} className="mb-3" />
              <div className="text-sm uppercase tracking-wider opacity-80 mb-1">WhatsApp Now</div>
              <div className="text-2xl font-bold">+91 8669736979</div>
              <div className="text-sm opacity-80 mt-2">Avg. reply in 15 mins</div>
            </a>

            <a
              href="tel:+918669736979"
              className="block p-7 rounded-2xl silver-border hover-silver"
            >
              <Phone size={28} className="text-silver mb-3" />
              <div className="text-sm uppercase tracking-wider text-silver-dim mb-1">Call Us</div>
              <div className="text-2xl font-bold text-silver-bright">+91 8669736979</div>
              <div className="text-sm text-muted-foreground mt-2">Mon–Sat, 10 AM – 8 PM</div>
            </a>

            <div className="p-7 rounded-2xl silver-border">
              <MapPin size={28} className="text-silver mb-3" />
              <div className="text-sm uppercase tracking-wider text-silver-dim mb-1">Visit Us</div>
              <div className="text-xl font-semibold text-silver-bright">Akola, Maharashtra</div>
              <div className="text-sm text-muted-foreground mt-2">
                Serving Akola, Nagpur, Buldana, Amravati & all India
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
