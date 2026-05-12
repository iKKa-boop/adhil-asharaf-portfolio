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
    "text-accent uppercase font-semibold tracking-wider px-0 py-2.5 gap-2.5 inline-flex items-center whitespace-nowrap group",
  secondary:
    "text-foreground uppercase font-semibold tracking-wider border border-foreground px-6 py-2.5 inline-flex items-center gap-2 whitespace-nowrap hover:bg-foreground hover:text-background transition-colors duration-150",
  ghost:
    "text-muted-foreground uppercase font-semibold tracking-wider px-4 py-2 inline-flex items-center whitespace-nowrap hover:text-foreground transition-colors duration-150 group",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "text-xs py-2",
  default: "text-sm",
  lg: "text-base py-4",
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
            <span className="absolute bottom-0 left-0 h-0.5 w-full bg-accent origin-left transition-transform duration-150 group-hover:scale-x-110" />
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
