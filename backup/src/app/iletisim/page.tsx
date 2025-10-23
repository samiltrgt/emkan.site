'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Form submission logic here
    console.log('Form submitted:', formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
      <NavBar />
      
      <main className="min-h-screen pt-20">
        <div className="container py-20">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl font-bold gradient-text mb-8 text-center">
              İletişim
            </h1>
            
            <p className="text-xl text-neutral-600 mb-12 text-center max-w-3xl mx-auto">
              Projeleriniz için bizimle iletişime geçin. Size en uygun çözümü sunalım.
            </p>
            
            <div className="grid md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="card"
              >
                <h2 className="text-2xl font-bold mb-6 text-primary">Teklif Alın</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        Ad Soyad *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                        placeholder="Adınız ve soyadınız"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                        Şirket
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                        placeholder="Şirket adınız"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        E-posta *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                        placeholder="email@example.com"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                        Telefon
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                        placeholder="+90 555 123 45 67"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                      Hizmet Türü *
                    </label>
                    <select
                      id="service"
                      name="service"
                      required
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Hizmet seçiniz</option>
                      <option value="deniz-tasimaciligi">Deniz Taşımacılığı</option>
                      <option value="ure-ticareti">Üre Ticareti</option>
                      <option value="bitum-ticareti">Bitum Ticareti</option>
                      <option value="genel">Genel Bilgi</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      Mesaj *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Projeniz hakkında detaylı bilgi veriniz..."
                    />
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <input
                      type="checkbox"
                      id="kvkk"
                      required
                      className="mt-1 w-4 h-4 text-accent border-neutral-300 rounded focus:ring-accent"
                    />
                    <label htmlFor="kvkk" className="text-sm text-neutral-600">
                      <a href="/kvkk" className="text-accent hover:underline">KVKK Aydınlatma Metni</a>'ni okudum ve kabul ediyorum. *
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn-primary text-lg py-4"
                  >
                    Teklif Gönder
                  </button>
                </form>
              </motion.div>
              
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="card">
                  <h2 className="text-2xl font-bold mb-6 text-primary">İletişim Bilgileri</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">📞</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Telefon</h3>
                        <a href="tel:+905551234567" className="text-neutral-600 hover:text-accent transition-colors duration-300">
                          +90 555 123 45 67
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">✉️</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">E-posta</h3>
                        <a href="mailto:info@emkan.site" className="text-neutral-600 hover:text-accent transition-colors duration-300">
                          info@emkan.site
                        </a>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">📍</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">Adres</h3>
                        <p className="text-neutral-600">
                          Mersin Serbest Bölge<br />
                          Mersin, Türkiye
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="card">
                  <h2 className="text-2xl font-bold mb-6 text-primary">Çalışma Saatleri</h2>
                  
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Pazartesi - Cuma</span>
                      <span className="font-medium">09:00 - 18:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Cumartesi</span>
                      <span className="font-medium">09:00 - 13:00</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-neutral-600">Pazar</span>
                      <span className="font-medium">Kapalı</span>
                    </div>
                  </div>
                </div>
                
                <div className="card">
                  <h2 className="text-2xl font-bold mb-6 text-primary">Acil Durum</h2>
                  <p className="text-neutral-600 mb-4">
                    Acil durumlar için 7/24 ulaşabileceğiniz telefon hattımız:
                  </p>
                  <a href="tel:+905551234567" className="text-accent font-semibold text-lg hover:underline">
                    +90 555 123 45 67
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </>
  )
}
