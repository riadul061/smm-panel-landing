"use client";

import { motion } from "framer-motion";
import { UserPlus, Wallet, MousePointerClick, TrendingUp } from "lucide-react";

const STEPS = [
  {
    icon: UserPlus,
    title: "Sign Up Instantly",
    desc: "Create your free account in seconds — no credit card required.",
  },
  {
    icon: Wallet,
    title: "Add Funds",
    desc: "Top up your balance securely using any of our payment methods.",
  },
  {
    icon: MousePointerClick,
    title: "Select Service",
    desc: "Choose your platform and package from hundreds of options.",
  },
  {
    icon: TrendingUp,
    title: "Watch Results",
    desc: "Sit back as your engagement and followers grow in real time.",
  },
];

export default function EasySteps() {
  return (
    <section id="steps" className="py-20 sm:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="section-eyebrow">How It Works</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Easy Steps to Social Media Growth By HQ PROMO
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
            Getting started takes less than five minutes. Here's exactly how
            it works from sign up to seeing real results.
          </p>
        </motion.div>

        <div className="relative mt-16">
          <div className="absolute left-1/2 top-8 hidden h-px w-[85%] -translate-x-1/2 border-t-2 border-dashed border-ink/15 md:block" />

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4 md:gap-6">
            {STEPS.map((step, i) => {
              const Icon = step.icon;
              const isFirst = i === 0;
              return (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  whileHover={{ y: -6 }}
                  className="relative"
                >
                  <div className="relative z-10 mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-gradient text-lg font-extrabold text-white shadow-button">
                    0{i + 1}
                  </div>
                  <div
                    className={`rounded-3xl p-6 text-center transition-all duration-300 ${
                      isFirst
                        ? "bg-night text-white shadow-card"
                        : "card-surface hover:shadow-[0_25px_50px_-20px_rgba(124,58,237,0.35)]"
                    }`}
                  >
                    <span
                      className={`mx-auto flex h-11 w-11 items-center justify-center rounded-xl ${
                        isFirst ? "bg-white/10 text-orange-light" : "bg-purple/10 text-purple"
                      }`}
                    >
                      <Icon size={20} />
                    </span>
                    <h3 className="mt-4 text-base font-bold">{step.title}</h3>
                    <p
                      className={`mt-2 text-sm leading-relaxed ${
                        isFirst ? "text-white/70" : "text-ink-soft"
                      }`}
                    >
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
