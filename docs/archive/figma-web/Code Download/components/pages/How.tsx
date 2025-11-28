import { PageContainer } from "../layout/PageContainer";
import { SectionHeader } from "../shared/SectionHeader";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Badge } from "../ui/badge";
import { 
  FileText, 
  Palette, 
  Code, 
  Rocket, 
  CheckCircle2,
  Figma,
  Github,
  Slack,
  Chrome
} from "lucide-react";

interface HowProps {
  onNavigate: (page: string) => void;
}

export function How({ onNavigate }: HowProps) {
  const phases = [
    {
      phase: "01",
      title: "Discovery & Strategy",
      duration: "Week 1-2",
      description: "We dive deep into your business, users, and market to define success metrics and project scope.",
      deliverables: [
        "Stakeholder interviews and user research",
        "Competitive analysis and market positioning",
        "Technical feasibility assessment",
        "Project roadmap and milestones",
        "Success metrics definition",
      ],
    },
    {
      phase: "02",
      title: "Design & Prototyping",
      duration: "Week 3-5",
      description: "We create high-fidelity designs and interactive prototypes that bring your vision to life.",
      deliverables: [
        "Information architecture and user flows",
        "Wireframes and component library",
        "High-fidelity mockups (desktop + mobile)",
        "Interactive prototypes for testing",
        "Design system and style guide",
      ],
    },
    {
      phase: "03",
      title: "Development & Integration",
      duration: "Week 6-10",
      description: "We build your product using modern technologies and best practices for performance and scalability.",
      deliverables: [
        "Frontend development (React/Next.js)",
        "Backend architecture and APIs",
        "Database design and optimization",
        "Third-party integrations",
        "Quality assurance and testing",
      ],
    },
    {
      phase: "04",
      title: "Launch & Optimization",
      duration: "Week 11-12",
      description: "We deploy your product and ensure everything runs smoothly with monitoring and support.",
      deliverables: [
        "Production deployment and hosting",
        "Performance optimization",
        "Analytics setup and tracking",
        "Team training and documentation",
        "30-day post-launch support",
      ],
    },
  ];

  const tools = [
    { name: "Figma", icon: Figma, category: "Design" },
    { name: "React", icon: Code, category: "Frontend" },
    { name: "Next.js", icon: Code, category: "Framework" },
    { name: "TypeScript", icon: Code, category: "Language" },
    { name: "Tailwind CSS", icon: Palette, category: "Styling" },
    { name: "GitHub", icon: Github, category: "Version Control" },
    { name: "Vercel", icon: Chrome, category: "Hosting" },
    { name: "Slack", icon: Slack, category: "Communication" },
  ];

  const systems = [
    {
      title: "Design System First",
      description:
        "Every project starts with a component library and design tokens. This ensures consistency and makes future updates seamless.",
    },
    {
      title: "Agile Sprints",
      description:
        "Two-week sprints with regular check-ins. You'll see progress constantly and can provide feedback early and often.",
    },
    {
      title: "Living Documentation",
      description:
        "We document as we build—not after. Every component, API, and system decision is recorded for your team.",
    },
    {
      title: "Automated Testing",
      description:
        "Quality isn't manual. We write tests alongside features to catch issues before they reach production.",
    },
  ];

  return (
    <PageContainer>
      <div className="py-12">
        <SectionHeader
          title="Our Process"
          subtitle="Our 90-day framework takes projects from concept to launch with precision, transparency, and quality at every step."
        />

        {/* 90-Day Framework */}
        <div className="mb-20">
          <h2 className="mb-8">The 90-Day Framework</h2>
          <div className="space-y-6">
            {phases.map((phase, index) => (
              <Accordion key={index} type="single" collapsible>
                <AccordionItem value={`phase-${index}`} className="border border-border rounded-xl overflow-hidden">
                  <AccordionTrigger className="px-6 py-4 hover:bg-accent/50 transition-colors">
                    <div className="flex items-center gap-4 text-left w-full">
                      <div className="text-4xl text-muted-foreground">{phase.phase}</div>
                      <div className="flex-1">
                        <h3 className="mb-1">{phase.title}</h3>
                        <p className="text-sm text-muted-foreground">{phase.duration}</p>
                      </div>
                      <Badge variant="secondary">{phase.deliverables.length} deliverables</Badge>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-6 pt-2">
                    <p className="text-muted-foreground mb-4">{phase.description}</p>
                    <h4 className="mb-3">Key Deliverables</h4>
                    <ul className="space-y-2">
                      {phase.deliverables.map((deliverable, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{deliverable}</span>
                        </li>
                      ))}
                    </ul>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </div>

        {/* Systems & Principles */}
        <div className="mb-20">
          <h2 className="mb-8">Our Systems</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {systems.map((system, index) => (
              <div
                key={index}
                className="p-6 bg-card border border-border rounded-xl"
              >
                <h4 className="mb-3">{system.title}</h4>
                <p className="text-muted-foreground">{system.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Tool Stack */}
        <div className="mb-20">
          <h2 className="mb-4">Tool Stack</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl">
            We use industry-leading tools that enable fast iteration, seamless collaboration, and
            production-ready code. Our stack is constantly evolving based on project needs.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {tools.map((tool, index) => {
              const Icon = tool.icon;
              return (
                <div
                  key={index}
                  className="p-4 bg-card border border-border rounded-xl hover:shadow-md transition-all text-center"
                >
                  <Icon className="w-8 h-8 mx-auto mb-3 text-primary" />
                  <div className="mb-1">{tool.name}</div>
                  <p className="text-xs text-muted-foreground">{tool.category}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Process Diagram */}
        <div className="mb-20 p-8 bg-accent rounded-xl">
          <h3 className="mb-6">How We Stay Aligned</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3">
                <FileText className="w-6 h-6" />
              </div>
              <h4 className="mb-2">Weekly Updates</h4>
              <p className="text-sm text-muted-foreground">
                Detailed progress reports every Friday
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3">
                <Palette className="w-6 h-6" />
              </div>
              <h4 className="mb-2">Design Reviews</h4>
              <p className="text-sm text-muted-foreground">
                Collaborative feedback sessions
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3">
                <Code className="w-6 h-6" />
              </div>
              <h4 className="mb-2">Sprint Demos</h4>
              <p className="text-sm text-muted-foreground">
                Working software every 2 weeks
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3">
                <Rocket className="w-6 h-6" />
              </div>
              <h4 className="mb-2">Launch Support</h4>
              <p className="text-sm text-muted-foreground">
                30 days of post-launch care
              </p>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 bg-primary/5 rounded-xl text-center border border-primary/10">
          <h3 className="mb-3">Ready to start your project?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Let's discuss your needs and see if our 90-day framework is a good fit for your timeline and budget.
          </p>
          <button
            onClick={() => onNavigate("where")}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Schedule a Call
          </button>
        </div>
      </div>
    </PageContainer>
  );
}
