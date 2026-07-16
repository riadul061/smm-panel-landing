"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Rocket } from "lucide-react";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
  FaTelegram,
  FaSpotify,
  FaTiktok,
  FaDiscord,
  FaThreads,
  FaGlobe,
} from "react-icons/fa6";

const PLATFORMS = [
  { label: "Facebook", icon: FaFacebookF },
  { label: "Instagram", icon: FaInstagram },
  { label: "X / Twitter", icon: FaXTwitter },
  { label: "YouTube", icon: FaYoutube },
  { label: "LinkedIn", icon: FaLinkedinIn },
  { label: "Telegram", icon: FaTelegram },
  { label: "Spotify", icon: FaSpotify },
  { label: "TikTok", icon: FaTiktok },
  { label: "Discord", icon: FaDiscord },
  { label: "Threads", icon: FaThreads },
  { label: "Website Traffic", icon: FaGlobe },
];

const DETAILS: Record<string, { title: string; desc: string }> = {
  Facebook: {
    title: "Facebook SMM Panel",
    desc: "Grow your Facebook page with real likes, followers, comments, and shares. Boost visibility and build social proof that converts visitors into loyal fans, backed by fast and reliable delivery.",
  },
  Instagram: {
    title: "Instagram SMM Panel",
    desc: "Get real Instagram followers, likes, and views to boost your profile's credibility and reach. Perfect for creators and brands who want authentic, lasting growth.",
  },
  "X / Twitter": {
    title: "X (Twitter) SMM Panel",
    desc: "Increase your reach on X with real followers, retweets, and engagement that helps your voice get heard across the platform faster.",
  },
  YouTube: {
    title: "YouTube SMM Panel",
    desc: "Grow your channel with real subscribers, views, and watch time to help your content rank higher and reach a wider audience.",
  },
  LinkedIn: {
    title: "LinkedIn SMM Panel",
    desc: "Build a stronger professional network with real connections and engagement that boost your credibility and career opportunities.",
  },
  Telegram: {
    title: "Telegram SMM Panel",
    desc: "Expand your channel or group with real, active members and boost engagement across your community.",
  },
  Spotify: {
    title: "Spotify SMM Panel",
    desc: "Increase your plays, followers, and playlist reach to help your music get discovered by a wider audience.",
  },
  TikTok: {
    title: "TikTok SMM Panel",
    desc: "Boost your TikTok followers, likes, and views to increase your chances of going viral and growing your fanbase.",
  },
  Discord: {
    title: "Discord SMM Panel",
    desc: "Grow your server with real members and boost activity to build a thriving, engaged community.",
  },
  Threads: {
    title: "Threads SMM Panel",
    desc: "Grow your Threads presence with real followers and engagement to build authority on the platform early.",
  },
  "Website Traffic": {
    title: "Website Traffic Boost",
    desc: "Drive real, targeted visitors to your website to improve rankings, engagement, and conversion opportunities.",
  },
};

export default function PowerfulServices() {
  const [active, setActive] = useState("Facebook");
  const detail = DETAILS[active];

  return (
    <section className="py-20 sm:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="section-eyebrow">Platforms We Cover</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Powerful SMM Services for Fast Growth
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
            One panel, every platform. Pick where you want to grow and we&apos;ll
            handle the rest with fast, safe, and affordable delivery.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-10 flex flex-wrap justify-center gap-3"
        >
          {PLATFORMS.map((platform) => {
            const Icon = platform.icon;
            const isActive = active === platform.label;
            return (
              <button
                key={platform.label}
                onClick={() => setActive(platform.label)}
                className={`flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "border-transparent bg-brand-gradient text-white shadow-button"
                    : "border-ink/10 bg-white text-ink-soft hover:border-purple hover:text-purple"
                }`}
              >
                <Icon size={14} />
                {platform.label}
              </button>
            );
          })}
        </motion.div>

        <motion.div
          key={active}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="card-surface mt-12 grid grid-cols-1 overflow-hidden md:grid-cols-2"
        >
          <div className="relative flex min-h-[240px] items-center justify-center bg-brand-gradient p-8">
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="flex h-20 w-20 items-center justify-center rounded-3xl bg-white/15 backdrop-blur"
            >
              <Rocket size={36} className="text-white" />
            </motion.div>
            <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10" />
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <h3 className="text-xl font-bold text-ink sm:text-2xl">
              {detail.title}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-ink-soft sm:text-base">
              {detail.desc}
            </p>
            <button className="btn-gradient mt-6 w-fit">
              Order Now
              <ArrowRight size={16} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
