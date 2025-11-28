import { PageContainer } from "../layout/PageContainer";
import { SectionHeader } from "../shared/SectionHeader";
import { Badge } from "../ui/badge";
import { Linkedin, Twitter, Mail, Award, Briefcase, GraduationCap } from "lucide-react";

interface WhoProps {
  onNavigate: (page: string) => void;
}

export function Who({ onNavigate }: WhoProps) {
  const timeline = [
    {
      year: "2025",
      title: "AIONIQ Labs",
      description: "Founded creative-tech studio focusing on premium digital products",
      type: "company",
    },
    {
      year: "2020-2024",
      title: "Lead Product Designer",
      description: "Tech startup → Series B → Led design team of 12",
      type: "work",
    },
    {
      year: "2018-2020",
      title: "Design Director",
      description: "Digital agency → worked with Fortune 500 clients",
      type: "work",
    },
    {
      year: "2015-2018",
      title: "Senior UI/UX Designer",
      description: "Fintech company → mobile app with 1M+ users",
      type: "work",
    },
    {
      year: "2013-2015",
      title: "Master's Degree",
      description: "HCI & Interaction Design",
      type: "education",
    },
  ];

  const skills = [
    { category: "Design", items: ["UI/UX", "Design Systems", "Brand Identity", "Prototyping"] },
    { category: "Development", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { category: "Strategy", items: ["Product Strategy", "User Research", "Workshop Facilitation"] },
    { category: "Tools", items: ["Figma", "Adobe Suite", "Framer", "WebFlow"] },
  ];

  const highlights = [
    {
      icon: Award,
      title: "Awwwards Winner",
      description: "3x Site of the Day, 1x Developer Award",
    },
    {
      icon: Briefcase,
      title: "50+ Projects",
      description: "From startups to enterprise clients",
    },
    {
      icon: GraduationCap,
      title: "Speaker & Mentor",
      description: "Design conferences and bootcamps",
    },
  ];

  return (
    <PageContainer>
      <div className="py-12">
        <SectionHeader
          title="Meet the Founder"
          subtitle="Hi, I'm the designer and developer behind AIONIQ Labs. Here's my story and what drives this work."
        />

        {/* Profile Section */}
        <div className="mb-20 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Portrait */}
          <div className="md:col-span-1">
            <div className="aspect-square rounded-2xl overflow-hidden bg-muted mb-4">
              <img
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjMxNjU5MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Founder"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-3 justify-center">
              <button className="w-10 h-10 rounded-lg bg-accent hover:bg-accent/80 transition-colors flex items-center justify-center">
                <Linkedin className="w-5 h-5" />
              </button>
              <button className="w-10 h-10 rounded-lg bg-accent hover:bg-accent/80 transition-colors flex items-center justify-center">
                <Twitter className="w-5 h-5" />
              </button>
              <button 
                onClick={() => onNavigate("where")}
                className="w-10 h-10 rounded-lg bg-accent hover:bg-accent/80 transition-colors flex items-center justify-center"
              >
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Bio */}
          <div className="md:col-span-2 space-y-4 text-muted-foreground">
            <p>
              I started designing websites in high school, fell in love with code in college, and
              spent the last decade building digital products for startups and Fortune 500
              companies alike.
            </p>
            <p>
              What drives me is the intersection of design and technology—where aesthetics meet
              algorithms, where craft meets code. I believe the best digital products feel magical
              not because of flashy animations, but because everything just works the way you'd
              expect it to.
            </p>
            <p>
              AIONIQ Labs is my vehicle for working on projects I'm excited about, with clients
              who value quality and innovation. I keep the studio intentionally small—I'm involved
              in every project personally, and I collaborate with a trusted network of specialists
              when needed.
            </p>
            <p>
              Outside of work, you'll find me exploring new design tools, experimenting with AI,
              or mentoring aspiring designers who want to break into the industry.
            </p>
          </div>
        </div>

        {/* Highlights */}
        <div className="mb-20">
          <h2 className="mb-8">Highlights</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {highlights.map((highlight, index) => {
              const Icon = highlight.icon;
              return (
                <div
                  key={index}
                  className="p-6 bg-card border border-border rounded-xl text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h4 className="mb-2">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div className="mb-20">
          <h2 className="mb-8">Journey</h2>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-border md:-ml-px" />

            {/* Timeline items */}
            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row items-start md:items-center gap-4 ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}
                >
                  {/* Year marker */}
                  <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-primary rounded-full md:-ml-2 z-10" />

                  {/* Content */}
                  <div
                    className={`ml-8 md:ml-0 flex-1 p-6 bg-card border border-border rounded-xl ${
                      index % 2 === 0 ? "md:mr-auto md:ml-8" : "md:ml-auto md:mr-8"
                    } md:w-[calc(50%-2rem)]`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-primary">{item.year}</span>
                      <Badge variant={item.type === "company" ? "default" : "secondary"}>
                        {item.type}
                      </Badge>
                    </div>
                    <h4 className="mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-20">
          <h2 className="mb-8">Skill Modules</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <div key={index} className="p-6 bg-card border border-border rounded-xl">
                <h4 className="mb-4">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Quote */}
        <div className="p-8 bg-accent rounded-xl border-l-4 border-primary">
          <p className="text-lg italic mb-2">
            "The best digital products are invisible. They solve problems so elegantly that users
            don't even notice the interface—they just focus on their goals."
          </p>
          <p className="text-muted-foreground">— Founder, AIONIQ Labs</p>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <h3 className="mb-3">Want to work together?</h3>
          <p className="text-muted-foreground mb-6">
            I'm selective about projects, but always happy to chat about interesting challenges.
          </p>
          <button
            onClick={() => onNavigate("where")}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </PageContainer>
  );
}
