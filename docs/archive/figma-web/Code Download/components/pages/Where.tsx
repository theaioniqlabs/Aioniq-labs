import { useState } from "react";
import { PageContainer } from "../layout/PageContainer";
import { SectionHeader } from "../shared/SectionHeader";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../ui/accordion";
import { Calendar, Mail, Phone, MapPin, Clock, CheckCircle2 } from "lucide-react";
import { toast } from "sonner@2.0.3";

interface WhereProps {
  onNavigate: (page: string) => void;
}

export function Where({ onNavigate }: WhereProps) {
  const [formStep, setFormStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you! We'll be in touch within 24 hours.", {
      description: "We've received your project inquiry.",
    });
    // Reset form
    setFormStep(1);
    setFormData({
      name: "",
      email: "",
      company: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
    });
  };

  const faqs = [
    {
      question: "What's your typical project timeline?",
      answer:
        "Our standard 90-day framework covers most projects from concept to launch. Smaller projects can be faster (4-6 weeks), while larger enterprise projects may extend to 4-6 months. We'll provide a detailed timeline during our discovery call.",
    },
    {
      question: "What's your pricing structure?",
      answer:
        "We offer project-based pricing starting at $25K for websites and $50K+ for web applications. We also do monthly retainers for ongoing work. Every project is scoped individually based on complexity and requirements.",
    },
    {
      question: "Do you work with startups?",
      answer:
        "Absolutely! We love working with early-stage companies. We offer flexible payment terms and can structure engagements to fit startup budgets and timelines. Many of our clients have gone on to raise funding with the products we've built together.",
    },
    {
      question: "Can you maintain my existing website?",
      answer:
        "Yes, we offer maintenance and enhancement packages. Whether you need ongoing support, performance optimization, or new features, we can create a retainer that fits your needs.",
    },
    {
      question: "What if I only need design (no development)?",
      answer:
        "We can do design-only projects and deliver production-ready Figma files with complete design systems. We'll also provide developer handoff documentation to ensure smooth implementation.",
    },
    {
      question: "Do you sign NDAs?",
      answer:
        "Yes, we're happy to sign mutual NDAs before discussing sensitive project details. We take confidentiality seriously and never share client work without explicit permission.",
    },
  ];

  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@aioniq.studio",
      action: "mailto:hello@aioniq.studio",
    },
    {
      icon: Calendar,
      title: "Schedule a Call",
      value: "Book 30-min intro",
      action: "#",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "Remote / Global",
      action: null,
    },
    {
      icon: Clock,
      title: "Response Time",
      value: "Within 24 hours",
      action: null,
    },
  ];

  return (
    <PageContainer>
      <div className="py-12">
        <SectionHeader
          title="Start a Project"
          subtitle="Let's discuss your goals and see if we're a good fit. Fill out the form below or book a call directly."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-20">
          {/* Form */}
          <div className="lg:col-span-2">
            <div className="bg-card border border-border rounded-xl p-8">
              {/* Progress indicator */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className={`flex items-center gap-2 ${step !== 3 ? "flex-1" : ""}`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                        formStep >= step
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {formStep > step ? (
                        <CheckCircle2 className="w-5 h-5" />
                      ) : (
                        <span>{step}</span>
                      )}
                    </div>
                    {step !== 3 && (
                      <div
                        className={`flex-1 h-0.5 mx-2 transition-colors ${
                          formStep > step ? "bg-primary" : "bg-muted"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <form onSubmit={handleSubmit}>
                {/* Step 1: Basic Info */}
                {formStep === 1 && (
                  <div className="space-y-6">
                    <h3 className="mb-6">About You</h3>
                    <div>
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="John Doe"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">Email *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="john@company.com"
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">Company</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        placeholder="Your Company Name"
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => setFormStep(2)}
                      className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                      disabled={!formData.name || !formData.email}
                    >
                      Continue
                    </button>
                  </div>
                )}

                {/* Step 2: Project Details */}
                {formStep === 2 && (
                  <div className="space-y-6">
                    <h3 className="mb-6">Project Details</h3>
                    <div>
                      <Label htmlFor="projectType">Project Type *</Label>
                      <Select
                        value={formData.projectType}
                        onValueChange={(value) =>
                          setFormData({ ...formData, projectType: value })
                        }
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select project type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="website">Website</SelectItem>
                          <SelectItem value="webapp">Web Application</SelectItem>
                          <SelectItem value="mobile">Mobile App</SelectItem>
                          <SelectItem value="branding">Branding & Identity</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="budget">Budget Range *</Label>
                      <Select
                        value={formData.budget}
                        onValueChange={(value) => setFormData({ ...formData, budget: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="Select budget range" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="under25k">Under $25K</SelectItem>
                          <SelectItem value="25k-50k">$25K - $50K</SelectItem>
                          <SelectItem value="50k-100k">$50K - $100K</SelectItem>
                          <SelectItem value="over100k">$100K+</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label htmlFor="timeline">Timeline *</Label>
                      <Select
                        value={formData.timeline}
                        onValueChange={(value) => setFormData({ ...formData, timeline: value })}
                      >
                        <SelectTrigger>
                          <SelectValue placeholder="When do you need this?" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="asap">ASAP (1-2 months)</SelectItem>
                          <SelectItem value="flexible">Flexible (3-6 months)</SelectItem>
                          <SelectItem value="planning">Just planning</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setFormStep(1)}
                        className="flex-1 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="button"
                        onClick={() => setFormStep(3)}
                        className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                        disabled={!formData.projectType || !formData.budget || !formData.timeline}
                      >
                        Continue
                      </button>
                    </div>
                  </div>
                )}

                {/* Step 3: Message */}
                {formStep === 3 && (
                  <div className="space-y-6">
                    <h3 className="mb-6">Tell Us More</h3>
                    <div>
                      <Label htmlFor="message">Project Description *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us about your project, goals, and any specific requirements..."
                        rows={8}
                        required
                      />
                    </div>
                    <div className="flex gap-3">
                      <button
                        type="button"
                        onClick={() => setFormStep(2)}
                        className="flex-1 px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
                      >
                        Back
                      </button>
                      <button
                        type="submit"
                        className="flex-1 px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
                        disabled={!formData.message}
                      >
                        Submit Inquiry
                      </button>
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-card border border-border rounded-xl p-6">
              <h4 className="mb-4">Contact Information</h4>
              <div className="space-y-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{method.title}</p>
                        {method.action ? (
                          <a
                            href={method.action}
                            className="hover:text-primary transition-colors"
                          >
                            {method.value}
                          </a>
                        ) : (
                          <p>{method.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="bg-accent rounded-xl p-6">
              <h4 className="mb-2">Prefer a Quick Call?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Book a 30-minute intro call to discuss your project in detail.
              </p>
              <button className="w-full px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                Schedule Now
              </button>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div>
          <h2 className="mb-8">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`faq-${index}`}
                className="border border-border rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-6 py-4 hover:bg-accent/50 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <p className="text-muted-foreground">{faq.answer}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </PageContainer>
  );
}
