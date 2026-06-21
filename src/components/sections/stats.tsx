"use client";

import { stats } from "@/lib/data";
import { FadeIn, Stagger } from "@/components/ui/animate";
import { motion } from "framer-motion";

export function Stats() {
  return (
    <section className="border-y border-[#1f1f1f]">
      <div className="container-main">
        <FadeIn>
          <div className="pt-12 pb-4">
            <span className="terminal-prompt">$ system_stats --summary</span>
          </div>
        </FadeIn>
        <Stagger className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1f1f1f]">
          {stats.map((stat) => (
            <FadeIn key={stat.label} className="py-12 md:py-16 px-6 text-center">
              <p
                className="font-bold text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] tracking-tight text-foreground font-mono"
                style={{ textShadow: "0 0 20px rgba(232, 80, 10, 0.3)" }}
              >
                {stat.value}
              </p>
              <p className="text-[0.7rem] text-muted-foreground tracking-[0.15em] uppercase mt-2">
                {stat.label}
              </p>
            </FadeIn>
          ))}
        </Stagger>
        <motion.div
          initial={{ width: "0%" }}
          whileInView={{ width: "100%" }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="h-[2px] bg-accent"
        />
      </div>
    </section>
  );
}
