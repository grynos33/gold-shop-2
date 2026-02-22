import { motion } from "motion/react";
import { Heart, ShoppingBag } from "lucide-react";

const COLLECTIONS = [
  {
    id: 1,
    name: "Tamur Drop Earrings",
    category: "Earrings",
    price: "9,200 SAR",
    image: "https://www.muazzine.com/cdn/shop/files/20250814-Tamir-drop-earrings_900x.jpg?v=1755176299",
  },
  {
    id: 2,
    name: "Single Letter Necklace with Full Diamond",
    category: "Necklaces",
    price: "2,895 SAR",
    image: "https://www.muazzine.com/cdn/shop/files/Single-letter-necklace-Full-Diamonds-2_900x.jpg?v=1708892970",
  },
  {
    id: 3,
    name: "Single Letter Necklace with a Diamond",
    category: "Necklaces",
    price: "1,795 SAR",
    image: "https://www.muazzine.com/cdn/shop/files/IMG_4710_900x.png?v=1708009048",
  },
  {
    id: 4,
    name: "Double Letter Necklace with a Diamond",
    category: "Necklaces",
    price: "1,995 SAR",
    image: "https://www.muazzine.com/cdn/shop/products/Untitled_Artwork21_c2b4601a-3860-4668-a922-e5048737fa17_900x.jpg?v=1661716438",
  },
];

export default function Collections() {
  return (
    <section className="py-24 px-6 md:px-12 bg-[#050505]">
      <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
        <div className="max-w-xl">
          <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-4 block">
            Curated Selection
          </span>
          <h2 className="font-serif text-4xl md:text-6xl font-light leading-tight">
            Exquisite <span className="italic">Masterpieces</span>
          </h2>
        </div>
        <button className="text-sm font-bold uppercase tracking-widest border-b border-gold-500/40 pb-2 hover:text-gold-400 hover:border-gold-400 transition-all duration-300">
          View All Collections
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {COLLECTIONS.map((item, idx) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-zinc-900 mb-6">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-4 right-4 flex flex-col gap-2">
                <button aria-label="Add to Wishlist" className="p-3 glass rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 hover:bg-white hover:text-black">
                  <Heart className="w-4 h-4" />
                </button>
                <button aria-label="Add to Cart" className="p-3 glass rounded-full opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 delay-75 hover:bg-white hover:text-black">
                  <ShoppingBag className="w-4 h-4" />
                </button>
              </div>
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
            </div>

            <div className="flex justify-between items-start">
              <div>
                <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">
                  {item.category}
                </p>
                <h3 className="font-serif text-xl font-medium tracking-wide">
                  {item.name}
                </h3>
              </div>
              <p className="font-mono text-sm text-gold-400">
                {item.price}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
