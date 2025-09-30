'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { User, Users } from 'lucide-react'

interface FacultyPlaceholderProps {
  index: number
}

function FacultyPlaceholder({ index }: FacultyPlaceholderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.2, delay: index * 0.05 }}
    >
      <div className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-slate-200 p-4 h-32">
        {/* Profile Photo */}
        <div className="flex flex-col items-center text-center h-full justify-center">
          <div className="relative w-16 h-16 mb-2">
            <div className="w-full h-full bg-gradient-to-br from-blue-100 to-teal-100 rounded-full flex items-center justify-center overflow-hidden border-3 border-white shadow-md">
              <User className="w-8 h-8 text-slate-400" />
            </div>
          </div>
          
          {/* Placeholder Text */}
          <div className="text-center">
            <h3 className="heading-font font-semibold text-slate-400 text-sm leading-tight mb-1">
              HCM Expert Placeholder
            </h3>
            <div className="text-xs font-medium text-slate-300">
              This is a placeholder title
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export function Faculty() {
  const ref = useRef(null)
  const ref2 = useRef(null)
  const isInView = useInView(ref, { once: true })
  const isInView2 = useInView(ref2, { once: true })

  // Create 12 placeholder slots
  const placeholderSlots = Array.from({ length: 12 }, (_, index) => index)

  return (
    <>
      {/* First Faculty Directory Section */}
      <section ref={ref} id="faculty" className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.5 }} 
            className="text-center mb-8"
          >
            <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900">
              Expert <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Faculty</span>
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Leading HCM specialists and researchers from around the world. This is placeholder text for expert faculty profiles.
            </p>
          </motion.div>

          {/* Faculty Placeholder Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {placeholderSlots.map((index) => (
              <FacultyPlaceholder key={`first-${index}`} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Second Faculty Directory Section - White Background */}
      <section ref={ref2} className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            animate={isInView2 ? { opacity: 1, y: 0 } : {}} 
            transition={{ duration: 0.5 }} 
            className="text-center mb-8"
          >
            <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900">
              Expert <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Faculty</span>
            </h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">
              Leading HCM specialists and researchers from around the world. This is placeholder text for expert faculty profiles.
            </p>
          </motion.div>

          {/* Faculty Placeholder Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4">
            {placeholderSlots.map((index) => (
              <FacultyPlaceholder key={`second-${index}`} index={index} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}