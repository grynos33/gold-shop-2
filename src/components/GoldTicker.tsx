import { motion } from "motion/react";

const BRAND_STATEMENTS = [
  "HANDCRAFTED IN RIYADH",
  "AUTHENTIC 18K GOLD",
  "TIMELESS ELEGANCE",
  "NATURAL DIAMONDS",
  "CURATED MASTERWORKS",
];

export default function GoldTicker() {
  return (
    <div className="w-full bg-gold-600/10 border-y border-gold-600/20 py-3 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        {[...Array(4)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            {BRAND_STATEMENTS.map((statement, idx) => (
              <div key={idx} className="flex items-center gap-12">
                <span className="text-[11px] uppercase tracking-[0.3em] font-medium text-gold-500/80">
                  {statement}
                </span>
                <span className="text-[10px] text-gold-500/40">✦</span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
