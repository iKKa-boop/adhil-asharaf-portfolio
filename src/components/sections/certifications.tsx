"use client";

import { certifications, education } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { FadeIn, Stagger } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Certifications() {
  return (
    <Section className="section-padding border-t border-[#1f1f1f]">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <FadeIn>
            <p className="text-[0.7rem] font-medium tracking-[0.15em] uppercase text-accent mb-3">
              Credentials
            </p>
            <h2 className="text-[2.5rem] md:text-[3rem] font-bold tracking-tight text-foreground mb-8">
              Education &amp; Certifications
            </h2>
          </FadeIn>

          <Stagger>
            {education.map((edu) => (
              <FadeIn key={edu.degree} className="mb-8 last:mb-0">
                <p className="text-[1rem] font-semibold text-foreground tracking-tight">
                  {edu.degree}
                </p>
                <p className="text-[0.9rem] text-muted-foreground mt-1">
                  {edu.institution}, {edu.location}
                </p>
                <p className="text-[0.8rem] font-mono text-muted-foreground tracking-wider mt-1">
                  {edu.period}
                </p>
              </FadeIn>
            ))}
          </Stagger>
        </div>

        <div>
          <FadeIn delay={0.1}>
            <h3 className="text-[1rem] font-semibold text-foreground tracking-tight mb-8">
              Certifications
            </h3>
          </FadeIn>

          <Stagger>
            {certifications.map((cert) => (
              <FadeIn
                key={cert}
                className="border-t border-[#1f1f1f] py-4 first:border-t-0"
              >
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent mt-1.5 shrink-0 rounded-full" />
                  <p className="text-[0.9rem] text-muted-foreground leading-[1.7]">
                    {cert}
                  </p>
                </div>
              </FadeIn>
            ))}
          </Stagger>

          <FadeIn delay={0.3}>
            <div className="mt-10">
              <a
                href="/Adhil_Asharaf_Linux_System_Administrator_Resume.pdf"
                download
              >
                <Button variant="secondary" size="default">
                  <Download size={14} />
                  Download Resume
                </Button>
              </a>
            </div>
          </FadeIn>
        </div>
      </div>
    </Section>
  );
}