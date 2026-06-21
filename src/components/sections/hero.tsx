"use client";

import { personal } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { FadeIn } from "@/components/ui/animate";
import { GlobePulse } from "@/components/ui/globe-pulse";
import { ArrowDown } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center">
      <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[60vw] md:w-[45vw] max-w-[600px] opacity-30 pointer-events-none select-none">
        <div className="aspect-square">
          <GlobePulse dark={1} speed={0.001} />
        </div>
      </div>
      <div className="container-main relative z-10">
        <FadeIn>
          <div className="mb-3">
            <span className="terminal-prompt">$ whoami</span>
            <br />
            <span className="terminal-output">→ Linux System Administrator</span>
          </div>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-none text-foreground">
            {personal.name.split(" ")[0]}
            <br />
            {personal.name.split(" ").slice(1).join(" ")}
            <span className="animate-[blink_1s_step-end_infinite]">▊</span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.2}>
          <p className="mt-8 text-[0.9rem] leading-[1.7] text-muted-foreground max-w-2xl">
            {personal.summary}
          </p>
        </FadeIn>

        <FadeIn delay={0.3}>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <a href="#contact">
              <Button variant="primary" size="lg">
                $ contact --email
                <ArrowDown size={16} className="rotate-[-90deg]" />
              </Button>
            </a>
            <a href="/Adhil_Asharaf_Linux_System_Administrator_Resume.pdf" target="_blank">
              <Button variant="secondary" size="default">
                $ cat /resume.pdf
              </Button>
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="border border-[#1a1a2e] bg-[#0d0d0d] rounded-none p-4 mt-20 flex flex-wrap gap-x-12 gap-y-6">
            <div>
              <p className="text-[0.7rem] tracking-[0.15em] font-medium uppercase text-muted mb-1">Location</p>
              <p className="text-[0.9rem] text-foreground">{personal.location}</p>
            </div>
            <div>
              <p className="text-[0.7rem] tracking-[0.15em] font-medium uppercase text-muted mb-1">Email</p>
              <p className="text-[0.9rem] text-foreground">{personal.email}</p>
            </div>
            <div>
              <p className="text-[0.7rem] tracking-[0.15em] font-medium uppercase text-muted mb-1">LinkedIn</p>
              <p className="text-[0.9rem] text-foreground">{personal.linkedin}</p>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
