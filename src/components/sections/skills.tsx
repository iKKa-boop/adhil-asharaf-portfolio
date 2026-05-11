"use client";

import { skills } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { FadeIn, Stagger } from "@/components/ui/animate";

export function Skills() {
  return (
    <Section id="skills" className="bg-muted">
      <FadeIn>
        <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">
          Expertise
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-16">
          Skills
        </h2>
      </FadeIn>

      <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border">
        {skills.map((category) => (
          <FadeIn
            key={category.category}
            className="bg-background p-6 md:p-8 flex flex-col"
          >
            <p className="font-mono text-[10px] tracking-widest text-accent uppercase mb-4">
              {category.category}
            </p>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="text-xs text-muted-foreground tracking-wide border border-border px-3 py-1.5"
                >
                  {skill}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </Stagger>
    </Section>
  );
}
