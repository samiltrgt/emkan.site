import { Metadata } from 'next'
import NavBar from '@/components/navbar'
import SpecTable from '@/components/spec-table'

export const metadata: Metadata = {
  title: 'Bitum Ticareti | Emkan.site',
  description: 'Pen 60/70 ve 80/100 — standartlara uygun kalite, doğru ambalaj. Kaliteli bitum ticareti hizmetlerimiz.',
}

const bitumenSpecs = {
  title: "Bitum Çeşitleri",
  grades: [
    {
      name: "Pen 60/70",
      penetration: "60-70 dmm",
      softeningPoint: "49-56°C",
      packaging: ["Drum", "Bulk"]
    },
    {
      name: "Pen 80/100", 
      penetration: "80-100 dmm",
      softeningPoint: "42-50°C",
      packaging: ["Drum", "Bulk"]
    },
    {
      name: "VG30",
      viscosity: "2400-3600 Poise @60°C",
      packaging: ["Drum", "Bulk"]
    }
  ],
  incoterms: ["FOB", "CFR", "CIF"],
  ports: ["Mersin", "İzmir", "Ceyhan"],
  docs: ["COA", "MSDS"]
}

export default function BitumTicaretiPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-20">
      <div className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold gradient-text mb-8 text-center">
            Bitum Ticareti
          </h1>
          
          <p className="text-xl text-neutral-600 mb-12 text-center max-w-3xl mx-auto">
            Pen 60/70 ve 80/100 — standartlara uygun kalite, doğru ambalaj.
          </p>
          
          <div className="card mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Bitum Çeşitleri</h2>
            
            <SpecTable data={bitumenSpecs} />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Uygulama Alanları</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-neutral-600">Yol kaplama ve asfalt üretimi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-neutral-600">Su yalıtım sistemleri</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-neutral-600">Çatı kaplama malzemeleri</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-neutral-600">Endüstriyel yalıtım</span>
                </div>
              </div>
            </div>
            
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-primary">Ambalaj Seçenekleri</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-neutral-600">Drum ambalaj - 200kg kapasiteli</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-neutral-600">Dökme yükleme - tanker bazlı</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-3 h-3 bg-accent rounded-full"></div>
                  <span className="text-neutral-600">Özel ısıtmalı konteynerler</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card mb-16">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Kalite Belgeleri</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="text-center p-4 bg-neutral-50 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center text-white font-bold mx-auto mb-3">
                  COA
                </div>
                <h3 className="font-semibold mb-2">COA Sertifikası</h3>
                <p className="text-sm text-neutral-600">Kalite analiz sertifikası</p>
              </div>
              <div className="text-center p-4 bg-neutral-50 rounded-xl">
                <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center text-white font-bold mx-auto mb-3">
                  MSDS
                </div>
                <h3 className="font-semibold mb-2">MSDS Raporu</h3>
                <p className="text-sm text-neutral-600">Güvenlik veri sayfası</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="border-b border-neutral-200 pb-4">
                <h3 className="font-semibold text-lg mb-2">Bitum çeşitleri arasındaki fark nedir?</h3>
                <p className="text-neutral-600">Penetration değerleri ve softening point sıcaklıkları farklılık gösterir. Uygulama alanına göre uygun grade seçimi yapılır.</p>
              </div>
              <div className="border-b border-neutral-200 pb-4">
                <h3 className="font-semibold text-lg mb-2">Depolama koşulları nasıl?</h3>
                <p className="text-neutral-600">Bitum ısıtmalı tanklarda veya özel depolama alanlarında saklanmalıdır. Sıcaklık kontrolü kritiktir.</p>
              </div>
              <div className="border-b border-neutral-200 pb-4">
                <h3 className="font-semibold text-lg mb-2">Teslimat süreleri ne kadar?</h3>
                <p className="text-neutral-600">Stok durumuna göre 10-20 gün arasında teslimat yapılabilmektedir.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}
