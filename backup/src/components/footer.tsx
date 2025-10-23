'use client'

import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-primary text-white">
      <div className="container py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-accent to-white rounded-lg flex items-center justify-center">
                <span className="text-primary font-bold text-sm">E</span>
              </div>
              <span className="font-heading font-bold text-xl">Emkan.site</span>
            </div>
            <p className="text-neutral-300 mb-6 max-w-md">
              Küresel deniz taşımacılığı ve emtia ticaretinde güvenilir ortağınız. 
              Denizde hızlı, tedarikte şeffaf çözümler.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300">
                <span className="text-sm">📧</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300">
                <span className="text-sm">📱</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors duration-300">
                <span className="text-sm">💼</span>
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Hizmetler</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/hizmetler/deniz-tasimaciligi" className="text-neutral-300 hover:text-accent transition-colors duration-300">
                  Deniz Taşımacılığı
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/ure-ticareti" className="text-neutral-300 hover:text-accent transition-colors duration-300">
                  Üre Ticareti
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/bitum-ticareti" className="text-neutral-300 hover:text-accent transition-colors duration-300">
                  Bitum Ticareti
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">İletişim</h3>
            <div className="space-y-3 text-neutral-300">
              <div className="flex items-center space-x-2">
                <span className="text-accent">📞</span>
                <a href="tel:+905551234567" className="hover:text-accent transition-colors duration-300">
                  +90 555 123 45 67
                </a>
              </div>
              <div className="flex items-center space-x-2">
                <span className="text-accent">✉️</span>
                <a href="mailto:info@emkan.site" className="hover:text-accent transition-colors duration-300">
                  info@emkan.site
                </a>
              </div>
              <div className="flex items-start space-x-2">
                <span className="text-accent mt-1">📍</span>
                <span>
                  Mersin Serbest Bölge<br />
                  Mersin, Türkiye
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-300 text-sm">
            © 2024 Emkan.site. Tüm hakları saklıdır.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/kvkk" className="text-neutral-300 hover:text-accent transition-colors duration-300 text-sm">
              KVKK
            </Link>
            <Link href="/cerez" className="text-neutral-300 hover:text-accent transition-colors duration-300 text-sm">
              Çerez Politikası
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
