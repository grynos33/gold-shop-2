import { motion } from "motion/react";
import { ShoppingBag, Search, Menu, User } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 md:py-6 glass">
      <div className="flex items-center gap-6">
        <button aria-label="Menu" className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200">
          <Menu className="w-5 h-5" />
        </button>
        <div className="hidden lg:flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/50 border-r border-white/10 pr-4">
          <button className="hover:text-gold-400 transition-colors duration-200 text-white">EN</button>
          <span>/</span>
          <button className="hover:text-gold-400 transition-colors duration-200">AR</button>
        </div>
        <div className="hidden lg:flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-white/50 border-r border-white/10 pr-4">
          <button className="hover:text-gold-400 transition-colors duration-200 text-white">USD</button>
          <span>/</span>
          <button className="hover:text-gold-400 transition-colors duration-200">SAR</button>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium uppercase tracking-widest text-white/60">
          <a href="#" className="hover:text-white transition-colors duration-200">Collections</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Bespoke</a>
          <a href="#" className="hover:text-white transition-colors duration-200">Heritage</a>
        </div>
      </div>

      <div className="absolute left-1/2 -translate-x-1/2 flex justify-center items-center">
        <a href="/">
          <img src="https://www.muazzine.com/cdn/shop/files/muazzinelogo-w_300x300.png?v=1705970976" alt="MUAZZINE" className="h-8 md:h-12 object-contain" />
        </a>
      </div>

      <div className="flex items-center gap-4 md:gap-6">
        <button aria-label="Search" className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200">
          <Search className="w-5 h-5" />
        </button>
        <button aria-label="User Profile" className="p-2 hover:bg-white/10 rounded-full transition-colors duration-200 hidden md:block">
          <User className="w-5 h-5" />
        </button>
        <button aria-label="Cart" className="flex items-center gap-2 p-2 hover:bg-white/10 rounded-full transition-colors duration-200 relative">
          <ShoppingBag className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-gold-600 text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
            0
          </span>
        </button>
      </div>
    </nav>
  );
}
