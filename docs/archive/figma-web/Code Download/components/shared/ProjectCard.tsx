import { ArrowUpRight } from "lucide-react";
import { Badge } from "../ui/badge";

interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  onClick?: () => void;
}

export function ProjectCard({ title, description, tags, image, onClick }: ProjectCardProps) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 text-left"
    >
      {/* Image */}
      <div className="aspect-[16/10] bg-muted overflow-hidden">
        {image ? (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-16 h-16 bg-primary/5 rounded-full" />
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between gap-4 mb-3">
          <h3 className="group-hover:text-primary transition-colors">{title}</h3>
          <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
        </div>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
        </div>
      </div>
    </button>
  );
}
