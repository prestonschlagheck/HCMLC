'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useState } from 'react'
import { Heart, Activity, Stethoscope, Shield, ChevronRight, CheckCircle } from 'lucide-react'

export function VideoIntroduction() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })
  const [selectedCategory, setSelectedCategory] = useState<string>('interventional')

  const categories = [
    {
      id: 'interventional',
      title: 'Interventional & Surgical',
      icon: Activity,
      color: 'green',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      textColor: 'text-green-700',
      items: [
        { name: 'Septal Myectomy', description: 'Gold standard surgical treatment' },
        { name: 'Alcohol Septal Ablation', description: 'Minimally invasive septal reduction' },
        { name: 'ICD Implantation', description: 'Sudden death prevention device' },
        { name: 'Pacemaker Therapy', description: 'Rhythm management and pacing' },
        { name: 'Heart Transplantation', description: 'End-stage HCM management option' }
      ]
    },
    {
      id: 'diagnostic',
      title: 'Diagnostic & Assessment',
      icon: Stethoscope,
      color: 'purple',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      textColor: 'text-purple-700',
      items: [
        { name: 'Genetic Testing', description: 'Family screening and diagnosis' },
        { name: 'Echocardiography', description: 'Primary imaging modality' },
        { name: 'Cardiac MRI', description: 'Advanced tissue characterization' },
        { name: 'Exercise Testing', description: 'Functional capacity assessment' },
        { name: 'Holter Monitoring', description: 'Arrhythmia detection and monitoring' }
      ]
    },
    {
      id: 'comprehensive',
      title: 'Comprehensive Care',
      icon: Shield,
      color: 'orange',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      textColor: 'text-orange-700',
      items: [
        { name: 'Family Screening', description: 'Risk assessment and genetic counseling' },
        { name: 'Lifestyle Modifications', description: 'Patient education and self-care' },
        { name: 'Exercise Guidelines', description: 'Activity recommendations and restrictions' },
        { name: 'Pregnancy Management', description: 'Specialized care for women' },
        { name: 'Pediatric HCM', description: 'Age-specific management approaches' }
      ]
    }
  ]

  const activeCategory = categories.find(cat => cat.id === selectedCategory)

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
            Through expert interviews, interactive case discussions, multidisciplinary panels, and patient perspectives, leading global experts share the latest evidence alongside real-world clinical insights for Hypertrophic Cardiomyopathy care.
          </p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-8">
          {/* Category Navigation Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6 sticky top-8 h-full">
              <h3 className="text-2xl font-bold text-slate-900 mb-4">HCM Management Areas</h3>
              <nav className="space-y-2">
                {categories.map((category, index) => {
                  const IconComponent = category.icon
                  const isActive = selectedCategory === category.id
                  
                  return (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 ${
                        isActive 
                          ? `${category.bgColor} ${category.borderColor} border-2 ${category.textColor}` 
                          : 'hover:bg-slate-50 text-slate-600'
                      }`}
                    >
                      <div className="flex items-center space-x-3">
                        <div className={`p-2 rounded-lg ${
                          isActive 
                            ? `bg-${category.color}-100 text-${category.color}-600` 
                            : 'bg-slate-100 text-slate-500'
                        }`}>
                          <IconComponent size={20} />
                        </div>
                        <span className="font-medium text-sm">{category.title}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-sm text-slate-500">{category.items.length}</span>
                        {isActive && <ChevronRight size={16} className={category.textColor} />}
                      </div>
                    </button>
                  )
                })}
              </nav>
            </div>
          </motion.div>

          {/* Content Area */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-4"
          >
            <div className={`${activeCategory?.bgColor} ${activeCategory?.borderColor} border-2 rounded-xl p-6 h-full`}>
              {/* Category Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center space-x-3">
                  {(() => {
                    const IconComponent = activeCategory?.icon
                    return IconComponent ? <IconComponent size={24} className={`text-${activeCategory?.color}-600`} /> : null
                  })()}
                  <h3 className="text-2xl font-bold text-slate-900">{activeCategory?.title}</h3>
                </div>
                <p className="text-slate-600 text-sm mt-1">{activeCategory?.items.length} evidence-based approaches</p>
              </div>

              {/* Approaches Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {activeCategory?.items.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    className="bg-white/80 rounded-lg p-4 border border-white/50 hover:shadow-md transition-shadow duration-200"
                  >
                    <div>
                      <h4 className="font-semibold text-slate-800 mb-2">{item.name}</h4>
                      <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 