import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://www.muazzine.com/cdn/shop/files/HomePage-2.png?v=1756656723"
          alt="Luxury Gold Jewelry"
          className="w-full h-full object-cover opacity-60 scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-block text-xs md:text-sm font-medium uppercase tracking-[0.4em] text-gold-400 mb-6"
        >
          Handcrafted in Riyadh
        </motion.span>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-8xl lg:text-9xl font-light tracking-tight leading-[0.9] mb-6 text-balance"
        >
          Artisanal <br />
          <span className="italic font-normal text-gold-200">Jewelry</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mb-8"
        >
          <span className="text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase text-white/50 bg-white/5 border border-white/10 px-4 py-2 rounded-full inline-block backdrop-blur-sm">
            Modern & Mindful Women
          </span>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-white/80 text-sm md:text-lg max-w-xl mx-auto mb-10 font-light tracking-wide"
        >
          Muazzine is an artisanal jewelry brand made for modern and mindful women. Each piece is made with 18-karat gold and natural diamonds by hand in Riyadh.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6"
        >
          <button className="group relative px-10 py-4 bg-white text-black font-medium text-sm uppercase tracking-widest rounded-full overflow-hidden transition-all duration-300 hover:px-12">
            <span className="relative z-10 flex items-center gap-2">
              Explore Collection <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </span>
          </button>
          <button className="px-10 py-4 border border-white/20 hover:border-white/40 text-white font-medium text-sm uppercase tracking-widest rounded-full transition-all duration-300">
            Book Appointment
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/40">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-gold-500 to-transparent" />
      </motion.div>
    </section>
  );
}
