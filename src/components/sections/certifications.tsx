"use client";

import { certifications, education } from "@/lib/data";
import { Section } from "@/components/ui/section";
import { FadeIn, Stagger } from "@/components/ui/animate";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";

export function Certifications() {
  return (
    <Section className="bg-muted">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
        <div>
          <FadeIn>
            <p className="font-mono text-xs tracking-widest text-accent uppercase mb-4">
              Credentials
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-12">
              Education &amp; Certifications
            </h2>
          </FadeIn>

          <Stagger>
            {education.map((edu) => (
              <FadeIn key={edu.degree} className="mb-8 last:mb-0">
                <p className="text-base font-semibold text-foreground tracking-tight">
                  {edu.degree}
                </p>
                <p className="text-sm text-muted-foreground mt-1">
                  {edu.institution}, {edu.location}
                </p>
                <p className="text-xs font-mono text-muted-foreground tracking-wider mt-1">
                  {edu.period}
                </p>
              </FadeIn>
            ))}
          </Stagger>
        </div>

        <div>
          <FadeIn delay={0.1}>
            <h3 className="text-base font-semibold text-foreground tracking-tight mb-8">
              Certifications
            </h3>
          </FadeIn>

          <Stagger>
            {certifications.map((cert) => (
              <FadeIn
                key={cert}
                className="border-t border-border py-4 first:border-t-0"
              >
                <div className="flex items-start gap-3">
                  <span className="w-1.5 h-1.5 bg-accent mt-2 shrink-0" />
                  <p className="text-sm text-muted-foreground leading-relaxed">
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
                target="_blank"
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
