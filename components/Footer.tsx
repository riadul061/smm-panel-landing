import { Zap, Facebook, Instagram, Twitter, Youtube, Send } from "lucide-react";

const LINK_COLUMNS = [
  {
    title: "Quick Links",
    links: ["Home", "About Us", "Services", "Pricing", "Contact"],
  },
  {
    title: "Services",
    links: ["Instagram Growth", "Facebook Boost", "YouTube Growth", "TikTok Boost"],
  },
  {
    title: "Company",
    links: ["Careers", "Blog", "FAQ", "Support", "Terms of Service"],
  },
];

const SOCIALS = [Facebook, Instagram, Twitter, Youtube, Send];

export default function Footer() {
  return (
    <footer id="footer" className="relative overflow-hidden bg-night text-white">
      <div className="pointer-events-none absolute inset-0 bg-night-glow" />

      <div className="container-x relative py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1fr]">
          <div>
            <div className="flex items-center gap-2">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-brand-gradient text-white">
                <Zap size={18} fill="white" />
              </span>
              <span className="text-lg font-extrabold">SMM Panel</span>
            </div>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-white/60">
              Helping creators, businesses, and agencies grow faster across
              every social platform with fast, safe, and affordable
              promotion services.
            </p>
            <div className="mt-6 flex gap-3">
              {SOCIALS.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/5 text-white/70 transition-colors hover:bg-brand-gradient hover:text-white"
                  aria-label="social link"
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {LINK_COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-sm font-semibold text-white">{col.title}</h4>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-white/60 transition-colors hover:text-orange-light"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-6 text-xs text-white/50 sm:flex-row">
          <p>© {new Date().getFullYear()} SMM Panel. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacy Policy</a>
            <a href="#" className="hover:text-white">Terms of Use</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
