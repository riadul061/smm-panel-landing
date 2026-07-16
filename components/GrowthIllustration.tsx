"use client";

import { motion } from "framer-motion";
import { Rocket, TrendingUp, Heart, MessageCircle } from "lucide-react";

export default function GrowthIllustration({
  className = "",
}: {
  className?: string;
}) {
  return (
    <div className={`relative mx-auto aspect-[4/5] w-full max-w-sm ${className}`}>
      {/* blob backdrop */}
      <div className="absolute inset-0 -z-10 rounded-[3rem] bg-hero-blob" />
      <motion.div
        animate={{ scale: [1, 1.06, 1], rotate: [0, 3, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-4 -z-10 rounded-[2.5rem] bg-brand-gradient opacity-90"
      />

      {/* person silhouette card */}
      <div className="absolute inset-4 flex items-end justify-center overflow-hidden rounded-[2.5rem]">
        <svg
          viewBox="0 0 300 380"
          className="h-full w-full"
          preserveAspectRatio="xMidYMax slice"
        >
          <defs>
            <linearGradient id="figGrad" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#2A2138" />
              <stop offset="100%" stopColor="#0F0A18" />
            </linearGradient>
          </defs>
          <ellipse cx="150" cy="360" rx="120" ry="16" fill="#0B0614" opacity="0.3" />
          <path
            d="M150 60c26 0 46 22 46 50 0 20-10 36-24 45l6 24c34 10 58 40 62 78l4 90H56l4-90c4-38 28-68 62-78l6-24c-14-9-24-25-24-45 0-28 20-50 46-50z"
            fill="url(#figGrad)"
          />
          <circle cx="150" cy="98" r="34" fill="url(#figGrad)" />
        </svg>
      </div>

      {/* rocket */}
      <motion.div
        animate={{ y: [0, -14, 0], rotate: [-6, 2, -6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-4 bottom-10 drop-shadow-xl"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-card sm:h-20 sm:w-20">
          <Rocket size={32} className="text-orange" />
        </div>
      </motion.div>

      {/* floating stat chips */}
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-6 top-10 flex items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-card sm:-left-10"
      >
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-purple/10 text-purple">
          <TrendingUp size={16} />
        </span>
        <div className="leading-tight">
          <p className="text-xs font-bold text-ink">+248%</p>
          <p className="text-[10px] text-muted">Growth</p>
        </div>
      </motion.div>

      <motion.div
        animate={{ y: [0, 12, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute right-2 top-6 flex items-center gap-1.5 rounded-full bg-white px-3 py-2 shadow-card"
      >
        <Heart size={14} className="text-orange" fill="currentColor" />
        <span className="text-xs font-semibold text-ink">12.4k</span>
      </motion.div>

      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -bottom-4 left-6 flex items-center gap-1.5 rounded-full bg-white px-3 py-2 shadow-card"
      >
        <MessageCircle size={14} className="text-purple" fill="currentColor" />
        <span className="text-xs font-semibold text-ink">3.2k</span>
      </motion.div>
    </div>
  );
}
