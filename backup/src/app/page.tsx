import Hero from '@/components/hero'
import ServiceSection from '@/components/service-section'
import KPIBand from '@/components/kpi-band'
import LogoGrid from '@/components/logo-grid'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Ana Sayfa | Emkan.site',
  description: 'Denizde hızlı, tedarikte şeffaf. Küresel deniz taşımacılığı, üre ve bitumda uçtan uca çözümler.',
}

export default function HomePage() {
  return (
    <>
      <NavBar />
      
      <main className="min-h-screen snap-y snap-mandatory">
        {/* Hero Section */}
        <Hero 
          title="Denizde hızlı, tedarikte şeffaf."
          subtitle="Küresel deniz taşımacılığı, üre ve bitumda uçtan uca çözümler."
          ctaPrimary={{ label: 'Teklif Al', href: '/iletisim' }}
          ctaSecondary={{ label: 'Hizmetler', href: '#services' }}
        />

        {/* Services Section */}
        <div id="services" className="snap-y snap-mandatory">
          {/* Ocean Freight */}
          <section id="ocean-freight">
            <ServiceSection
              title="Deniz Taşımacılığı"
              description="FCL/LCL ve proje kargoda akıllı rota planlama; şeffaf takip."
              bullets={[
                "FCL & LCL konteyner taşımacılığı",
                "Proje kargo ve ağır yük",
                "Multimodal lojistik çözümleri",
                "Gerçek zamanlı takip sistemi"
              ]}
              ctas={[
                { label: 'Detaylar', href: '/hizmetler/deniz-tasimaciligi' },
                { label: 'Teklif Al', href: '/iletisim' }
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
              title="Üre (N46) Ticareti"
              description="Urea 46% N — prilled & granular; güvenilir menşe, doğru termin."
              bullets={[
                "46% N • Prilled/Granular",
                "50kg/Jumbo/Bulk ambalaj",
                "FOB/CFR/CIF teslim",
                "SGS/COA/CIQ belgeleri"
              ]}
              ctas={[
                { label: 'Detaylar', href: '/hizmetler/ure-ticareti' },
                { label: 'Teklif Al', href: '/iletisim' }
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
              title="Bitum Ticareti"
              description="Pen 60/70 ve 80/100 — standartlara uygun kalite, doğru ambalaj."
              bullets={[
                "Pen 60/70 • 80/100",
                "VG30 viscosity grade",
                "Drum/Bulk ambalaj",
                "COA/MSDS belgeleri"
              ]}
              ctas={[
                { label: 'Detaylar', href: '/hizmetler/bitum-ticareti' },
                { label: 'Teklif Al', href: '/iletisim' }
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
            { label: 'Yıllık Taşıma', value: '15,000', suffix: 'TEU' },
            { label: 'Hizmet Verilen Ülke', value: '45', suffix: '+' },
            { label: 'Ortalama Transit Süre', value: '12', suffix: 'gün' },
            { label: 'Teslimat Başarı Oranı', value: '98.5', suffix: '%' }
          ]} />
        </section>

        {/* References */}
        <section className="py-20 bg-neutral-50">
          <div className="container">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold gradient-text mb-4">Referanslarımız</h2>
              <p className="text-xl text-neutral-600">
                Güvenilir iş ortaklarımız ve başarılı projelerimiz
              </p>
            </div>
            
            <LogoGrid items={[
              { name: 'Maersk', logoUrl: '/logos/maersk.svg' },
              { name: 'CMA CGM', logoUrl: '/logos/cmacgm.svg' },
              { name: 'MSC', logoUrl: '/logos/msc.svg' },
              { name: 'Hapag-Lloyd', logoUrl: '/logos/hapag.svg' },
              { name: 'COSCO', logoUrl: '/logos/cosco.svg' },
              { name: 'ONE', logoUrl: '/logos/one.svg' },
              { name: 'Evergreen', logoUrl: '/logos/evergreen.svg' },
              { name: 'Yang Ming', logoUrl: '/logos/yangming.svg' }
            ]} />
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  )
}