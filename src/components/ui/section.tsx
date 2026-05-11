import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "section" | "div";
}

export function Section({ children, className, id, as: Tag = "section" }: SectionProps) {
  return (
    <Tag id={id} className={cn("section-padding", className)}>
      <div className="container-main">{children}</div>
    </Tag>
  );
}
