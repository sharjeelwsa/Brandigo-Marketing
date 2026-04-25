import { motion } from "framer-motion";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Props {
  eyebrow?: ReactNode;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  className?: string;
}

const SectionHeading = ({ eyebrow, title, subtitle, align = "center", className }: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className={cn("max-w-3xl", align === "center" ? "mx-auto text-center" : "text-left", className)}
    >
      {eyebrow && (
        <span className="inline-block text-xs uppercase tracking-[0.25em] text-silver-dim border border-border/60 rounded-full px-3 py-1 mb-5 bg-jet-soft/60">
          {eyebrow}
        </span>
      )}
      <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
        <span className="text-silver-gradient">{title}</span>
      </h2>
      {subtitle && <p className="mt-5 text-base md:text-lg text-muted-foreground leading-relaxed">{subtitle}</p>}
    </motion.div>
  );
};

export default SectionHeading;
