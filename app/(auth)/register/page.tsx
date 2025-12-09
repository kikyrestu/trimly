"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { useSearchParams } from "next/navigation";

export default function RegisterPage() {
  const searchParams = useSearchParams();
  const role = searchParams.get("role") || "user";

  return (
    <div className="relative min-h-screen w-full flex flex-col px-6 py-8">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1599351431202-6e0c06e76f8f?q=80&w=2000&auto=format&fit=crop"
          alt="Background"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Header */}
      <div className="relative z-10 flex justify-between items-center mb-6">
        <Link href="/get-started" className="p-2 -ml-2 rounded-full hover:bg-white/10 transition-colors">
          <ArrowLeft className="text-white w-6 h-6" />
        </Link>
        <Link href="/login" className="text-sm font-semibold text-white hover:text-neutral-300 transition-colors">
          Log In
        </Link>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md mx-auto flex-1 flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-8"
        >
           <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
            Create Account
          </h1>
          <p className="text-white/50 text-lg">
            Sign up as <span className="text-white font-medium capitalize">{role}</span>
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-4"
        >
          <input 
            type="text" 
            placeholder="Full Name" 
            className="w-full bg-neutral-900/80 border-0 rounded-2xl px-5 h-14 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
          />
          <input 
            type="email" 
            placeholder="Email Address" 
            className="w-full bg-neutral-900/80 border-0 rounded-2xl px-5 h-14 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
          />
          <input 
            type="password" 
            placeholder="Create Password" 
            className="w-full bg-neutral-900/80 border-0 rounded-2xl px-5 h-14 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
          />
          <div className="flex gap-3">
            <div className="bg-neutral-900/80 border-0 rounded-2xl px-4 h-14 text-white flex items-center justify-center gap-2 w-24 shrink-0">
               <span className="text-xl">🇮🇩</span>
               <span className="font-medium text-sm">+62</span>
            </div>
            <input 
              type="tel" 
              placeholder="Mobile Number" 
              className="flex-1 bg-neutral-900/80 border-0 rounded-2xl px-5 h-14 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
            />
          </div>

          <Link href="/explore" className="block w-full pt-4">
            <button 
              type="button"
              className="w-full bg-white text-black font-bold h-14 rounded-2xl flex items-center justify-center gap-2 hover:scale-[0.98] active:scale-[0.96] transition-all duration-200 shadow-lg shadow-white/5"
            >
              <span>Sign Up</span>
            </button>
          </Link>
        </motion.form>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-8 pb-8"
        >
          <div className="relative flex items-center justify-center mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <span className="relative bg-black px-4 text-sm text-neutral-500 font-medium">Or sign up with</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="h-14 bg-neutral-900 rounded-2xl flex items-center justify-center gap-2 text-white hover:bg-neutral-800 transition-colors border border-white/5">
              <span className="font-semibold text-sm">Apple</span>
            </button>
            <button className="h-14 bg-neutral-900 rounded-2xl flex items-center justify-center gap-2 text-white hover:bg-neutral-800 transition-colors border border-white/5">
              <span className="font-semibold text-sm">Google</span>
            </button>
          </div>
          
          <p className="text-center text-xs text-neutral-500 mt-8 leading-relaxed">
            By continuing, you agree to our <br />
            <Link href="/terms" className="text-white hover:underline">Terms of Service</Link> and <Link href="/privacy" className="text-white hover:underline">Privacy Policy</Link>.
          </p>
        </motion.div>
      </div>
    </div>
  );
}
