import { motion } from "motion/react";

const CATEGORIES = [
    {
        title: "Rings",
        desc: "18-karat gold & natural diamonds",
        image: "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "Bracelets",
        desc: "Artisanal craftsmanship",
        image: "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "Necklaces",
        desc: "Timeless and elegant",
        image: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=600&auto=format&fit=crop",
    },
    {
        title: "Earrings",
        desc: "Handcrafted in Riyadh",
        image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=600&auto=format&fit=crop",
    }
];

export default function Categories() {
    return (
        <section className="py-24 px-6 md:px-12 bg-black border-y border-white/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <span className="text-xs font-bold uppercase tracking-[0.3em] text-gold-500 mb-4 block">
                        Curated For You
                    </span>
                    <h2 className="font-serif text-3xl md:text-5xl font-light">
                        Shop By <span className="italic">Category</span>
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {CATEGORIES.map((cat, idx) => (
                        <motion.a
                            href="#"
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1 }}
                            className="group relative block aspect-[4/5] rounded-2xl overflow-hidden cursor-pointer"
                        >
                            <img
                                src={cat.image}
                                alt={cat.title}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                            <div className="absolute bottom-0 left-0 right-0 p-8 text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <h3 className="font-serif text-xl md:text-2xl font-medium mb-2 text-white">{cat.title}</h3>
                                <p className="text-xs uppercase tracking-widest text-gold-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    {cat.desc}
                                </p>
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
