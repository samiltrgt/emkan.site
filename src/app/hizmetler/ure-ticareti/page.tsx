import { Metadata } from 'next'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Üre Ticareti | Emkan Global',
  description: 'Urea 46% N — prilled & granular; güvenilir menşe, doğru termin. Kaliteli üre ticareti hizmetlerimiz.',
}


export default function UreTicaretiPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-20">
      <div className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold gradient-text mb-8 text-center">
            Üre Ticareti
          </h1>
          
          <p className="text-xl text-neutral-600 mb-12 text-center max-w-3xl mx-auto">
            Urea 46% N — prilled & granular; güvenilir menşe, doğru termin.
          </p>
          
          {/* Güvenilir Üre Ticareti Bölümü */}
          <div className="card mb-16 group hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/30">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <div className="text-2xl">🌾</div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6 text-primary">Güvenilir Üre Ticareti, Global Pazarda Güçlü Marka!</h2>
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>
                    Yüksek kaliteli üre ürünlerini, modern pazarlama stratejileriyle dünya pazarına sunuyoruz. <span className="font-semibold text-primary">Güven, hız ve sürdürülebilir iş birlikleri</span> bizim önceliğimizdir.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Üre Nedir Bölümü */}
          <div className="card mb-16 group hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-primary/30">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <div className="text-2xl">🔬</div>
              </div>
              <div className="flex-1">
                <h2 className="text-2xl font-bold mb-4 text-primary">Üre Nedir ve Neden Önemlidir?</h2>
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>
                    <span className="font-semibold text-primary">Üre</span>, bitkilerin büyümesi için gerekli olan azotu yüksek oranda içeren bir gübredir. Tarımda verimliliği artıran bu ürün, dünya genelinde en çok tercih edilen gübre çeşitlerinden biridir.
                  </p>
                  <p>
                    Firmamız, <span className="font-medium text-accent">kaliteli üre tedarikiyle</span> tarımsal üretimi desteklemekte ve <span className="font-medium text-accent">güvenilir ticaret ağıyla</span> müşterilerine en iyi çözümleri sunmaktadır.
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
