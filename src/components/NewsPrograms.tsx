'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Megaphone, Newspaper } from 'lucide-react'

interface NewsItem { title: string; href?: string; source?: string; comingSoon?: boolean }

export function NewsPrograms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const items: NewsItem[] = [
    { title: 'HCM Diagnosis and Risk Stratification Updates', comingSoon: true, source: 'HCM Learning Center' },
    { title: 'Novel Myosin Inhibitors in HCM Management', comingSoon: true, source: 'HCM Learning Center' },
    { title: 'Surgical and Interventional Approaches to HCM', comingSoon: true, source: 'HCM Learning Center' },
  ]

  return (
    <section ref={ref} id="news" className="py-14 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-8">
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900">News <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">& Programs</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6">
          {items.map((it, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }} className="bg-white rounded-2xl border border-slate-200 p-5">
              <div className="flex items-center space-x-2 mb-2">
                <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center"><Newspaper size={16} className="text-blue-700" /></div>
                <div className="text-slate-900 font-semibold">{it.source || 'Update'}</div>
              </div>
              <div className="text-slate-800 text-sm leading-snug mb-3">{it.title}</div>
              {it.comingSoon ? (
                <div className="text-xs text-slate-400">Coming soon</div>
              ) : (
                <a href={it.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 text-xs">Open</a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


