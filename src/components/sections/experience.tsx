"use client";

import { experience } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { FadeIn, Stagger } from "@/components/ui/animate";

export function Experience() {
  return (
    <Section id="experience">
      <FadeIn>
        <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">
          Career
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-16">
          Experience
        </h2>
      </FadeIn>

      <Stagger className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-px bg-border hidden md:block" />

        {experience.map((job, i) => (
          <FadeIn key={`${job.company}-${job.role}`}>
            <div className="relative pl-0 md:pl-12 pb-12 last:pb-0">
              <div className="hidden md:block absolute left-[-4.5px] top-1.5 w-2 h-2 bg-border rotate-45" />

              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-1 md:gap-4 mb-3">
                <div>
                  <h3 className="text-lg font-semibold text-foreground tracking-tight">
                    {job.role}
                  </h3>
                  <p className="text-sm text-muted-foreground tracking-wide">
                    {job.company} — {job.location}
                  </p>
                </div>
                <p className="text-xs text-muted-foreground font-mono tracking-wider whitespace-nowrap">
                  {job.period}
                </p>
              </div>

              <ul className="space-y-1.5">
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
    </Section>
  );
}
