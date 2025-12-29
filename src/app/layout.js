import { Inter } from 'next/font/google'
import './globals.css'
import ScrollToTop from '../components/ScrollToTop';
import GoogleAnalytics from '@/components/GoogleAnalytics';
import { GoogleTagManagerHead } from '@/components/GoogleTagManager';

const inter = Inter({ subsets: ['latin'] })

// ============================================
// GLOBAL METADATA - APPLIES TO ALL PAGES
// ============================================

export const metadata = {
   // ========== BASIC META TAGS ==========
   title: {
      default: 'AI Gravity Academy | Master AI & Automation | Top Rated AI Courses Online',
      template: '%s | AI Gravity Academy',
   },
   description: 'Learn artificial intelligence and automation at AI Gravity Academy. Our AI courses online transform you from beginner to certified expert in 90 days. Join 5,000+ students.',
   keywords: [
      'AI courses online',
      'learn artificial intelligence',
      'AI certification institute',
      'AI training for beginners',
      'automation course',
      'ChatGPT course',
      'Claude AI training',
      'Make automation',
      'Zapier training',
      'no-code AI',
      'prompt engineering course',
      'AI certification',
      'online AI course',
      'AI for business',
      'learn AI without coding',
      'AI bootcamp',
      'Chetan Sharma',
      'AI Gravity',
   ],

   // ========== AUTHOR & CREATOR ==========
   authors: [
      { name: 'Chetan Sharma', url: 'https://www.gmppayroll.org/about' }
   ],
   creator: 'Chetan Sharma',
   publisher: 'AI Gravity Academy',

   // ========== ROBOTS & INDEXING ==========
   robots: {
      index: true,
      follow: true,
      nocache: false,
      googleBot: {
         index: true,
         follow: true,
         noimageindex: false,
         'max-video-preview': -1,
         'max-image-preview': 'large',
         'max-snippet': -1,
      },
   },

   // ========== CANONICAL & ALTERNATE ==========
   metadataBase: new URL('https://www.gmppayroll.org'),
   alternates: {
      canonical: 'https://www.gmppayroll.org',
      languages: {
         'en-US': 'https://www.gmppayroll.org',
         'en-IN': 'https://www.gmppayroll.org',
      },
   },

   // ========== OPEN GRAPH (FACEBOOK, LINKEDIN) ==========
   openGraph: {
      type: 'website',
      locale: 'en_US',
      url: 'https://www.gmppayroll.org',
      siteName: 'AI Gravity Academy',
      title: 'AI Gravity Academy | Master AI & Automation | AI Courses Online',
      description: 'The premier AI certification institute. Learn artificial intelligence and master automation without coding. Join 5,000+ professionals worldwide.',
      images: [
         {
            url: 'https://www.gmppayroll.org/og-image.png',
            width: 1200,
            height: 630,
            alt: 'AI Gravity Academy - Learn Artificial Intelligence Online',
            type: 'image/png',
         },
         {
            url: 'https://www.gmppayroll.org/og-image-square.png',
            width: 600,
            height: 600,
            alt: 'AI Gravity Academy Logo',
            type: 'image/png',
         },
      ],
   },

   // ========== TWITTER CARD ==========
   twitter: {
      card: 'summary_large_image',
      site: '@AIGravityAcademy',
      creator: '@ChetanSharma',
      title: 'AI Gravity Academy | Master AI & Automation Training',
      description: 'Transform from AI-curious to automation expert in 90 days! No software coding required. Join 5,000+ professionals.',
      images: ['https://www.gmppayroll.org/twitter-card.png'],
   },

   // ========== VERIFICATION TAGS ==========
   verification: {
      google: 'YOUR_GOOGLE_SITE_VERIFICATION_CODE',
      yandex: 'YOUR_YANDEX_VERIFICATION_CODE',
      bing: 'YOUR_BING_VERIFICATION_CODE',
   },

   // ========== APP & PWA CONFIGURATION ==========
   applicationName: 'AI Gravity Academy',
   appleWebApp: {
      capable: true,
      title: 'AI Gravity Academy',
      statusBarStyle: 'black-translucent',
   },
   formatDetection: {
      telephone: true,
      date: false,
      address: false,
      email: true,
      url: true,
   },

   // ========== ICONS & MANIFEST ==========
   icons: {
      icon: [
         { url: '/favicon.ico', sizes: 'any' },
         { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
         { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
         { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
         { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
      ],
      shortcut: '/favicon.ico',
      apple: [
         { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      ],
      other: [
         { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#7C3AED' },
      ],
   },
   manifest: '/manifest.json',

   // ========== THEME & CATEGORY ==========
   category: 'education',
   classification: 'Education, Online Learning, AI Training',

   // ========== OTHER META ==========
   other: {
      'msapplication-TileColor': '#0A1628',
      'msapplication-config': '/browserconfig.xml',
      'theme-color': '#0A1628',
      'color-scheme': 'dark',
      'mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-capable': 'yes',
      'apple-mobile-web-app-status-bar-style': 'black-translucent',
      'format-detection': 'telephone=no',

      // Security Headers (as meta tags)
      'referrer': 'origin-when-cross-origin',
      'X-Content-Type-Options': 'nosniff',

      // Performance Hints
      'x-dns-prefetch-control': 'on',

      // Copyright & Legal
      'copyright': '© 2024 AI Gravity Academy. All Rights Reserved.',
      'author': 'Chetan Sharma',
      'designer': 'Chetan Sharma',
      'owner': 'AI Gravity Academy',
      'reply-to': 'hello@gmppayroll.org',

      // Geo Tags (for Local SEO)
      'geo.region': 'IN-RJ',
      'geo.placename': 'Alwar, Rajasthan, India',
      'geo.position': '27.5530;76.6346',
      'ICBM': '27.5530, 76.6346',

      // Content Rating
      'rating': 'General',
      'distribution': 'Global',
      'revisit-after': '7 days',

      // Dublin Core (Enhanced SEO)
      'DC.title': 'AI Gravity Academy - Master AI & Automation Training',
      'DC.creator': 'Chetan Sharma',
      'DC.subject': 'AI Training, Automation, ChatGPT, No-Code',
      'DC.description': 'Transform from AI-curious to automation expert in 90 days with our AI courses online.',
      'DC.publisher': 'AI Gravity Academy',
      'DC.type': 'Text',
      'DC.format': 'text/html',
      'DC.language': 'en',
   },
}

// ============================================
// VIEWPORT CONFIGURATION
// ============================================

export const viewport = {
   width: 'device-width',
   initialScale: 1,
   maximumScale: 5,
   userScalable: true,
   viewportFit: 'cover',
   themeColor: [
      { media: '(prefers-color-scheme: light)', color: '#F8FAFC' },
      { media: '(prefers-color-scheme: dark)', color: '#0A1628' },
   ],
   colorScheme: 'dark',
}

// ============================================
// ROOT LAYOUT COMPONENT
// ============================================

export default function RootLayout({ children }) {
   return (
      <html lang="en" className="scroll-smooth">
         <GoogleTagManagerHead />
         <head>
            {/* Preconnect to External Resources */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://www.googletagmanager.com" />
            <link rel="preconnect" href="https://www.google-analytics.com" />

            {/* DNS Prefetch for Performance */}
            <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />

            {/* Preload Critical Resources */}
            <link
               rel="preload"
               href="/fonts/inter-var.woff2"
               as="font"
               type="font/woff2"
               crossOrigin="anonymous"
            />
         </head>
         <body className={`${inter.className} bg-[#0A1628] text-white antialiased bg-grid`}>
            {/* Google Tag Manager (noscript) */}
            <noscript>
               <iframe
                  src="https://www.googletagmanager.com/ns.html?id=GTM-XXXXXXX"
                  height="0"
                  width="0"
                  style={{ display: 'none', visibility: 'hidden' }}
               />
            </noscript>

            <GoogleAnalytics />
            {children}
            <ScrollToTop />

            {/* Structured Data Scripts are added via components */}
         </body>
      </html>
   )
}
