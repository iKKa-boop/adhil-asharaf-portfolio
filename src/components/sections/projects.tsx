"use client";

import { projects } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { FadeIn, Stagger } from "@/components/ui/animate";
import { ArrowUpRight } from "lucide-react";

export function Projects() {
  return (
    <Section id="projects">
      <FadeIn>
        <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">
          Work
        </p>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-16">
          Projects
        </h2>
      </FadeIn>

      <Stagger className="divide-y divide-border border-t border-border">
        {projects.map((project) => (
          <FadeIn
            key={project.title}
            className="py-8 md:py-10 group cursor-default"
          >
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="text-xl font-semibold text-foreground tracking-tight">
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-muted-foreground group-hover:text-accent transition-colors duration-150"
                  />
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[10px] font-mono text-muted-foreground tracking-wider uppercase border border-border px-2 py-1"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </FadeIn>
        ))}
      </Stagger>
    </Section>
  );
}
