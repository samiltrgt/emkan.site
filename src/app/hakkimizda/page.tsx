import { Metadata } from 'next'
import Reveal from '@/components/reveal'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import { ShieldCheck, Cpu, Globe2, Sparkles, Award, TrendingUp, Clock } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Hakkımızda | Emkan Global',
  description: 'Deniz taşımacılığı, Bitum ve Üre ticaretinde güvenilir ortağınız. Misyonumuz ve vizyonumuz hakkında bilgi edinin.',
}

export default function AboutPage() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-32 bg-gradient-to-br from-primary via-primary/95 to-accent/20 text-white overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[url('/patterns/grid.svg')] opacity-10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full blur-2xl transform -translate-x-1/2 translate-y-1/2" />
        
        <div className="container relative z-10">
          <div className="max-w-5xl mx-auto text-center">
            <Reveal y={30} className="mb-8">
              <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
                Hakkımızda
              </h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                Küresel deniz taşımacılığı, Bitum ve Üre ticaretinde güvenilir ortağınız. 
                Sorumlu vizyonumuzla dünya çapında değer yaratıyoruz.
              </p>
            </Reveal>
            
            <Reveal y={20} delay={0.2} className="flex flex-wrap justify-center gap-4 mt-12">
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Globe2 className="w-5 h-5" />
                <span className="text-sm font-medium">45+ Ülke</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <Award className="w-5 h-5" />
                <span className="text-sm font-medium">Güvenilir Partner</span>
              </div>
              <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-6 py-3">
                <TrendingUp className="w-5 h-5" />
                <span className="text-sm font-medium">Sürdürülebilir Büyüme</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <Reveal y={30} className="space-y-8">
                <div>
                  <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                    Kim Olduğumuz
                  </h2>
                  <div className="w-20 h-1 bg-gradient-to-r from-accent to-primary rounded-full mb-8"></div>
                </div>
                
                <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                  <p>
                  Uluslararası ticaret ve iş geliştirme alanlarında faaliyet gösteren dinamik bir ekibiz.
Müşterilerimize güvenilir, şeffaf ve sürdürülebilir çözümler sunmayı hedefliyoruz.
Yılların kazandırdığı tecrübe ve güçlü iş bağlantılarımızla, global pazarlarda etkin bir şekilde yer alıyor ve iş ortaklarımız için değer yaratıyoruz.
Profesyonellik, dürüstlük ve kalite anlayışı, tüm süreçlerimizin temelini oluşturur

                  </p>
                  <p>
                    Küresel deniz taşımacılığı, Bitum ve Üre ticaretinde güvenilir bir köprü olmayı hedefliyoruz. Operasyonel mükemmellik, etik ilkelere bağlılık ve sürdürülebilir büyüme ile değer yaratıyoruz.
                  </p>
                </div>
              </Reveal>
              
              <Reveal y={30} delay={0.2} className="relative">
                <div className="relative">
                  <div className="aspect-[4/3] bg-gradient-to-br from-primary/10 to-accent/10 rounded-3xl p-8 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gradient-to-br from-accent to-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <Globe2 className="w-12 h-12 text-white" />
                      </div>
                      <h3 className="text-2xl font-bold text-primary mb-2">Küresel Vizyon</h3>
                      <p className="text-gray-600">Dünya çapında güvenilir hizmet</p>
                    </div>
                  </div>
                  {/* Floating elements */}
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-accent/20 rounded-2xl rotate-12"></div>
                  <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-primary/20 rounded-xl -rotate-12"></div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-white">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <Reveal y={30} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-primary mb-6">
                Odak Noktalarımız
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Sorumlu vizyonumuzla, teknoloji ve kalite odaklı yaklaşımımızla, 
                bölgesel liderlik hedefimizle ve inovasyon ruhumuzla fark yaratıyoruz.
              </p>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Sorumlu Vizyon */}
              <Reveal y={30} delay={0.1} className="group">
                <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/30">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <ShieldCheck className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-4">Sorumlu Vizyon</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Destek verdiğimiz tüm alanlarda, sorumluluklarımızın bilincinde olarak, topluma öncü ve örnek olmaya çalışan bir vizyonla hareket etmekte, yatırımlarıyla ülke ekonomisine ve istihdama katkı sağlamayı hedeflemekteyiz.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Teknoloji ve Kalite */}
              <Reveal y={30} delay={0.2} className="group">
                <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/30">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Cpu className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-4">Teknoloji ve Kalite</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Hizmet verdiğimiz müşterilerimize; üstün teknoloji, yüksek marka kalitesi ve dinamik insan kaynağı sunmaktayız. Temsilcisi olduğumuz ürünlerin değerini sadece Türkiye sınırları içinde değil, bölgesel ve küresel ölçekte de yükseltmeyi hedeflemektedir.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* Bölgesel Lider */}
              <Reveal y={30} delay={0.3} className="group">
                <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/30">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Globe2 className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-4">Bölgesel Lider</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Hammadde, Gıda başta olmak üzere tüm uluslararası ticaret ürünlerinde bölgesel bir lider olma vizyonunu ortaya koymakta ve bu konuda çalışmalarımıza aralıksız devam etmekteyiz.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>

              {/* İnovasyon ve Uyum */}
              <Reveal y={30} delay={0.4} className="group">
                <div className="h-full bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 hover:border-accent/30">
                  <div className="flex items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <Sparkles className="w-8 h-8 text-accent" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-primary mb-4">İnovasyon ve Uyum</h3>
                      <p className="text-gray-700 leading-relaxed">
                        Her zaman yenilikçi yaklaşımımızla, tüm bilgi birikimimiz ve işbirliklerimizin bir ürünü olarak, dünya çapındaki gelişmelere hızla uyum sağlayarak sahip olduğumuz geniş hizmet, bilgi ve işbirlikteliği ağını en iyi şekilde değerlendirmekteyiz.
                      </p>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>


      </main>
      
      <Footer />
    </>
  )
}
