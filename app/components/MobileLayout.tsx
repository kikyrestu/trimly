import { ReactNode } from "react";
import { clsx } from "clsx";

interface MobileLayoutProps {
  children: ReactNode;
  className?: string;
}

export default function MobileLayout({ children, className }: MobileLayoutProps) {
  return (
    <div className="min-h-screen w-full flex justify-center bg-neutral-950">
      <div className={clsx("w-full max-w-[480px] min-h-screen relative shadow-2xl overflow-x-hidden border-x border-white/5 flex flex-col", className || "bg-black")}>
        <main className="flex-1 relative z-0">
          {children}
        </main>
      </div>
    </div>
  );
}
