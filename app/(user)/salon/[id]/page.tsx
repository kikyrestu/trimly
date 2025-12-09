"use client";

import { useState, use } from "react";
import { ArrowLeft, Star, MapPin, Phone, MessageCircle, Share2, Clock, ChevronRight, Scissors, Ticket, Info, Plus, X, Zap, User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function SalonDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [activeTab, setActiveTab] = useState("services");
  const [showBookingModal, setShowBookingModal] = useState(false);

  // Mock Data
  const salon = {
    id: id,
    name: "Luxe Barber & Spa",
    rating: 4.8,
    reviews: 124,
    address: "Jl. Ahmad Yani No. 45, Surabaya",
    distance: "1.2 km",
    status: "Open",
    closeTime: "21:00",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
    description: "Premium barbershop with experienced stylists. We provide the best grooming experience with high-quality products and comfortable atmosphere.",
    customers: "1.2k+",
    images: [
      "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503951914875-befbb7135952?q=80&w=2070&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1621605815971-fbc98d6d4e84?q=80&w=2070&auto=format&fit=crop"
    ]
  };

  const services = [
    { id: 1, name: "Classic Haircut", price: 50000, duration: "45 min", description: "Includes wash & styling" },
    { id: 2, name: "Beard Trim", price: 25000, duration: "20 min", description: "Shape up & hot towel" },
    { id: 3, name: "Hair Coloring", price: 150000, duration: "90 min", description: "Full head color" },
    { id: 4, name: "Premium Package", price: 85000, duration: "60 min", description: "Haircut + Beard + Massage" },
  ];

  const addons = [
    { id: 1, name: "Hair Tonic", price: 10000 },
    { id: 2, name: "Vitamin Serum", price: 15000 },
    { id: 3, name: "Face Mask", price: 20000 },
  ];

  const vouchers = [
    { id: 1, title: "Diskon 20%", code: "LUXE20", min: "Min. 100rb" },
    { id: 2, title: "Potongan 10rb", code: "HEMAT10", min: "Min. 50rb" },
  ];

  const reviews = [
    { id: 1, user: "Budi Santoso", rating: 5, date: "2 days ago", comment: "Best haircut in town! The service is amazing." },
    { id: 2, user: "Andi Pratama", rating: 4, date: "1 week ago", comment: "Great place, but a bit pricey. Worth it though." },
    { id: 3, user: "Siti Aminah", rating: 5, date: "2 weeks ago", comment: "Loved the facial treatment. Very relaxing." },
  ];

  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header Image */}
      <div className="relative h-72 w-full">
        <Image 
          src={salon.image} 
          alt={salon.name} 
          fill 
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        
        {/* Navbar */}
        <div className="absolute top-0 left-0 right-0 p-4 flex justify-between items-center z-10">
          <Link href="/explore" className="p-3 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-black/40 transition-colors border border-white/10">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <div className="flex gap-2">
            <button className="p-3 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-black/40 transition-colors border border-white/10">
              <Share2 className="w-5 h-5" />
            </button>
            <button className="p-3 bg-black/20 backdrop-blur-md rounded-full text-white hover:bg-black/40 transition-colors border border-white/10">
              <Star className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Salon Info Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
          <h1 className="text-3xl font-bold font-heading mb-2 tracking-tight">{salon.name}</h1>
          <div className="flex items-center gap-2 text-sm text-neutral-300 mb-3">
            <MapPin className="w-4 h-4" />
            <span className="truncate">{salon.address}</span>
          </div>
          <div className="flex items-center gap-3 text-xs">
            <div className="flex items-center gap-1 bg-yellow-500/10 backdrop-blur-md px-3 py-1 rounded-full text-yellow-400 border border-yellow-500/20">
              <Star className="w-3 h-3 fill-yellow-400" />
              <span className="font-bold">{salon.rating}</span>
              <span className="text-white/50 ml-1">({salon.reviews})</span>
            </div>
            <span className="bg-green-500/20 backdrop-blur-sm px-2 py-0.5 rounded text-green-400 border border-green-500/30">
              {salon.status} • Closes {salon.closeTime}
            </span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="grid grid-cols-3 gap-3 px-4 py-2 relative z-10">
        <Link href="/map" className="bg-neutral-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/5 flex flex-col items-center gap-2 active:scale-95 transition-transform group hover:bg-neutral-800">
          <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 group-hover:bg-blue-500 group-hover:text-white transition-colors">
            <MapPin className="w-4 h-4" />
          </div>
          <span className="text-xs font-medium text-gray-700">Route</span>
        </Link>
        <Link href="/inbox" className="bg-white p-3 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center gap-1 active:scale-95 transition-transform">
          <div className="w-8 h-8 rounded-full bg-green-50 flex items-center justify-center text-green-600">
            <MessageCircle className="w-4 h-4" />
          </div>
          <span className="text-xs font-medium text-gray-700">Chat</span>
        </Link>
        <button className="bg-neutral-900/80 backdrop-blur-md p-4 rounded-2xl border border-white/5 flex flex-col items-center gap-2 active:scale-95 transition-transform group hover:bg-neutral-800">
          <div className="w-10 h-10 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 group-hover:bg-purple-500 group-hover:text-white transition-colors">
            <Phone className="w-5 h-5" />
          </div>
          <span className="text-xs font-medium text-neutral-400 group-hover:text-white transition-colors">Call</span>
        </button>
      </div>

      {/* Stats */}
      <div className="px-4 mb-8">
        <div className="bg-neutral-900 rounded-3xl p-6 border border-white/5 flex justify-between items-center">
          <div className="text-center flex-1 border-r border-white/5">
            <p className="text-xs text-neutral-500 mb-1 uppercase tracking-wider">Customers</p>
            <p className="text-lg font-bold text-white">{salon.customers}</p>
          </div>
          <div className="text-center flex-1 border-r border-white/5">
            <p className="text-xs text-neutral-500 mb-1 uppercase tracking-wider">Experience</p>
            <p className="text-lg font-bold text-white">5+ Yrs</p>
          </div>
          <div className="text-center flex-1">
            <p className="text-xs text-neutral-500 mb-1 uppercase tracking-wider">Stylists</p>
            <p className="text-lg font-bold text-white">8 Pro</p>
          </div>
        </div>
      </div>

      {/* Vouchers */}
      <div className="px-4 mb-8">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold text-white">Vouchers Available</h2>
          <span className="text-xs text-neutral-400 font-medium hover:text-white transition-colors">See All</span>
        </div>
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
          {vouchers.map((voucher) => (
            <div key={voucher.id} className="min-w-[240px] bg-gradient-to-br from-neutral-800 to-neutral-900 p-4 rounded-2xl text-white relative overflow-hidden border border-white/5 group hover:border-white/20 transition-all">
              <div className="absolute -right-6 -top-6 w-24 h-24 bg-white/5 rounded-full group-hover:bg-white/10 transition-colors" />
              <div className="relative z-10">
                <div className="flex items-center gap-2 mb-2">
                  <Ticket className="w-4 h-4 text-yellow-500" />
                  <span className="text-xs font-bold text-yellow-500 bg-yellow-500/10 px-2 py-0.5 rounded">{voucher.code}</span>
                </div>
                <h3 className="font-bold text-sm">{voucher.title}</h3>
                <p className="text-[10px] text-white/80">{voucher.min}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Services Section */}
      <div className="bg-neutral-900 rounded-t-[2.5rem] min-h-[50vh] p-6 shadow-[0_-10px_40px_rgba(0,0,0,0.5)] border-t border-white/5">
        <div className="flex items-center gap-8 border-b border-white/5 pb-1 mb-6">
          {["Services", "About", "Reviews"].map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab.toLowerCase())}
              className={`pb-4 text-sm font-medium transition-colors relative ${activeTab === tab.toLowerCase() ? "text-white" : "text-neutral-500 hover:text-neutral-300"}`}
            >
              {tab}
              {activeTab === tab.toLowerCase() && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-white rounded-full" 
                />
              )}
            </button>
          ))}
        </div>

        {activeTab === "services" && (
          <div className="space-y-8">
            {/* Main Services */}
            <div>
              <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">Haircuts & Styling</h3>
              <div className="space-y-6">
                {services.map((service) => (
                  <div key={service.id} className="flex justify-between items-start group">
                    <div className="flex-1 pr-4">
                      <h4 className="text-base font-bold text-white mb-1">{service.name}</h4>
                      <p className="text-sm text-neutral-400 mb-2">{service.description}</p>
                      <div className="flex items-center gap-2 text-xs text-neutral-500">
                        <Clock className="w-3 h-3" />
                        <span>{service.duration}</span>
                      </div>
                    </div>
                    <div className="flex flex-col items-end gap-3">
                      <span className="text-base font-bold text-white">Rp {service.price.toLocaleString()}</span>
                      <button className="px-4 py-1.5 rounded-full border border-white/20 text-white text-xs font-bold hover:bg-white hover:text-black transition-all">
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Add-ons */}
            <div>
              <h3 className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-4">Add-ons</h3>
              <div className="space-y-3">
                {addons.map((addon) => (
                  <div key={addon.id} className="flex justify-between items-center p-4 bg-neutral-800/50 rounded-2xl border border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white">
                        <Plus className="w-4 h-4" />
                      </div>
                      <span className="text-sm font-medium text-white">{addon.name}</span>
                    </div>
                    <span className="text-sm font-bold text-neutral-400">+ Rp {addon.price.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "about" && (
          <div className="space-y-4">
            <p className="text-sm text-neutral-400 leading-relaxed">{salon.description}</p>
            
            <div className="space-y-2">
              <h3 className="text-sm font-bold text-white">Opening Hours</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex justify-between p-2 bg-neutral-800 rounded-lg border border-white/5">
                  <span className="text-neutral-400">Mon - Fri</span>
                  <span className="font-medium text-white">09:00 - 21:00</span>
                </div>
                <div className="flex justify-between p-2 bg-neutral-800 rounded-lg border border-white/5">
                  <span className="text-neutral-400">Sat - Sun</span>
                  <span className="font-medium text-white">10:00 - 22:00</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-sm font-bold text-white mb-2">Gallery</h3>
              <div className="grid grid-cols-3 gap-2">
                {salon.images.map((img, idx) => (
                  <div key={idx} className="relative aspect-square rounded-lg overflow-hidden">
                    <Image src={img} alt="Gallery" fill className="object-cover hover:scale-110 transition-transform duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {activeTab === "reviews" && (
          <div className="space-y-4">
            {reviews.map((review) => (
              <div key={review.id} className="bg-neutral-800/50 p-4 rounded-2xl border border-white/5">
                <div className="flex justify-between items-start mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-neutral-700 flex items-center justify-center text-white font-bold text-xs">
                      {review.user.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-white">{review.user}</h4>
                      <p className="text-[10px] text-neutral-500">{review.date}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 bg-yellow-500/10 px-1.5 py-0.5 rounded text-yellow-500">
                    <Star className="w-3 h-3 fill-yellow-500" />
                    <span className="text-xs font-bold">{review.rating}</span>
                  </div>
                </div>
                <p className="text-xs text-neutral-300 leading-relaxed">{review.comment}</p>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Sticky Booking Button */}
      <div className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] p-4 bg-black/80 backdrop-blur-xl border-t border-white/10 z-50">
        <button 
          onClick={() => setShowBookingModal(true)}
          className="w-full bg-[#CCFF00] text-black py-4 rounded-2xl font-bold shadow-lg shadow-[#CCFF00]/20 flex items-center justify-between px-6 active:scale-[0.98] transition-transform hover:bg-[#b3e600]"
        >
          <div className="flex flex-col items-start">
            <span className="text-[10px] text-black/60 font-medium uppercase tracking-wider">Total Estimate</span>
            <span className="text-lg">Rp 0</span>
          </div>
          <div className="flex items-center gap-2">
            <span>Book Appointment</span>
            <ChevronRight className="w-5 h-5" />
          </div>
        </button>
      </div>

      {/* Booking Modal */}
      <AnimatePresence>
        {showBookingModal && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowBookingModal(false)}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60]"
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed bottom-0 left-1/2 -translate-x-1/2 w-full max-w-[480px] bg-neutral-900 rounded-t-3xl z-[70] border-t border-white/10 p-6"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-bold text-white">Booking Options</h2>
                <button onClick={() => setShowBookingModal(false)} className="p-2 bg-neutral-800 rounded-full text-neutral-400 hover:text-white transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Queue Info */}
              <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-4 mb-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <User className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-blue-400">Current Queue</p>
                  <p className="text-xs text-blue-300/80">You are 3rd in line if you book now</p>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full bg-neutral-800 border border-white/10 p-4 rounded-xl flex items-center justify-between group hover:border-[#CCFF00] transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-neutral-700 flex items-center justify-center text-neutral-400 group-hover:text-white">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-white">Regular Booking</p>
                      <p className="text-xs text-neutral-500">Standard wait time</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-white">Free</span>
                </button>

                <button className="w-full bg-[#CCFF00]/10 border border-[#CCFF00]/20 p-4 rounded-xl flex items-center justify-between group hover:bg-[#CCFF00]/20 transition-colors">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#CCFF00]/20 flex items-center justify-center text-[#CCFF00]">
                      <Zap className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <p className="text-sm font-bold text-[#CCFF00]">Priority Booking</p>
                      <p className="text-xs text-[#CCFF00]/70">Skip the queue & faster service</p>
                    </div>
                  </div>
                  <span className="text-sm font-bold text-[#CCFF00]">+ Rp 15.000</span>
                </button>
              </div>
              
              <div className="mt-6">
                <button className="w-full bg-[#CCFF00] text-black font-bold py-4 rounded-xl shadow-lg shadow-[#CCFF00]/20 active:scale-[0.98] transition-transform">
                  Confirm Booking
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
