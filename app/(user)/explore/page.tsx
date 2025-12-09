"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Search, MapPin, Bell, MessageCircle, Scissors, Ticket, ShoppingBag, Star, ChevronRight, Plus } from "lucide-react";
import SalonCard from "../../components/SalonCard";
import { salons } from "../../data/mockData";
import Link from "next/link";
import Image from "next/image";

const features = [
  { icon: Scissors, label: "Haircut", color: "bg-primary/10 text-primary", href: "/explore" },
  { icon: Star, label: "Shaving", color: "bg-secondary/10 text-secondary-dark", href: "/explore" },
  { icon: Ticket, label: "Coloring", color: "bg-primary/10 text-primary", href: "/explore" },
  { icon: ShoppingBag, label: "Shop", color: "bg-secondary/10 text-secondary-dark", href: "/explore" },
  { icon: Ticket, label: "Vouchers", color: "bg-secondary/10 text-secondary-dark", href: "/explore" },
  { icon: Star, label: "Stylist", color: "bg-primary/10 text-primary", href: "/explore" },
  { icon: MapPin, label: "Near Me", color: "bg-secondary/10 text-secondary-dark", href: "/map" },
  { icon: MessageCircle, label: "Consult", color: "bg-primary/10 text-primary", href: "/explore" },
];

const vouchers = [
  { id: 1, title: "Diskon 50%", desc: "Pengguna Baru", code: "NEW50", color: "from-secondary to-yellow-600" },
  { id: 2, title: "Cashback 10rb", desc: "Min. Transaksi 50rb", code: "CB10", color: "from-primary to-brown-800" },
  { id: 3, title: "Gratis Ongkir", desc: "Produk Grooming", code: "FREESHIP", color: "from-green-600 to-emerald-700" },
];

const products = [
  { id: 1, name: "Gatsby Pomade", price: "Rp 45.000", rating: 4.8, image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887&auto=format&fit=crop" },
  { id: 2, name: "Kahf Face Wash", price: "Rp 35.000", rating: 4.9, image: "https://images.unsplash.com/photo-1608248597279-f99d160bfbc8?q=80&w=1926&auto=format&fit=crop" },
  { id: 3, name: "Makarizo Hair Energy", price: "Rp 85.000", rating: 4.7, image: "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?q=80&w=1935&auto=format&fit=crop" },
];

export default function ExplorePage() {
  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Sticky Header */}
      <div className="sticky top-0 z-40 bg-black/80 backdrop-blur-xl border-b border-white/5 px-4 py-4">
        <div className="flex items-center gap-3 mb-4">
          <div className="flex-1 relative group">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-500 group-focus-within:text-white transition-colors" />
            <input 
              type="text" 
              placeholder="Search salons, services..." 
              className="w-full bg-neutral-900 border-none rounded-2xl py-3 pl-11 pr-4 text-sm text-white placeholder:text-neutral-500 focus:ring-1 focus:ring-white/20 transition-all"
            />
          </div>
          <button className="p-3 rounded-full bg-neutral-900 hover:bg-neutral-800 text-white relative transition-colors">
            <Bell className="w-5 h-5" />
            <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 rounded-full border border-black"></span>
          </button>
        </div>
        <div className="flex items-center gap-2 text-xs text-neutral-400">
          <MapPin className="w-3 h-3 text-white" />
          <span>Location:</span>
          <span className="font-bold text-white">Jl. Ahmad Yani No. 45</span>
          <ChevronRight className="w-3 h-3" />
        </div>
      </div>

      {/* Gamification Widget */}
      <div className="px-4 mt-6">
        <div className="bg-neutral-900 rounded-3xl p-5 border border-white/5 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center text-white">
              <Star className="w-6 h-6 fill-white" />
            </div>
            <div>
              <p className="text-xs text-neutral-400 mb-1">Member Level</p>
              <h3 className="text-base font-bold text-white">Silver Member</h3>
            </div>
          </div>
          <div className="text-right">
            <p className="text-xs font-bold text-white mb-2">2,400 XP</p>
            <div className="w-24 h-1.5 bg-white/10 rounded-full overflow-hidden">
              <div className="h-full bg-white w-[70%] rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Main Feature Grid */}
      <div className="px-4 mt-8">
        <div className="grid grid-cols-4 gap-y-8 gap-x-4">
          {features.map((feature, idx) => (
            <Link href={feature.href} key={idx} className="flex flex-col items-center gap-3 group">
              <div className={`w-14 h-14 rounded-3xl flex items-center justify-center bg-neutral-900 border border-white/5 group-hover:bg-white group-hover:text-black transition-all duration-300`}>
                <feature.icon className="w-6 h-6 text-white group-hover:text-black transition-colors" />
              </div>
              <span className="text-[11px] font-medium text-neutral-400 group-hover:text-white transition-colors text-center leading-tight">{feature.label}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* Promo Carousel */}
      <div className="mt-10 px-4">
        <div className="relative w-full h-32 rounded-xl overflow-hidden">
          <Image 
            src="https://images.unsplash.com/photo-1503951914296-9a07f8021f9e?q=80&w=2070&auto=format&fit=crop" 
            alt="Promo" 
            fill 
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center px-6">
            <div>
              <p className="text-yellow-400 text-xs font-bold mb-1">SPECIAL OFFER</p>
              <h2 className="text-white font-bold text-lg leading-tight mb-2">Gatsby x Trimly<br/>Exclusive Deal</h2>
              <button className="px-3 py-1 bg-primary text-white text-xs font-bold rounded-lg">Check Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Vouchers Section */}
      <div className="mt-8 pl-4">
        <div className="flex justify-between items-center pr-4 mb-3">
          <h2 className="text-base font-bold text-gray-900">Klaim Voucher Spesial! 🎉</h2>
          <span className="text-xs text-primary font-bold">Lihat Semua</span>
        </div>
        <div className="flex gap-3 overflow-x-auto pb-4 pr-4 scrollbar-hide">
          {vouchers.map((voucher) => (
            <div key={voucher.id} className={`flex-shrink-0 w-64 h-20 rounded-lg relative overflow-hidden bg-gradient-to-r ${voucher.color} p-3 flex items-center shadow-sm`}>
              {/* Jagged Edges Effect (Visual only) */}
              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-50 rounded-full" />
              <div className="absolute -right-2 top-1/2 -translate-y-1/2 w-4 h-4 bg-gray-50 rounded-full" />
              
              <div className="flex-1 pl-3 border-r border-white/30 border-dashed mr-3">
                <h3 className="text-white font-bold text-sm">{voucher.title}</h3>
                <p className="text-white/80 text-[10px]">{voucher.desc}</p>
              </div>
              <button className="text-xs font-bold bg-white text-black px-4 py-2 rounded-full shadow-sm hover:scale-105 transition-transform">
                Claim
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Official Store */}
      <div className="mt-8 pl-4 py-6">
        <div className="flex justify-between items-center pr-4 mb-4">
          <h2 className="text-lg font-bold text-white">Grooming Essentials</h2>
          <span className="text-xs text-neutral-400 font-medium hover:text-white transition-colors">View All</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pr-4 scrollbar-hide pb-4">
          {products.map((product) => (
            <div key={product.id} className="flex-shrink-0 w-40 bg-neutral-900 border border-white/5 rounded-2xl overflow-hidden group hover:border-white/20 transition-all">
              <div className="relative h-40 w-full bg-neutral-800">
                <Image src={product.image} alt={product.name} fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-3">
                <h3 className="text-sm font-medium text-white truncate mb-1">{product.name}</h3>
                <div className="flex items-center gap-1 mb-3">
                  <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                  <span className="text-[10px] text-neutral-400">{product.rating}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-bold text-white">{product.price}</span>
                  <button className="w-7 h-7 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 transition-transform">
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Nearest Salon Feed */}
      <div className="mt-2 px-4 py-6">
        <h2 className="text-lg font-bold text-white mb-4">Nearest Salons</h2>
        <div className="space-y-4">
          {salons.map((salon) => (
            <SalonCard key={salon.id} salon={salon} />
          ))}
        </div>
      </div>
    </div>
  );
}
