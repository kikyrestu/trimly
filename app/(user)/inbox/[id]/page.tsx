"use client";

import { ArrowLeft, Phone, Video, Send, Paperclip, Smile } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, use } from "react";

export default function ChatPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const [message, setMessage] = useState("");

  // Mock data - in a real app, fetch based on id
  const chatUser = {
    name: "Luxe Barber",
    status: "Online",
    image: "https://images.unsplash.com/photo-1585747860715-2ba37e788b70?q=80&w=2074&auto=format&fit=crop"
  };

  const messages = [
    {
      id: 1,
      sender: "them",
      text: "Hi there! Just confirming your appointment for tomorrow at 10:30 AM.",
      time: "10:00 AM"
    },
    {
      id: 2,
      sender: "me",
      text: "Yes, I'll be there. Thanks for the reminder!",
      time: "10:05 AM"
    },
    {
      id: 3,
      sender: "them",
      text: "Great! See you then. Do you have any specific style in mind?",
      time: "10:06 AM"
    },
    {
      id: 4,
      sender: "me",
      text: "I was thinking about a fade with a textured top.",
      time: "10:10 AM"
    },
    {
      id: 5,
      sender: "them",
      text: "Perfect choice! We can definitely do that.",
      time: "10:11 AM"
    }
  ];

  return (
    <div className="flex flex-col h-screen bg-black">
      {/* Header */}
      <div className="sticky top-0 z-40 bg-neutral-900/80 backdrop-blur-xl border-b border-white/10 px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Link href="/inbox" className="p-2 -ml-2 hover:bg-white/10 rounded-full transition-colors">
            <ArrowLeft className="w-5 h-5 text-white" />
          </Link>
          <div className="flex items-center gap-3">
            <div className="relative w-10 h-10 rounded-full overflow-hidden border border-white/10">
              <Image 
                src={chatUser.image} 
                alt={chatUser.name} 
                fill 
                className="object-cover"
              />
            </div>
            <div>
              <h1 className="text-sm font-bold text-white">{chatUser.name}</h1>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-[#CCFF00]" />
                <span className="text-xs text-neutral-400">{chatUser.status}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-neutral-400 hover:text-white">
            <Phone className="w-5 h-5" />
          </button>
          <button className="p-2 hover:bg-white/10 rounded-full transition-colors text-neutral-400 hover:text-white">
            <Video className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                msg.sender === 'me' 
                  ? 'bg-[#CCFF00] text-black rounded-tr-none font-medium' 
                  : 'bg-neutral-900 border border-white/10 text-white rounded-tl-none'
              }`}
            >
              <p>{msg.text}</p>
              <p className={`text-[10px] mt-1 text-right ${
                msg.sender === 'me' ? 'text-black/60' : 'text-neutral-500'
              }`}>
                {msg.time}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="bg-black border-t border-white/10 px-4 py-3 pb-8">
        <div className="flex items-center gap-2 bg-neutral-900 rounded-full px-4 py-2 border border-white/10 focus-within:border-[#CCFF00]/50 focus-within:bg-neutral-800 transition-all">
          <button className="text-neutral-400 hover:text-white transition-colors">
            <Smile className="w-5 h-5" />
          </button>
          <input 
            type="text" 
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Tulis pesan..." 
            className="flex-1 bg-transparent border-none focus:ring-0 text-sm text-white placeholder:text-neutral-500"
          />
          <button className="text-neutral-400 hover:text-white transition-colors">
            <Paperclip className="w-5 h-5" />
          </button>
          <button 
            className={`p-2 rounded-full transition-all ${
              message ? 'bg-[#CCFF00] text-black shadow-md' : 'bg-neutral-800 text-neutral-500'
            }`}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
