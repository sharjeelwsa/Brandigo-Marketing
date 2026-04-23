import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, MessageCircle } from "lucide-react";

const CTASection = () => {
  return (
    <section className="container-tight py-24">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="relative overflow-hidden rounded-3xl border border-silver/20 bg-gradient-radial p-10 md:p-16 text-center grain"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-silver/5 via-transparent to-silver/10 pointer-events-none" />
        <div className="relative">
          <span className="inline-block text-xs uppercase tracking-[0.25em] text-silver border border-silver/30 rounded-full px-3 py-1 mb-6">
            Limited slots this month
          </span>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-5">
            <span className="text-silver-gradient">Ready to grow your business?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-10">
            Book a free 30-minute strategy call. We'll audit your current marketing and show you exactly how to get more leads — online and offline.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild variant="hero" size="xl">
              <Link to="/contact">Book Free Strategy Call <ArrowRight /></Link>
            </Button>
            <Button asChild variant="whatsapp" size="xl">
              <a href="https://wa.me/918669736979" target="_blank" rel="noopener noreferrer">
                <MessageCircle /> Chat on WhatsApp
              </a>
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default CTASection;
