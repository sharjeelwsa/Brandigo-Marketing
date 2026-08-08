import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle, TrendingUp, Target, MapPin, Layers, Megaphone, Globe, Sparkles, CheckCircle2, BarChart3, Users, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import heroBg from "@/assets/hero-bg.jpg";
import coachingImg from "@/assets/coaching.jpg";



const services = [
  { icon: Globe, title: "Meta & Google Ads", desc: "Performance ad campaigns built to generate qualified leads at the lowest possible cost.", tag: "Digital" },
  { icon: Sparkles, title: "Social Media Management", desc: "Content, reels, posts and engagement that builds a brand people remember.", tag: "Digital" },
  { icon: Layers, title: "Website Development", desc: "Fast, conversion-focused websites and landing pages built to capture leads.", tag: "Digital" },
  { icon: Megaphone, title: "Auto Rickshaw Branding", desc: "Mass local visibility across Akola, Nagpur, Buldana and Amravati streets.", tag: "Offline" },
  { icon: MapPin, title: "Hoardings & Billboards", desc: "Premium hoarding placements in your highest-footfall locations.", tag: "Offline" },
  { icon: Users, title: "Pamphlets & Local Campaigns", desc: "Targeted distribution and ground campaigns that drive walk-ins.", tag: "Offline" },
];

const reasons = [
  { icon: Target, title: "Personalized strategy", desc: "No copy-paste plans. Every campaign is built for your business, your city, your budget." },
  { icon: MapPin, title: "Strong local market sense", desc: "We know Vidharbha. We know what works in Akola, Nagpur, Buldana and Amravati." },
  { icon: BarChart3, title: "Coaching institute experts", desc: "Deep specialization in NEET, JEE, schools and tuition class admissions." },
  { icon: Zap, title: "Hybrid marketing system", desc: "Online + Offline together. The only system that compounds results in tier-2 cities." },
];

const Index = () => {
  return (
    <>
      {/* HERO */}
      <section className="relative min-h-[100vh] flex items-center pt-32 pb-20 overflow-hidden">
        <div
          className="absolute inset-0 -z-10 opacity-50"
          style={{ backgroundImage: `url(${heroBg})`, backgroundSize: "cover", backgroundPosition: "center" }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-jet via-jet/80 to-jet" />

        <div className="container-tight relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-silver border border-silver/30 rounded-full px-4 py-1.5 mb-8 bg-jet-soft/60 backdrop-blur">
              <span className="w-1.5 h-1.5 rounded-full bg-silver animate-pulse" />
              Vidharbha's Leading Growth Agency
            </span>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[0.95] mb-8">
              <span className="text-silver-gradient">Scale Your Business</span>
              <br />
              <span className="text-foreground">with </span>
              <span className="italic font-light text-silver">Performance Marketing</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 leading-relaxed">
              Vidharbha's leading agency helping businesses grow using a powerful combination of digital + offline marketing. Real leads. Real revenue. No vanity metrics.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild variant="hero" size="xl">
                <Link to="/contact">Book Free Strategy Call <ArrowRight /></Link>
              </Button>
              <Button asChild variant="whatsapp" size="xl">
                <a href="https://wa.me/918669736979" target="_blank" rel="noopener noreferrer">
                  <MessageCircle /> Chat on WhatsApp
                </a>
              </Button>
            </div>
          </motion.div>


        </div>
      </section>

      {/* SOCIAL PROOF / TICKER */}
      <section className="border-y border-border bg-jet-soft/40 py-6 overflow-hidden">
        <div className="flex gap-12 animate-shimmer text-silver-dim text-sm uppercase tracking-[0.3em] whitespace-nowrap">
          <span>★ Performance-Driven</span>
          <span>★ Lead Generation Experts</span>
          <span>★ NEET / JEE Coaching Marketing</span>
          <span>★ Hybrid Online + Offline</span>
          <span>★ Akola · Nagpur · Buldana · Amravati</span>
          <span>★ Real ROI, Not Vanity Metrics</span>
          <span>★ Performance-Driven</span>
          <span>★ Lead Generation Experts</span>
        </div>
      </section>

      {/* USP — HYBRID */}
      <section className="container-tight py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-xs uppercase tracking-[0.25em] text-silver-dim border border-border/60 rounded-full px-3 py-1 mb-5 bg-jet-soft/60">
              Our Special Differentiator
            </span>
            <h2 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              The <span className="text-silver-gradient">Hybrid Marketing System</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Most agencies do only digital. We do both. We combine the precision of online ads with the mass-trust of hoardings, autos and pamphlets — built for tier-2 markets like yours.
            </p>
            <ul className="space-y-3">
              {[
                "Digital ads bring in qualified leads daily",
                "Offline campaigns build local trust and brand recall",
                "Both work together to compound your growth",
                "One agency, one strategy, zero confusion",
              ].map((p) => (
                <li key={p} className="flex items-start gap-3 text-foreground">
                  <CheckCircle2 className="text-silver mt-0.5 flex-shrink-0" size={20} />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
            <Button asChild size="lg" className="mt-10">
              <Link to="/services">Explore All Services <ArrowRight /></Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <div className="silver-border rounded-2xl p-6 hover-silver">
                <Globe className="text-silver mb-3" size={28} />
                <div className="text-2xl font-bold text-silver-bright">Online</div>
                <div className="text-sm text-muted-foreground mt-2">Meta · Google · SEO · Social · Web</div>
              </div>
              <div className="silver-border rounded-2xl p-6 hover-silver mt-8">
                <Megaphone className="text-silver mb-3" size={28} />
                <div className="text-2xl font-bold text-silver-bright">Offline</div>
                <div className="text-sm text-muted-foreground mt-2">Autos · Hoardings · Pamphlets · Local</div>
              </div>
              <div className="col-span-2 bg-silver-gradient rounded-2xl p-8 text-jet text-center">
                <TrendingUp className="mx-auto mb-2" size={28} />
                <div className="text-3xl font-bold">= Real Growth</div>
                <div className="text-sm font-medium opacity-80 mt-1">Leads · Revenue · ROI</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SERVICES OVERVIEW */}
      <section className="container-tight py-24">
        <SectionHeading
          eyebrow="What We Do"
          title="360° Marketing Services"
          subtitle="A complete growth engine — digital and offline — under one roof."
        />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="silver-border rounded-2xl p-7 hover-silver group"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="w-12 h-12 rounded-xl bg-silver/10 flex items-center justify-center text-silver group-hover:bg-silver-gradient group-hover:text-jet transition-all">
                  <s.icon size={22} />
                </div>
                <span className="text-[10px] uppercase tracking-widest text-silver-dim border border-border rounded-full px-2 py-0.5">
                  {s.tag}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-silver-bright mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/services">See All Services <ArrowRight /></Link>
          </Button>
        </div>
      </section>

      {/* WHY CHOOSE */}
      <section className="container-tight py-24 md:py-32">
        <SectionHeading
          eyebrow={<>Why <span className="brand-name">Brandigo</span></>}
          title="Built for Real Business Growth"
          subtitle="We're not a flashy agency. We're a growth partner obsessed with leads, revenue and ROI."
        />
        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="silver-border rounded-2xl p-8 flex gap-5 hover-silver"
            >
              <div className="w-14 h-14 rounded-xl bg-silver-gradient flex items-center justify-center text-jet flex-shrink-0">
                <r.icon size={24} />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-silver-bright mb-2">{r.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CASE STUDIES PREVIEW */}
      <section className="container-tight py-24">
        <SectionHeading
          eyebrow="Proven Results"
          title="Real Businesses. Real Numbers."
          subtitle="A snapshot of what happens when our hybrid system is applied."
        />
        <div className="mt-16 grid md:grid-cols-3 gap-5">
          {[
            { type: "Coaching Institute", metric: "3.2x", label: "More NEET admissions in one season" },
            { type: "Local Retail Chain", metric: "₹42L+", label: "Revenue from a single Meta campaign" },
            { type: "Real Estate Builder", metric: "180+", label: "Site visits in 30 days, hybrid push" },
          ].map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="silver-border rounded-2xl p-8 hover-silver"
            >
              <div className="text-xs uppercase tracking-[0.2em] text-silver-dim mb-4">{c.type}</div>
              <div className="text-5xl font-bold text-silver-gradient mb-3">{c.metric}</div>
              <p className="text-muted-foreground">{c.label}</p>
            </motion.div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Button asChild variant="outline" size="lg">
            <Link to="/case-studies">Read Full Case Studies <ArrowRight /></Link>
          </Button>
        </div>
      </section>

      {/* COACHING INSTITUTE SECTION */}
      <section className="container-tight py-24">
        <div className="relative rounded-3xl overflow-hidden border border-border">
          <div
            className="absolute inset-0 opacity-20"
            style={{ backgroundImage: `url(${coachingImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-jet via-jet/95 to-jet/60" />
          <div className="relative grid md:grid-cols-2 gap-10 p-10 md:p-16 items-center">
            <div>
              <span className="inline-block text-xs uppercase tracking-[0.25em] text-silver border border-silver/30 rounded-full px-3 py-1 mb-6">
                Specialized Practice
              </span>
              <h2 className="text-4xl md:text-5xl font-bold mb-5">
                <span className="text-silver-gradient">Marketing for</span><br />
                Coaching Institutes
              </h2>
              <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                NEET, JEE, schools, tuition classes — we understand the admission cycle, parent psychology, and student decision journey better than any generic agency. We've helped institutes fill batches months before peak season.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Batch-fill campaigns timed to admission cycles",
                  "Parent + student dual-funnel ad strategy",
                  "Hybrid push: Meta ads + auto branding + pamphlets",
                  "Demo-class lead funnels that convert",
                ].map((p) => (
                  <li key={p} className="flex items-start gap-3 text-sm">
                    <CheckCircle2 className="text-silver mt-0.5 flex-shrink-0" size={18} />
                    <span className="text-foreground">{p}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="hero" size="lg">
                <Link to="/contact">Get Coaching Marketing Plan <ArrowRight /></Link>
              </Button>
            </div>
            <div className="hidden md:block" />
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Index;
