interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export function SectionHeader({ title, subtitle, align = "left" }: SectionHeaderProps) {
  return (
    <div className={`mb-12 ${align === "center" ? "text-center" : ""}`}>
      <h2 className="mb-3">{title}</h2>
      {subtitle && <p className="text-muted-foreground max-w-2xl">{subtitle}</p>}
    </div>
  );
}
