"use client"

import { motion } from "framer-motion"

export function ComingSoonFooter() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-slate-800 text-white py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="text-center text-slate-400"
        >
          <p>&copy; {currentYear} Hoefsmederij van Riessen. Alle rechten voorbehouden.</p>
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
  )
}

