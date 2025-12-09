"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, MapPin, MoreVertical, FileText } from "lucide-react";
import Image from "next/image";
import { clsx } from "clsx";

// Mock Data for Activities
const activities = [
  {
    id: 1,
    salonName: "Luxe Barber",
    service: "Classic Haircut",
    date: "Hari ini, 9 Des",
    time: "14:00",
    status: "upcoming",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
    address: "Jl. Ahmad Yani No. 45",
    price: "Rp 50.000"
  },
  {
    id: 2,
    salonName: "Glow Studio",
    service: "Facial Treatment",
    date: "5 Des 2025",
    time: "10:00",
    status: "completed",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&w=1974&auto=format&fit=crop",
    address: "Jl. Sudirman No. 12",
    price: "Rp 150.000"
  },
  {
    id: 3,
    salonName: "Luxe Barber",
    service: "Beard Trim",
    date: "1 Des 2025",
    time: "16:30",
    status: "cancelled",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
    address: "Jl. Ahmad Yani No. 45",
    price: "Rp 30.000"
  }
];

const tabs = ["Berjalan", "Riwayat"];

export default function ActivityPage() {
  const [activeTab, setActiveTab] = useState("Berjalan");

  const filteredActivities = activities.filter(activity => {
    if (activeTab === "Berjalan") return activity.status === "upcoming";
    return activity.status === "completed" || activity.status === "cancelled";
  });

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-neutral-900/80 backdrop-blur-xl border-b border-white/10 px-4 py-4">
        <h1 className="text-xl font-bold text-white">Aktivitas</h1>
      </div>

      {/* Tabs */}
      <div className="px-4 mt-4">
        <div className="p-1 bg-neutral-900 rounded-xl flex border border-white/10">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={clsx(
                "flex-1 py-2 text-xs font-bold rounded-lg transition-all",
                activeTab === tab
                  ? "bg-[#CCFF00] text-black shadow-sm"
                  : "text-neutral-400 hover:text-white"
              )}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      {/* List */}
      <div className="p-4 space-y-3">
        <AnimatePresence mode="popLayout">
          {filteredActivities.map((activity) => (
            <motion.div
              key={activity.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-neutral-900 border border-white/10 rounded-xl p-3 flex gap-3 shadow-sm"
            >
              {/* Image */}
              <div className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 bg-neutral-800">
                <Image
                  src={activity.image}
                  alt={activity.salonName}
                  fill
                  className="object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0 flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-sm font-bold text-white truncate">{activity.salonName}</h3>
                    <span className={clsx(
                      "text-[10px] px-2 py-0.5 rounded-full font-bold uppercase tracking-wide",
                      activity.status === "upcoming" && "bg-[#CCFF00]/10 text-[#CCFF00]",
                      activity.status === "completed" && "bg-green-500/10 text-green-400",
                      activity.status === "cancelled" && "bg-red-500/10 text-red-400"
                    )}>
                      {activity.status === "upcoming" ? "Diproses" : 
                       activity.status === "completed" ? "Selesai" : "Batal"}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 truncate">{activity.service}</p>
                </div>

                <div className="flex items-center justify-between mt-2">
                  <div className="flex items-center gap-3 text-xs text-neutral-500">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-3 h-3" />
                      <span>{activity.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      <span>{activity.time}</span>
                    </div>
                  </div>
                  <p className="text-xs font-bold text-[#CCFF00]">{activity.price}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>

        {filteredActivities.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-neutral-900 rounded-full flex items-center justify-center mx-auto mb-3 border border-white/10">
              <FileText className="w-8 h-8 text-neutral-600" />
            </div>
            <h3 className="text-white font-bold text-sm">Belum ada aktivitas</h3>
            <p className="text-neutral-500 text-xs mt-1">Pesanan {activeTab.toLowerCase()} akan muncul di sini</p>
          </div>
        )}
      </div>
    </div>
  );
}
