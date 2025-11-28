import { Home, Layers, Lightbulb, Cpu, User, Mail } from "lucide-react";
import { ThemeSwitcher } from "../shared/ThemeSwitcher";

interface DesktopNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function DesktopNav({ currentPage, onNavigate }: DesktopNavProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "what", label: "What", icon: Layers },
    { id: "why", label: "Why", icon: Lightbulb },
    { id: "how", label: "How", icon: Cpu },
    { id: "who", label: "Who", icon: User },
    { id: "where", label: "Where", icon: Mail },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-border">
      <div className="max-w-[1440px] mx-auto px-20">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <button
            onClick={() => onNavigate("home")}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground text-sm">AI</span>
            </div>
            <span className="tracking-tight">AIONIQ Labs</span>
          </button>

          {/* Navigation */}
          <div className="flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <button
                  key={item.id}
                  onClick={() => onNavigate(item.id)}
                  className={`px-4 py-2 rounded-lg transition-all ${
                    currentPage === item.id
                      ? "bg-primary text-primary-foreground"
                      : "text-foreground/60 hover:text-foreground hover:bg-accent"
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <ThemeSwitcher />
            <button
              onClick={() => onNavigate("portal")}
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
            >
              Client Portal
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
