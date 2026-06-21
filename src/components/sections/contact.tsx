"use client";

import { personal } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { FadeIn } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" className="section-padding border-t border-[#1f1f1f]">
      <div className="max-w-3xl mx-auto text-center">
        <FadeIn>
          <p className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-accent mb-3">
            Connect
          </p>
          <h2 className="text-[2.5rem] sm:text-[3rem] md:text-[4rem] lg:text-[5rem] font-bold tracking-tighter text-foreground leading-none">
            Let&apos;s work
            <br />
            together
          </h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="mt-8 text-[0.9rem] text-muted-foreground leading-[1.7] max-w-xl mx-auto">
            Available for system administration roles, infrastructure consulting,
            and automation projects.
          </p>
        </FadeIn>

        <FadeIn delay={0.2}>
          <div className="mt-10 flex flex-col items-center gap-4">
            <a href={`mailto:${personal.email}`}>
              <Button variant="primary" size="lg">
                <span className="font-mono">$ mail --to {personal.email}</span>
                <ArrowRight size={16} />
              </Button>
            </a>
            <a
              href={`https://${personal.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.9rem] text-muted-foreground hover:text-foreground transition-colors duration-150 tracking-[0.15em] uppercase"
            >
              $ cat linkedin
            </a>
          </div>
        </FadeIn>
      </div>
    </Section>
  );
}