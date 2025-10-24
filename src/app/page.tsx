'use client'

import Hero from '@/components/hero'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import { useLanguage } from '@/contexts/language-context'

export default function HomePage() {
  const { t } = useLanguage()
  
  return (
    <>
      <NavBar />
      
      <main className="min-h-screen snap-y snap-mandatory">
        {/* Hero Section */}
        <Hero 
          title={t('hero.title') as string}
          subtitle={t('hero.subtitle') as string}
          ctaPrimary={{ label: t('hero.ctaPrimary') as string, href: '/iletisim' }}
          ctaSecondary={{ label: t('hero.ctaSecondary') as string, href: '/hizmetler' }}
        />

      </main>
      
      <Footer />
    </>
  )
}