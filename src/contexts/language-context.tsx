'use client'

import { createContext, useContext, useState, useEffect, ReactNode } from 'react'

// Çeviri dosyalarını import et
import trTranslations from '@/data/translations/tr.json'
import enTranslations from '@/data/translations/en.json'
import ruTranslations from '@/data/translations/ru.json'
import faTranslations from '@/data/translations/fa.json'
import zhTranslations from '@/data/translations/zh.json'

type Language = 'tr' | 'en' | 'ru' | 'fa' | 'zh'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: (key: string) => string | string[]
  tArray: (key: string) => string[]
  isRTL: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

// Çeviri dosyalarını birleştir
const translations = {
  tr: trTranslations,
  en: enTranslations,
  ru: ruTranslations,
  fa: faTranslations,
  zh: zhTranslations,
}

// RTL diller
const rtlLanguages: Language[] = ['fa']

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>('tr')

  // LocalStorage'dan dil tercihini yükle
  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language
    if (savedLanguage && translations[savedLanguage]) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Dil değiştiğinde LocalStorage'a kaydet
  useEffect(() => {
    localStorage.setItem('language', language)
  }, [language])

  // Çeviri fonksiyonu
  const t = (key: string): string | string[] => {
    const keys = key.split('.')
    let value: any = translations[language]
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        // Fallback: Türkçe'ye dön
        value = translations.tr
        for (const fallbackKey of keys) {
          if (value && typeof value === 'object' && fallbackKey in value) {
            value = value[fallbackKey]
          } else {
            return key // Anahtar bulunamazsa anahtarı döndür
          }
        }
        break
      }
    }
    
    return value || key
  }

  // Array çeviri fonksiyonu
  const tArray = (key: string): string[] => {
    const result = t(key)
    return Array.isArray(result) ? result : [result]
  }

  const isRTL = rtlLanguages.includes(language)

  const value: LanguageContextType = {
    language,
    setLanguage,
    t,
    tArray,
    isRTL,
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}

// Hook
export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
