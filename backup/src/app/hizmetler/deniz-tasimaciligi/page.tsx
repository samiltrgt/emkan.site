import { Metadata } from 'next'
import NavBar from '@/components/navbar'
import SpecTable from '@/components/spec-table'

export const metadata: Metadata = {
  title: 'Deniz Taşımacılığı | Emkan.site',
  description: 'FCL/LCL ve proje kargoda akıllı rota planlama; şeffaf takip. Küresel deniz taşımacılığı hizmetlerimiz.',
}

export default function DenizTasimaciligiPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-20">
      <div className="container py-20">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold gradient-text mb-8 text-center">
            Deniz Taşımacılığı
          </h1>
          
          <p className="text-xl text-neutral-600 mb-12 text-center max-w-3xl mx-auto">
            FCL/LCL ve proje kargoda akıllı rota planlama; şeffaf takip.
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-primary">FCL Taşımacılık</h2>
              <ul className="space-y-3 text-neutral-600">
                <li>• Tam konteyner yüklemeleri</li>
                <li>• 20' ve 40' konteyner seçenekleri</li>
                <li>• Door-to-door teslimat</li>
                <li>• Sigorta ve gümrük hizmetleri</li>
              </ul>
            </div>
            
            <div className="card">
              <h2 className="text-2xl font-bold mb-4 text-primary">LCL Taşımacılık</h2>
              <ul className="space-y-3 text-neutral-600">
                <li>• Kısmi konteyner paylaşımı</li>
                <li>• Küçük hacimli kargolar için ideal</li>
                <li>• Konsolidasyon hizmetleri</li>
                <li>• Ekonomik çözümler</li>
              </ul>
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
          
          <div className="card">
            <h2 className="text-3xl font-bold mb-8 text-center text-primary">Sıkça Sorulan Sorular</h2>
            <div className="space-y-6">
              <div className="border-b border-neutral-200 pb-4">
                <h3 className="font-semibold text-lg mb-2">Transit süreleri ne kadar?</h3>
                <p className="text-neutral-600">Avrupa rotalarında 7-14 gün, Asya rotalarında 15-25 gün arasında değişmektedir.</p>
              </div>
              <div className="border-b border-neutral-200 pb-4">
                <h3 className="font-semibold text-lg mb-2">Takip sistemi nasıl çalışır?</h3>
                <p className="text-neutral-600">Gerçek zamanlı konum takibi ve durum güncellemeleri ile sürekli bilgilendirme.</p>
              </div>
              <div className="border-b border-neutral-200 pb-4">
                <h3 className="font-semibold text-lg mb-2">Sigorta kapsamı nedir?</h3>
                <p className="text-neutral-600">Tam kapsamlı sigorta seçenekleri ve özel risk analizi ile koruma.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      </main>
    </>
  )
}
