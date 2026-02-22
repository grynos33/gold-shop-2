import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import GoldTicker from "./components/GoldTicker";
import Collections from "./components/Collections";
import Categories from "./components/Categories";
import TrustBadges from "./components/TrustBadges";
import SocialProof from "./components/SocialProof";
import Footer from "./components/Footer";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="min-h-screen flex flex-col"
      >
        <Navbar />

        <main className="flex-grow">
          <Hero />
          <GoldTicker />

          <section className="relative">
            <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-black to-transparent z-10" />
            <Collections />
          </section>

          <Categories />

          {/* Featured Section */}
          <section className="py-24 px-6 md:px-12 bg-black">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative aspect-square rounded-3xl overflow-hidden"
              >
                <img
                  src="https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=1000&auto=format&fit=crop"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gold-900/10 mix-blend-overlay" />
              </motion.div>

              <div className="lg:pl-12">
                <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-6 block">
                  Philosophy
                </span>
                <h2 className="font-serif text-4xl md:text-5xl font-light leading-tight mb-8">
                  Tradition & <br />
                  <span className="italic">Modernity</span>
                </h2>
                <div className="text-white/60 font-light leading-relaxed mb-10 text-base space-y-4">
                  <p>
                    At Muazzine, heritage is reimagined in 18k gold and diamonds, creating jewelry that bridges tradition and modernity. Each piece is born in Riyadh, where craft and culture converge, shaped with a devotion to both precision and poetry.
                  </p>
                  <p>
                    Our jewelry carries the rhythm of tradition into the present, distilling the curves of Arabic script, the weight of memory, and the quiet grace of legacy into forms that feel both intimate and eternal.
                  </p>
                  <p>
                    To wear Muazzine is to carry more than jewelry. It is to hold a fragment of tradition, reinterpreted for today, a reflection of identity, resilience, and enduring artistry.
                  </p>
                </div>
                <button className="px-10 py-4 bg-gold-600/10 border border-gold-600/30 text-gold-400 font-medium text-sm uppercase tracking-widest rounded-full hover:bg-gold-600/20 transition-all">
                  Discover Our Story
                </button>
              </div>
            </div>
          </section>

          <SocialProof />
          <TrustBadges />
        </main>

        <Footer />
      </motion.div>
    </AnimatePresence>
  );
}
