import { motion } from "framer-motion";
import { Globe, Target, Sparkles, Layers, Palette, Megaphone, MapPin, FileText, Image, Users, ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

const digital = [
  {
    icon: Target,
    title: "Meta Ads (Facebook & Instagram)",
    problem: "Spending money on ads without leads or sales.",
    solution: "Conversion-focused Meta campaigns built around your offer, audience and budget.",
    process: ["Audience research", "Creative & copywriting", "Campaign launch & A/B testing", "Daily optimization"],
    results: "2x–4x more qualified leads at 30–50% lower cost per lead.",
  },
  {
    icon: Globe,
    title: "Google Ads",
    problem: "Customers searching for you but not finding you.",
    solution: "High-intent Google Search, Performance Max and YouTube ads that capture demand.",
    process: ["Keyword research", "Ad copy + landing page", "Bid strategy", "Conversion tracking"],
    results: "Predictable lead flow from people actively searching for your service.",
  },
  {
    icon: Sparkles,
    title: "Social Media Management",
    problem: "Inconsistent posting, no engagement, no brand presence.",
    solution: "Strategic content, reels, and community management that builds a real audience.",
    process: ["Content calendar", "Reels + design", "Daily posting & engagement", "Monthly reporting"],
    results: "Consistent growth, brand recall, and inbound DMs that turn into customers.",
  },
  {
    icon: Layers,
    title: "Website Development",
    problem: "Old, slow, or non-converting website losing leads daily.",
    solution: "Fast, mobile-first websites and landing pages built to convert visitors into leads.",
    process: ["Strategy + wireframe", "Design", "Development", "Lead capture + analytics"],
    results: "2x–3x higher form fills, faster load times, better Google rankings.",
  },
  {
    icon: Palette,
    title: "Branding & Creative Design",
    problem: "Looking like every other small business in your market.",
    solution: "Premium brand identity — logo, colors, design system — that commands trust.",
    process: ["Brand discovery", "Visual identity", "Brand guidelines", "Marketing collateral"],
    results: "A brand that looks 10x bigger and earns higher pricing power.",
  },
];

const offline = [
  {
    icon: Megaphone,
    title: "Auto Rickshaw Advertising",
    problem: "Need mass local visibility without massive budgets.",
    solution: "Branded auto wraps that move through every street in your city, every day.",
    process: ["Route planning", "Design + printing", "Vehicle wrapping", "Coverage reporting"],
    results: "10,000+ daily impressions per auto across your target locality.",
  },
  {
    icon: MapPin,
    title: "Hoardings & Billboards",
    problem: "Best locations always taken or overpriced.",
    solution: "Premium hoarding placements in highest-footfall spots in Vidharbha cities.",
    process: ["Site audit", "Negotiation", "Design + installation", "Visibility report"],
    results: "Massive local brand recall and trust — the kind only billboards build.",
  },
  {
    icon: FileText,
    title: "Pamphlet Distribution",
    problem: "Pamphlets dumped, not delivered. Money wasted.",
    solution: "Targeted door-to-door and newspaper insert distribution with verified coverage.",
    process: ["Area mapping", "Design + printing", "Verified distribution", "Photo proof"],
    results: "Real walk-ins, real calls, real footfall — measurable, not assumed.",
  },
  {
    icon: Image,
    title: "Banner & Flex Printing",
    problem: "Cheap-looking flex that hurts your brand.",
    solution: "Premium-quality flex, banners, standees, designed to match your brand identity.",
    process: ["Design", "High-quality print", "Installation", "Quality check"],
    results: "Marketing collateral that looks expensive and converts.",
  },
  {
    icon: Users,
    title: "Local Area Campaigns",
    problem: "No system to dominate your local area.",
    solution: "End-to-end local domination — autos + hoardings + pamphlets + ground activation.",
    process: ["Locality strategy", "Multi-channel rollout", "Ground team", "Lead tracking"],
    results: "Become the most-recognized brand in your locality within 60–90 days.",
  },
];

const ServiceCard = ({ s, i }: { s: typeof digital[0]; i: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5, delay: i * 0.05 }}
    className="silver-border rounded-2xl p-8 hover-silver"
  >
    <div className="w-14 h-14 rounded-xl bg-silver-gradient flex items-center justify-center text-jet mb-6">
      <s.icon size={24} />
    </div>
    <h3 className="text-2xl font-semibold text-silver-bright mb-5">{s.title}</h3>

    <div className="space-y-4 text-sm">
      <div>
        <div className="text-xs uppercase tracking-widest text-silver-dim mb-1">Problem</div>
        <p className="text-muted-foreground">{s.problem}</p>
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-silver-dim mb-1">Solution</div>
        <p className="text-foreground">{s.solution}</p>
      </div>
      <div>
        <div className="text-xs uppercase tracking-widest text-silver-dim mb-2">Process</div>
        <ul className="space-y-1.5">
          {s.process.map((p) => (
            <li key={p} className="flex items-start gap-2 text-muted-foreground">
              <CheckCircle2 size={14} className="text-silver mt-0.5 flex-shrink-0" />
              <span>{p}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="pt-2 border-t border-border">
        <div className="text-xs uppercase tracking-widest text-silver-dim mb-1">Expected Results</div>
        <p className="text-silver-bright font-medium">{s.results}</p>
      </div>
    </div>

    <Button asChild variant="outline" size="sm" className="mt-6">
      <Link to="/contact">Get Started <ArrowRight /></Link>
    </Button>
  </motion.div>
);

const Services = () => {
  return (
    <>
      {/* Hero */}
      <section className="pt-40 pb-16 container-tight">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-silver border border-silver/30 rounded-full px-3 py-1 mb-6">
            Services
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            <span className="text-silver-gradient">Online + Offline.</span>
            <br />One Growth Engine.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Pick a single service or run our full hybrid system. Either way, every campaign is built to drive leads, revenue and ROI — never vanity metrics.
          </p>
        </motion.div>
      </section>

      {/* Digital */}
      <section className="container-tight py-16">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs uppercase tracking-[0.3em] text-silver">A · Digital Marketing</span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {digital.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
        </div>
      </section>

      {/* Offline */}
      <section className="container-tight py-16">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-px flex-1 bg-border" />
          <span className="text-xs uppercase tracking-[0.3em] text-silver">B · Offline Marketing</span>
          <div className="h-px flex-1 bg-border" />
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {offline.map((s, i) => <ServiceCard key={s.title} s={s} i={i} />)}
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Services;
