import { motion } from "motion/react";

const GOLD_RATES = [
  { label: "Gold 24K", price: "$2,345.20 / oz", change: "+0.45%" },
  { label: "Gold 22K", price: "$2,150.15 / oz", change: "-0.12%" },
  { label: "Gold 21K", price: "$1,985.30 / oz", change: "+0.28%" },
  { label: "Gold 18K", price: "$1,758.90 / oz", change: "+0.22%" },
  { label: "Gold 14K", price: "$1,368.05 / oz", change: "+0.15%" },
];

export default function GoldTicker() {
  return (
    <div className="w-full bg-gold-600/10 border-y border-gold-600/20 py-3 overflow-hidden whitespace-nowrap">
      <div className="flex animate-marquee">
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex items-center gap-12 px-6">
            {GOLD_RATES.map((rate, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <span className="text-[10px] uppercase tracking-widest font-bold text-gold-500/60">
                  {rate.label}
                </span>
                <span className="font-mono text-sm font-medium">
                  {rate.price}
                </span>
                <span className={`text-[10px] font-bold ${rate.change.startsWith('+') ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {rate.change}
                </span>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
