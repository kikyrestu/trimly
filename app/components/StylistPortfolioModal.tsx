"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Star } from "lucide-react";
import { Stylist } from "../data/mockData";
import Image from "next/image";

interface StylistPortfolioModalProps {
  stylist: Stylist | null;
  isOpen: boolean;
  onClose: () => void;
}

export default function StylistPortfolioModal({ stylist, isOpen, onClose }: StylistPortfolioModalProps) {
  if (!stylist) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50"
          />
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
          >
            <div className="bg-[#0F1115] w-full max-w-md rounded-2xl overflow-hidden border border-white/10 shadow-2xl pointer-events-auto max-h-[80vh] flex flex-col">
              {/* Header */}
              <div className="p-4 border-b border-white/5 flex justify-between items-start bg-surface">
                <div className="flex gap-3">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden border-2 border-accent">
                    <Image src={stylist.image} alt={stylist.name} fill className="object-cover" />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white font-heading">{stylist.name}</h2>
                    <p className="text-xs text-gray-400">{stylist.role}</p>
                    <div className="flex items-center gap-1 mt-0.5">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-[10px] font-bold text-white">{stylist.rating}</span>
                    </div>
                  </div>
                </div>
                <button onClick={onClose} className="p-2 rounded-full bg-white/5 hover:bg-white/10 transition-colors">
                  <X className="w-5 h-5 text-gray-400" />
                </button>
              </div>

              {/* Portfolio Grid */}
              <div className="p-6 overflow-y-auto">
                <h3 className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-4">Portfolio</h3>
                <div className="grid grid-cols-2 gap-3">
                  {stylist.portfolio.map((image, index) => (
                    <div key={index} className="relative aspect-square rounded-xl overflow-hidden bg-white/5">
                      <Image src={image} alt={`Portfolio ${index + 1}`} fill className="object-cover hover:scale-110 transition-transform duration-500" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
