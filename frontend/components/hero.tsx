"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface HeroProps {
    title?: string;
    subtitle?: string;
    imageUrl?: string;
}

export function Hero({ title, subtitle, imageUrl }: HeroProps) {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-900 to-slate-800 text-white">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
                <div className="absolute inset-0 horseshoe-pattern"></div>
            </div>

            {/* Content */}
            <div className="container mx-auto px-4 py-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7 }}
                        className="text-center md:text-left"
                    >
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.5 }}
                            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight"
                        >
                            {title}
                        </motion.h1>

                        <motion.div
                            initial={{ opacity: 0, scaleX: 0 }}
                            animate={{ opacity: 1, scaleX: 1 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                            className="w-24 h-1 bg-amber-500 mb-6 origin-left mx-auto md:mx-0"
                        ></motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.6, duration: 0.5 }}
                            className="text-xl text-slate-300 mb-8 max-w-lg mx-auto md:mx-0"
                        >
                            {subtitle}
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.8, duration: 0.5 }}
                            className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4"
                        >
                            <Link
                                href="/contact"
                                className="px-6 py-3 bg-amber-600 hover:bg-amber-700 text-white rounded-md transition-colors duration-300 font-medium"
                            >
                                Contact Opnemen
                            </Link>
                            <Link
                                href="/meer/over-ons"
                                className="px-6 py-3 bg-transparent hover:bg-white/10 border border-white/30 text-white rounded-md transition-colors duration-300"
                            >
                                Meer Informatie
                            </Link>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.7 }}
                        className="relative mx-auto"
                    >
                        <div
                            className="relative w-full max-w-md aspect-square mx-auto overflow-hidden rounded-lg"
                            style={{ height: 500 }}
                        >
                            <div className="absolute inset-0 bg-amber-500/20 rounded-lg transform rotate-3"></div>
                            <div className="absolute inset-0 bg-slate-700/40 rounded-lg transform -rotate-3"></div>
                            <div className="relative rounded-lg overflow-hidden border-4 border-white/10 shadow-2xl transform rotate-1 h-full">
                                {imageUrl && (
                                    <Image
                                        src={imageUrl}
                                        alt={title ?? ""}
                                        fill
                                        className="object-cover"
                                        priority
                                    />
                                )}

                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            >
                <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 1.5,
                        repeat: Number.POSITIVE_INFINITY,
                        repeatType: "loop",
                    }}
                    className="flex flex-col items-center"
                >
                    <span className="text-slate-400 text-sm mb-2">
                        Scroll naar beneden
                    </span>
                    <svg
                        className="w-6 h-6 text-amber-500"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                        ></path>
                    </svg>
                </motion.div>
            </motion.div>
        </section>
    );
}
