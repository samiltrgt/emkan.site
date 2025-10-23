import { Metadata } from 'next'
import LogoGrid from '@/components/logo-grid'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Referanslarımız | Emkan.site',
  description: 'Güvenilir iş ortaklarımız ve başarılı projelerimiz. Deniz taşımacılığı ve emtia ticaretinde referanslarımız.',
}

export default function ReferanslarPage() {
  return (
    <>
      <NavBar />
      
      <main className="min-h-screen pt-20">
        <div className="container py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold gradient-text mb-8 text-center">
              Referanslarımız
            </h1>
            
            <p className="text-xl text-neutral-600 mb-12 text-center max-w-3xl mx-auto">
              Güvenilir iş ortaklarımız ve başarılı projelerimiz
            </p>
            
            {/* Client Logos */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-center text-primary mb-12">İş Ortaklarımız</h2>
              <LogoGrid items={[
                { name: 'Maersk', logoUrl: '/logos/maersk.svg', href: 'https://maersk.com' },
                { name: 'CMA CGM', logoUrl: '/logos/cmacgm.svg', href: 'https://cmacgm.com' },
                { name: 'MSC', logoUrl: '/logos/msc.svg', href: 'https://msc.com' },
                { name: 'Hapag-Lloyd', logoUrl: '/logos/hapag.svg', href: 'https://hapag-lloyd.com' },
                { name: 'COSCO', logoUrl: '/logos/cosco.svg', href: 'https://cosco.com' },
                { name: 'ONE', logoUrl: '/logos/one.svg', href: 'https://one-line.com' },
                { name: 'Evergreen', logoUrl: '/logos/evergreen.svg', href: 'https://evergreen-line.com' },
                { name: 'Yang Ming', logoUrl: '/logos/yangming.svg', href: 'https://yangming.com' }
              ]} />
            </div>
            
            {/* Case Studies */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-primary">Proje: Avrupa Üre Taşımacılığı</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-neutral-700">Sorun:</span>
                    <p className="text-neutral-600">Müşteri 500 ton üre için hızlı ve güvenli teslimat arıyordu.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-700">Çözüm:</span>
                    <p className="text-neutral-600">FCL konteyner ile optimize edilmiş rota planlaması.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-700">Sonuç:</span>
                    <p className="text-neutral-600">12 günde teslimat, %100 başarı oranı.</p>
                  </div>
                </div>
              </div>
              
              <div className="card">
                <h3 className="text-xl font-bold mb-4 text-primary">Proje: Bitum İthalatı</h3>
                <div className="space-y-3">
                  <div>
                    <span className="font-semibold text-neutral-700">Sorun:</span>
                    <p className="text-neutral-600">Yüksek kaliteli bitum için güvenilir tedarikçi ihtiyacı.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-700">Çözüm:</span>
                    <p className="text-neutral-600">Pen 60/70 grade bitum ile özel ambalaj çözümü.</p>
                  </div>
                  <div>
                    <span className="font-semibold text-neutral-700">Sonuç:</span>
                    <p className="text-neutral-600">Kalite garantili teslimat, uzun vadeli işbirliği.</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Statistics */}
            <div className="card">
              <h2 className="text-3xl font-bold mb-8 text-center text-primary">Başarı Rakamlarımız</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">98.5%</div>
                  <div className="text-sm text-neutral-600">Teslimat Başarı Oranı</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">45+</div>
                  <div className="text-sm text-neutral-600">Hizmet Verilen Ülke</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">15,000</div>
                  <div className="text-sm text-neutral-600">Yıllık TEU</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-accent mb-2">12</div>
                  <div className="text-sm text-neutral-600">Ortalama Transit (gün)</div>
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
