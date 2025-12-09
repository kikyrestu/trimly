"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Eye, EyeOff, ArrowLeft } from "lucide-react";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center px-6">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1503951914875-befbb7135952?q=80&w=2070&auto=format&fit=crop"
          alt="Background"
          fill
          className="object-cover brightness-[0.3]"
          priority
        />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-md mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10"
        >
           <Link href="/" className="inline-block mb-8 p-3 -ml-3 rounded-full hover:bg-white/10 transition-colors">
              <ArrowLeft className="text-white w-6 h-6" />
           </Link>
           <h1 className="text-4xl font-bold text-white tracking-tight mb-2">
            Let's sign you in.
          </h1>
          <p className="text-white/50 text-lg">
            Welcome back.
          </p>
        </motion.div>

        <motion.form 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-5"
        >
          <div className="space-y-4">
            <div className="group relative">
              <input 
                type="text" 
                placeholder="Username or Email" 
                className="w-full bg-neutral-900/80 border-0 rounded-2xl px-5 h-14 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
              />
            </div>
            <div className="group relative">
              <input 
                type={showPassword ? "text" : "password"} 
                placeholder="Password" 
                className="w-full bg-neutral-900/80 border-0 rounded-2xl px-5 h-14 text-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all"
              />
              <button 
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-5 top-1/2 -translate-y-1/2 text-neutral-500 hover:text-white transition-colors"
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </button>
            </div>
          </div>

          <div className="flex justify-end">
            <Link href="/forgot-password" className="text-sm font-medium text-neutral-400 hover:text-white transition-colors">
              Forgot Password?
            </Link>
          </div>

          <Link href="/explore" className="block w-full pt-2">
            <button 
              type="button"
              className="w-full bg-white text-black font-bold h-14 rounded-2xl flex items-center justify-center gap-2 hover:scale-[0.98] active:scale-[0.96] transition-all duration-200 shadow-lg shadow-white/5"
            >
              <span>Sign In</span>
            </button>
          </Link>
        </motion.form>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-12"
        >
          <div className="relative flex items-center justify-center mb-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <span className="relative bg-black px-4 text-sm text-neutral-500 font-medium">Or continue with</span>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="h-14 bg-neutral-900 rounded-2xl flex items-center justify-center gap-2 text-white hover:bg-neutral-800 transition-colors border border-white/5">
              <span className="font-semibold text-sm">Apple</span>
            </button>
            <button className="h-14 bg-neutral-900 rounded-2xl flex items-center justify-center gap-2 text-white hover:bg-neutral-800 transition-colors border border-white/5">
              <span className="font-semibold text-sm">Google</span>
            </button>
          </div>
          
          <p className="text-center text-neutral-500 text-sm mt-8">
            Don't have an account? <Link href="/get-started" className="text-white font-semibold hover:underline">Register</Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}
