import { useState } from "react";
import { PageContainer } from "../layout/PageContainer";
import { SectionHeader } from "../shared/SectionHeader";
import { ProjectCard } from "../shared/ProjectCard";
import { Badge } from "../ui/badge";
import { Drawer } from "../ui/drawer";
import { X, ExternalLink } from "lucide-react";

interface WhatProps {
  onNavigate: (page: string) => void;
}

export function What({ onNavigate }: WhatProps) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  const filters = [
    { id: "all", label: "All Projects" },
    { id: "web", label: "Web Apps" },
    { id: "mobile", label: "Mobile" },
    { id: "branding", label: "Branding" },
    { id: "ai", label: "AI/ML" },
  ];

  const projects = [
    {
      id: 1,
      title: "FinTech Dashboard",
      description: "Real-time analytics platform for financial services",
      tags: ["Web App", "React", "Data Viz"],
      category: "web",
      image: "https://images.unsplash.com/photo-1614020661498-fef5b2293108?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWNobm9sb2d5JTIwaW50ZXJmYWNlfGVufDF8fHx8MTc2MzIwNzkxNHww&ixlib=rb-4.1.0&q=80&w=1080",
      challenge: "Create a real-time financial analytics platform that handles millions of data points while maintaining sub-second response times.",
      process: "Built a custom WebSocket infrastructure with React and D3.js for live data visualization. Implemented advanced caching strategies and optimized rendering.",
      result: "40% increase in user engagement, 60% reduction in decision-making time for analysts.",
    },
    {
      id: 2,
      title: "AI Content Studio",
      description: "Generative AI platform for creative professionals",
      tags: ["AI/ML", "Next.js", "API"],
      category: "ai",
      image: "https://images.unsplash.com/photo-1523961131990-5ea7c61b2107?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaWdpdGFsJTIwaW5ub3ZhdGlvbnxlbnwxfHx8fDE3NjMyNTQ1MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
      challenge: "Design an intuitive interface for complex AI workflows that feels natural to creative professionals.",
      process: "Conducted extensive user research with designers and content creators. Built a modular workflow system with real-time previews.",
      result: "Featured in ProductHunt Top 10, 10K+ users in first month, 4.8/5 rating.",
    },
    {
      id: 3,
      title: "Wellness Mobile App",
      description: "Holistic health tracking with AI-powered insights",
      tags: ["Mobile", "React Native", "Health"],
      category: "mobile",
      image: "https://images.unsplash.com/photo-1566554001689-b53a88dbd138?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaW5pbWFsJTIwcHJvZHVjdCUyMGRlc2lnbnxlbnwxfHx8fDE3NjMyMTI4NDd8MA&ixlib=rb-4.1.0&q=80&w=1080",
      challenge: "Create a wellness app that doesn't feel overwhelming and integrates seamlessly into daily routines.",
      process: "Designed a minimalist interface with smart defaults and gentle nudges. Integrated with Apple Health and Google Fit.",
      result: "150K downloads, 4.7 App Store rating, Featured in Apple's 'New Apps We Love'.",
    },
    {
      id: 4,
      title: "Luxury Brand Identity",
      description: "Complete rebrand for premium lifestyle company",
      tags: ["Branding", "Design System", "Guidelines"],
      category: "branding",
      image: "https://images.unsplash.com/photo-1625447521754-764d517239e6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBkZXNpZ258ZW58MXx8fHwxNzYzMTkyNzM4fDA&ixlib=rb-4.1.0&q=80&w=1080",
      challenge: "Modernize a heritage brand without losing its prestige and recognition.",
      process: "Deep dive into brand history, competitor analysis, and customer perception. Created a refined visual system that honors legacy.",
      result: "Brand recognition increased 35%, digital engagement up 120%, new target demographic reached.",
    },
    {
      id: 5,
      title: "E-Commerce Platform",
      description: "Next-gen shopping experience with AR features",
      tags: ["Web App", "E-Commerce", "AR"],
      category: "web",
      image: "https://images.unsplash.com/photo-1533135091724-62cc5402aa20?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMGdlb21ldHJpY3xlbnwxfHx8fDE3NjMxNjYxMTl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      challenge: "Build a high-performance e-commerce platform with AR try-on features for furniture and home decor.",
      process: "Implemented WebAR using Three.js and TensorFlow.js. Built custom CMS for 3D asset management.",
      result: "25% reduction in returns, 45% increase in conversion rate, industry innovation award.",
    },
    {
      id: 6,
      title: "SaaS Analytics Tool",
      description: "Business intelligence platform for startups",
      tags: ["Web App", "SaaS", "Analytics"],
      category: "web",
      image: "https://images.unsplash.com/photo-1519217651866-847339e674d4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjMyMzk4Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080",
      challenge: "Make complex data analysis accessible to non-technical founders and small teams.",
      process: "Built natural language query interface and automated insights engine. Focus on actionable metrics.",
      result: "500+ companies using platform, $2M ARR in year one, 95% customer retention.",
    },
  ];

  const filteredProjects =
    selectedFilter === "all"
      ? projects
      : projects.filter((p) => p.category === selectedFilter);

  return (
    <PageContainer>
      <div className="py-12">
        <SectionHeader
          title="Portfolio"
          subtitle="A curated selection of projects that showcase our approach to design, technology, and problem-solving."
        />

        {/* Filter Bar */}
        <div className="flex flex-wrap gap-2 mb-12">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-4 py-2 rounded-lg transition-all ${
                selectedFilter === filter.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-accent text-accent-foreground hover:bg-accent/80"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              tags={project.tags}
              image={project.image}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>

        {/* Case Study CTA */}
        <div className="mt-16 p-8 bg-accent rounded-xl text-center">
          <h3 className="mb-3">Want to see detailed case studies?</h3>
          <p className="text-muted-foreground mb-6">
            Get in touch to access our complete portfolio with in-depth process breakdowns.
          </p>
          <button
            onClick={() => onNavigate("where")}
            className="px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
          >
            Request Access
          </button>
        </div>
      </div>

      {/* Project Drawer */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm">
          <div className="fixed right-0 top-0 bottom-0 w-full md:w-[600px] bg-background shadow-2xl overflow-y-auto">
            <div className="sticky top-0 bg-background/95 backdrop-blur-sm border-b border-border z-10">
              <div className="flex items-center justify-between p-6">
                <h3>{selectedProject.title}</h3>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 hover:bg-accent rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            <div className="p-6">
              {/* Hero Image */}
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full aspect-video object-cover rounded-lg mb-6"
              />

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {selectedProject.tags.map((tag: string, index: number) => (
                  <Badge key={index} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>

              {/* Challenge */}
              <div className="mb-8">
                <h4 className="mb-3">Challenge</h4>
                <p className="text-muted-foreground">{selectedProject.challenge}</p>
              </div>

              {/* Process */}
              <div className="mb-8">
                <h4 className="mb-3">Process</h4>
                <p className="text-muted-foreground">{selectedProject.process}</p>
              </div>

              {/* Result */}
              <div className="mb-8">
                <h4 className="mb-3">Result</h4>
                <p className="text-muted-foreground">{selectedProject.result}</p>
              </div>

              {/* CTA */}
              <div className="pt-6 border-t border-border">
                <button
                  onClick={() => onNavigate("where")}
                  className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2"
                >
                  <span>Start a Similar Project</span>
                  <ExternalLink className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </PageContainer>
  );
}
