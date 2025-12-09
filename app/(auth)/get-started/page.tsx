"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";

export default function GetStartedPage() {
  return (
    <div className="relative min-h-screen w-full flex flex-col justify-end pb-12 px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&w=2069&auto=format&fit=crop"
          alt="Background"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md mx-auto space-y-8 pb-8">
        <div className="space-y-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link href="/" className="inline-block mb-6 p-3 -ml-3 rounded-full hover:bg-white/10 transition-colors">
              <ArrowLeft className="text-white w-6 h-6" />
            </Link>
            <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
              Who are you?
            </h1>
            <p className="text-lg text-white/60">
              Choose how you want to use Trimly.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-4"
        >
          <Link href="/register?role=user" className="group">
            <div className="bg-neutral-900/80 backdrop-blur-md border border-white/5 p-6 rounded-3xl hover:bg-neutral-800 transition-all duration-300 hover:scale-[0.98] active:scale-[0.96]">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-colors">
                <span className="text-2xl">👤</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Customer</h3>
              <p className="text-sm text-neutral-400">Book appointments and find best barbers nearby.</p>
            </div>
          </Link>

          <Link href="/register?role=business" className="group">
            <div className="bg-neutral-900/80 backdrop-blur-md border border-white/5 p-6 rounded-3xl hover:bg-neutral-800 transition-all duration-300 hover:scale-[0.98] active:scale-[0.96]">
              <div className="w-12 h-12 bg-white/10 rounded-2xl flex items-center justify-center mb-4 group-hover:bg-white group-hover:text-black transition-colors">
                <span className="text-2xl">✂️</span>
              </div>
              <h3 className="text-xl font-bold text-white mb-1">Business Owner</h3>
              <p className="text-sm text-neutral-400">Manage your salon, staff, and bookings efficiently.</p>
            </div>
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
