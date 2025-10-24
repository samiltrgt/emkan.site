import './globals.css'
import Script from 'next/script'
import { LanguageProvider } from '@/contexts/language-context'
import LanguageSelector from '@/components/language-selector'

export const metadata = {
  title: 'Emkan Global | Küresel Deniz Taşımacılığı ve Emtia Ticareti',
  description: 'Denizde hızlı, tedarikte şeffaf. Küresel deniz taşımacılığı, üre ve bitumda uçtan uca çözümler.',
  keywords: 'deniz taşımacılığı, üre ticareti, bitum ticareti, konteyner, FCL, LCL, emtia ticareti',
  openGraph: {
    title: 'Emkan Global | Küresel Deniz Taşımacılığı ve Emtia Ticareti',
    description: 'Denizde hızlı, tedarikte şeffaf. Küresel deniz taşımacılığı, üre ve bitumda uçtan uca çözümler.',
    type: 'website',
    locale: 'tr_TR',
    url: 'https://emkan.site',
    siteName: 'Emkan Global',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Emkan Global - Deniz Taşımacılığı ve Emtia Ticareti',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Emkan Global | Küresel Deniz Taşımacılığı ve Emtia Ticareti',
    description: 'Denizde hızlı, tedarikte şeffaf. Küresel deniz taşımacılığı, üre ve bitumda uçtan uca çözümler.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Emkan Global',
    url: 'https://emkan.site',
    logo: 'https://emkan.site/logo.png',
    description: 'Küresel deniz taşımacılığı ve emtia ticaretinde güvenilir ortağınız',
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer service',
      email: 'info@emkanglobal.com',
    },
    sameAs: [
      'https://linkedin.com/company/emkan-site',
      'https://twitter.com/emkan_site',
    ],
    service: [
      {
        '@type': 'Service',
        name: 'Deniz Taşımacılığı',
        description: 'FCL/LCL ve proje kargoda akıllı rota planlama; şeffaf takip',
        provider: {
          '@type': 'Organization',
          name: 'Emkan Global',
        },
      },
      {
        '@type': 'Service',
        name: 'Üre Ticareti',
        description: 'Urea 46% N — prilled & granular; güvenilir menşe, doğru termin',
        provider: {
          '@type': 'Organization',
          name: 'Emkan Global',
        },
      },
      {
        '@type': 'Service',
        name: 'Bitum Ticareti',
        description: 'Pen 60/70 ve 80/100 — standartlara uygun kalite, doğru ambalaj',
        provider: {
          '@type': 'Organization',
          name: 'Emkan Global',
        },
      },
    ],
  }

  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap" rel="stylesheet" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0A1E3F" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        
        {/* JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Plausible Analytics - Commented out for now */}
        {/* <Script
          defer
          data-domain="emkan.site"
          src="https://plausible.io/js/script.js"
        /> */}
      </head>
      <body className="font-sans antialiased bg-background text-text">
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  )
}
