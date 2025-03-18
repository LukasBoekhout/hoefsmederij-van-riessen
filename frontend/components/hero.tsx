"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function Hero() {
  return (
    <section className="pt-16 pb-12 bg-slate-800 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative w-full max-w-md aspect-square mb-8 overflow-hidden rounded-lg shadow-xl"
          >
            <Image
              src="/placeholder.svg?height=500&width=500"
              alt="Hoefsmederij van Riessen"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 to-transparent"></div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Hoefsmederij van Riessen
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="w-24 h-1 bg-amber-500 mb-6"
          ></motion.div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="text-lg text-center text-slate-300 max-w-2xl"
          >
            Vakmanschap in hoefverzorging sinds 1995
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            className="mt-8 flex items-center justify-center"
          >
            <div className="flex items-center space-x-2 bg-slate-700/50 px-4 py-2 rounded-lg border border-slate-600">
              <svg
                className="w-5 h-5 text-amber-500"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              <span className="text-slate-300">Rijksgediplomeerd Hoefsmid</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

