'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import Image from 'next/image'

export function VideoIntroduction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section ref={ref} id="comprehensive-hub" className="py-16 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse"></div>
        <div className="absolute top-40 right-10 w-72 h-72 bg-teal-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-2s"></div>
        <div className="absolute -bottom-8 left-20 w-72 h-72 bg-cyan-100 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-pulse animation-delay-4s"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-6">
            Your Comprehensive Hub for Excellence in{' '}
            <br className="hidden sm:block" />
            <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">
              HCM Health Education
            </span>
          </h2>
          <p className="text-base lg:text-lg text-slate-700 max-w-6xl mx-auto leading-relaxed text-center">
            The Hypertrophic Cardiomyopathy (HCM) Learning Center is dedicated to advancing knowledge, competence, and clinical excellence in the care of patients with HCM.
          </p>
        </motion.div>

        {/* CME Activities Section */}
        <motion.div
          id="activities"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="heading-font text-4xl lg:text-5xl font-bold text-slate-900 mb-4">
              CME <span className="bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent">Activities</span>
            </h3>
            <p className="text-base lg:text-lg text-slate-700 max-w-3xl mx-auto leading-relaxed">
              Access our comprehensive collection of continuing medical education activities designed to enhance your knowledge and skills in HCM management.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                title: 'Echocardiographic workup for HCM: making the diagnosis and evaluation of cardiac function', 
                href: 'https://pace-cme.org/programs/cme/Echocardiographic-workup-for-HCM-making-the-diagnosis-and-evaluation-of-cardiac-function/32699/',
                source: 'PACE-CME',
                thumbnail: '/thumbs/echoessentials.png'
              },
              { 
                title: 'Role of echocardiography in risk stratification and treatment decision making', 
                href: 'https://pace-cme.org/programs/cme/Role-of-echocardiography-in-risk-stratification-and-treatment-decision-making/32700/',
                source: 'PACE-CME',
                thumbnail: '/thumbs/roleof.png'
              },
              { 
                title: 'Understanding hypertrophic cardiomyopathy and recent guidelines', 
                href: 'https://pace-cme.org/programs/cme/Understanding-hypertrophic-cardiomyopathy-and-recent-guidelines/32698/',
                source: 'PACE-CME',
                thumbnail: '/thumbs/understanding.png'
              },
              { 
                title: 'New Insights in the Management of HCM: Exploring the Clinical Spectrum', 
                href: 'https://reachmd.com/programs/cme/new-insights-in-the-management-of-hcm-exploring-the-clinical-spectrum/33026/',
                source: 'ReachMD CME',
                thumbnail: '/thumbs/newinsights.png'
              },
              { 
                title: 'Optimizing Outcomes in Patients with oHCM: The Emerging Role of Cardiac Myosin Inhibitors', 
                href: 'https://reachmd.com/programs/cme/optimizing-outcomes-in-patients-with-ohcm-the-emerging-role-of-cardiac-myosin-inhibitors/33176/',
                source: 'ReachMD CME',
                thumbnail: '/thumbs/optimizingoutcomes.png'
              },
              { 
                title: 'Mavacamten in symptomatic non-obstructive HCM', 
                href: 'https://pace-cme.org/congress-coverage/esc-congress-2025/mavacamten-in-symptomatic-non-obstructive-hcm/37860/',
                source: 'PACE-CME',
                thumbnail: '/thumbs/mavacamten.png'
              },
              { 
                title: 'MAPLE-HCM Results: Favorable Safety and Efficacy for Aficamten in oHCM', 
                href: 'https://reachmd.com/clinical-practice/cardiology/maple-hcm-results-favorable-safety-and-efficacy-for-aficamten-in-ohcm/37255/',
                source: 'ReachMD',
                thumbnail: '/thumbs/maplehcm.png'
              },
              { 
                title: 'Aficamten improves peak oxygen uptake in obstructive HCM', 
                href: 'https://pace-cme.org/topics/hypertrophic-cardiomyopathy/aficamten-improves-peak-oxygen-uptake-obstructive-hcm/26565/',
                source: 'PACE-CME',
                thumbnail: '/thumbs/aficamten.png'
              },
            ].map((activity, i) => (
              <motion.div 
                key={i} 
                initial={{ opacity: 0, y: 15 }} 
                whileInView={{ opacity: 1, y: 0 }} 
                viewport={{ once: true }} 
                transition={{ duration: 0.4, delay: i * 0.05 }} 
                className="bg-white rounded-2xl border border-slate-200 overflow-hidden hover:shadow-lg transition-shadow"
              >
                {/* Thumbnail */}
                <div className="w-full relative bg-slate-100" style={{ height: '165px' }}>
                  <Image
                    src={activity.thumbnail}
                    alt={activity.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                </div>
                
                {/* Content */}
                <div className="p-5">
                  <div className="flex items-center space-x-2 mb-2">
                    <div className="text-slate-900 font-semibold text-xs">{activity.source}</div>
                  </div>
                  <div className="text-slate-800 text-sm leading-snug mb-3 font-medium">
                    {activity.title}
                  </div>
                  <a 
                    href={activity.href} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-blue-600 hover:text-blue-700 text-xs font-semibold hover:underline"
                  >
                    View Activity →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 