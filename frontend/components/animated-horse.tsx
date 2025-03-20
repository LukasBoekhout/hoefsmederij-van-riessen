"use client";

import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

export function AnimatedHorse() {
    const controls = useAnimation();
    const [isHovered, setIsHovered] = useState(false);

    // Animation sequence for the horse
    useEffect(() => {
        const sequence = async () => {
            while (true) {
                await controls.start({
                    y: [0, -15, 0],
                    transition: { duration: 2, ease: "easeInOut" },
                });
                await new Promise((resolve) => setTimeout(resolve, 5000));
            }
        };

        sequence();
    }, [controls]);

    return (
        <motion.div
            className="fixed bottom-10 right-10 z-40 cursor-pointer"
            animate={controls}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            whileHover={{ scale: 1.1 }}
        >
            <div className="relative w-24 h-24 md:w-32 md:h-32">
                <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full text-amber-600 drop-shadow-lg"
                >
                    <path
                        d="M19 4C18.4643 4.66031 18 5.5 18 6.5C18 7.5 18.5357 8.33969 19 9C19.5357 8.33969 20 7.5 20 6.5C20 5.5 19.5357 4.66031 19 4Z"
                        fill="currentColor"
                    />
                    <path
                        d="M12 4C11.4643 4.66031 11 5.5 11 6.5C11 7.5 11.5357 8.33969 12 9C12.5357 8.33969 13 7.5 13 6.5C13 5.5 12.5357 4.66031 12 4Z"
                        fill="currentColor"
                    />
                    <path
                        d="M5 4C4.46429 4.66031 4 5.5 4 6.5C4 7.5 4.53571 8.33969 5 9C5.53571 8.33969 6 7.5 6 6.5C6 5.5 5.53571 4.66031 5 4Z"
                        fill="currentColor"
                    />
                    <path
                        d="M19 9C19 9 19 12 17 12C15 12 15 9 15 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M12 9C12 9 12 12 10 12C8 12 8 9 8 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M5 9C5 9 5 12 3 12C1 12 1 9 1 9"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M17 12L17 20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M10 12L10 20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M3 12L3 20"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    <path
                        d="M17 16L23 16"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                </svg>
            </div>

            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="absolute bottom-full right-0 mb-2 p-3 bg-slate-800 text-white rounded-lg shadow-lg w-48"
                >
                    <p className="text-sm">
                        Professionele hoefverzorging sinds 1995
                    </p>
                </motion.div>
            )}
        </motion.div>
    );
}
