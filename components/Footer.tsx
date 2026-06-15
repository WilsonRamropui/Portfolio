"use client";

import React, { useState, useEffect } from "react";

export function Footer() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const timeString = new Date().toLocaleTimeString("en-US", {
        timeZone: "Asia/Kolkata",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: true,
      });
      setTime(timeString);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <footer className="mt-auto py-6 border-t border-zinc-800/50">
      <div className="flex flex-col md:flex-row justify-between items-center px-6 text-zinc-400 text-sm">
        <p>© {new Date().getFullYear()} Wilson Ramropui.</p>
        <div className="flex items-center gap-2 mt-4 md:mt-0">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>Guwahati, India — {time || "Loading..."} (IST)</span>
        </div>
      </div>
    </footer>
  );
}
