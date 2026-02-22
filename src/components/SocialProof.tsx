import { motion } from "motion/react";
import { Instagram } from "lucide-react";

const POSTS = [
    "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1535632066927-ab7c9ab60908?q=80&w=400&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1605100804763-247f67b3557e?q=80&w=400&auto=format&fit=crop",
];

export default function SocialProof() {
    return (
        <section className="py-24 px-6 md:px-12 bg-[#050505]">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
                <div className="md:w-1/3 text-center md:text-left">
                    <div className="inline-flex items-center justify-center p-3 rounded-full bg-gold-500/10 mb-6">
                        <Instagram className="w-6 h-6 text-gold-500" />
                    </div>
                    <h2 className="font-serif text-3xl md:text-4xl font-light mb-4">
                        Join Our <span className="italic">Community</span>
                    </h2>
                    <p className="text-white/60 font-light text-sm md:text-base leading-relaxed mb-8">
                        Follow @MuazzineJewelry for daily inspiration, exclusive new arrivals, and behind-the-scenes looks into our master craftsmen's studios.
                    </p>
                    <a
                        href="#"
                        className="inline-block text-xs font-bold uppercase tracking-widest text-black bg-white px-8 py-3 rounded-full hover:bg-gold-100 transition-colors duration-200"
                    >
                        Follow Us
                    </a>
                </div>

                <div className="md:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-4 w-full">
                    {POSTS.map((img, i) => (
                        <motion.a
                            href="#"
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: i * 0.1 }}
                            className="relative aspect-square rounded-2xl overflow-hidden group block bg-zinc-900"
                        >
                            <img
                                src={img}
                                alt={`Instagram post ${i + 1}`}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                referrerPolicy="no-referrer"
                            />
                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <Instagram className="w-8 h-8 text-white" />
                            </div>
                        </motion.a>
                    ))}
                </div>
            </div>
        </section>
    );
}
