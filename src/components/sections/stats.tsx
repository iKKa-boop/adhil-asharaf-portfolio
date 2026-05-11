"use client";

import { stats } from "@/lib/data";
import { FadeIn, Stagger } from "@/components/ui/animate";

export function Stats() {
  return (
    <section className="border-y border-border">
      <Stagger className="container-main grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
        {stats.map((stat) => (
          <FadeIn key={stat.label} className="py-12 md:py-16 px-6 text-center">
            <p className="font-bold text-4xl md:text-5xl lg:text-6xl tracking-tighter text-foreground">
              {stat.value}
            </p>
            <p className="text-xs text-muted-foreground tracking-wider uppercase mt-2">
              {stat.label}
            </p>
          </FadeIn>
        ))}
      </Stagger>
    </section>
  );
}
