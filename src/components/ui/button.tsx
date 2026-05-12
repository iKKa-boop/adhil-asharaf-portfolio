"use client";

import { cn } from "@/lib/utils";
import { forwardRef, type ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "default" | "lg";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  as?: "button" | "span";
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "text-accent uppercase font-medium tracking-[0.15em] px-0 py-3 gap-3 inline-flex items-center whitespace-nowrap group h-11",
  secondary:
    "text-foreground uppercase font-medium tracking-[0.15em] border border-[#1f1f1f] px-6 py-3 inline-flex items-center gap-3 whitespace-nowrap hover:bg-[#1f1f1f] hover:text-foreground transition-colors duration-150 h-11",
  ghost:
    "text-muted-foreground uppercase font-medium tracking-[0.15em] px-4 py-3 inline-flex items-center whitespace-nowrap hover:text-foreground transition-colors duration-150 group h-11",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs py-2 h-9",
  default: "text-sm py-3 h-11",
  lg: "text-sm py-3 h-11",
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", as = "button", disabled, children, ...props }, ref) => {
    const underline = variant === "primary" || variant === "ghost";

    const classes = cn(
      variantStyles[variant],
      sizeStyles[size],
      "relative focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      disabled && "pointer-events-none opacity-50",
      className
    );

    const Tag = as;

    return (
      <Tag ref={ref} disabled={disabled} className={classes} {...props}>
        {variant === "primary" && (
          <>
            {children}
            <span className="absolute bottom-0 left-0 h-[2px] w-full bg-accent origin-left transition-transform duration-150 group-hover:scale-x-110" />
          </>
        )}
        {variant === "secondary" && children}
        {variant === "ghost" && (
          <>
            {children}
            <span className="absolute bottom-0 left-1/2 h-px w-3/4 bg-current -translate-x-1/2 scale-x-0 group-hover:scale-x-100 transition-transform duration-150" />
          </>
        )}
      </Tag>
    );
  }
);

Button.displayName = "Button";

export { Button, type ButtonProps, type ButtonVariant, type ButtonSize };