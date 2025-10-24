'use client'

import ServiceSection from '@/components/service-section'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import { useLanguage } from '@/contexts/language-context'

export default function HizmetlerPage() {
  const { t } = useLanguage()
  
  return (
    <>
      <NavBar />
      
      <main className="min-h-screen snap-y snap-mandatory">
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
              nextSection="#"
            />
          </section>
        </div>
      </main>
      
      <Footer />
    </>
  )
}
