'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FileText, ExternalLink, Award, Beaker, Database, Download } from 'lucide-react'

interface ResourceLink { title: string; href: string }
interface ResourceGroup { title: string; icon: React.ReactNode; items: ResourceLink[] }

export function ResourceCenter() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

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

        {/* Grouped Resources */}
        <div className="grid md:grid-cols-2 gap-6">
          {resources.map((group, gi) => (
            <motion.div
              key={gi}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: gi * 0.05 }}
              className="bg-white rounded-2xl border border-slate-200 p-5"
            >
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center">{group.icon}</div>
                <div className="text-slate-900 font-semibold">{group.title}</div>
              </div>
              <ul className="space-y-2">
                {group.items.map((item, ii) => (
                  <li key={ii} className="flex items-center justify-between">
                    <span className="text-slate-800 text-sm leading-snug pr-3">{item.title}</span>
                    <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center text-xs">Open <ExternalLink size={14} className="ml-1" /></a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}