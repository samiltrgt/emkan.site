'use client'

import Link from 'next/link'
import { useLanguage } from '@/contexts/language-context'

export default function Footer() {
  const { t } = useLanguage()
  
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
              <span className="font-heading font-bold text-xl">Emkan Global</span>
            </div>
            <p className="text-neutral-300 mb-6 max-w-md">
              {t('footer.description') as string}
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
            <h3 className="font-semibold text-lg mb-4">{t('footer.services') as string}</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/hizmetler/deniz-tasimaciligi" className="text-neutral-300 hover:text-accent transition-colors duration-300">
                  {t('services.oceanFreight.title') as string}
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/ure-ticareti" className="text-neutral-300 hover:text-accent transition-colors duration-300">
                  {t('services.ureaTrading.title') as string}
                </Link>
              </li>
              <li>
                <Link href="/hizmetler/bitum-ticareti" className="text-neutral-300 hover:text-accent transition-colors duration-300">
                  {t('services.bitumenTrading.title') as string}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-lg mb-4">{t('footer.contact') as string}</h3>
            <div className="space-y-3 text-neutral-300">
              <div className="flex items-center space-x-2">
                <span className="text-accent">✉️</span>
                <a href="mailto:info@emkanglobal.com" className="hover:text-accent transition-colors duration-300">
                  info@emkanglobal.com
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-neutral-300 text-sm">
            {t('footer.copyright') as string}
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/kvkk" className="text-neutral-300 hover:text-accent transition-colors duration-300 text-sm">
              {t('footer.kvkk') as string}
            </Link>
            <Link href="/cerez" className="text-neutral-300 hover:text-accent transition-colors duration-300 text-sm">
              {t('footer.cookiePolicy') as string}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
