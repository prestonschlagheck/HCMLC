'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

export function Hero() {
  const [showHCM, setShowHCM] = useState(true) // Start with HCM heart visible
  
  const scrollToWithOffset = (id: string) => {
    const el = document.getElementById(id)
    if (!el) return
    const headerHeight = 88 // fixed header (~h-20 plus extra spacing)
    const y = el.getBoundingClientRect().top + window.pageYOffset - headerHeight
    window.scrollTo({ top: y, behavior: 'smooth' })
  }

  const toggleHeart = () => {
    setShowHCM(!showHCM)
  }
  return (
    <section id="hero-section" className="relative h-auto min-h-[88vh] lg:h-[75vh] overflow-visible bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Sophisticated Background Patterns */}
      <div className="absolute inset-0">
        {/* Medical Grid Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 h-full">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="border-r border-blue-300/20 h-full" />
            ))}
          </div>
          <div className="absolute inset-0 grid grid-rows-8">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="border-b border-blue-300/20 w-full" />
            ))}
          </div>
        </div>


        {/* Dynamic Gradient Overlays */}
        <motion.div
          animate={{
            background: [
              "radial-gradient(circle at 20% 30%, rgba(0, 102, 204, 0.3) 0%, transparent 60%)",
              "radial-gradient(circle at 80% 20%, rgba(0, 166, 184, 0.3) 0%, transparent 60%)",
              "radial-gradient(circle at 40% 70%, rgba(0, 212, 229, 0.3) 0%, transparent 60%)",
              "radial-gradient(circle at 20% 30%, rgba(0, 102, 204, 0.3) 0%, transparent 60%)"
            ]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute inset-0"
        />
      </div>



      {/* Main Content */}
      <div className="relative z-10 flex items-center h-full px-6 lg:px-12">
        <div className="max-w-7xl mx-auto w-full">
          {/* Mobile Layout - Vertical Stack */}
          <div className="flex flex-col items-center justify-center h-full lg:hidden pt-8 pb-10 px-4 space-y-4 sm:space-y-6">
            
            {/* Text Content */}
            <div className="flex flex-col items-center text-center space-y-4 sm:space-y-5 w-full max-w-sm sm:max-w-md">
              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="space-y-1 sm:space-y-2"
              >
                <h1 className="heading-font text-4xl sm:text-5xl font-bold text-white leading-tight text-shadow-md">
                  Rhythm & Remodeling:
                  <br />
                  <span className="bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent">
                    Comprehensive HCM Education
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.15 }}
              className="text-sm sm:text-base text-blue-100 leading-relaxed font-sans px-2"
              >
                The HCM Learning Center provides healthcare professionals with evidence-based, practical learning.
              </motion.p>
            </div>

            {/* Heart Animation - Mobile */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex items-center justify-center my-2 sm:my-3"
            >
              <motion.button
                onClick={toggleHeart}
                className="relative cursor-pointer focus:outline-none"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  transition: 'transform 0.1s ease-out'
                }}
              >
                {/* Heart Image 1 - Healthy Heart */}
                <motion.img
                  src="/1.png"
                  alt="Healthy Heart"
                  className="w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 object-contain pointer-events-none"
                  animate={{
                    opacity: showHCM ? 0 : 1
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Heart Image 2 - HCM Heart */}
                <motion.img
                  src="/2.png"
                  alt="HCM Heart"
                  className="absolute inset-0 w-36 h-36 sm:w-44 sm:h-44 md:w-56 md:h-56 object-contain pointer-events-none"
                  animate={{
                    opacity: showHCM ? 1 : 0
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                />
              </motion.button>
            </motion.div>

            {/* CTA Buttons - Mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.4 }}
              className="flex flex-col items-center justify-center gap-2 w-full px-2 max-w-sm sm:max-w-md mb-2 sm:mb-4"
            >
              {/* Heart Toggle Button - Top */}
              <button 
                onClick={toggleHeart}
                className="w-full px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 border border-white/60 text-white/90 hover:bg-white/10 hover:shadow-xl flex items-center justify-center gap-2"
              >
                <span className="truncate">{showHCM ? 'Show Healthy Heart' : 'Show HCM Heart'}</span>
                <motion.div
                  animate={{
                    y: [0, -4, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  className="text-white/80 flex-shrink-0"
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19V5M5 12l7-7 7 7"/>
                  </svg>
                </motion.div>
              </button>
              
              {/* Bottom Row - Activities and Resources */}
              <div className="flex items-center justify-center gap-2 w-full">
                <button 
                  onClick={() => scrollToWithOffset('activities')}
                  className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1 flex-1 min-w-0"
                >
                  <span className="truncate">Explore Activities</span>
                </button>
                <button 
                  onClick={() => scrollToWithOffset('resource-center')}
                  className="px-4 py-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-300 border border-white/60 text-white/90 hover:bg-white/10 hover:shadow-xl flex-1 min-w-0"
                >
                  <span className="truncate">Explore Resources</span>
                </button>
              </div>
            </motion.div>
          </div>

          {/* Desktop Layout - Horizontal */}
          <div className="hidden lg:flex items-center justify-between h-full">
            
            {/* Left Content */}
            <div className="flex flex-col items-start justify-center space-y-8 max-w-3xl">
              {/* Main Title */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 }}
                className="space-y-4"
              >
                <h1 className="heading-font text-4xl lg:text-5xl font-bold text-white leading-tight text-shadow-md text-left">
                  Rhythm & Remodeling:
                  <br />
                  <span className="bg-gradient-to-r from-blue-300 to-teal-300 bg-clip-text text-transparent whitespace-nowrap">
                    Comprehensive HCM Education
                  </span>
                </h1>
              </motion.div>

              {/* Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.15 }}
                className="text-base lg:text-lg text-blue-100 leading-relaxed max-w-4xl font-sans text-left"
              >
                Through educational programs, including expert interviews, interactive case discussions, and patient perspectives, we provide healthcare professionals with evidence-based, practical, and patient-centered learning.
              </motion.p>

              {/* CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="flex items-center gap-4 pt-4"
              >
                <button 
                  onClick={() => scrollToWithOffset('activities')}
                  className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl transform hover:-translate-y-1"
                >
                  Explore Activities
                </button>
                <button 
                  onClick={() => scrollToWithOffset('resource-center')}
                  className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/60 text-white/90 hover:bg-white/10 hover:shadow-xl"
                >
                  Explore Resources
                </button>
                <button 
                  onClick={toggleHeart}
                  className="px-8 py-4 rounded-xl font-semibold transition-all duration-300 border border-white/60 text-white/90 hover:bg-white/10 hover:shadow-xl flex items-center gap-3"
                >
                  <span>{showHCM ? 'Show Healthy Heart' : 'Show HCM Heart'}</span>
                  <motion.div
                    animate={{
                      x: [0, 8, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                    className="text-white/80"
                  >
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ transform: 'rotate(28deg)' }}>
                      <path d="M7 17L17 7M17 7H7M17 7V17"/>
                    </svg>
                  </motion.div>
                </button>
              </motion.div>
            </div>

            {/* Right Side - Heart Animation */}
            <div className="flex items-start justify-center w-[21.375rem] lg:w-[23.94rem] -mt-3">
              <motion.button
                onClick={toggleHeart}
                className="relative cursor-pointer focus:outline-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                style={{ 
                  transition: 'transform 0.1s ease-out'
                }}
              >
                {/* Heart Image 1 - Healthy Heart */}
                <motion.img
                  src="/1.png"
                  alt="Healthy Heart"
                  className="w-[427.5px] h-[427.5px] lg:w-[513px] lg:h-[513px] object-contain pointer-events-none"
                  animate={{
                    opacity: showHCM ? 0 : 1
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                />
                
                {/* Heart Image 2 - HCM Heart */}
                <motion.img
                  src="/2.png"
                  alt="HCM Heart"
                  className="absolute inset-0 w-[427.5px] h-[427.5px] lg:w-[513px] lg:h-[513px] object-contain pointer-events-none"
                  animate={{
                    opacity: showHCM ? 1 : 0
                  }}
                  transition={{
                    duration: 0.5,
                    ease: "easeInOut"
                  }}
                />

              </motion.button>
            </div>
          </div>
        </div>
      </div>


    </section>
  )
} 