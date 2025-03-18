"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

export function Certifications() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 bg-slate-100">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-4">Certificeringen & Diploma's</h2>
          <p className="text-slate-600">Professioneel gecertificeerd met meer dan 30 jaar ervaring</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="Hoof & Health Certificaat"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">Hoof & Health Certificaat</h3>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center"
          >
            <div className="relative w-full h-64 mb-4">
              <Image
                src="/placeholder.svg?height=300&width=250"
                alt="Rijks Diploma Hoefsmid"
                fill
                className="object-contain"
              />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">Rijks Diploma Hoefsmid</h3>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

