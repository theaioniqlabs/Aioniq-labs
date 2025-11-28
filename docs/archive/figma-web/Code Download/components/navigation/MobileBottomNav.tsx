import { Home, Layers, Lightbulb, Cpu, User, Mail } from "lucide-react";

interface MobileBottomNavProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export function MobileBottomNav({ currentPage, onNavigate }: MobileBottomNavProps) {
  const navItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "what", label: "What", icon: Layers },
    { id: "why", label: "Why", icon: Lightbulb },
    { id: "how", label: "How", icon: Cpu },
    { id: "who", label: "Who", icon: User },
    { id: "where", label: "Where", icon: Mail },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-xl border-t border-border safe-area-bottom">
      <div className="flex items-center justify-around h-16 px-2">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex flex-col items-center justify-center gap-1 min-w-[44px] min-h-[44px] px-2 rounded-lg transition-all ${
                currentPage === item.id
                  ? "text-primary"
                  : "text-foreground/40"
              }`}
            >
              <Icon className="w-5 h-5" strokeWidth={currentPage === item.id ? 2.5 : 2} />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
