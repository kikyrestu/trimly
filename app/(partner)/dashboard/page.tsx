"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScanLine, Megaphone, Clock, Check, X, ChevronRight, TrendingUp, ShoppingBag, Users, Calendar } from "lucide-react";
import { clsx } from "clsx";
import Image from "next/image";

// Mock Data for Incoming Orders
const incomingOrders = [
  {
    id: "ord1",
    customerName: "Budi Santoso",
    service: "Classic Haircut",
    stylist: "Alex",
    time: "14:00",
    price: 50000,
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "ord2",
    customerName: "Siti Aminah",
    service: "Hair Coloring",
    stylist: "Sarah",
    time: "15:30",
    price: 150000,
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop"
  },
  {
    id: "ord3",
    customerName: "Joko Anwar",
    service: "Beard Trim",
    stylist: "Mike",
    time: "16:15",
    price: 30000,
    avatar: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=2080&auto=format&fit=crop"
  }
];

export default function PartnerDashboard() {
  const [isShopOpen, setIsShopOpen] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <header className="p-6 bg-white border-b border-gray-100 sticky top-0 z-30 shadow-sm">
        <div className="flex justify-between items-center max-w-[480px] mx-auto">
          <div>
            <p className="text-xs text-gray-500">Selamat datang,</p>
            <h1 className="text-xl font-bold text-gray-900">Luxe Barber</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className={clsx("text-xs font-bold", isShopOpen ? "text-green-600" : "text-gray-500")}>
              {isShopOpen ? "BUKA" : "TUTUP"}
            </span>
            <button
              onClick={() => setIsShopOpen(!isShopOpen)}
              className={clsx(
                "w-12 h-6 rounded-full relative transition-colors duration-300",
                isShopOpen ? "bg-green-500/20 border border-green-500/50" : "bg-gray-200 border border-gray-300"
              )}
            >
              <motion.div
                layout
                className={clsx(
                  "absolute top-1 w-4 h-4 rounded-full shadow-sm",
                  isShopOpen ? "left-7 bg-green-500" : "left-1 bg-white"
                )}
              />
            </button>
          </div>
        </div>
      </header>

      <div className="max-w-[480px] mx-auto p-4 space-y-6">
        {/* Stats Overview */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-xs font-medium">Pendapatan Hari Ini</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">Rp 450rb</h3>
            <p className="text-xs text-green-600 mt-1 font-medium">+12% vs kemarin</p>
          </div>
          <div className="p-4 rounded-xl bg-white border border-gray-100 shadow-sm">
            <div className="flex items-center gap-2 text-gray-500 mb-2">
              <ShoppingBag className="w-4 h-4 text-secondary" />
              <span className="text-xs font-medium">Pesanan Masuk</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-900">3</h3>
            <p className="text-xs text-secondary mt-1 font-medium">Perlu Tindakan</p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-2 gap-4">
          <button className="p-4 rounded-xl bg-primary text-white flex flex-col items-center justify-center gap-2 hover:bg-primary/90 transition-colors shadow-lg shadow-primary/20">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <ScanLine className="w-5 h-5" />
            </div>
            <span className="font-bold text-sm">Scan QR</span>
          </button>
          <button className="p-4 rounded-xl bg-white border border-gray-200 text-gray-900 flex flex-col items-center justify-center gap-2 hover:bg-gray-50 transition-colors shadow-sm">
            <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
              <Megaphone className="w-5 h-5 text-secondary" />
            </div>
            <span className="font-bold text-sm">Buat Promo</span>
          </button>
        </div>

        {/* Incoming Orders */}
        <div>
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-bold text-gray-900">Pesanan Masuk</h2>
            <button className="text-xs font-bold text-primary">Lihat Semua</button>
          </div>
          
          <div className="space-y-3">
            {incomingOrders.map((order) => (
              <div key={order.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-3">
                    <div className="relative w-10 h-10 rounded-full overflow-hidden bg-gray-100">
                      <Image src={order.avatar} alt={order.customerName} fill className="object-cover" />
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900 text-sm">{order.customerName}</h3>
                      <p className="text-xs text-gray-500">{order.service} • {order.stylist}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-gray-50 px-2 py-1 rounded-lg">
                    <Clock className="w-3 h-3 text-gray-500" />
                    <span className="text-xs font-bold text-gray-700">{order.time}</span>
                  </div>
                </div>
                
                <div className="flex gap-2 mt-3 pt-3 border-t border-gray-50">
                  <button className="flex-1 py-2 rounded-lg border border-gray-200 text-gray-700 text-sm font-bold hover:bg-gray-50 transition-colors flex items-center justify-center gap-1">
                    <X className="w-4 h-4" /> Tolak
                  </button>
                  <button className="flex-1 py-2 rounded-lg bg-primary text-white text-sm font-bold hover:bg-primary/90 transition-colors flex items-center justify-center gap-1 shadow-md shadow-primary/20">
                    <Check className="w-4 h-4" /> Terima
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Menu Grid */}
        <div>
          <h2 className="text-lg font-bold text-gray-900 mb-4">Menu Partner</h2>
          <div className="grid grid-cols-4 gap-4">
            {[
              { icon: Calendar, label: "Jadwal", color: "text-blue-500", bg: "bg-blue-50" },
              { icon: Users, label: "Stylist", color: "text-purple-500", bg: "bg-purple-50" },
              { icon: ShoppingBag, label: "Produk", color: "text-secondary", bg: "bg-secondary/10" },
              { icon: TrendingUp, label: "Laporan", color: "text-green-500", bg: "bg-green-50" },
            ].map((item, idx) => (
              <button key={idx} className="flex flex-col items-center gap-2">
                <div className={clsx("w-12 h-12 rounded-xl flex items-center justify-center", item.bg)}>
                  <item.icon className={clsx("w-6 h-6", item.color)} />
                </div>
                <span className="text-xs font-medium text-gray-600">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
