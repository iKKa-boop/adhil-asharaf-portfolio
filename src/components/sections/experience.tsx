"use client";

import { experience } from "@/lib/data";
import { FadeIn, Stagger } from "@/components/ui/animate";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="relative">
      <div className="relative flex flex-col items-center justify-center overflow-hidden pt-24 md:pt-32 lg:pt-40">
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="bg-gradient-to-br from-accent to-amber-400 bg-clip-text text-transparent text-center text-4xl font-bold tracking-tight md:text-7xl z-10"
        >
          Experience
        </motion.h1>
        <div className="absolute top-0 w-[40rem] h-56 bg-gradient-conic from-accent/30 via-transparent to-transparent [--conic-position:from_70deg_at_center_top] blur-3xl" />
        <div className="absolute top-0 w-[40rem] h-56 bg-gradient-conic from-transparent via-transparent to-accent/30 [--conic-position:from_290deg_at_center_top] blur-3xl" />
      </div>

      <div className="container-main pb-16 md:pb-20 lg:pb-24">
        <Stagger className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

          {experience.map((job) => (
            <FadeIn key={`${job.company}-${job.role}`}>
              <div className="relative pl-0 md:pl-12 pt-12 md:pt-16 first:pt-0 pb-12 md:pb-16 last:pb-0 border-b border-border last:border-b-0">
                <div className="hidden md:block absolute left-[-4.5px] top-[1.85rem] md:top-[2.35rem] w-2 h-2 bg-border rotate-45" />

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-4 mb-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground tracking-tight">
                      {job.role}
                    </h3>
                    <p className="text-sm text-muted-foreground tracking-wide mt-0.5">
                      {job.company} — {job.location}
                    </p>
                  </div>
                  <p className="text-xs text-muted-foreground font-mono tracking-wider whitespace-nowrap">
                    {job.period}
                  </p>
                </div>

                <ul className="space-y-2">
                  {job.highlights.map((highlight) => (
                    <li
                      key={highlight}
                      className="text-sm text-muted-foreground leading-relaxed pl-4 relative"
                    >
                      <span className="absolute left-0 top-[0.6em] w-1 h-1 bg-accent" />
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
