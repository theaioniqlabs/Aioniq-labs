interface StatCardProps {
  value: string;
  label: string;
  trend?: string;
}

export function StatCard({ value, label, trend }: StatCardProps) {
  return (
    <div className="p-6 bg-card border border-border rounded-xl hover:shadow-md transition-shadow">
      <div className="text-4xl mb-2">{value}</div>
      <p className="text-muted-foreground mb-1">{label}</p>
      {trend && <p className="text-sm text-primary">{trend}</p>}
    </div>
  );
}
