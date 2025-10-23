# Emkan.site - Production-Ready Landing Page

Modern bir deniz taşımacılığı ve emtia ticareti firması için production-ready Next.js landing page'i.

## 🚀 Özellikler

- ⚡ **Next.js 14** App Router + TypeScript
- 🎨 **TailwindCSS** + Modern UI tasarım
- 🎬 **Video Background** destekli hero ve service section'lar
- 📱 **Mobile-First** responsive tasarım
- ♿ **WCAG AA** erişilebilirlik standartları
- 🔍 **SEO Optimized** + JSON-LD structured data
- ⚡ **Performance** odaklı (LCP ≤ 2.5s hedefi)
- 🌙 **Dark Mode** desteği

## 📦 Kurulum

1. **Bağımlılıkları yükleyin:**
```bash
npm install
```

2. **Geliştirme sunucusunu başlatın:**
```bash
npm run dev
```

3. **Tarayıcınızda açın:**
```
http://localhost:3000
```

## 🎬 Video Assets

Aşağıdaki video dosyalarını `public/videos/` klasörüne ekleyin:

### Gerekli Video Dosyaları:
- `ocean-hero.mp4` - Ana sayfa hero background (drone/kuş bakışı okyanus)
- `ocean-ship.mp4` - Deniz taşımacılığı section (yük gemisi)
- `ure-sack.mp4` - Üre ticareti section (çuvaldan üre akışı)
- `bitumen-road.mp4` - Bitum ticareti section (yol/bitüm uygulaması)

### Poster Images:
- `ocean-hero.jpg` - Hero video poster
- `ocean-ship.jpg` - Deniz taşımacılığı poster
- `ure-sack.jpg` - Üre ticareti poster  
- `bitumen-road.jpg` - Bitum ticareti poster

### Logo Dosyaları:
`public/logos/` klasörüne şirket logolarını ekleyin:
- `maersk.svg`
- `cmacgm.svg`
- `msc.svg`
- `hapag.svg`
- `cosco.svg`
- `one.svg`
- `evergreen.svg`
- `yangming.svg`

## 📁 Proje Yapısı

```
src/
├── app/
│   ├── (site)/
│   │   ├── page.tsx                    # Ana sayfa
│   │   ├── hakkimizda/page.tsx         # Hakkımızda
│   │   ├── hizmetler/
│   │   │   ├── deniz-tasimaciligi/page.tsx
│   │   │   ├── ure-ticareti/page.tsx
│   │   │   └── bitum-ticareti/page.tsx
│   │   ├── referanslar/page.tsx        # Referanslar
│   │   └── iletisim/page.tsx           # İletişim
│   ├── layout.tsx                      # Ana layout + SEO
│   └── globals.css                     # Global stiller
├── components/
│   ├── hero.tsx                        # Video destekli hero
│   ├── service-section.tsx             # Video destekli service section
│   ├── navbar.tsx                      # Sticky navigation
│   ├── footer.tsx                      # Footer
│   ├── kpi-band.tsx                    # İstatistik bandı
│   ├── logo-grid.tsx                   # Logo grid
│   └── spec-table.tsx                  # Teknik özellik tabloları
└── data/
    ├── stats.json                      # KPI verileri
    └── products.json                   # Ürün spesifikasyonları
```

## 🎨 Tasarım Sistemi

### Renk Paleti:
- **Primary:** `#0A1E3F` (Lacivert)
- **Accent:** `#2ED3B7` (Turkuaz)
- **Text:** `#0F172A` (Koyu gri)
- **Background:** `#F8FAFC` (Açık gri)
- **Neutral:** `#CBD5E1` (Orta gri)

### Tipografi:
- **UI Font:** Inter (300-700)
- **Heading Font:** Manrope (400-800)

### Bileşenler:
- `rounded-2xl` köşe yuvarlaklığı
- Soft shadows (`shadow-lg`)
- Gradient text efektleri
- Hover animasyonları

## 🔧 Özelleştirme

### Metin Değişiklikleri:
1. **Ana sayfa metinleri:** `src/app/(site)/page.tsx`
2. **Hizmet sayfaları:** `src/app/(site)/hizmetler/` klasörü
3. **İletişim bilgileri:** `src/components/footer.tsx` ve `src/app/(site)/iletisim/page.tsx`

### Veri Değişiklikleri:
1. **KPI verileri:** `src/data/stats.json`
2. **Ürün spesifikasyonları:** `src/data/products.json`

### SEO Ayarları:
1. **Meta veriler:** `src/app/layout.tsx`
2. **JSON-LD:** `src/app/layout.tsx` içinde `jsonLd` objesi
3. **Sayfa başlıkları:** Her sayfa dosyasında `metadata` export'u

## 📊 Performance Optimizasyonları

- **Video Lazy Loading:** IntersectionObserver ile
- **Image Optimization:** Next.js Image component
- **Font Optimization:** Google Fonts preconnect
- **Code Splitting:** Otomatik Next.js code splitting
- **CSS Optimization:** TailwindCSS purging

## 🔍 SEO Özellikleri

- **Meta Tags:** Title, description, keywords
- **Open Graph:** Facebook/LinkedIn paylaşımları
- **Twitter Cards:** Twitter paylaşımları
- **JSON-LD:** Structured data (Organization, Service)
- **Sitemap:** Otomatik Next.js sitemap
- **Robots.txt:** Otomatik Next.js robots.txt

## 📱 Responsive Breakpoints

- **Mobile:** < 768px
- **Tablet:** 768px - 1024px
- **Desktop:** > 1024px

## ♿ Erişilebilirlik

- **WCAG AA** kontrast oranları
- **Keyboard Navigation** desteği
- **Screen Reader** uyumluluğu
- **Focus Indicators** görünür
- **Alt Text** tüm görsellerde

## 🚀 Deployment

### Vercel (Önerilen):
```bash
npm run build
# Vercel'e deploy edin
```

### Diğer Platformlar:
```bash
npm run build
npm run start
```

## 📝 Notlar

- Video dosyaları **≤ 5MB** olmalı (performans için)
- Poster görselleri **≤ 200KB** olmalı
- Tüm metinler **Türkçe** olarak hazırlandı
- **EN** dil desteği için `next-intl` kullanılabilir

## 🛠️ Geliştirme Komutları

```bash
npm run dev          # Geliştirme sunucusu
npm run build        # Production build
npm run start        # Production sunucusu
npm run lint         # ESLint kontrolü
```

---

**Geliştirici:** Next.js & TypeScript ❤️  
**Tasarım:** Modern, Minimal, Video-First  
**Performans:** Lighthouse 95+ hedefi