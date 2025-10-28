'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { useLanguage } from '@/contexts/language-context'
import LanguageSelector from '@/components/language-selector'

export default function NavBar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '/', label: t('nav.home') },
    { href: '/hakkimizda', label: t('nav.about') },
    { href: '/hizmetler', label: t('nav.services') },
    { href: '/iletisim', label: t('nav.contact') },
  ]

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/30 backdrop-blur-3xl shadow-xl border-b border-white/20' 
            : 'bg-white/95 backdrop-blur-md shadow-sm'
        }`}
      >
        <div className="container">
          <div className="relative h-16 md:h-20">
            {/* Desktop: Ana Sayfa, Hizmetler, Logo, Hakkımızda, İletişim */}
            <div className="hidden lg:flex items-center justify-center h-full">
              <div className="flex items-center justify-center w-full max-w-5xl gap-8">
                <Link 
                  href="/" 
                  className="text-neutral-700 hover:text-primary transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
                >
                  {t('nav.home')}
                </Link>
                <Link 
                  href="/hizmetler" 
                  className="text-neutral-700 hover:text-primary transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
                >
                  {t('nav.services')}
                </Link>
                
                {/* Logo */}
                <Link href="/" className="flex items-center mx-4">
                  <motion.img 
                    src="/logos/emkanlogo.png" 
                    alt="Emkan Logo" 
                    className="w-12 h-12 md:w-16 md:h-16 object-contain"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  />
                </Link>
                
                <Link 
                  href="/hakkimizda" 
                  className="text-neutral-700 hover:text-primary transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
                >
                  {t('nav.about')}
                </Link>
                <Link 
                  href="/iletisim" 
                  className="text-neutral-700 hover:text-primary transition-colors duration-300 font-medium px-3 py-2 rounded-lg hover:bg-gray-50"
                >
                  {t('nav.contact')}
                </Link>
              </div>
            </div>

            {/* Desktop Dil Seçici - Sağ üst köşe */}
            <div className="hidden lg:block absolute top-2 right-2">
              <LanguageSelector />
            </div>

            {/* Mobile: logo left, menu button right */}
            <div className="flex items-center justify-between h-full lg:hidden">
              <Link href="/" className="flex items-center">
                <img 
                  src="/logos/emkanlogo.png" 
                  alt="Emkan Logo" 
                  className="w-12 h-12 object-contain"
                />
              </Link>
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="p-2 text-gray-700 hover:text-primary transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 z-[90] bg-primary/95 backdrop-blur-xl shadow-2xl border-b border-white/20 md:hidden"
          >
            <div className="container py-6">
              <div className="space-y-2">
                {/* Mobil menüde sadece Hakkımızda, Hizmetler, İletişim gösteriliyor */}
                {navLinks.filter(link => link.href !== '/').map((link, index) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-lg font-semibold text-white hover:text-accent hover:bg-white/10 rounded-xl transition-all duration-300"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>


              {/* Mobile CTA */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="mt-4"
              >
                <Link 
                  href="/iletisim" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-center px-6 py-3 bg-accent text-white rounded-xl font-bold hover:bg-accent/90 transition-all duration-300 shadow-md"
                >
                  {t('nav.contact')}
                </Link>
              </motion.div>

              {/* Dil Seçici - Sadece mobilde */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="mt-6 pt-4 border-t border-white/20"
              >
                <div className="text-center">
                  <p className="text-white/80 text-sm mb-3">Dil / Language</p>
                  <LanguageSelector />
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
