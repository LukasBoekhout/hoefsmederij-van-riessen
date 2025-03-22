"use client";

import Link from "next/link";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import { HorseshoeDivider } from "@/components/horseshoe-divider";
import { useEffect, useState } from "react";

export default function NotFound() {
    const controls = useAnimation();
    const [showHint, setShowHint] = useState(false);
    const [horseshoePosition, setHorseshoePosition] = useState({ x: 0, y: 0 });
    const [isHorseshoeDragging, setIsHorseshoeDragging] = useState(false);

    // Animate the horseshoe falling
    useEffect(() => {
        const sequence = async () => {
            await controls.start({
                y: [-50, 0],
                rotate: [45, 0],
                transition: {
                    y: { duration: 0.8, ease: "easeOut" },
                    rotate: { duration: 0.8, ease: "easeOut" },
                },
            });

            await controls.start({
                y: [0, -10, 0],
                transition: {
                    duration: 1.5,
                    ease: "easeInOut",
                    repeat: Number.POSITIVE_INFINITY,
                    repeatType: "reverse",
                },
            });
        };

        sequence();

        // Show hint after 3 seconds
        const timer = setTimeout(() => {
            setShowHint(true);
        }, 3000);

        return () => clearTimeout(timer);
    }, [controls]);

    // Handle horseshoe drag
    const handleDragEnd = () => {
        setIsHorseshoeDragging(false);
    };

    return (
        <main className="min-h-screen bg-white pt-24">
            <div className="container mx-auto px-4 py-16">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="mb-8 relative"
                    >
                        <motion.div
                            drag
                            dragConstraints={{
                                left: -100,
                                right: 100,
                                top: -50,
                                bottom: 50,
                            }}
                            onDragStart={() => setIsHorseshoeDragging(true)}
                            onDragEnd={handleDragEnd}
                            animate={controls}
                            whileTap={{ scale: 1.1 }}
                            whileHover={{ scale: 1.05, cursor: "grab" }}
                            className="w-32 h-32 mx-auto"
                            style={{
                                x: horseshoePosition.x,
                                y: horseshoePosition.y,
                            }}
                        >
                            <svg
                                className="w-full h-full text-amber-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 0.7 }}
                                    d="M21 12C21 9.5 19 4 12 4"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 1.5, delay: 0.9 }}
                                    d="M12 4C5 4 3 9.5 3 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.5, delay: 1.1 }}
                                    d="M7 17L7.01 17"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.5, delay: 1.3 }}
                                    d="M17 17L17.01 17"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.8, delay: 1.5 }}
                                    d="M8 10L16 10"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <motion.path
                                    initial={{ pathLength: 0 }}
                                    animate={{ pathLength: 1 }}
                                    transition={{ duration: 0.8, delay: 1.7 }}
                                    d="M12 14L12 16"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </motion.div>

                        <AnimatePresence>
                            {showHint && !isHorseshoeDragging && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-sm text-slate-500"
                                >
                                    Probeer me te verslepen!
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
                    >
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.3 }}
                        >
                            4
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.5 }}
                        >
                            0
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.3, delay: 0.7 }}
                        >
                            4
                        </motion.span>
                        <motion.span
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.9 }}
                            className="ml-4"
                        >
                            - Pagina Niet Gevonden
                        </motion.span>
                    </motion.h1>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="w-24 h-1 bg-amber-500 mx-auto mb-6"
                    ></motion.div>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="text-lg text-slate-600 mb-8"
                    >
                        Oeps! Het lijkt erop dat deze hoef niet te vinden is. De
                        pagina die u zoekt bestaat niet of is verplaatst.
                    </motion.p>

                    <HorseshoeDivider />

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.6 }}
                        className="mt-8"
                    >
                        <Link
                            href="/"
                            className="inline-flex items-center px-6 py-3 bg-amber-600 text-white rounded-md hover:bg-amber-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-amber-500 transition-colors"
                        >
                            <svg
                                className="w-5 h-5 mr-2"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
                                ></path>
                            </svg>
                            Terug naar Home
                        </Link>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.8 }}
                        className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200 text-left"
                    >
                        <h2 className="text-xl font-bold text-slate-800 mb-4">
                            Misschien bent u op zoek naar:
                        </h2>
                        <ul className="space-y-2">
                            {[
                                { name: "Home", href: "/" },
                                {
                                    name: "Composiet Beslag",
                                    href: "/composiet-beslag",
                                },
                                {
                                    name: "Witte Lijn & Straalrot",
                                    href: "/witte-lijn-straalrot",
                                },
                                { name: "Contact", href: "/contact" },
                            ].map((link, index) => (
                                <motion.li
                                    key={link.href}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{
                                        duration: 0.3,
                                        delay: 0.9 + index * 0.1,
                                    }}
                                >
                                    <Link
                                        href={link.href}
                                        className="text-amber-600 hover:text-amber-700 flex items-center group"
                                    >
                                        <motion.svg
                                            className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:translate-x-1"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                d="M9 5l7 7-7 7"
                                            ></path>
                                        </motion.svg>
                                        {link.name}
                                    </Link>
                                </motion.li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* Animated hoofprints */}
                    <div className="mt-16 relative h-16 overflow-hidden">
                        {[...Array(5)].map((_, i) => (
                            <motion.div
                                key={i}
                                className="absolute"
                                initial={{ opacity: 0, x: -100 }}
                                animate={{
                                    opacity: [0, 1, 0],
                                    x: [-100 + i * 50, 500 + i * 50],
                                }}
                                transition={{
                                    duration: 8,
                                    delay: i * 0.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    repeatDelay: 3,
                                }}
                                style={{ top: `${Math.random() * 60}%` }}
                            >
                                <svg
                                    className="w-8 h-8 text-amber-400/30"
                                    viewBox="0 0 24 24"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12C21 9.5 19 4 12 4C5 4 3 9.5 3 12" />
                                </svg>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </main>
    );
}
