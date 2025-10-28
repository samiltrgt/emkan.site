'use client'

import Reveal from '@/components/reveal'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import { ShieldCheck, Cpu, Globe2, Sparkles, Award, TrendingUp, Clock } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'

export default function AboutPage() {
  const { t } = useLanguage()
  
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 bg-gradient-to-br from-primary via-primary/95 to-accent/20 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Reveal y={30} className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                {t('about.title') as string}
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                {t('about.subtitle') as string}
              </p>
            </Reveal>
            
            <Reveal y={20} delay={0.2} className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Globe2 className="w-5 h-5" />
                <span className="text-sm font-medium">{t('about.stats.countries') as string}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">{t('about.stats.partner') as string}</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">{t('about.stats.growth') as string}</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Reveal y={30} className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                    {t('about.ourStory.title') as string}
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full mb-8"></div>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                    {t('about.ourStory.description1') as string}
                  </p>
                  <p>
                    {t('about.ourStory.description2') as string}
                  </p>
                </div>
              </Reveal>
              
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <Reveal y={30} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                {t('about.focusAreas.title') as string}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('about.focusAreas.subtitle') as string}
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Sorumlu Vizyon */}
              <Reveal y={30} delay={0.1} className="group">
                <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/30">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ShieldCheck className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-4">{t('about.focusAreas.responsibleVision.title') as string}</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {t('about.focusAreas.responsibleVision.description') as string}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Teknoloji ve Kalite */}
              <Reveal y={30} delay={0.2} className="group">
                <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/30">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Cpu className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-4">{t('about.focusAreas.technologyQuality.title') as string}</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {t('about.focusAreas.technologyQuality.description') as string}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* İnovasyon ve Uyum */}
              <Reveal y={30} delay={0.4} className="group">
                <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/30">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-4">{t('about.focusAreas.innovationAdaptation.title') as string}</h3>
                      <p className="text-gray-700 leading-relaxed">
                        {t('about.focusAreas.innovationAdaptation.description') as string}
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>


      </main>
      
      <Footer />
    </>
  )
}
