"use client";

import { projects } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { FadeIn, Stagger } from "@/components/ui/animate";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <Section id="projects" className="section-padding border-t border-[#1f1f1f]">
      <FadeIn>
        <p className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-accent mb-3">
          Work
        </p>
        <h2 className="text-[2.5rem] md:text-[3rem] font-bold tracking-tight text-foreground mb-8">
          Projects
        </h2>
      </FadeIn>

      <Stagger className="divide-y divide-[#1f1f1f]">
        {projects.map((project) => (
          <FadeIn
            key={project.title}
            className="py-12 first:pt-0 last:pb-0"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
              <div className="flex items-center gap-3">
                <h3 className="text-[1.25rem] font-semibold text-foreground tracking-tight">
                  {project.title}
                </h3>
                <ArrowUpRight
                  size={16}
                  className="text-muted-foreground"
                />
              </div>
            </div>
            <p className="text-[0.9rem] text-muted-foreground leading-[1.7] max-w-2xl mb-4">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-[0.75rem] text-[#cccccc] border border-[#2a2a2a] px-2.5 py-1 rounded-[2px]"
                >
                  {t}
                </span>
              ))}
            </div>
          </FadeIn>
        ))}
      </Stagger>
    </Section>
  );
}