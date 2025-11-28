import { PageContainer } from "../layout/PageContainer";
import { SectionHeader } from "../shared/SectionHeader";
import { Sparkles, Target, Lightbulb, Users, Zap, Shield } from "lucide-react";

interface WhyProps {
  onNavigate: (page: string) => void;
}

export function Why({ onNavigate }: WhyProps) {
  const principles = [
    {
      icon: Sparkles,
      title: "Craft Over Convention",
      description:
        "We believe every pixel matters. We don't use templates or follow trends blindly. Every project is a unique expression of the brand's vision and user needs.",
    },
    {
      icon: Target,
      title: "Purpose-Driven Design",
      description:
        "Beautiful design without strategy is decoration. We start with business goals and user problems, ensuring every decision serves a clear purpose.",
    },
    {
      icon: Lightbulb,
      title: "Innovation as Standard",
      description:
        "We don't wait for technology to mature. We experiment, prototype, and push boundaries to give our clients a competitive edge in their markets.",
    },
    {
      icon: Users,
      title: "Human-First Technology",
      description:
        "Technology should feel invisible. We build interfaces that respect cognitive load, anticipate user needs, and create moments of delight.",
    },
    {
      icon: Zap,
      title: "Speed Meets Quality",
      description:
        "We've perfected systems that deliver premium results in tight timelines. Our 90-day framework ensures quality without endless revisions.",
    },
    {
      icon: Shield,
      title: "Built to Last",
      description:
        "We don't just launch and leave. Every system is documented, scalable, and maintainable. Your team can grow it, or we can support it.",
    },
  ];

  const codeItems = [
    "We question everything, even our own assumptions",
    "We ship working products, not perfect presentations",
    "We measure impact, not hours worked",
    "We say no to projects we can't make exceptional",
    "We treat client success as our own",
    "We stay curious and never stop learning",
  ];

  return (
    <PageContainer>
      <div className="py-12">
        <SectionHeader
          title="Why AIONIQ"
          subtitle="Our philosophy shapes everything we create. These are the principles that guide our work and define our relationships with clients."
        />

        {/* Prime Principle */}
        <div className="mb-20 p-8 md:p-12 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground rounded-2xl">
          <div className="max-w-3xl">
            <p className="text-xs uppercase tracking-wider mb-4 opacity-80">
              Our Prime Principle
            </p>
            <h2 className="mb-6 text-3xl md:text-4xl">
              Technology should elevate humans, not complicate their lives.
            </h2>
            <p className="text-lg opacity-90">
              This belief drives every decision we make—from the first wireframe to the final
              deployment. We create digital products that feel effortless because we handle all
              the complexity behind the scenes.
            </p>
          </div>
        </div>

        {/* Core Principles */}
        <div className="mb-20">
          <h2 className="mb-8">Core Principles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {principles.map((principle, index) => {
              const Icon = principle.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-xl hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="mb-3">{principle.title}</h3>
                  <p className="text-muted-foreground">{principle.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* The AIONIQ Code */}
        <div className="mb-20 p-8 md:p-12 bg-accent rounded-2xl">
          <h2 className="mb-8">The AIONIQ Code</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl">
            These are the operating principles we live by. Not aspirational values on a wall, but
            daily practices that define how we work.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {codeItems.map((item, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-primary-foreground text-xs">{index + 1}</span>
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Micro Essays */}
        <div className="space-y-12">
          <div>
            <div className="w-12 h-0.5 bg-primary mb-6" />
            <h3 className="mb-4">On Simplicity</h3>
            <p className="text-muted-foreground max-w-3xl">
              Simplicity isn't about removing features—it's about removing friction. The best
              interfaces feel obvious in retrospect, but getting there requires deep understanding
              of user mental models and countless iterations. We obsess over the details that
              others overlook: the micro-interactions, the loading states, the error messages that
              actually help. Because complexity is easy; simplicity is hard work.
            </p>
          </div>

          <div>
            <div className="w-12 h-0.5 bg-primary mb-6" />
            <h3 className="mb-4">On Technology Choices</h3>
            <p className="text-muted-foreground max-w-3xl">
              We don't chase the latest JavaScript framework or AI buzzword. We choose tools based
              on project requirements, team capabilities, and long-term maintainability. Sometimes
              that means boring, battle-tested technology. Sometimes it means being early adopters.
              What matters is making informed decisions that serve the project, not our portfolio.
            </p>
          </div>

          <div>
            <div className="w-12 h-0.5 bg-primary mb-6" />
            <h3 className="mb-4">On Client Partnerships</h3>
            <p className="text-muted-foreground max-w-3xl">
              We don't do transactional work. When we take on a project, we're invested in your
              success. We'll challenge your assumptions, propose better approaches, and sometimes
              tell you what you don't want to hear. Because that's what partners do. We're
              building things that last, not checking boxes on a scope document.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-20 p-8 bg-primary/5 rounded-xl text-center border border-primary/10">
          <h3 className="mb-3">Does this resonate with you?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            If you're looking for a partner who thinks deeply about digital products and isn't
            afraid to challenge the status quo, let's talk.
          </p>
          <button
            onClick={() => onNavigate("where")}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Start a Conversation
          </button>
        </div>
      </div>
    </PageContainer>
  );
}
