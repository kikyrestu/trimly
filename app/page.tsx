"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import MobileLayout from "./components/MobileLayout";

export default function WelcomePage() {
  return (
    <MobileLayout className="bg-black">
      <div className="relative min-h-screen w-full flex flex-col justify-end pb-12 px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1621605815971-fbc98d6d4e84?q=80&w=2070&auto=format&fit=crop"
          alt="Background"
          fill
          className="object-cover brightness-[0.4]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md mx-auto space-y-10 pb-8">
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} // Apple-like ease
          >
            <div className="flex flex-col items-start gap-4 mb-6">
               {/* Minimalist Logo */}
               <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-2xl shadow-white/10">
                  <span className="text-black font-bold text-2xl tracking-tighter">Tr</span>
               </div>
               <div>
                 <h1 className="text-5xl font-bold text-white tracking-tight leading-tight">
                  Style Your <br/> Lifestyle.
                </h1>
               </div>
            </div>
            
            <p className="text-lg text-white/60 font-medium leading-relaxed max-w-xs">
              Premium grooming services at your fingertips. Book appointments in seconds.
            </p>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-3"
        >
          <Link 
            href="/login" 
            className="w-full bg-white text-black font-semibold py-4 rounded-2xl text-center hover:scale-[0.98] active:scale-[0.96] transition-transform duration-200 shadow-lg shadow-white/5 text-[15px]"
          >
            Log In
          </Link>
          <Link 
            href="/get-started" 
            className="w-full bg-white/10 backdrop-blur-md border border-white/10 text-white font-semibold py-4 rounded-2xl text-center hover:bg-white/20 hover:scale-[0.98] active:scale-[0.96] transition-all duration-200 text-[15px]"
          >
            Create Account
          </Link>
        </motion.div>
      </div>
      </div>
    </MobileLayout>
  );
}
