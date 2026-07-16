"use client";

import { motion } from "framer-motion";
import { Star, Instagram, Facebook, Youtube, Twitter, Linkedin } from "lucide-react";

const PLANS = [
  {
    icon: Instagram,
    name: "Instagram Growth",
    desc: "1000 Followers",
    price: "$4.99",
    rating: 4.9,
  },
  {
    icon: Facebook,
    name: "Facebook Boost",
    desc: "500 Page Likes",
    price: "$3.49",
    rating: 4.8,
  },
  {
    icon: Twitter,
    name: "X Engagement",
    desc: "1000 Followers",
    price: "$5.99",
    rating: 4.7,
  },
  {
    icon: Youtube,
    name: "YouTube Growth",
    desc: "500 Subscribers",
    price: "$8.99",
    rating: 5.0,
  },
  {
    icon: Linkedin,
    name: "LinkedIn Reach",
    desc: "300 Connections",
    price: "$6.49",
    rating: 4.9,
  },
];

export default function PromotionServices() {
  return (
    <section id="services" className="py-20 sm:py-28">
      <div className="container-x">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mx-auto max-w-xl text-center"
        >
          <span className="section-eyebrow">Our Plans</span>
          <h2 className="mt-4 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl">
            Promotion Services for Every Stage of Your Growth
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-ink-soft sm:text-base">
            Choose from a wide range of affordable packages designed to help
            you grow real engagement, faster — no matter where you're
            starting from.
          </p>
        </motion.div>

        <div className="mt-14 flex gap-6 overflow-x-auto pb-4 sm:grid sm:grid-cols-2 sm:overflow-visible lg:grid-cols-5">
          {PLANS.map((plan, i) => {
            const Icon = plan.icon;
            return (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="card-surface min-w-[220px] flex-shrink-0 p-6 transition-shadow duration-300 hover:shadow-[0_25px_50px_-20px_rgba(124,58,237,0.35)] sm:min-w-0"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-gradient text-white">
                  <Icon size={20} />
                </div>
                <div className="mt-4 flex items-center gap-1 text-orange">
                  {Array.from({ length: 5 }).map((_, idx) => (
                    <Star key={idx} size={13} fill="currentColor" strokeWidth={0} />
                  ))}
                  <span className="ml-1 text-xs font-semibold text-ink-soft">
                    {plan.rating}
                  </span>
                </div>
                <h3 className="mt-3 text-base font-bold text-ink">{plan.name}</h3>
                <p className="text-sm text-muted">{plan.desc}</p>
                <p className="mt-4 text-2xl font-extrabold text-ink">
                  {plan.price}
                </p>
                <button className="btn-gradient mt-5 w-full !py-2.5 text-xs">
                  Order Now
                </button>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center gap-2 sm:hidden">
          {PLANS.map((_, i) => (
            <span
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === 0 ? "w-6 bg-orange" : "w-1.5 bg-ink/15"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
