'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { Layers, Heart, Beaker } from 'lucide-react'

interface TrackCardProps { title: string; description: string; icon: React.ReactNode }

function TrackCard({ title, description, icon }: TrackCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm hover:shadow-md transition-shadow h-full">
      <div className="flex items-center space-x-3 mb-2">
        <div className="w-9 h-9 bg-blue-50 rounded-lg flex items-center justify-center">{icon}</div>
        <div className="text-slate-900 font-semibold">{title}</div>
      </div>
      <p className="text-slate-700 text-sm leading-relaxed">{description}</p>
    </div>
  )
}

export function TherapeuticTracks() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const tracks: TrackCardProps[] = [
    { title: 'Diagnostic & Risk Assessment Track', description: 'Advanced imaging techniques, genetic testing protocols, and risk stratification strategies for HCM patients.', icon: <Beaker size={18} className="text-blue-700" /> },
    { title: 'Interventional & Surgical Track', description: 'Surgical myectomy, alcohol septal ablation, ICD implantation, and heart transplantation considerations.', icon: <Layers size={18} className="text-indigo-700" /> },
  ]

  return (
    <section ref={ref} id="tracks" className="py-14 bg-gradient-to-br from-white via-slate-50/30 to-blue-50/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5 }} className="text-center mb-8">
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900">Therapeutic <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Tracks</span></h2>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          {tracks.map((t, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.05 }}>
              <TrackCard {...t} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


