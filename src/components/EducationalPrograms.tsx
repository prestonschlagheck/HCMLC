'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { BookOpen, ExternalLink, Heart, Beaker } from 'lucide-react'

interface ActivityLink { title: string; href?: string; comingSoon?: boolean }
interface ActivityGroup { title: string; description: string; icon: React.ReactNode; items: ActivityLink[] }

function ActivityCard({ group, index }: { group: ActivityGroup; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <div className="rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-slate-200 bg-white h-full flex flex-col overflow-hidden">
        <div className="px-5 pt-4 pb-3 bg-gradient-to-r from-blue-50 to-teal-50 border-b border-slate-200 rounded-t-3xl">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-blue-100 rounded-xl flex items-center justify-center">
              {group.icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900">{group.title}</h3>
          </div>
          <div className="text-slate-600 text-sm mt-1">{group.description}</div>
        </div>
        <ul className="space-y-2 mt-1 px-5 py-4">
          {group.items.map((item, i) => (
            <li key={i} className="flex items-start justify-between">
              <span className="text-slate-800 text-sm leading-snug pr-3 flex-1">
                {item.title}
              </span>
              {item.comingSoon ? (
                <span className="text-xs text-slate-400 whitespace-nowrap ml-2">Coming soon</span>
              ) : (
                <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-700 inline-flex items-center text-xs whitespace-nowrap ml-2">
                  Open <ExternalLink size={14} className="ml-1" />
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  )
}

export function EducationalPrograms() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  const groups: ActivityGroup[] = [
    {
      title: 'Diagnosis & Risk Assessment',
      description: 'Comprehensive approaches to HCM diagnosis, genetic testing, and risk assessment.',
      icon: <Beaker size={20} className="text-blue-700" />,
      items: [
        { title: 'Genetic testing in HCM: When and how to test', comingSoon: true },
        { title: 'Echocardiographic assessment of HCM severity', comingSoon: true },
        { title: 'Cardiac MRI in HCM: Advanced imaging techniques', comingSoon: true },
        { title: 'Family screening protocols for HCM', comingSoon: true },
      ]
    },
    {
      title: 'Surgical & Interventional Care',
      description: 'Surgical and interventional approaches to HCM treatment.',
      icon: <BookOpen size={20} className="text-blue-700" />,
      items: [
        { title: 'Septal myectomy: Indications and outcomes', comingSoon: true },
        { title: 'Alcohol septal ablation: Patient selection and technique', comingSoon: true },
        { title: 'ICD implantation in HCM: Risk stratification', comingSoon: true },
        { title: 'Heart transplantation in end-stage HCM', comingSoon: true },
      ]
    },
    {
      title: "Special Populations & Lifestyle",
      description: 'HCM care considerations for specific patient populations and lifestyle modifications.',
      icon: <Heart size={20} className="text-blue-700" />,
      items: [
        { title: 'Pediatric HCM: Diagnosis and management', comingSoon: true },
        { title: 'HCM in pregnancy: Maternal and fetal considerations', comingSoon: true },
        { title: 'Exercise recommendations and activity restrictions', comingSoon: true },
        { title: 'Athletic participation in HCM patients', comingSoon: true },
      ]
    },
  ]

  return (
    <section ref={ref} id="activities" className="py-16 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-64 h-64 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-3s"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-purple-100 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-pulse animation-delay-6s"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Educational{' '}
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Programs</span>
          </h2>
          <p className="text-base lg:text-lg text-slate-700 max-w-6xl mx-auto leading-relaxed text-center">
            Explore CME and clinical practice programs across HCM diagnosis, interventional management, and special populations.
          </p>
        </motion.div>

        {/* Activity Groups */}
        <div className="grid md:grid-cols-2 gap-6">
          {groups.map((group, index) => (
            <ActivityCard key={index} group={group} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}