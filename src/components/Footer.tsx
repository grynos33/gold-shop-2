export default function Footer() {
  return (
    <footer className="bg-black pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-24">
        <div className="lg:col-span-1">
          <h2 className="font-serif text-3xl font-medium tracking-[0.2em] uppercase italic mb-8">
            <img src="https://www.muazzine.com/cdn/shop/files/muazzinelogo-w_300x300.png?v=1705970976" alt="MUAZZINE" className="h-10 object-contain" />
          </h2>
          <p className="text-white/40 text-sm font-light leading-relaxed mb-8 max-w-xs">
            An artisanal jewelry brand made for modern and mindful women. Each piece is crafted by hand in Riyadh.
          </p>
          <div className="flex gap-6">
            {["Instagram", "Twitter", "Facebook"].map((social) => (
              <a key={social} href="#" className="text-xs uppercase tracking-widest text-white/60 hover:text-gold-400 transition-colors duration-200">
                {social}
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gold-500">Shop</h4>
          <ul className="space-y-4">
            {["All Jewelry", "Engagement Rings", "Gold Bullion", "New Arrivals", "Best Sellers"].map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200 font-light">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gold-500">Company</h4>
          <ul className="space-y-4">
            {["Our Story", "Craftsmanship", "Sustainability", "Careers", "Press"].map((link) => (
              <li key={link}>
                <a href="#" className="text-sm text-white/40 hover:text-white transition-colors duration-200 font-light">
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-[0.2em] mb-8 text-gold-500">Newsletter</h4>
          <p className="text-sm text-white/40 font-light mb-6">
            Join our inner circle for exclusive previews and collection launches.
          </p>
          <form className="relative">
            <label htmlFor="email" className="sr-only">Email Address</label>
            <input
              id="email"
              type="email"
              placeholder="Email Address"
              className="w-full bg-transparent border-b border-white/20 py-3 text-sm font-light focus:outline-none focus:border-gold-500 transition-colors duration-200"
            />
            <button className="absolute right-0 bottom-3 text-xs font-bold uppercase tracking-widest text-gold-500 hover:text-gold-400 transition-colors duration-200">
              Join
            </button>
          </form>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center gap-8 pt-12 border-t border-white/5">
        <p className="text-[10px] uppercase tracking-widest text-white/20">
          © 2026 Muazzine Jewelry. All Rights Reserved.
        </p>
        <div className="flex gap-8">
          <a href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors duration-200">Privacy Policy</a>
          <a href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors duration-200">Terms of Service</a>
          <a href="#" className="text-[10px] uppercase tracking-widest text-white/20 hover:text-white transition-colors duration-200">Cookie Settings</a>
        </div>
      </div>
    </footer>
  );
}
