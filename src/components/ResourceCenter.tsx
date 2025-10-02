'use client'

import { motion, useInView, AnimatePresence } from 'framer-motion'
import { useRef, useState } from 'react'
import { FileText, ExternalLink, Award, Beaker, Database, Download, ChevronDown, ChevronUp } from 'lucide-react'

interface ResourceLink { title: string; href: string; authors?: string; date?: string; source?: string }
interface ResourceGroup { title: string; icon: React.ReactNode; items: ResourceLink[] }

export function ResourceCenter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [isOpen, setIsOpen] = useState(false)

  const resources: ResourceGroup[] = [
    {
      title: 'Guidelines & Consensus',
      icon: <Award size={18} className="text-blue-700" />,
      items: [
        { title: 'AHA/ACC 2020 HCM Guideline', href: '#' },
        { title: 'ESC 2023 Cardiomyopathy Guidelines', href: '#' },
        { title: 'HRS Expert Consensus on ICDs in HCM', href: '#' },
      ]
    },
    {
      title: 'Genetic Testing & Family Screening',
      icon: <Beaker size={18} className="text-teal-700" />,
      items: [
        { title: 'HCM Genetic Testing Guidelines', href: '#' },
        { title: 'Family Screening Protocols', href: '#' },
        { title: 'Genetic Counseling Resources', href: '#' },
      ]
    },
    {
      title: 'Diagnostic Imaging & Assessment',
      icon: <Database size={18} className="text-indigo-700" />,
      items: [
        { title: 'Echocardiography in HCM', href: '#' },
        { title: 'Cardiac MRI Guidelines', href: '#' },
        { title: 'Exercise Testing Protocols', href: '#' },
      ]
    },
    {
      title: 'Patient Care Tools & Resources',
      icon: <FileText size={18} className="text-slate-700" />,
      items: [
        { title: 'HCM Patient Education Materials', href: '#' },
        { title: 'Exercise Recommendations', href: '#' },
        { title: 'Pregnancy Management Guidelines', href: '#' },
        { title: 'Athletic Participation Guidelines', href: '#' },
      ]
    },
  ]

  // Flatten groups into individual resource items for card grid
  const flatItems = resources.flatMap((group) =>
    group.items.map((it) => ({
      ...it,
      group,
      authors: it.authors ?? 'Author Name(s)',
      date: it.date ?? '2025 Jan',
      source: it.source ?? 'Organization / Website'
    }))
  )

  return (
    <section ref={ref} id="resource-center" className="pt-16 pb-16 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse animation-delay-4s"></div>
        
        {/* Scientific Pattern Overlay */}
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, #0066CC 2px, transparent 2px), radial-gradient(circle at 75% 75%, #00A6B8 2px, transparent 2px)`,
            backgroundSize: '50px 50px, 80px 80px'
          }} />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
            Resource <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Center</span>
          </h2>
          <p className="text-base lg:text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed">
            Curated links to HCM guidelines, genetic testing resources, diagnostic imaging protocols, and patient care tools. Links open in a new tab.
          </p>
        </motion.div>

        {/* Toggle Button */}
        <div className="flex justify-center mb-8">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-gradient-to-r from-blue-500 to-teal-500 hover:from-blue-600 hover:to-teal-600 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 shadow-xl hover:shadow-2xl inline-flex items-center gap-2"
          >
            {isOpen ? 'Hide Resources' : 'View Resources'}
            {isOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
          </button>
        </div>

        {/* Resources - Dropdown (individual cards) */}
        <AnimatePresence initial={false}>
          {isOpen && (
            <motion.div
              key="resources-grid"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="overflow-hidden"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {flatItems.map((res, idx) => (
                  <motion.div
                    key={`${res.group.title}-${res.title}-${idx}`}
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: (idx % 8) * 0.03 }}
                    className="bg-white rounded-2xl border border-slate-200 p-4 flex flex-col"
                  >
                    {/* Title row with icon */}
                    <div className="flex items-center space-x-2 mb-0">
                      <div className="w-7 h-7 bg-blue-50 rounded-lg flex items-center justify-center text-slate-500 flex-shrink-0">{res.group.icon}</div>
                      <div className="flex items-center h-10 flex-1">
                        <div
                          className="text-slate-900 text-sm leading-snug font-semibold w-full"
                          style={{ display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}
                        >
                          {res.title}
                        </div>
                      </div>
                    </div>
                    {/* Group under title */}
                    <div className="text-slate-600 text-xs font-medium mt-0 mb-1 h-4">{res.group.title}</div>
                    {/* Meta line: authors */}
                    <div className="text-slate-700 text-xs mb-1" style={{ minHeight: '1rem' }}>{res.authors}</div>
                    {/* Meta line: date and source */}
                    <div className="text-slate-500 text-xs mb-1" style={{ minHeight: '1rem' }}>{res.date} · {res.source}</div>
                    <div className="mt-auto pt-2 border-t border-slate-200">
                      <div className="flex justify-center">
                        <a
                          href={res.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-700 inline-flex items-center text-xs font-semibold"
                        >
                          Read more <ExternalLink size={14} className="ml-1" />
                        </a>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  )
}