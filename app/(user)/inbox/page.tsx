"use client";

import { Search } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const chats = [
  {
    id: 1,
    name: "Luxe Barber",
    message: "Hi, your appointment is confirmed for tomorrow!",
    time: "10:30 AM",
    unread: 2,
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop",
    isOnline: true
  },
  {
    id: 2,
    name: "Sarah (Stylist)",
    message: "Thanks for visiting! How was the cut?",
    time: "Yesterday",
    unread: 0,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    isOnline: false
  },
  {
    id: 3,
    name: "Trimly Support",
    message: "Welcome to Trimly! Let us know if you need help.",
    time: "Mon",
    unread: 0,
    image: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1780&auto=format&fit=crop",
    isOnline: true
  }
];

export default function InboxPage() {
  return (
    <div className="min-h-screen bg-black pb-24">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-neutral-900/80 backdrop-blur-xl border-b border-white/10 px-4 py-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-xl font-bold text-white font-heading">Inbox</h1>
          <div className="w-8 h-8 rounded-full bg-[#CCFF00]/10 flex items-center justify-center text-[#CCFF00] text-xs font-bold">
            2
          </div>
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-neutral-400" />
          <input 
            type="text" 
            placeholder="Cari pesan..." 
            className="w-full bg-neutral-800 text-white text-sm rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-[#CCFF00]/50 placeholder:text-neutral-500"
          />
        </div>
      </div>

      {/* Chat List */}
      <div className="px-4 py-2">
        {chats.map((chat) => (
          <Link 
            href={`/inbox/${chat.id}`} 
            key={chat.id}
            className="flex items-center gap-4 py-4 border-b border-white/5 last:border-0 active:bg-white/5 -mx-4 px-4 transition-colors"
          >
            <div className="relative">
              <div className="w-12 h-12 rounded-full overflow-hidden bg-neutral-800">
                <Image 
                  src={chat.image} 
                  alt={chat.name} 
                  width={48} 
                  height={48} 
                  className="object-cover w-full h-full"
                />
              </div>
              {chat.isOnline && (
                <div className="absolute bottom-0 right-0 w-3 h-3 bg-[#CCFF00] border-2 border-black rounded-full"></div>
              )}
            </div>
            
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-start mb-1">
                <h3 className="font-bold text-white truncate pr-2">{chat.name}</h3>
                <span className={`text-xs whitespace-nowrap ${chat.unread > 0 ? 'text-[#CCFF00] font-medium' : 'text-neutral-500'}`}>
                  {chat.time}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <p className={`text-sm truncate pr-4 ${chat.unread > 0 ? 'text-white font-medium' : 'text-neutral-400'}`}>
                  {chat.message}
                </p>
                {chat.unread > 0 && (
                  <div className="min-w-[18px] h-[18px] rounded-full bg-[#CCFF00] flex items-center justify-center text-black text-[10px] font-bold px-1">
                    {chat.unread}
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
