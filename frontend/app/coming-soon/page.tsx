"use client";

import { motion } from "framer-motion";
import { HorseshoeDivider } from "@/components/horseshoe-divider";
import { AnimatedHorse } from "@/components/animated-horse";
import { PageTransition } from "@/components/page-transition";

export default function ComingSoon() {
    return (
        <main className="min-h-screen bg-white pt-24">
            <PageTransition>
                <div className="container mx-auto px-4 py-16">
                    <div className="max-w-3xl mx-auto text-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5 }}
                            className="mb-8"
                        >
                            <svg
                                className="w-32 h-32 mx-auto text-amber-500"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M12 3C7 3 3 7 3 12C3 17 7 21 12 21C17 21 21 17 21 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M21 12C21 9.5 19 4 12 4"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M12 4C5 4 3 9.5 3 12"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M7 17L7.01 17"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                                <path
                                    d="M17 17L17.01 17"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                />
                            </svg>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-4xl md:text-5xl font-bold text-slate-800 mb-4"
                        >
                            Binnenkort Beschikbaar
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
                            We zijn momenteel bezig met het ontwikkelen van deze
                            pagina. Kom binnenkort terug voor meer informatie.
                        </motion.p>

                        <HorseshoeDivider />

                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5, delay: 0.8 }}
                            className="mt-12 p-6 bg-slate-50 rounded-lg border border-slate-200"
                        >
                            <h2 className="text-xl font-bold text-slate-800 mb-4">
                                Wat kunt u verwachten?
                            </h2>
                            <ul className="space-y-3 text-left">
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-amber-600 mr-2 mt-0.5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span className="text-slate-600">
                                        Gedetailleerde informatie over onze
                                        diensten
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-amber-600 mr-2 mt-0.5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span className="text-slate-600">
                                        Nuttige tips voor hoefverzorging
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-amber-600 mr-2 mt-0.5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span className="text-slate-600">
                                        Foto's van ons werk
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <svg
                                        className="w-5 h-5 text-amber-600 mr-2 mt-0.5"
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M5 13l4 4L19 7"
                                        ></path>
                                    </svg>
                                    <span className="text-slate-600">
                                        Mogelijkheid om online afspraken te
                                        maken
                                    </span>
                                </li>
                            </ul>
                        </motion.div>
                    </div>
                </div>
            </PageTransition>
            <AnimatedHorse />
        </main>
    );
}
