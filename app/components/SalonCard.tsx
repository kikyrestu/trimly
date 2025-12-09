"use client";

import { Star, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { Salon } from "../data/mockData";
import Image from "next/image";
import Link from "next/link";

interface SalonCardProps {
  salon: Salon;
}

export default function SalonCard({ salon }: SalonCardProps) {
  return (
    <Link href={`/salon/${salon.id}`}>
      <motion.div
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className="group relative w-full rounded-3xl overflow-hidden bg-neutral-900 border border-white/5 hover:border-white/20 transition-all duration-300"
      >
        {/* Image Section */}
        <div className="relative h-40 w-full">
          <Image
            src={salon.image}
            alt={salon.name}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110 opacity-80 group-hover:opacity-100"
          />
          
          {/* Status Badge */}
          <div className="absolute top-3 right-3">
            <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider shadow-sm backdrop-blur-md ${salon.isOpen ? "bg-green-500/90 text-white" : "bg-neutral-800/90 text-neutral-400"}`}>
              {salon.isOpen ? "Open" : "Closed"}
            </span>
          </div>
        </div>

        {/* Content Section */}
        <div className="p-4 space-y-2">
          <div className="flex justify-between items-start">
            <h3 className="text-base font-bold text-white">{salon.name}</h3>
            <div className="flex items-center gap-1 text-yellow-500">
              <Star className="w-4 h-4 fill-yellow-500" />
              <span className="text-sm font-bold">{salon.rating}</span>
            </div>
          </div>

          <div className="flex items-center gap-1.5 text-neutral-400 text-xs">
            <MapPin className="w-3.5 h-3.5" />
            <span className="truncate">{salon.address}</span>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
