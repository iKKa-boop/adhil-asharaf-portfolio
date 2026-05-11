"use client";

import { personal } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/animate";
import { GlobePulse } from "@/components/ui/globe-pulse";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const globeRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-dvh flex flex-col justify-center section-padding pt-32 overflow-hidden">
      <div
        ref={globeRef}
        className="absolute right-[-20%] top-1/2 -translate-y-1/2 w-[60vw] md:w-[45vw] max-w-[600px] opacity-20 md:opacity-25 pointer-events-none select-none"
      >
        <div className="aspect-square">
          <GlobePulse dark={1} speed={0.001} />
        </div>
      </div>
      <div className="container-main relative z-10">
        <FadeIn>
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-6">
            Linux System Administrator
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none text-foreground">
            {personal.name.split(" ")[0]}
            <br />
            {personal.name.split(" ").slice(1).join(" ")}
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 text-base md:text-lg text-muted-foreground max-w-2xl leading-normal">
            {personal.summary}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a href="#contact">
              <Button variant="primary" size="lg">
                Get in Touch
                <ArrowDown size={16} className="rotate-[-90deg]" />
              </Button>
            </a>
            <a href="/resume" target="_blank">
              <Button variant="secondary" size="default">
                View Resume
              </Button>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-20 flex flex-wrap gap-x-10 gap-y-3">
            <div>
              <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
                Location
              </p>
              <p className="text-sm text-foreground mt-1">{personal.location}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
                Email
              </p>
              <p className="text-sm text-foreground mt-1">{personal.email}</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest text-muted-foreground uppercase">
                LinkedIn
              </p>
              <p className="text-sm text-foreground mt-1">{personal.linkedin}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
