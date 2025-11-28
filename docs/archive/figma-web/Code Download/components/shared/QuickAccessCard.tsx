import { LucideIcon } from "lucide-react";

interface QuickAccessCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  onClick?: () => void;
}

export function QuickAccessCard({ icon: Icon, title, description, onClick }: QuickAccessCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative bg-card rounded-xl border border-border p-6 hover:shadow-md hover:border-primary/20 transition-all duration-300 text-left w-full"
    >
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center group-hover:bg-primary/10 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <div className="flex-1">
          <h4 className="mb-1 group-hover:text-primary transition-colors">{title}</h4>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
      </div>
    </button>
  );
}
