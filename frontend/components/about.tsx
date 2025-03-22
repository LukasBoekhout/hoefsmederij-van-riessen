"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export function About() {
    const [ref1, inView1] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ref2, inView2] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const [ref3, inView3] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <motion.div
                    ref={ref1}
                    initial={{ opacity: 0, y: 50 }}
                    animate={inView1 ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.7 }}
                    className="max-w-3xl mx-auto mb-12"
                >
                    <div className="prose prose-slate max-w-none">
                        <p>
                            Geboren in Bloemendaal heb ik van mijn vader en zijn
                            twee broers, volgens traditie, vroeg het vak van
                            Hoefsmid meegekregen. Uitzonderlijk voor die tijd,
                            mijn vader had een recreatie paard.
                        </p>
                        <p className="mt-4">
                            Door de zorg daarvoor, rijes op de manege en later
                            ook op zijn paard te mogen rijden kreeg ik de liefde
                            voor het paard en de bijbehorende
                            verantwoordelijkheid mee die voor ieder paard
                            belangrijk is.
                        </p>

                        <div className="bg-amber-50 border-l-4 border-amber-500 p-4 my-6">
                            <p className="text-slate-800 font-medium">
                                Sinds 1995 Rijksgediplomeerd Hoefsmid. Lid van
                                de Nederlandse Vereniging van Hoefsmeden
                            </p>
                        </div>

                        <p>
                            Met mijn 30 jaar ervaring kunt u terecht voor het
                            bekappen en beslaan van zowel, ponies en paarden.
                        </p>
                    </div>

                    <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col items-center">
                            <svg
                                className="w-10 h-10 text-amber-600 mb-2"
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
                            <h3 className="font-semibold text-slate-800">
                                Bekappen
                            </h3>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col items-center">
                            <svg
                                className="w-10 h-10 text-amber-600 mb-2"
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
                            <h3 className="font-semibold text-slate-800">
                                Beslaan
                            </h3>
                        </div>

                        <div className="bg-slate-50 p-4 rounded-lg border border-slate-200 flex flex-col items-center">
                            <svg
                                className="w-10 h-10 text-amber-600 mb-2"
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
                            <h3 className="font-semibold text-slate-800">
                                Behandelingen
                            </h3>
                        </div>
                    </div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    <motion.div
                        ref={ref2}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView2 ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5 }}
                        className="overflow-hidden rounded-lg shadow-lg"
                    >
                        <div className="relative h-64">
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="Hoefsmid aan het werk"
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
                                <div className="p-4 text-white">
                                    <h3 className="font-bold">
                                        Professioneel Gereedschap
                                    </h3>
                                    <p className="text-sm text-slate-200">
                                        Vakmanschap vereist het juiste
                                        gereedschap
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView2 ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="overflow-hidden rounded-lg shadow-lg"
                    >
                        <div className="relative h-64">
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="Hoefsmid aan het werk"
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
                                <div className="p-4 text-white">
                                    <h3 className="font-bold">
                                        Precisie Hoefbeslag
                                    </h3>
                                    <p className="text-sm text-slate-200">
                                        Elke hoef verdient maatwerk
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={inView2 ? { opacity: 1, scale: 1 } : {}}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="overflow-hidden rounded-lg shadow-lg md:col-span-2 lg:col-span-1"
                    >
                        <div className="relative h-64">
                            <Image
                                src="/placeholder.svg?height=400&width=600"
                                alt="Hoefsmid aan het werk"
                                fill
                                className="object-cover transition-transform duration-500 hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent flex items-end">
                                <div className="p-4 text-white">
                                    <h3 className="font-bold">
                                        Hoefverzorging
                                    </h3>
                                    <p className="text-sm text-slate-200">
                                        Gezonde hoeven voor een gezond paard
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
