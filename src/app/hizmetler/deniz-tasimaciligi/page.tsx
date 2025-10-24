import { Metadata } from 'next'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import SpecTable from '@/components/spec-table'

export const metadata: Metadata = {
  title: 'Deniz Taşımacılığı | Emkan Global',
 
 
  description: 'FCL/LCL ve proje kargoda akıllı rota planlama; şeffaf takip. Küresel deniz taşımacılığı hizmetlerimiz.',
}

export default function DenizTasimaciligiPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-20 relative overflow-hidden">
        {/* Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-accent/5 rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 w-4 h-4 bg-accent/20 rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-6 h-6 bg-primary/20 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-40 left-20 w-3 h-3 bg-accent/30 rounded-full animate-pulse delay-2000"></div>
        <div className="absolute bottom-20 right-10 w-5 h-5 bg-primary/30 rounded-full animate-pulse delay-3000"></div>
        
        <div className="container py-20 relative z-10">
          <div className="max-w-7xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16 px-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold gradient-text mb-8">
                Deniz Taşımacılığı
              </h1>
              
              <p className="text-xl text-neutral-600 mb-12 max-w-3xl mx-auto">
                FCL/LCL ve proje kargoda akıllı rota planlama; şeffaf takip.
              </p>
              
              {/* Decorative Line */}
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full mx-auto"></div>
            </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Konteyner Taşımacılığı */}
            <div className="card group hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/30 relative overflow-hidden">
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <div className="text-3xl">🚢</div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Hızlı ve Güvenilir Konteyner Taşımacılığı</h2>
                  <div className="space-y-4 text-neutral-600 leading-relaxed">
                    <p>
                      <span className="font-semibold text-primary">Emkan Global</span> olarak, mallarınızın varış noktasına güvenli ve hızlı bir şekilde ulaşmasını sağlayan konteyner taşımacılığı hizmetleri sunuyoruz.
                    </p>
                    <p>
                      İster <span className="font-medium text-accent">yurt içi ticaret</span>, ister <span className="font-medium text-accent">ihracat ve ithalat</span> olsun, profesyonel ekibimiz, ürünlerinizin güvenli, zamanında ve en düşük maliyetle taşınmasını garanti eder.
                    </p>
                    <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-4 rounded-xl border-l-4 border-accent">
                      <p className="text-sm font-medium text-primary mb-1">Hizmet Kapsamımız:</p>
                      <p className="text-sm">Paketleme • Yükleme • Deniz Taşımacılığı • Konteyner Takibi</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Kuru Yük Taşımacılığı */}
            <div className="card group hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/30 relative overflow-hidden">
              {/* Card Background Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="flex items-start gap-6 relative z-10">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                  <div className="text-3xl">⚓</div>
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold mb-4 text-primary">Kuru Yük Gemisi ile Güvenli Taşımacılık</h2>
                  <div className="space-y-4 text-neutral-600 leading-relaxed">
                    <p>
                      <span className="font-semibold text-primary">Emkan Global</span> olarak, kuru yük gemileri ile büyük hacimli yüklerinizi güvenle taşıyoruz.
                    </p>
                    <p>
                      <span className="font-medium text-accent">Tahıl, kömür, mineraller</span> ve diğer kuru yükler için özel çözümler sunuyor, yüklerinizin zamanında ve hasarsız varış noktasına ulaşmasını sağlıyoruz.
                    </p>
                    <div className="bg-gradient-to-r from-primary/10 to-accent/10 p-4 rounded-xl border-l-4 border-primary">
                      <p className="text-sm font-medium text-primary mb-1">Avantajlarımız:</p>
                      <p className="text-sm">Deneyimli Ekip • Modern Gemi Filosu • Güven ve Verimlilik</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Proje Kargo</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  📦
                </div>
                <h3 className="font-semibold text-lg mb-2">Ağır Yük</h3>
                <p className="text-neutral-600 text-sm">Özel ekipman ve makine taşımacılığı</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  🚛
                </div>
                <h3 className="font-semibold text-lg mb-2">Multimodal</h3>
                <p className="text-neutral-600 text-sm">Deniz-kara-hava kombinasyonu</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center text-white font-bold text-xl mx-auto mb-4">
                  📍
                </div>
                <h3 className="font-semibold text-lg mb-2">Rota Optimizasyonu</h3>
                <p className="text-neutral-600 text-sm">Akıllı planlama ve zamanlama</p>
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
