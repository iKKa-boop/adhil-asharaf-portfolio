"use client";

import { experience } from "@/lib/data";
import { FadeIn, Stagger } from "@/components/ui/animate";
import { LampContainer } from "@/components/ui/lamp";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden">
      <LampContainer className="min-h-[35vh]">
        <motion.h1
          initial={{ opacity: 0.5, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.8,
            ease: "easeInOut",
          }}
          className="bg-gradient-to-br from-accent to-amber-400 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
        >
          Experience
        </motion.h1>
      </LampContainer>

      <div className="container-main pb-16 md:pb-20 lg:pb-24">
        <Stagger className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

          {experience.map((job, i) => (
            <FadeIn key={`${job.company}-${job.role}`}>
              <div className="relative pl-0 md:pl-12 pb-16 last:pb-0">
                <div className="hidden md:block absolute left-[-4.5px] top-1.5 w-2 h-2 bg-border rotate-45" />

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
