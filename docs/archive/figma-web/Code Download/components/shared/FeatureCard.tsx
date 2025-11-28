import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  variant?: "default" | "gradient";
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  variant = "default",
}: FeatureCardProps) {
  return (
    <div
      className={`p-6 rounded-xl ${
        variant === "gradient"
          ? "bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20"
          : "bg-card border border-border"
      }`}
    >
      <div
        className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
          variant === "gradient" ? "bg-primary/20" : "bg-primary/10"
        }`}
      >
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <h4 className="mb-2">{title}</h4>
      <p className="text-muted-foreground text-sm">{description}</p>
    </div>
  );
}
