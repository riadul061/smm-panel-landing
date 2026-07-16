"use client";

import { motion } from "framer-motion";
import { CheckCircle2, ArrowRight } from "lucide-react";
import GrowthIllustration from "./GrowthIllustration";

const POINTS = [
  "Fast delivery within minutes of your order, every time",
  "Real, active engagement — never bots or fake activity",
  "24/7 dedicated support ready whenever you need help",
];

export default function WhoWeAre() {
  return (
    <section id="who-we-are" className="py-20 sm:py-28">
      <div className="container-x grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="order-2 lg:order-1"
        >
          <GrowthIllustration />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.55 }}
          className="order-1 lg:order-2"
        >
          <span className="section-eyebrow">★ Who We Are</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Who We Are
          </h2>
          <p className="mt-4 max-w-lg text-sm leading-relaxed text-ink-soft sm:text-base">
            SMM Panel is a trusted social media marketing platform built for
            creators, businesses, and agencies. We combine automation with
            real engagement to help you grow your presence quickly, safely,
            and affordably across every major platform.
          </p>

          <ul className="mt-6 space-y-3">
            {POINTS.map((point) => (
              <li key={point} className="flex items-start gap-3">
                <CheckCircle2 size={20} className="mt-0.5 shrink-0 text-purple" />
                <span className="text-sm text-ink-soft sm:text-base">
                  {point}
                </span>
              </li>
            ))}
          </ul>

          <a href="#services" className="btn-gradient mt-8">
            Read More
            <ArrowRight size={16} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
