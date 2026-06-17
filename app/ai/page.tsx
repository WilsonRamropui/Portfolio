"use client";
// @ts-nocheck

import React, { useRef, useEffect, useState } from "react";
import { useChat } from "@ai-sdk/react";
import { Send, Bot, User, Sparkles } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export default function AIChatPage() {
  const { messages, append, status, input, handleInputChange, handleSubmit } = useChat();
  const isLoading = status === 'submitted' || status === 'streaming';
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, isLoading]);


  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    append({ role: "user", content: input });
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-white relative flex flex-col items-center justify-center p-4 md:p-8 overflow-hidden font-sans pt-24">
      {/* Background Effect */}
      <div className="absolute inset-0 z-0">
        <BackgroundBeamsWithCollision className="h-full w-full opacity-40" />
      </div>

      {/* Main Chat Container */}
      <div className="w-full max-w-4xl h-[80vh] min-h-[600px] flex flex-col relative z-10 
        bg-black/40 backdrop-blur-3xl border border-white/10 rounded-3xl overflow-hidden
        shadow-[0_0_50px_rgba(0,0,0,0.5)] shadow-emerald-500/5 transition-all duration-500">
        
        {/* Header */}
        <div className="h-20 border-b border-white/10 flex items-center justify-between px-8 bg-white/[0.01]">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
              <Bot className="w-5 h-5 text-emerald-400" />
            </div>
            <div>
              <h1 className="text-xl font-bold tracking-widest text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 to-emerald-500 uppercase">
                Hexagon AI
              </h1>
              <p className="text-xs text-white/40 tracking-wider">Personal Assistant to Wilson Ramropui</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-xs text-emerald-400/80 uppercase tracking-widest font-semibold">Online</span>
          </div>
        </div>

        {/* Chat Messages Area */}
        <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent">
          {messages.length === 0 ? (
            <div className="h-full flex flex-col items-center justify-center text-center opacity-60">
              <Sparkles className="w-12 h-12 text-emerald-400 mb-4 opacity-50" />
              <h2 className="text-2xl font-light tracking-widest mb-2">Initialize Protocol</h2>
              <p className="text-sm text-white/50 max-w-md mx-auto">
                Ask me anything about Wilson's experience, projects, or technical stack.
              </p>
            </div>
          ) : (
            messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"} w-full group`}
              >
                <div
                  className={`flex max-w-[85%] md:max-w-[70%] gap-4 ${
                    m.role === "user" ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Avatar */}
                  <div className="flex-shrink-0 mt-1">
                    {m.role === "user" ? (
                      <div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center border border-white/20">
                        <User className="w-4 h-4 text-white/70" />
                      </div>
                    ) : (
                      <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                        <Bot className="w-4 h-4 text-emerald-400" />
                      </div>
                    )}
                  </div>

                  {/* Message Bubble */}
                  <div
                    className={`p-4 rounded-2xl text-sm leading-relaxed ${
                      m.role === "user"
                        ? "bg-white/10 border border-white/10 text-white/90 rounded-tr-none"
                        : "bg-black/50 border border-emerald-500/20 text-white/80 rounded-tl-none shadow-[0_0_15px_rgba(16,185,129,0.05)]"
                    }`}
                  >
                    <div className="whitespace-pre-wrap">{m.content}</div>
                  </div>
                </div>
              </div>
            ))
          )}
          
          {/* Loading state */}
          {isLoading && (
            <div className="flex justify-start w-full">
              <div className="flex max-w-[85%] gap-4 flex-row">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-8 h-8 rounded-full bg-emerald-500/20 flex items-center justify-center border border-emerald-500/30">
                    <Bot className="w-4 h-4 text-emerald-400" />
                  </div>
                </div>
                <div className="p-4 rounded-2xl bg-black/50 border border-emerald-500/20 rounded-tl-none flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-emerald-400/50 animate-bounce" style={{ animationDelay: "0ms" }} />
                  <div className="w-2 h-2 rounded-full bg-emerald-400/50 animate-bounce" style={{ animationDelay: "150ms" }} />
                  <div className="w-2 h-2 rounded-full bg-emerald-400/50 animate-bounce" style={{ animationDelay: "300ms" }} />
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="p-4 md:p-6 bg-black/40 border-t border-white/10 backdrop-blur-md">
          <form
            onSubmit={onSubmit}
            className="relative flex items-center w-full bg-white/5 border border-white/10 rounded-full focus-within:border-emerald-500/50 focus-within:bg-white/10 transition-all duration-300 shadow-inner overflow-hidden group"
          >
            <input
              className="flex-1 bg-transparent px-6 py-4 outline-none text-white placeholder:text-white/30 text-sm"
              value={input}
              placeholder="Send a message..."
              onChange={handleInputChange}
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="absolute right-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center transition-all shadow-[0_0_15px_rgba(16,185,129,0.4)] hover:shadow-[0_0_25px_rgba(16,185,129,0.6)]"
            >
              <Send className="w-4 h-4 text-black ml-0.5" />
            </button>
          </form>
          <div className="text-center mt-3">
             <p className="text-[10px] text-white/30 uppercase tracking-widest">Powered by Google Gemini 2.5</p>
          </div>
        </div>
      </div>
    </div>
  );
}
