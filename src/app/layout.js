import './globals.css'

import ScrollToTop from '../components/ScrollToTop';

export const metadata = {
   title: 'AI Gravity Academy | Master AI & Automation Training',
   description: 'Master AI without coding! Transform from AI-curious to automation expert in 90 days. Hands-on training with ChatGPT, Claude, Make & Zapier. Join 5,000+ learners worldwide.',
   keywords: 'AI training, automation course, ChatGPT, Claude AI, Make, Zapier, no-code AI, prompt engineering',
   authors: [{ name: 'Chetan Sharma' }],
   openGraph: {
      title: 'AI Gravity Academy | Master AI & Automation Training',
      description: 'Master AI without coding! Transform from AI-curious to automation expert in 90 days.',
      url: 'https://www.gmppayroll.org',
      siteName: 'AI Gravity Academy',
      type: 'website',
   },
   twitter: {
      card: 'summary_large_image',
      title: 'AI Gravity Academy | Master AI & Automation Training',
      description: 'Master AI without coding! Transform from AI-curious to automation expert in 90 days.',
   },
}

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className="bg-grid">
            {children}
            <ScrollToTop />
         </body>
      </html>
   )
}
