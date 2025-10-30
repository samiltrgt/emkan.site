'use client'

import { useEffect } from 'react'
import { useLanguage } from '@/contexts/language-context'

export default function RTLWrapper({ children }: { children: React.ReactNode }) {
  const { isRTL, language } = useLanguage()

  useEffect(() => {
    // HTML element'e dir attribute ekle
    document.documentElement.setAttribute('dir', isRTL ? 'rtl' : 'ltr')
    document.documentElement.setAttribute('lang', language)
    
    return () => {
      // Cleanup
      document.documentElement.removeAttribute('dir')
    }
  }, [isRTL, language])

  return <>{children}</>
}

