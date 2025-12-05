"use client";

import { cn } from "@/lib/utils";

export interface GlobeFeatureSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonHref?: string;
  className?: string;
}

export default function GlobeFeatureSection({
  title = "Build with Ruixen UI",
  description = "Empower your team with fast, elegant, and scalable UI components. Ruixen UI brings simplicity and performance to your modern apps.",
  buttonText = "Join Today",
  buttonHref = "#",
  className,
}: GlobeFeatureSectionProps) {
  return (
    <div className={cn("flex flex-col justify-center h-full", className)}>
      <div className="text-left">
        <h3
          className="mb-1 font-heading"
          style={{
            fontSize: 'var(--typography-h4-size-desktop)',
            lineHeight: 'var(--typography-h4-line-height-desktop)',
            fontWeight: 'var(--typography-h4-weight)',
            color: 'var(--color-text-primary)',
          }}
        >
          {title}
        </h3>
        <p
          className="font-body"
          style={{
            fontSize: 'var(--typography-body-small-size-desktop)',
            lineHeight: 'var(--typography-body-small-line-height)',
            fontWeight: 'var(--typography-body-small-weight)',
            color: 'var(--color-text-secondary)',
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
}

