"use client";
import { ThinkingOrb } from "thinking-orbs";

export default function SpinnerCharge() {
  return (
    <div className="absolute top-0 left-0 w-full h-full z-50 flex items-center justify-center backdrop-blur-[1px] animate-in fade-in duration-300">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at center, rgba(30,58,138,0.18) 0%, rgba(190,24,93,0.10) 50%, transparent 80%)",
        }}
      />
      <div className="absolute inset-0 bg-blue-950/5 animate-pulse-slow" />
      <ThinkingOrb theme="light" state="solving" size={64} speed={1.0} />
    </div>
  );
}