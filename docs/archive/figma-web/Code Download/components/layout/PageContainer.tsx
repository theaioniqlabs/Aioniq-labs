import { ReactNode } from "react";

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

export function PageContainer({ children, className = "" }: PageContainerProps) {
  return (
    <div className="min-h-screen pt-16 md:pt-16 pb-20 md:pb-8">
      <div className={`max-w-[1280px] mx-auto px-4 md:px-20 ${className}`}>
        {children}
      </div>
    </div>
  );
}
