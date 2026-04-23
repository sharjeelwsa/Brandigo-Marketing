import { motion } from "framer-motion";
import { Star, CheckCheck } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import CTASection from "@/components/CTASection";

const reviews = [
  { name: "Dr. Imran Khan", role: "Director, NEET Coaching Institute · Akola", text: "Brandigo helped us add 240+ new admissions in one season. Their hybrid system — Meta ads + auto branding — worked exactly as promised. Genuine team.", rating: 5 },
  { name: "Pooja Deshmukh", role: "Owner, Local Boutique Chain · Nagpur", text: "We tried 3 agencies before Brandigo. Only Sharjeel and team understood our local market. Footfall doubled in 3 months. Will not switch.", rating: 5 },
  { name: "Rakesh Patil", role: "Builder, Real Estate · Amravati", text: "180 site visits in 30 days. 14 bookings in 60 days. ₹2.1 Cr revenue. These are real numbers, not stories. Brandigo delivered.", rating: 5 },
  { name: "Aniket Joshi", role: "Founder, JEE Classes · Buldana", text: "Best marketing investment we've made. They treat our business like their own. I recommend Brandigo to every coaching owner I meet.", rating: 5 },
];

const chats = [
  {
    name: "Dr. Imran Khan",
    location: "NEET Coaching · Akola",
    messages: [
      { from: "client", text: "Bhai, this month phone band nahi ho raha. Inquiries flood ho rahi hain 🙏" },
      { from: "us", text: "That's the plan! Demo class slots full?" },
      { from: "client", text: "Full bhi ho gaye. Next batch already 30+ enrolled. You guys are magicians 🚀" },
    ],
  },
  {
    name: "Pooja Deshmukh",
    location: "Boutique · Nagpur",
    messages: [
      { from: "client", text: "Diwali sale kya bata du, footfall record toot gaya 🪔" },
      { from: "us", text: "Numbers share kar do?" },
      { from: "client", text: "₹42 lakhs in 21 days. Last year was 18. THANK YOU TEAM ❤️" },
    ],
  },
  {
    name: "Rakesh Patil",
    location: "Real Estate · Amravati",
    messages: [
      { from: "client", text: "Aaj 14th booking confirm. Site office mein crowd lag raha hai" },
      { from: "us", text: "Congrats sir! Hybrid push working as planned" },
      { from: "client", text: "Next project bhi aap hi handle karoge. No questions asked." },
    ],
  },
];

const Testimonials = () => {
  return (
    <>
      <section className="pt-40 pb-16 container-tight">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-3xl">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-silver border border-silver/30 rounded-full px-3 py-1 mb-6">
            Testimonials
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6">
            <span className="text-silver-gradient">What our clients</span>
            <br />actually say.
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            No paid reviews. No staged testimonials. Real screenshots, real numbers, real businesses we've grown.
          </p>
        </motion.div>
      </section>

      {/* WhatsApp-style chats */}
      <section className="container-tight py-16">
        <SectionHeading eyebrow="Real Conversations" title="Straight from WhatsApp" subtitle="The kind of messages we live for." />
        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {chats.map((c, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-3xl overflow-hidden border border-border bg-jet-soft/60 hover-silver"
            >
              <div className="bg-whatsapp/90 px-5 py-3 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-semibold">
                  {c.name[0]}
                </div>
                <div>
                  <div className="text-white font-semibold text-sm">{c.name}</div>
                  <div className="text-white/80 text-xs">{c.location}</div>
                </div>
              </div>
              <div className="p-5 space-y-3 bg-[#0d1418]">
                {c.messages.map((m, idx) => (
                  <div key={idx} className={`flex ${m.from === "client" ? "justify-start" : "justify-end"}`}>
                    <div
                      className={`max-w-[85%] px-4 py-2.5 rounded-2xl text-sm leading-relaxed ${
                        m.from === "client"
                          ? "bg-[#1f2c33] text-foreground rounded-tl-sm"
                          : "bg-[#005c4b] text-white rounded-tr-sm"
                      }`}
                    >
                      {m.text}
                      {m.from === "us" && <CheckCheck size={14} className="inline ml-1 text-sky-300" />}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Review cards */}
      <section className="container-tight py-16">
        <SectionHeading eyebrow="Client Reviews" title="Result-based, not feel-good" />
        <div className="mt-16 grid md:grid-cols-2 gap-5">
          {reviews.map((r, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="silver-border rounded-2xl p-8 hover-silver"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: r.rating }).map((_, idx) => (
                  <Star key={idx} size={16} className="fill-silver text-silver" />
                ))}
              </div>
              <p className="text-foreground leading-relaxed mb-6 text-lg">"{r.text}"</p>
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-silver-bright">{r.name}</div>
                <div className="text-sm text-muted-foreground">{r.role}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <CTASection />
    </>
  );
};

export default Testimonials;
