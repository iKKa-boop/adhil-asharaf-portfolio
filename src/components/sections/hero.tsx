"use client";

import { personal } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/animate";
import { GlobePulse } from "@/components/ui/globe-pulse";
import { SparklesCore } from "@/components/ui/sparkles";
import { ArrowDown } from "lucide-react";
import { useRef } from "react";

export function Hero() {
  const globeRef = useRef<HTMLDivElement>(null);

  return (
    <section className="relative min-h-dvh flex flex-col justify-center section-padding pt-32 overflow-hidden">
      <div
        ref={globeRef}
        className="absolute right-[-15%] top-1/2 -translate-y-1/2 w-[70vw] md:w-[55vw] max-w-[700px] opacity-20 md:opacity-25 pointer-events-none select-none"
      >
        <div className="aspect-square">
          <GlobePulse dark={1} speed={0.001} />
        </div>
      </div>
      <div className="container-main relative z-10">
        <FadeIn>
          <p className="font-mono text-xs tracking-widest uppercase mb-6 bg-gradient-to-r from-accent via-amber-400 to-accent bg-clip-text text-transparent">
            Linux System Administrator
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="relative">
            <div className="absolute inset-0 h-40 -top-8">
              <SparklesCore
                background="transparent"
                minSize={0.4}
                maxSize={1}
                particleDensity={800}
                className="w-full h-full"
                particleColor="#ff3d00"
                speed={2}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
            </div>
            <div className="relative">
              <div className="absolute inset-x-0 top-0 bg-gradient-to-r from-transparent via-accent to-transparent h-[2px] w-full blur-sm" />
              <div className="absolute inset-x-0 -top-1 bg-gradient-to-r from-transparent via-accent to-transparent h-px w-full" />
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-none text-foreground pt-8">
                {personal.name.split(" ")[0]}
                <br />
                {personal.name.split(" ").slice(1).join(" ")}
              </h1>
            </div>
          </div>
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
            <a href="/Adhil_Asharaf_Linux_System_Administrator_Resume.pdf" target="_blank">
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
