'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Users, User } from 'lucide-react'

export function Partners() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} id="faculty" className="py-16 bg-gradient-to-br from-blue-50 via-slate-50 to-teal-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-3s"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-6s"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Partner <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Network</span>
          </h2>
          <p className="text-base lg:text-lg text-slate-700 leading-relaxed mb-12 text-center lg:whitespace-nowrap">
            Collaborative relationships in HCM care. This is placeholder text for partner organizations and institutions.
          </p>

          {/* Faculty Placeholder Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.3, delay: i * 0.03 }}>
                <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 p-4 h-32">
                  <div className="flex flex-col items-center text-center h-full justify-center">
                    <div className="relative w-16 h-16 mb-2">
                      <div className="w-full h-full bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center overflow-hidden border-3 border-white shadow-md">
                        <User className="w-8 h-8 text-slate-400" />
                      </div>
                    </div>
                    <div className="text-center">
                      <h3 className="heading-font font-semibold text-slate-400 text-sm leading-tight mb-1">Partner Organization</h3>
                      <div className="text-xs font-medium text-slate-300">This is placeholder text</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
