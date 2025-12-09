"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Search, MapPin, Navigation, List, Star, Filter } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { salons } from "../../data/mockData";
import { clsx } from "clsx";

export default function MapPage() {
  const [selectedSalon, setSelectedSalon] = useState<string | null>(null);
  const [viewMode, setViewMode] = useState<"map" | "list">("map");

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Map Background (Mock) */}
      <div className="absolute inset-0 z-0 bg-neutral-900">
        <Image 
          src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=1748&auto=format&fit=crop" 
          alt="Map Background" 
          fill 
          className="object-cover opacity-40 grayscale-[80%]"
        />
        
        {/* Mock Pins */}
        {salons.map((salon, index) => (
          <motion.div
            key={salon.id}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.1 }}
            className={clsx(
              "absolute transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center group",
              index === 0 ? "top-[40%] left-[50%]" : 
              index === 1 ? "top-[30%] left-[30%]" : 
              "top-[60%] left-[70%]"
            )}
          >
            <div 
              onClick={() => setSelectedSalon(salon.id)}
              className={clsx(
                "relative p-1 rounded-full shadow-lg transition-all duration-300 cursor-pointer",
                selectedSalon === salon.id ? "bg-[#CCFF00] scale-125 z-20" : "bg-neutral-900 hover:scale-110 z-10"
              )}
            >
              <div className="w-8 h-8 rounded-full overflow-hidden border-2 border-black">
                <Image src={salon.image} alt={salon.name} width={32} height={32} className="object-cover h-full w-full" />
              </div>
              {selectedSalon === salon.id && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-[#CCFF00] rotate-45" />
              )}
            </div>
            {selectedSalon === salon.id && (
              <motion.div 
                initial={{ opacity: 0, y: 5 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-2 bg-neutral-900 px-3 py-1.5 rounded-lg shadow-md border border-white/10 whitespace-nowrap z-20"
              >
                <Link href={`/salon/${salon.id}`}>
                  <p className="text-xs font-bold text-white">{salon.name}</p>
                  <p className="text-[10px] text-neutral-400">{salon.distance}</p>
                </Link>
              </motion.div>
            )}
          </motion.div>
        ))}

        {/* User Location Pulse */}
        <div className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-4 h-4 bg-[#00E5FF] rounded-full border-2 border-black shadow-lg relative z-10" />
          <div className="absolute inset-0 bg-[#00E5FF] rounded-full animate-ping opacity-50" />
          <div className="absolute -inset-8 bg-[#00E5FF]/20 rounded-full animate-pulse" />
        </div>
      </div>

      {/* Header Search */}
      <div className="absolute top-0 left-0 right-0 z-30 p-4 bg-gradient-to-b from-black/90 to-transparent pt-6">
        <div className="flex gap-3 items-center">
          <Link href="/explore" className="p-3 rounded-full bg-neutral-900 shadow-md text-white hover:bg-neutral-800 transition-colors border border-white/10">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex-1 bg-neutral-900 rounded-full shadow-md flex items-center px-4 py-2.5 border border-white/10">
            <Search className="w-4 h-4 text-neutral-400 mr-3" />
            <input 
              type="text" 
              placeholder="Cari lokasi..." 
              className="flex-1 bg-transparent text-sm text-white placeholder:text-neutral-500 focus:outline-none"
            />
          </div>
          <button className="p-3 rounded-full bg-neutral-900 shadow-md text-white hover:bg-neutral-800 transition-colors border border-white/10">
            <Filter className="w-5 h-5" />
          </button>
        </div>
        
        {/* Filter Chips */}
        <div className="flex gap-2 mt-3 overflow-x-auto scrollbar-hide pb-2">
          {["Terdekat", "Rating 4.5+", "Buka Sekarang", "Promo"].map((filter) => (
            <button key={filter} className="px-4 py-1.5 rounded-full bg-neutral-900/90 backdrop-blur-sm shadow-sm border border-white/10 text-xs font-bold text-white whitespace-nowrap hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-colors">
              {filter}
            </button>
          ))}
        </div>
      </div>

      {/* Floating Action Buttons */}
      <div className="absolute right-4 bottom-32 flex flex-col gap-3 z-20">
        <button className="p-3 rounded-full bg-neutral-900 shadow-lg text-white hover:text-[#CCFF00] transition-colors border border-white/10">
          <Navigation className="w-5 h-5" />
        </button>
        <button 
          onClick={() => setViewMode(viewMode === "map" ? "list" : "map")}
          className="p-3 rounded-full bg-[#CCFF00] shadow-lg text-black hover:bg-[#CCFF00]/90 transition-colors"
        >
          <List className="w-5 h-5" />
        </button>
      </div>

      {/* Bottom Sheet List */}
      <motion.div 
        initial={{ y: "85%" }}
        animate={{ y: viewMode === "list" ? "0%" : "75%" }}
        transition={{ type: "spring", damping: 20 }}
        className="absolute bottom-0 left-0 right-0 bg-neutral-900 rounded-t-3xl shadow-[0_-4px_20px_rgba(0,0,0,0.5)] z-30 h-[80vh] flex flex-col border-t border-white/10"
      >
        {/* Handle */}
        <div 
          className="w-full p-3 flex justify-center cursor-pointer"
          onClick={() => setViewMode(viewMode === "map" ? "list" : "map")}
        >
          <div className="w-12 h-1.5 bg-neutral-700 rounded-full" />
        </div>

        <div className="px-4 pb-4 border-b border-white/10">
          <h2 className="text-lg font-bold text-white">Barbershop Terdekat</h2>
          <p className="text-xs text-neutral-400">Ditemukan {salons.length} lokasi di sekitarmu</p>
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4 pb-24">
          {salons.map((salon) => (
            <Link href={`/salon/${salon.id}`} key={salon.id}>
              <div 
                className={clsx(
                  "flex gap-4 p-3 rounded-xl border transition-all mb-3",
                  selectedSalon === salon.id ? "bg-[#CCFF00]/5 border-[#CCFF00] ring-1 ring-[#CCFF00]" : "bg-neutral-800 border-white/5 hover:border-white/20 shadow-sm"
                )}
              >
                <div className="relative w-24 h-24 rounded-lg overflow-hidden flex-shrink-0">
                  <Image src={salon.image} alt={salon.name} fill className="object-cover" />
                  {salon.isOpen && (
                    <div className="absolute top-2 left-2 px-2 py-0.5 bg-green-500 text-white text-[10px] font-bold rounded-full">
                      BUKA
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="font-bold text-white">{salon.name}</h3>
                    <div className="flex items-center gap-1 bg-[#CCFF00]/10 px-1.5 py-0.5 rounded-md">
                      <Star className="w-3 h-3 text-[#CCFF00] fill-[#CCFF00]" />
                      <span className="text-xs font-bold text-[#CCFF00]">{salon.rating}</span>
                    </div>
                  </div>
                  <p className="text-xs text-neutral-400 mt-1 line-clamp-2">{salon.address}</p>
                  
                  <div className="flex items-center gap-3 mt-3">
                    <div className="flex items-center gap-1 text-xs text-neutral-400">
                      <MapPin className="w-3 h-3 text-[#CCFF00]" />
                      <span className="font-medium text-neutral-300">{salon.distance}</span>
                    </div>
                    <div className="flex items-center gap-1 text-xs text-neutral-400">
                      <Navigation className="w-3 h-3 text-[#00E5FF]" />
                      <span>15 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
