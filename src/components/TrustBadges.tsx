import { ShieldCheck, Truck, RotateCcw, Award } from "lucide-react";

const BADGES = [
  {
    icon: ShieldCheck,
    title: "100% Certified Gold",
    desc: "Every piece is hallmarked with a Certificate of Authenticity for 24K, 22K, and 18K purity.",
  },
  {
    icon: Truck,
    title: "Free Insured Returns",
    desc: "Shop with peace of mind. We offer discreet, fully insured shipping with secure free returns.",
  },
  {
    icon: RotateCcw,
    title: "15 Days Exchange",
    desc: "Flexible 15-day exchange policy, plus lifetime service and buy-back options for your investment.",
  },
  {
    icon: Award,
    title: "40+ Years Legacy",
    desc: "Handcrafted by artisans building trust and specialized experience in fine jewelry since 1983.",
  },
];

export default function TrustBadges() {
  return (
    <section className="py-20 px-6 md:px-12 border-t border-white/5 bg-[#080808]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {BADGES.map((badge, idx) => (
          <div key={idx} className="flex flex-col items-center text-center group">
            <div className="mb-6 p-4 rounded-full border border-gold-500/20 group-hover:border-gold-500/50 transition-colors duration-300">
              <badge.icon className="w-6 h-6 text-gold-500 transition-colors duration-300 group-hover:text-gold-400" />
            </div>
            <h4 className="text-sm font-bold uppercase tracking-widest mb-3">
              {badge.title}
            </h4>
            <p className="text-sm text-white/40 font-light leading-relaxed max-w-[200px]">
              {badge.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
