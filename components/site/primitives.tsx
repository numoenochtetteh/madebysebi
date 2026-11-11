import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Container({ className, ...props }: ComponentPropsWithoutRef<"div">) {
  return <div className={cn("mbs-container", className)} {...props} />;
}

export function Section({ className, ...props }: ComponentPropsWithoutRef<"section">) {
  return <section className={cn("mbs-section", className)} {...props} />;
}

export function Eyebrow({ children }: { children: ReactNode }) {
  return <p className="mbs-eyebrow"><span aria-hidden="true" />{children}</p>;
}

export function SectionHeading({ eyebrow, title, description, level = 2, id }: {
  eyebrow?: string;
  title: ReactNode;
  description?: string;
  level?: 1 | 2 | 3;
  id?: string;
}) {
  const Heading = `h${level}` as "h1" | "h2" | "h3";
  return <div className="mbs-section-heading">
    {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
    <Heading id={id} className={cn("mbs-heading", level === 1 && "mbs-heading-display")}>{title}</Heading>
    {description && <p className="mbs-description">{description}</p>}
  </div>;
}

export function ActionLink({ children, className, variant = "primary", ...props }:
  ComponentPropsWithoutRef<typeof Link> & { variant?: "primary" | "secondary" }) {
  return <Link className={cn("mbs-action", `mbs-action-${variant}`, className)} {...props}>
    {children}<ArrowUpRight size={18} aria-hidden="true" />
  </Link>;
}

export function Card({ className, ...props }: ComponentPropsWithoutRef<"article">) {
  return <article className={cn("mbs-card", className)} {...props} />;
}
