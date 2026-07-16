"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import GrowthIllustration from "./GrowthIllustration";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden pb-16 pt-10 sm:pb-24 sm:pt-16"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[600px] bg-hero-blob" />

      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <span className="section-eyebrow">🚀 #1 Trusted SMM Panel</span>

          <h1 className="mt-5 text-4xl font-extrabold leading-[1.1] tracking-tight text-ink sm:text-5xl lg:text-[52px]">
            Grow Faster with{" "}
            <span className="text-gradient">SMM PANEL</span> Across Every
            Social Platform
          </h1>

          <p className="mt-5 max-w-lg text-base leading-relaxed text-ink-soft">
            Boost your social presence instantly with fast delivery, real
            engagement, and affordable pricing. Trusted by thousands of
            creators, brands, and agencies worldwide to scale their growth.
          </p>

          <form
            id="get-started"
            className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            onSubmit={(e) => e.preventDefault()}
          >
            <select
              aria-label="Choose platform"
              className="h-14 w-full rounded-full border border-ink/10 bg-white px-5 text-sm font-medium text-ink-soft shadow-sm outline-none transition focus:border-purple sm:w-44"
              defaultValue="Instagram"
            >
              <option>Instagram</option>
              <option>Facebook</option>
              <option>TikTok</option>
              <option>YouTube</option>
              <option>Twitter / X</option>
            </select>
            <input
              type="text"
              placeholder="Enter your username / link"
              className="h-14 w-full flex-1 rounded-full border border-ink/10 bg-white px-5 text-sm text-ink outline-none transition placeholder:text-muted focus:border-purple"
            />
            <button type="submit" className="btn-gradient h-14 shrink-0 px-7">
              Get Started
              <ArrowRight size={16} />
            </button>
          </form>

          <div className="mt-8 flex items-center gap-6">
            <div className="flex -space-x-3">
              {["from-orange to-orange-light", "from-purple to-purple-light", "from-orange-light to-purple"].map(
                (grad, i) => (
                  <span
                    key={i}
                    className={`h-9 w-9 rounded-full border-2 border-cream bg-gradient-to-br ${grad}`}
                  />
                )
              )}
            </div>
            <p className="text-sm text-ink-soft">
              <span className="font-bold text-ink">25,000+</span> happy
              clients growing daily
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, ease: "easeOut", delay: 0.15 }}
        >
          <GrowthIllustration />
        </motion.div>
      </div>

      <motion.a
        href="#services"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="mx-auto mt-14 hidden w-fit items-center justify-center text-ink-soft sm:flex"
        aria-label="Scroll to services"
      >
        <ChevronDown size={22} />
      </motion.a>
    </section>
  );
}
