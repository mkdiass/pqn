import Link from "next/link";
import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
};

export function Button({
  children,
  href,
  variant = "primary",
  className = "",
}: ButtonProps) {
  const classes = `ui-button ui-button--${variant} ${className}`.trim();

  if (href) {
    return <Link href={href} className={classes}>{children}</Link>;
  }

  return <button type="button" className={classes}>{children}</button>;
}
