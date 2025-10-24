'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import NavBar from '@/components/navbar'
import Footer from '@/components/footer'
import { submitContactForm } from '@/app/actions/contact'
import { useLanguage } from '@/contexts/language-context'

export default function IletisimPage() {
  const { t } = useLanguage()
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
        setSubmitStatus({ type: 'success', message: t('contact.form.success') as string })
        setFormData({
          name: '',
          company: '',
          email: '',
          service: '',
          message: ''
        })
      } else {
        setSubmitStatus({ type: 'error', message: t('contact.form.error') as string })
      }
    } catch (error) {
      console.error('Form gönderim hatası:', error);
      setSubmitStatus({ type: 'error', message: t('contact.form.error') as string })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <>
      <NavBar />
      <main className="min-h-screen pt-20 relative overflow-hidden">
        {/* Background Design */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-accent/5 to-primary/10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary/10 rounded-full blur-3xl transform -translate-x-1/2 translate-y-1/2"></div>
        
        <div className="container py-20 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Hero Section */}
            <div className="text-center mb-16 px-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold gradient-text mb-8">
                {t('contact.title')}
              </h1>
              
              <p className="text-xl text-neutral-600 mb-12 max-w-3xl mx-auto">
                {t('contact.subtitle')}
              </p>
              
              {/* Decorative Line */}
              <div className="w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                className="card"
              >
                <h2 className="text-2xl font-bold mb-6 text-primary">{t('contact.form.submit')}</h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        {t('contact.form.name')} *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                        placeholder={t('contact.form.name') as string}
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                        {t('contact.form.company')}
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                        placeholder={t('contact.form.company') as string}
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      {t('contact.form.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                      placeholder={t('contact.form.email') as string}
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                      {t('contact.form.service')}
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300"
                    >
                      <option value="">{t('contact.form.service')}</option>
                      <option value="oceanFreight">{t('contact.serviceTypes.oceanFreight')}</option>
                      <option value="ureaTrading">{t('contact.serviceTypes.ureaTrading')}</option>
                      <option value="bitumenTrading">{t('contact.serviceTypes.bitumenTrading')}</option>
                      <option value="other">{t('contact.serviceTypes.other')}</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                      {t('contact.form.message')} *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-neutral-300 rounded-2xl focus:ring-2 focus:ring-accent focus:border-transparent transition-all duration-300 resize-none"
                      placeholder={t('contact.form.message') as string}
                    />
                  </div>
                  
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-primary to-accent text-white py-4 px-6 rounded-2xl font-semibold text-lg hover:shadow-lg hover:scale-105 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isSubmitting ? 'Gönderiliyor...' : t('contact.form.submit')}
                  </button>
                  
                  {submitStatus.type && (
                    <div className={`p-4 rounded-2xl text-center font-medium ${
                      submitStatus.type === 'success' 
                        ? 'bg-green-100 text-green-800 border border-green-200' 
                        : 'bg-red-100 text-red-800 border border-red-200'
                    }`}>
                      {submitStatus.message}
                    </div>
                  )}
                </form>
              </motion.div>

              {/* Contact Information */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-8"
              >
                <div className="card">
                  <h2 className="text-2xl font-bold mb-6 text-primary">{t('contact.contactInfo.title')}</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-primary to-accent rounded-2xl flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xl">✉️</span>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{t('contact.contactInfo.email')}</h3>
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