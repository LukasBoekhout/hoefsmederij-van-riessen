"use client"

import { motion } from "framer-motion"
import Link from "next/link"

export function ComingSoonNavbar() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-slate-800"
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-center">
          <Link href="/" className="text-white text-xl font-bold flex items-center">
            {/* Horseshoe icon */}
            <svg
              className="w-8 h-8 mr-2 text-amber-500"
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
              <path d="M21 12C21 9.5 19 4 12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M12 4C5 4 3 9.5 3 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M7 17L7.01 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
              <path d="M17 17L17.01 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
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
        </div>
      </div>
    </motion.header>
  )
}

