import { PageContainer } from "../layout/PageContainer";
import { QuickAccessCard } from "../shared/QuickAccessCard";
import { Layers, Lightbulb, Cpu, User, Mail, FolderOpen, MessageSquare, Calendar } from "lucide-react";

interface HomeProps {
  onNavigate: (page: string) => void;
}

export function Home({ onNavigate }: HomeProps) {
  const quickAccessItems = [
    {
      icon: Layers,
      title: "Portfolio",
      description: "Explore our creative work and case studies",
      action: "what",
    },
    {
      icon: Lightbulb,
      title: "Philosophy",
      description: "The AIONIQ Code and our principles",
      action: "why",
    },
    {
      icon: Cpu,
      title: "Process",
      description: "Our 90-day framework and systems",
      action: "how",
    },
    {
      icon: User,
      title: "Founder",
      description: "Meet the mind behind AIONIQ Labs",
      action: "who",
    },
  ];

  const clientActions = [
    {
      icon: FolderOpen,
      title: "Client Portal",
      description: "Access your project dashboard",
      action: "portal",
    },
    {
      icon: Calendar,
      title: "Book a Call",
      description: "Schedule a consultation",
      action: "where",
    },
    {
      icon: MessageSquare,
      title: "Start a Project",
      description: "Let's build something amazing",
      action: "where",
    },
  ];

  return (
    <PageContainer>
      {/* Hero Section */}
      <div className="py-16 md:py-24">
        <div className="max-w-3xl">
          <div className="inline-block px-4 py-1.5 bg-primary/5 rounded-full mb-6">
            <span className="text-sm text-primary">Creative Technology Studio</span>
          </div>
          <h1 className="mb-6 text-4xl md:text-6xl tracking-tight">
            Building Premium Digital Experiences
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl">
            We combine strategic thinking, elegant design, and advanced technology to create
            digital products that feel effortless and work beautifully.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={() => onNavigate("where")}
              className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Start a Project
            </button>
            <button
              onClick={() => onNavigate("what")}
              className="px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
            >
              View Our Work
            </button>
          </div>
        </div>
      </div>

      {/* Signature Line */}
      <div className="py-8 border-t border-b border-border">
        <p className="text-muted-foreground italic">
          "We don't just build websites. We architect digital ecosystems that elevate brands and empower users."
        </p>
      </div>

      {/* Quick Access Section */}
      <div className="py-16">
        <h2 className="mb-8">Explore AIONIQ</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {quickAccessItems.map((item, index) => (
            <QuickAccessCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              onClick={() => onNavigate(item.action)}
            />
          ))}
        </div>
      </div>

      {/* Client Actions */}
      <div className="py-16 border-t border-border">
        <h2 className="mb-8">Work With Us</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {clientActions.map((item, index) => (
            <QuickAccessCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              onClick={() => onNavigate(item.action)}
            />
          ))}
        </div>
      </div>

      {/* Stats Section */}
      <div className="py-16 border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <div className="text-4xl mb-2">50+</div>
            <p className="text-muted-foreground">Projects Delivered</p>
          </div>
          <div>
            <div className="text-4xl mb-2">98%</div>
            <p className="text-muted-foreground">Client Satisfaction</p>
          </div>
          <div>
            <div className="text-4xl mb-2">12+</div>
            <p className="text-muted-foreground">Years Experience</p>
          </div>
          <div>
            <div className="text-4xl mb-2">24/7</div>
            <p className="text-muted-foreground">Support Available</p>
          </div>
        </div>
      </div>
    </PageContainer>
  );
}
