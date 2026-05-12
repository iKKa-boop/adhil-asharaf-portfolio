"use client";

import { stats } from "@/lib/data";
import { FadeIn, Stagger } from "@/components/ui/animate";

export function Stats() {
  return (
    <section className="border-y border-[#1f1f1f]">
      <Stagger className="container-main grid grid-cols-2 md:grid-cols-4 divide-x divide-[#1f1f1f]">
        {stats.map((stat) => (
          <FadeIn key={stat.label} className="py-12 md:py-16 px-6 text-center">
            <p className="font-bold text-[2.5rem] md:text-[3rem] lg:text-[3.5rem] tracking-tight text-foreground">
              {stat.value}
            </p>
            <p className="text-[0.7rem] text-muted-foreground tracking-[0.15em] uppercase mt-2">
              {stat.label}
            </p>
          </FadeIn>
        ))}
      </Stagger>
    </section>
  );
}