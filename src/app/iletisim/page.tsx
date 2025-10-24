'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import { submitContactForm } from '@/app/actions/contact'

export default function IletisimPage() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    service: '',
    message: ''
  })
  
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const formDataObj = new FormData()
      Object.entries(formData).forEach(([key, value]) => {
        formDataObj.append(key, value)
      })

      const result = await submitContactForm(formDataObj)
      
      if (result.success) {
        setSubmitStatus({ type: 'success', message: result.message })
        setFormData({
          name: '',
          company: '',
          email: '',
          service: '',
          message: ''
        })
      } else {
        setSubmitStatus({ type: 'error', message: result.message })
      }
    } catch (error) {
      console.error('Form gönderim hatası:', error);
      setSubmitStatus({ 
        type: 'error', 
        message: error instanceof Error 
          ? `Hata: ${error.message}` 
          : 'Beklenmeyen bir hata oluştu. Lütfen tekrar deneyiniz.' 
      })
    } finally {
      setIsSubmitting(false)
    }
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
                  {/* Status Messages */}
                  {submitStatus.type && (
                    <div className={`p-4 rounded-2xl ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-50 border border-green-200 text-green-800' 
                        : 'bg-red-50 border border-red-200 text-red-800'
                    }`}>
                      <div className="flex items-center space-x-2">
                        <span className="text-xl">
                          {submitStatus.type === 'success' ? '✅' : '❌'}
                        </span>
                        <p className="font-medium">{submitStatus.message}</p>
                      </div>
                    </div>
                  )}
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
                      <a href="/kvkk" className="text-accent hover:underline">KVKK Aydınlatma Metni</a>&apos;ni okudum ve kabul ediyorum. *
                    </label>
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className={`w-full text-lg py-4 rounded-2xl transition-all duration-300 transform hover:scale-105 ${
                      isSubmitting
                        ? 'bg-gray-400 cursor-not-allowed text-white'
                        : 'btn-primary'
                    }`}
                  >
                    {isSubmitting ? (
                      <div className="flex items-center justify-center space-x-2">
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Gönderiliyor...</span>
                      </div>
                    ) : (
                      'Teklif Gönder'
                    )}
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
                        <span className="text-white text-xl">✉️</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">E-posta</h3>
                        <a href="mailto:info@emkanglobal.com" className="text-neutral-600 hover:text-accent transition-colors duration-300">
                          info@emkanglobal.com
                        </a>
                      </div>
                    </div>
                  </div>
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
