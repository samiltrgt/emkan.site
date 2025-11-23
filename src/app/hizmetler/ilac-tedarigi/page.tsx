'use client'

import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import { useLanguage } from '@/contexts/language-context'

export default function IlacTedariğiPage() {
  const { t } = useLanguage()
  
  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-20">
      <div className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold gradient-text mb-8 text-center">
            {t('servicePages.ilacTedariği.title')}
          </h1>
          
          <p className="text-xl text-neutral-600 mb-12 text-center max-w-3xl mx-auto">
            {t('servicePages.ilacTedariği.subtitle')}
          </p>
          
          {/* Güvenilir İlaç Tedariki Bölümü */}
          <div className="card mb-16 group hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/30">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <div className="text-2xl">💊</div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6 text-primary">{t('servicePages.ilacTedariği.reliableSupply.title')}</h2>
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>
                    {t('servicePages.ilacTedariği.reliableSupply.description')}
                  </p>
                  <ul className="space-y-3 mt-6">
                    {(t('servicePages.ilacTedariği.reliableSupply.features') as string[]).map((feature, index) => (
                      <li key={index} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* TURK İlaç Temsilciliği Bölümü */}
          <div className="card mb-16 group hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/30">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <div className="text-2xl">🏭</div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-primary">{t('servicePages.ilacTedariği.turkIlac.title')}</h2>
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>
                    {t('servicePages.ilacTedariği.turkIlac.description')}
                  </p>
                  <p>
                    {t('servicePages.ilacTedariği.turkIlac.production')}
                  </p>
                  <p>
                    {t('servicePages.ilacTedariği.turkIlac.approach')}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      </main>
      
      <Footer />
    </>
  )
}

