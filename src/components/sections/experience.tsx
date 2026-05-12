"use client";

import { experience } from "@/lib/data";
import { FadeIn, Stagger } from "@/components/ui/animate";

export function Experience() {
  return (
    <section id="experience" className="section-padding border-t border-[#1f1f1f]">
      <div className="container-main">
        <FadeIn>
          <p className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-accent mb-3">
            Work
          </p>
          <h2 className="text-[2.5rem] md:text-[3rem] font-bold tracking-tight text-foreground mb-8">
            Experience
          </h2>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-[7px] top-0 bottom-0 w-px bg-[#1f1f1f] hidden md:block" />

          {experience.map((job, i) => (
            <FadeIn key={`${job.company}-${job.role}`} className="relative pl-8 md:pl-12 pb-12 last:pb-0">
              <div className="hidden md:block absolute left-[5px] top-[1.1rem] w-1.5 h-1.5 bg-accent rounded-full" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 md:gap-8 mb-4">
                <div>
                  <h3 className="text-[1.1rem] font-semibold text-foreground tracking-tight">
                    {job.role}
                  </h3>
                  <p className="text-[0.9rem] text-muted-foreground mt-1">
                    {job.company} — {job.location}
                  </p>
                </div>
                <p className="text-[0.8rem] font-mono text-muted-foreground tracking-wider whitespace-nowrap">
                  {job.period}
                </p>
              </div>

              <ul className="space-y-2">
                {job.highlights.map((highlight) => (
                  <li
                    key={highlight}
                    className="text-[0.9rem] text-muted-foreground leading-[1.7] pl-4 relative"
                  >
                    <span className="absolute left-0 text-accent">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}