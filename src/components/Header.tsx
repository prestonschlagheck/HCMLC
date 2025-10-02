'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Heart, Award, LogOut } from 'lucide-react'
import { useState, useEffect } from 'react'
import { useAuth } from '../contexts/AuthContext'

export function Header() {
  const [isOverHero, setIsOverHero] = useState(false);
  const { logout } = useAuth();

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('hero-section');
      if (heroSection) {
        const heroRect = heroSection.getBoundingClientRect();
        const headerHeight = 80;
        setIsOverHero(heroRect.bottom > headerHeight && heroRect.top < headerHeight);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Account for fixed header height (h-20 = 80px)
      const elementPosition = element.offsetTop - headerHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const navigationItems = [
    { id: 'comprehensive-hub', label: 'HCM Learning Center' },
    { id: 'hcm-statistics', label: 'HCM Statistics' },
    { id: 'activities', label: 'Activities' },
    { id: 'tracks', label: 'Tracks' },
    { id: 'resource-center', label: 'Resource Center' },
    { id: 'faculty', label: 'Expert Faculty' },
    { id: 'news', label: 'News' }
  ];

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-xl border-b border-white/20 shadow-xl"
    >
      <div className="w-full px-4 lg:px-8">
        <div className="flex items-center h-20 relative">
          {/* Logo / Placeholder - Far Left */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.05 }}
            className="flex items-center absolute left-4"
          >
            <Image
              src="/glc.png"
              alt="GLC Logo"
              width={120}
              height={36}
              className={`h-9 w-auto object-contain opacity-90 hover:opacity-100 transition-all duration-300 cursor-pointer ${
                isOverHero ? 'brightness-0 invert' : ''
              }`}
              priority
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            />
          </motion.div>

          {/* Navigation Tabs - Right Aligned */}
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.1 }}
            className={`hidden lg:flex items-center space-x-4 absolute right-4 ${
              isOverHero 
                ? 'text-white' 
                : 'bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent'
            }`}
          >
            {navigationItems.map((item, index) => (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, delay: 0.1 + index * 0.05 }}
                onClick={() => scrollToSection(item.id)}
                className="px-2 py-2 text-sm font-semibold hover:scale-105 transition-all duration-300 cursor-pointer"
              >
                {item.label}
              </motion.button>
            ))}
            
            {/* Logout Button */}
            <motion.button
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2, delay: 0.1 + navigationItems.length * 0.05 }}
              onClick={logout}
              className={`ml-4 px-3 py-2 text-sm font-semibold hover:scale-105 transition-all duration-300 cursor-pointer flex items-center gap-2 rounded-lg bg-red-500/20 hover:bg-red-500/30 border border-red-500/30 ${
                isOverHero 
                  ? 'text-white' 
                  : 'bg-gradient-to-r from-red-500 to-red-600 bg-clip-text text-transparent hover:from-red-600 hover:to-red-700'
              }`}
            >
              <LogOut size={16} className={isOverHero ? 'text-white' : 'text-red-600'} />
              Logout
            </motion.button>
          </motion.nav>

          {/* Mobile Menu Button - Right */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2, delay: 0.15 }}
            className="lg:hidden absolute right-4"
          >
            <button className="p-2 text-slate-800 hover:text-slate-900 transition-colors">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </motion.div>
        </div>
      </div>

      {/* Animated gradient line */}
      <motion.div
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ duration: 1, delay: 0.5 }}
        className="h-0.5 bg-gradient-to-r from-blue-400 via-teal-400 to-blue-400 origin-left"
      />
    </motion.header>
  )
} 