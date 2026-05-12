"use client";

import { personal } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="!py-24 md:!py-32">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">
            Connect
          </p>
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter text-foreground leading-none">
            Let&apos;s work
            <br />
            together
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Available for system administration roles, infrastructure consulting,
            and automation projects.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a href={`mailto:${personal.email}`}>
              <Button variant="primary" size="lg">
                {personal.email}
                <ArrowRight size={16} />
              </Button>
            </a>
            <a
              href={`https://${personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-150 tracking-wide uppercase"
            >
              LinkedIn &rarr;
            </a>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}
