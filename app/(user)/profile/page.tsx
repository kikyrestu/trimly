"use client";

import { User, Settings, CreditCard, HelpCircle, LogOut, ChevronRight, Wallet, Star, Shield, Bell } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { clsx } from "clsx";

const menuItems = [
  { icon: User, label: "Edit Profil", href: "/profile/edit" },
  { icon: Wallet, label: "Dompet & Pembayaran", href: "/profile/wallet" },
  { icon: Bell, label: "Notifikasi", href: "/notifications" },
  { icon: Shield, label: "Keamanan Akun", href: "/security" },
  { icon: Settings, label: "Pengaturan", href: "/settings" },
  { icon: HelpCircle, label: "Bantuan & Laporan", href: "/support" },
];

export default function ProfilePage() {
  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header Profile */}
      <div className="bg-neutral-900/50 p-6 pb-8 border-b border-white/10">
        <div className="flex items-center gap-4 mb-6">
          <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-white/10">
            <Image 
              src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=1780&auto=format&fit=crop" 
              alt="User Profile" 
              fill 
              className="object-cover"
            />
          </div>
          <div>
            <h1 className="text-xl font-bold text-white">Kiky Restu</h1>
            <p className="text-sm text-neutral-400">kikyrestu@example.com</p>
            <div className="flex items-center gap-1 mt-1">
              <div className="px-2 py-0.5 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/20 flex items-center gap-1">
                <Star className="w-3 h-3 text-[#CCFF00] fill-[#CCFF00]" />
                <span className="text-[10px] font-bold text-[#CCFF00]">Gold Member</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Card */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <p className="text-xs text-neutral-400 mb-1">Total Booking</p>
            <p className="text-lg font-bold text-white">12</p>
          </div>
          <div className="bg-white/5 rounded-xl p-3 border border-white/10">
            <p className="text-xs text-neutral-400 mb-1">Poin Trimly</p>
            <p className="text-lg font-bold text-[#CCFF00]">450</p>
          </div>
        </div>
      </div>

      {/* Menu */}
      <div className="p-4 space-y-2">
        <h2 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-2 ml-2">Akun Saya</h2>
        <div className="bg-neutral-900 rounded-xl border border-white/10 overflow-hidden">
          {menuItems.map((item, index) => (
            <Link 
              key={item.label} 
              href={item.href}
              className={clsx(
                "flex items-center justify-between p-4 hover:bg-white/5 transition-colors group",
                index !== menuItems.length - 1 && "border-b border-white/5"
              )}
            >
              <div className="flex items-center gap-3">
                <item.icon className="w-5 h-5 text-neutral-400 group-hover:text-white transition-colors" />
                <span className="text-sm font-medium text-neutral-300 group-hover:text-white">{item.label}</span>
              </div>
              <ChevronRight className="w-4 h-4 text-neutral-600 group-hover:text-neutral-400" />
            </Link>
          ))}
        </div>

        <button className="w-full flex items-center justify-center gap-2 p-4 rounded-xl bg-neutral-900 border border-red-500/20 text-red-500 hover:bg-red-500/10 transition-colors mt-6 font-bold text-sm shadow-sm">
          <LogOut className="w-4 h-4" />
          Keluar Aplikasi
        </button>
      </div>
      
      <div className="text-center mt-8 mb-8">
        <p className="text-[10px] text-neutral-600">Trimly v1.0.0 • Made with ❤️</p>
      </div>
    </div>
  );
}
