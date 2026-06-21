"use client";

import { skills } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { FadeIn, Stagger } from "@/components/ui/animate";

export function Skills() {
  return (
    <Section id="skills" className="section-padding">
      <FadeIn>
        <p className="terminal-prompt text-[0.7rem] font-medium tracking-[0.15em] uppercase mb-3">
          $ skills --list
        </p>
        <h2 className="text-[2.5rem] md:text-[3rem] font-bold tracking-tight text-foreground mb-8">
          Skills
        </h2>
      </FadeIn>

      <Stagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[#1f1f1f]">
        {skills.map((category) => (
          <FadeIn
            key={category.category}
            className="bg-[#111111] p-6"
          >
            <p className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-accent mb-4">
              [ {category.category} ]
            </p>
            <div className="flex flex-wrap gap-2">
              {category.items.map((skill) => (
                <span
                  key={skill}
                  className="text-[0.75rem] text-[#cccccc] border border-[#2a2a2a] px-2.5 py-1 rounded-[2px] hover:border-accent hover:text-accent transition-colors duration-150"
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