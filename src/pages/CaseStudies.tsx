import { motion } from "framer-motion";
import { TrendingUp, Users, Building2, GraduationCap, ShoppingBag, Home } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

const cases = [
  {
    icon: GraduationCap,
    type: "NEET Coaching Institute",
    location: "Akola",
    problem: "Struggling to fill batches before the new academic year. Heavy reliance on word-of-mouth, very few inquiries from digital, and competing with bigger brands like Allen and Aakash entering the market.",
    strategy: ["Meta + Google Ads targeting parents of class 11–12 students", "Demo-class lead funnel with WhatsApp follow-up automation", "Auto rickshaw branding across school zones", "Pamphlet drop in 4 high-density residential areas"],
    results: [
      { metric: "3.2x", label: "More admission inquiries vs. last season" },
      { metric: "₹180", label: "Cost per qualified lead (down from ₹650)" },
      { metric: "62%", label: "Demo-to-admission conversion rate" },
    ],
  },
  {
    icon: ShoppingBag,
    type: "Local Retail Chain",
    location: "Nagpur",
    problem: "5-store retail chain saw declining footfall after Covid. Online presence was zero. Struggled to compete with quick-commerce and bigger malls.",
    strategy: ["Google Business optimization + Local Service Ads", "Meta retargeting from website visitors", "Hoardings near competitor locations", "Festival-season hybrid push (Diwali campaign)"],
    results: [
      { metric: "₹42L+", label: "Revenue from a single Meta campaign" },
      { metric: "2.1x", label: "Footfall increase across 5 stores" },
      { metric: "4.8★", label: "Avg. Google rating (from 3.2)" },
    ],
  },
  {
    icon: Home,
    type: "Real Estate Builder",
    location: "Amravati",
    problem: "New residential project launch. Needed site visits and bookings within a tight 60-day window. Earlier digital agencies delivered junk leads.",
    strategy: ["Google Search Ads on high-intent keywords", "Meta lead ads with video walkthrough", "Hoardings on highway entry points", "WhatsApp broadcast to filtered enquiries"],
    results: [
      { metric: "180+", label: "Verified site visits in 30 days" },
      { metric: "14", label: "Bookings closed in 60 days" },
      { metric: "₹2.1Cr", label: "Revenue generated from campaign" },
    ],
  },
  {
    icon: Building2,
    type: "JEE Coaching Institute",
    location: "Buldana",
    problem: "Local coaching institute with strong results but no marketing system. Losing students to Akola and Nagpur institutes.",
    strategy: ["Result-based brand storytelling on Instagram", "Father–son testimonial reel campaign", "Auto branding across all major school routes", "Performance-based parent webinars"],
    results: [
      { metric: "240+", label: "New admissions in one season" },
      { metric: "5x", label: "Instagram follower growth" },
      { metric: "1st", label: "Most recognized JEE brand in Buldana" },
    ],
  },
];

const CaseStudies = () => {
  return (
    <>
      <section className="pt-40 pb-16 container-tight">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-silver border border-silver/30 rounded-full px-3 py-1 mb-6">
            Case Studies
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            <span className="text-silver-gradient">Real businesses.</span>
            <br />Real numbers.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            We don't sell promises, we show numbers. Here's what happens when our hybrid online + offline system goes live.
          </p>
        </motion.div>
      </section>

      <section className="container-tight py-16 space-y-8">
        {cases.map((c, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className="silver-border rounded-3xl p-8 md:p-12 hover-silver"
          >
            <div className="flex items-start justify-between gap-6 mb-8 flex-wrap">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-xl bg-silver-gradient flex items-center justify-center text-jet">
                  <c.icon size={24} />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-widest text-silver-dim">{c.location}</div>
                  <h2 className="text-2xl md:text-3xl font-bold text-silver-bright">{c.type}</h2>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-10">
              <div>
                <div className="text-xs uppercase tracking-widest text-silver mb-2">The Problem</div>
                <p className="text-muted-foreground leading-relaxed">{c.problem}</p>
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-silver mb-2">Our Strategy</div>
                <ul className="space-y-2">
                  {c.strategy.map((s) => (
                    <li key={s} className="text-muted-foreground flex gap-2">
                      <span className="text-silver mt-1">•</span><span>{s}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="border-t border-border pt-8">
              <div className="text-xs uppercase tracking-widest text-silver mb-5 flex items-center gap-2">
                <TrendingUp size={14} /> The Results
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {c.results.map((r) => (
                  <div key={r.label} className="bg-jet-soft/60 border border-border rounded-2xl p-6 text-center">
                    <div className="text-4xl md:text-5xl font-bold text-silver-gradient mb-2">{r.metric}</div>
                    <div className="text-sm text-muted-foreground">{r.label}</div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      <CTASection />
    </>
  );
};

export default CaseStudies;
