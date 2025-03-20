"use client";

import { motion } from "framer-motion";

interface PageHeaderProps {
    title: string;
    subtitle?: string;
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
    return (
        <div className="relative py-12 overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-slate-800/10" />
                <svg
                    className="absolute bottom-0 left-0 right-0 text-amber-500/20"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1440 320"
                >
                    <path
                        fill="currentColor"
                        fillOpacity="1"
                        d="M0,224L48,213.3C96,203,192,181,288,181.3C384,181,480,203,576,224C672,245,768,267,864,250.7C960,235,1056,181,1152,165.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                    ></path>
                </svg>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-3xl mx-auto text-center">
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-block"
                    >
                        <h1 className="text-3xl md:text-4xl font-bold text-slate-800 mb-4 relative">
                            {title}
                            <motion.div
                                className="absolute -bottom-2 left-0 right-0 h-1 bg-amber-500"
                                initial={{ scaleX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                            />
                        </h1>
                    </motion.div>

                    {subtitle && (
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="text-lg text-slate-600 mt-4"
                        >
                            {subtitle}
                        </motion.p>
                    )}
                </div>
            </div>
        </div>
    );
}
