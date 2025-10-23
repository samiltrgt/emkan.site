import { Metadata } from 'next'
import NavBar from '@/components/navbar'
import SpecTable from '@/components/spec-table'

export const metadata: Metadata = {
  title: 'Üre Ticareti | Emkan Global',
  description: 'Urea 46% N — prilled & granular; güvenilir menşe, doğru termin. Kaliteli üre ticareti hizmetlerimiz.',
}

const ureSpecs = {
  title: "Urea 46% N",
  forms: ["Prilled", "Granular"],
  spec: {
    "N%": "46.0",
    "Biuret%": "≤1.0",
    "Moisture%": "≤0.5",
    "Size": "2‑4 mm"
  },
  packaging: ["50kg bag", "Jumbo bag", "Bulk"],
  incoterms: ["FOB", "CFR", "CIF"],
  origins: ["TR/ME/AS"],
  ports: ["Mersin", "İskenderun", "İzmir"],
  moq: "1×20' FCL",
  docs: ["SGS", "COA", "CIQ"]
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
          
          <div className="card mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Ürün Özellikleri</h2>
            
            <SpecTable data={ureSpecs} />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Ambalaj Seçenekleri</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-neutral-600">50kg torbalar - standart paketleme</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-neutral-600">Jumbo torbalar - 1 ton kapasiteli</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-neutral-600">Dökme yükleme - konteyner bazlı</span>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Teslim Şekilleri</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-neutral-600">FOB - Limanda teslim</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-neutral-600">CFR - Navlun dahil</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-neutral-600">CIF - Sigorta dahil</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Kalite Belgeleri</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-neutral-50 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold mx-auto mb-3">
                  SGS
                </div>
                <h3 className="font-semibold mb-2">SGS Analiz</h3>
                <p className="text-sm text-neutral-600">Bağımsız kalite kontrol raporu</p>
              </div>
              <div className="text-center p-4 bg-neutral-50 rounded-xl">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white font-bold mx-auto mb-3">
                  COA
                </div>
                <h3 className="font-semibold mb-2">COA Sertifikası</h3>
                <p className="text-sm text-neutral-600">Kalite analiz sertifikası</p>
              </div>
              <div className="text-center p-4 bg-neutral-50 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold mx-auto mb-3">
                  CIQ
                </div>
                <h3 className="font-semibold mb-2">CIQ Raporu</h3>
                <p className="text-sm text-neutral-600">Çin kalite kontrol raporu</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="border-b border-neutral-200 pb-4">
                <h3 className="font-semibold text-lg mb-2">Minimum sipariş miktarı nedir?</h3>
                <p className="text-neutral-600">Minimum sipariş miktarı 1×20' FCL konteyner (yaklaşık 20 ton) olarak belirlenmiştir.</p>
              </div>
              <div className="border-b border-neutral-200 pb-4">
                <h3 className="font-semibold text-lg mb-2">Ödeme koşulları nasıl?</h3>
                <p className="text-neutral-600">LC (Letter of Credit) veya T/T ödeme seçenekleri mevcuttur. Detaylar için iletişime geçin.</p>
              </div>
              <div className="border-b border-neutral-200 pb-4">
                <h3 className="font-semibold text-lg mb-2">Teslim süreleri ne kadar?</h3>
                <p className="text-neutral-600">Stok durumuna göre 15-30 gün arasında teslimat yapılabilmektedir.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}
