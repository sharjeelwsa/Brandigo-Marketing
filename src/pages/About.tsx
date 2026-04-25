import { motion } from "framer-motion";
import { Target, Heart, Compass, Award } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";
import founderImg from "@/assets/founder.jpg";

const values = [
  { icon: Target, title: "Results obsessed", desc: "If it doesn't move leads, revenue or ROI — we don't do it." },
  { icon: Heart, title: "Local first", desc: "We grew up in Vidharbha. We know the market like our own street." },
  { icon: Compass, title: "Strategy over noise", desc: "Beautiful creatives are great. Beautiful creatives that convert are better." },
  { icon: Award, title: "Partner, not vendor", desc: "We treat your business like our own. Every win, every loss, together." },
];

const About = () => {
  return (
    <>
      <section className="pt-40 pb-16 container-tight">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-silver border border-silver/30 rounded-full px-3 py-1 mb-6">
            About <span className="brand-name">Brandigo</span>
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            Not just an agency.<br />
            <span className="text-silver-gradient">A growth partner.</span>
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            <span className="brand-name">Brandigo Marketing</span> was built on one belief: marketing should drive real business growth — not impressions, not followers, not vanity metrics. Just leads, revenue and ROI.
          </p>
        </motion.div>
      </section>

      {/* Story */}
      <section className="container-tight py-20">
        <div className="grid lg:grid-cols-5 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="relative rounded-3xl overflow-hidden silver-border">
              <img src={founderImg} alt="Mohammad Sharjeel - Founder of Brandigo Marketing" className="w-full h-auto" loading="lazy" width={1024} height={1024} />
              <div className="absolute inset-0 bg-gradient-to-t from-jet via-transparent to-transparent" />
              <div className="absolute bottom-0 inset-x-0 p-6">
                <div className="text-xs uppercase tracking-widest text-silver mb-1">Founder & CEO</div>
                <div className="text-2xl font-bold text-silver-bright">Mohammad Sharjeel</div>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-3 space-y-5 text-muted-foreground leading-relaxed"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-silver-bright">The story behind <span className="brand-name">Brandigo</span></h2>
            <p>
              <span className="brand-name">Brandigo Marketing</span> was founded by Mohammad Sharjeel with a clear vision — bring world-class growth marketing to Vidharbha businesses, in a way that actually works for tier-2 markets.
            </p>
            <p>
              Most agencies in big metros run textbook playbooks that fail in cities like Akola, Nagpur, Buldana and Amravati. Local audiences trust hoardings, autos and word of mouth as much as they trust Instagram. So we built a hybrid system — combining the precision of digital with the trust of offline.
            </p>
            <p>
              Today <span className="brand-name">Brandigo</span> is one of Vidharbha's leading growth agencies, with deep expertise in coaching institute marketing, local businesses, and personal brands. We don't take on every client — we take on the ones we can genuinely help grow.
            </p>
            <blockquote className="border-l-2 border-silver pl-5 italic text-silver-bright">
              "Marketing budgets are not expenses. They are growth investments. Our job is to make sure every rupee comes back as 3, 5, or 10."
              <footer className="text-sm text-muted-foreground not-italic mt-2">— Mohammad Sharjeel, Founder</footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="container-tight py-20">
        <SectionHeading eyebrow="What We Believe" title="The Brandigo Way" />
        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="silver-border rounded-2xl p-7 hover-silver"
            >
              <div className="w-12 h-12 rounded-xl bg-silver/10 flex items-center justify-center text-silver mb-5">
                <v.icon size={22} />
              </div>
              <h3 className="text-lg font-semibold text-silver-bright mb-2">{v.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default About;
