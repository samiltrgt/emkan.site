import { Metadata } from 'next'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'

export const metadata: Metadata = {
  title: 'Bitum Ticareti | Emkan Global',
  description: 'Pen 60/70 ve 80/100 — standartlara uygun kalite, doğru ambalaj. Kaliteli bitum ticareti hizmetlerimiz.',
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
          
          {/* Emkan Global Bitum Ticareti Bölümü */}
          <div className="card mb-16 group hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/30">
            <div className="flex items-start gap-6">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                <div className="text-2xl">🛣️</div>
              </div>
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-6 text-primary">Emkan Global Bitum Ticaretinde Güvenilir İş Ortağı</h2>
                <div className="space-y-4 text-neutral-600 leading-relaxed">
                  <p>
                    <span className="font-semibold text-primary">Emkan Global</span> bitüm ticaretinde güvenilir bir iş ortağıdır. <span className="font-medium text-accent">Yol yapımı, asfalt ve su yalıtımı</span> sektörlerinde kullanılan bitümü, müşterilerimize güvenilir tedarik ve zamanında teslimat garantisi ile sunuyoruz.
                  </p>
                  <div className="bg-gradient-to-r from-accent/10 to-primary/10 p-4 rounded-xl border-l-4 border-accent">
                    <p className="text-sm font-medium text-primary mb-1">Hizmet Garantilerimiz:</p>
                    <p className="text-sm">Güvenilir Tedarik • Zamanında Teslimat • Kalite Garantisi</p>
                  </div>
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
