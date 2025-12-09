"use client";

import { Compass, Ticket, MessageSquare, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { clsx } from "clsx";

const navItems = [
  { icon: Compass, label: "Explore", href: "/explore" },
  { icon: Ticket, label: "Activity", href: "/activity" },
  { icon: MessageSquare, label: "Inbox", href: "/inbox" },
  { icon: User, label: "Profile", href: "/profile" },
];

export default function BottomNav() {
  const pathname = usePathname();

  // Hide bottom nav on detail pages where we have other sticky footers
  if (pathname.startsWith("/salon/") || (pathname.startsWith("/inbox/") && pathname !== "/inbox")) {
    return null;
  }

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 flex justify-center pointer-events-none">
      <div className="w-full max-w-[480px] bg-black/80 backdrop-blur-xl border-t border-white/10 pb-8 pt-4 px-6 pointer-events-auto">
        <div className="flex justify-between items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link key={item.href} href={item.href} className="relative flex flex-col items-center justify-center p-2 w-16 group">
                <item.icon
                  className={clsx(
                    "w-6 h-6 transition-all duration-300 relative z-10",
                    isActive ? "text-white fill-white" : "text-neutral-500 group-hover:text-neutral-300"
                  )}
                  strokeWidth={isActive ? 0 : 2}
                />
                <span className={clsx(
                  "text-[10px] font-medium mt-1.5 transition-colors duration-300 relative z-10",
                  isActive ? "text-white" : "text-neutral-500"
                )}>
                  {item.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
