'use client'

import Hero from '@/components/hero'
import ServiceSection from '@/components/service-section'
import KPIBand from '@/components/kpi-band'
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
          ctaSecondary={{ label: t('hero.ctaSecondary') as string, href: '#services' }}
        />

        {/* Services Section */}
        <div id="services" className="snap-y snap-mandatory">
          {/* Ocean Freight */}
          <section id="ocean-freight">
            <ServiceSection
              title={t('services.oceanFreight.title') as string}
              description={t('services.oceanFreight.description') as string}
              bullets={t('services.oceanFreight.bullets') as string[]}
              ctas={[
                { label: t('services.oceanFreight.ctaDetails') as string, href: '/hizmetler/deniz-tasimaciligi' },
                { label: t('services.oceanFreight.ctaQuote') as string, href: '/iletisim' }
              ]}
              videoSrc="/videos/shipbackg.mp4"
              posterSrc="/videos/ocean-ship.jpg"
              previousSection="#"
              nextSection="#urea-trading"
            />
          </section>

          {/* Urea Trading */}
          <section id="urea-trading">
            <ServiceSection
              title={t('services.ureaTrading.title') as string}
              description={t('services.ureaTrading.description') as string}
              bullets={t('services.ureaTrading.bullets') as string[]}
              ctas={[
                { label: t('services.ureaTrading.ctaDetails') as string, href: '/hizmetler/ure-ticareti' },
                { label: t('services.ureaTrading.ctaQuote') as string, href: '/iletisim' }
              ]}
              videoSrc="/videos/ure-sack.mp4"
              posterSrc="/videos/ure-sack.jpg"
              reverse={true}
              previousSection="#ocean-freight"
              nextSection="#bitumen-trading"
            />
          </section>

          {/* Bitumen Trading */}
          <section id="bitumen-trading">
            <ServiceSection
              title={t('services.bitumenTrading.title') as string}
              description={t('services.bitumenTrading.description') as string}
              bullets={t('services.bitumenTrading.bullets') as string[]}
              ctas={[
                { label: t('services.bitumenTrading.ctaDetails') as string, href: '/hizmetler/bitum-ticareti' },
                { label: t('services.bitumenTrading.ctaQuote') as string, href: '/iletisim' }
              ]}
              videoSrc="/videos/bitumen-road.mp4"
              posterSrc="/videos/bitumen-road.jpg"
              previousSection="#urea-trading"
              nextSection="#kpi-band"
            />
          </section>
        </div>

        {/* KPI Band */}
        <section id="kpi-band">
          <KPIBand items={[
            { label: t('kpi.annualShipping') as string, value: '15,000', suffix: 'TEU' },
            { label: t('kpi.countriesServed') as string, value: '45', suffix: '+' },
            { label: t('kpi.averageTransit') as string, value: '12', suffix: 'gün' },
            { label: t('kpi.deliverySuccess') as string, value: '98.5', suffix: '%' }
          ]} />
        </section>

      </main>
      
      <Footer />
    </>
  )
}