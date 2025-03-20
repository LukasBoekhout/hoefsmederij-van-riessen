"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-slate-800 text-white py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold flex items-center">
                            <svg
                                className="w-6 h-6 mr-2 text-amber-500"
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
                            Hoefsmederij van Riessen
                        </h3>
                        <p className="text-slate-300">
                            Professionele hoefsmederij met meer dan 30 jaar
                            ervaring in het bekappen en beslaan van paarden.
                        </p>
                        <div className="pt-2">
                            <p className="text-amber-400 font-semibold">
                                Rijksgediplomeerd Hoefsmid sinds 1995
                            </p>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold">Diensten</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 text-amber-400 mr-2"
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
                                <span>Bekappen</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 text-amber-400 mr-2"
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
                                <span>Beslaan</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 text-amber-400 mr-2"
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
                                <span>Composiet beslag</span>
                            </li>
                            <li className="flex items-center">
                                <svg
                                    className="w-5 h-5 text-amber-400 mr-2"
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
                                <span>Witte Lijn & Straalrot behandeling</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 }}
                        className="space-y-4"
                    >
                        <h3 className="text-xl font-bold">Snelle Links</h3>
                        <ul className="space-y-2">
                            <li>
                                <Link
                                    href="/"
                                    className="flex items-center hover:text-amber-300 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5 text-amber-400 mr-2"
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
                                    </svg>
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/composiet-beslag"
                                    className="flex items-center hover:text-amber-300 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5 text-amber-400 mr-2"
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
                                    </svg>
                                    Composiet beslag
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/witte-lijn-straalrot"
                                    className="flex items-center hover:text-amber-300 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5 text-amber-400 mr-2"
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
                                    </svg>
                                    Witte Lijn & Straalrot
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/contact"
                                    className="flex items-center hover:text-amber-300 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5 text-amber-400 mr-2"
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
                                    </svg>
                                    Contact
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/privacy"
                                    className="flex items-center hover:text-amber-300 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5 text-amber-400 mr-2"
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
                                    </svg>
                                    Privacy Policy
                                </Link>
                            </li>
                            <li>
                                <Link
                                    href="/terms"
                                    className="flex items-center hover:text-amber-300 transition-colors"
                                >
                                    <svg
                                        className="w-5 h-5 text-amber-400 mr-2"
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
                                    </svg>
                                    Algemene Voorwaarden
                                </Link>
                            </li>
                        </ul>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className="border-t border-slate-700 mt-8 pt-8 text-center text-slate-400"
                >
                    <div className="flex justify-center space-x-6 mb-4">
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center hover:bg-amber-600 transition-colors cursor-pointer"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"></path>
                            </svg>
                        </a>
                    </div>
                    <p>
                        &copy; {currentYear} Hoefsmederij van Riessen. Alle
                        rechten voorbehouden.
                    </p>
                    <div className="mt-2 flex justify-center">
                        <svg
                            className="w-24 h-6 text-amber-400"
                            viewBox="0 0 120 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M10 4C10 4 8 8 4 8C0 8 0 12 0 12C0 16 4 20 12 20C20 20 24 16 24 12C24 12 24 8 20 8C16 8 14 4 14 4"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                            />
                            <path
                                d="M34 4C34 4 32 8 28 8C24 8 24 12 24 12C24 16 28 20 36 20C44 20 48 16 48 12C48 12 48 8 44 8C40 8 38 4 38 4"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                            />
                            <path
                                d="M58 4C58 4 56 8 52 8C48 8 48 12 48 12C48 16 52 20 60 20C68 20 72 16 72 12C72 12 72 8 68 8C64 8 62 4 62 4"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                            />
                            <path
                                d="M82 4C82 4 80 8 76 8C72 8 72 12 72 12C72 16 76 20 84 20C92 20 96 16 96 12C96 12 96 8 92 8C88 8 86 4 86 4"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                            />
                            <path
                                d="M106 4C106 4 104 8 100 8C96 8 96 12 96 12C96 16 100 20 108 20C116 20 120 16 120 12C120 12 120 8 116 8C112 8 110 4 110 4"
                                stroke="currentColor"
                                strokeWidth="2"
                                fill="none"
                            />
                        </svg>
                    </div>
                </motion.div>
            </div>
        </footer>
    );
}
