interface ProcessStepProps {
  step: string;
  title: string;
  description: string;
  isActive?: boolean;
}

export function ProcessStep({ step, title, description, isActive = false }: ProcessStepProps) {
  return (
    <div
      className={`relative p-6 rounded-xl transition-all ${
        isActive
          ? "bg-primary text-primary-foreground shadow-lg scale-105"
          : "bg-card border border-border hover:shadow-md"
      }`}
    >
      <div
        className={`text-6xl mb-4 ${
          isActive ? "opacity-20" : "text-muted-foreground opacity-10"
        }`}
      >
        {step}
      </div>
      <h4 className={`mb-2 ${isActive ? "" : ""}`}>{title}</h4>
      <p className={`text-sm ${isActive ? "opacity-90" : "text-muted-foreground"}`}>
        {description}
      </p>
    </div>
  );
}
