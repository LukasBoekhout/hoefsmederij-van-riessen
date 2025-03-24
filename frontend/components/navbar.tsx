"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { TbHorseshoe } from "react-icons/tb";

export function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target as Node)
            ) {
                setDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () =>
            document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const menuItems = [
        { name: "Welkom", href: "/" },
        { name: "Composiet beslag", href: "/composiet-beslag" },
        { name: "Witte Lijn & Straalrot", href: "/witte-lijn-straalrot" },
        { name: "Contact", href: "/contact" },
    ];

    const dropdownItems = [
        { name: "Hoefverzorging Tips", href: "/meer/hoefverzorging-tips" },
        { name: "Veelgestelde Vragen", href: "/meer/faq" },
        { name: "Galerij", href: "/meer/galerij" },
        { name: "Over Ons", href: "/meer/over-ons" },
        { name: "Blog", href: "/meer/blog" },
    ];

    const isDropdownItemActive = dropdownItems.some(
        (item) => pathname === item.href
    );

    return (
        <motion.header
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled
                    ? "bg-slate-800/95 shadow-lg backdrop-blur-sm"
                    : "bg-slate-800"
            }`}
        >
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <Link
                        href="/"
                        className="text-white text-xl font-bold flex items-center"
                    >
                        <TbHorseshoe
                            className="text-amber-600 mr-3 rotate-180"
                            size={30}
                        />

                        <span className="relative">
                            Hoefsmederij van Riessen
                            <motion.span
                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-500/70"
                                initial={{ scaleX: 0, originX: 0 }}
                                animate={{ scaleX: 1 }}
                                transition={{ duration: 0.8, delay: 0.5 }}
                            />
                        </span>
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex space-x-8">
                        {menuItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={`text-white hover:text-amber-300 transition-colors relative ${
                                    pathname === item.href
                                        ? "text-amber-300 font-medium"
                                        : ""
                                }`}
                            >
                                {item.name}
                                {pathname === item.href && (
                                    <motion.span
                                        layoutId="navbar-indicator"
                                        className="absolute -bottom-1 left-0 right-0 h-0.5 bg-amber-500"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ duration: 0.3 }}
                                    />
                                )}
                            </Link>
                        ))}

                        {/* Dropdown Menu */}
                        <div
                            className="relative"
                            ref={dropdownRef}
                            onMouseEnter={() => setDropdownOpen(true)}
                            onMouseLeave={() => setDropdownOpen(false)}
                        >
                            <button
                                className={`flex items-center text-white hover:text-amber-300 transition-colors ${
                                    isDropdownItemActive || pathname === "/meer"
                                        ? "text-amber-300 font-medium"
                                        : ""
                                }`}
                                onClick={() => setDropdownOpen(!dropdownOpen)}
                                aria-expanded={dropdownOpen}
                                aria-haspopup="true"
                            >
                                Meer
                                <ChevronDown
                                    className={`ml-1 w-4 h-4 transition-transform ${
                                        dropdownOpen ? "rotate-180" : ""
                                    }`}
                                />
                            </button>

                            <AnimatePresence>
                                {dropdownOpen && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 10 }}
                                        transition={{ duration: 0.2 }}
                                        className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 overflow-hidden z-50"
                                    >
                                        <div className="py-1 bg-gradient-to-b from-amber-50 to-white">
                                            {dropdownItems.map((item) => (
                                                <Link
                                                    key={item.name}
                                                    href={item.href}
                                                    className={`block px-4 py-2 text-sm hover:bg-amber-100 transition-colors ${
                                                        pathname === item.href
                                                            ? "text-amber-700 font-medium bg-amber-50"
                                                            : "text-gray-700"
                                                    }`}
                                                >
                                                    <div className="flex items-center">
                                                        <svg
                                                            className="w-4 h-4 mr-2 text-amber-600"
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
                                                        </svg>
                                                        {item.name}
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </nav>

                    {/* Mobile Navigation Toggle */}
                    <button
                        className="md:hidden text-white"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label="Toggle menu"
                    >
                        {isOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="md:hidden bg-slate-800"
                    >
                        <div className="container mx-auto px-4 py-4">
                            <nav className="flex flex-col space-y-4">
                                {menuItems.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`text-white hover:text-amber-300 transition-colors py-2 ${
                                            pathname === item.href
                                                ? "text-amber-300 font-medium border-l-2 border-amber-500 pl-2"
                                                : ""
                                        }`}
                                        onClick={() => setIsOpen(false)}
                                    >
                                        {item.name}
                                    </Link>
                                ))}

                                {/* Mobile Dropdown */}
                                <div className="py-2">
                                    <button
                                        className={`flex items-center text-white hover:text-amber-300 transition-colors ${
                                            isDropdownItemActive
                                                ? "text-amber-300 font-medium"
                                                : ""
                                        }`}
                                        onClick={() =>
                                            setDropdownOpen(!dropdownOpen)
                                        }
                                    >
                                        Meer
                                        <ChevronDown
                                            className={`ml-1 w-4 h-4 transition-transform ${
                                                dropdownOpen ? "rotate-180" : ""
                                            }`}
                                        />
                                    </button>

                                    <AnimatePresence>
                                        {dropdownOpen && (
                                            <motion.div
                                                initial={{
                                                    opacity: 0,
                                                    height: 0,
                                                }}
                                                animate={{
                                                    opacity: 1,
                                                    height: "auto",
                                                }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="mt-2 pl-4 border-l border-slate-700 space-y-2"
                                            >
                                                {dropdownItems.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className={`block py-1 text-sm hover:text-amber-300 transition-colors ${
                                                            pathname ===
                                                            item.href
                                                                ? "text-amber-300 font-medium"
                                                                : "text-slate-300"
                                                        }`}
                                                        onClick={() => {
                                                            setIsOpen(false);
                                                            setDropdownOpen(
                                                                false
                                                            );
                                                        }}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            </nav>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
}
