import './globals.css'

export const metadata = {
   title: 'AI Gravity Academy | Master AI & Automation',
   description: 'Transform your career with practical, hands-on AI and automation training. Join AI Gravity Academy to master the future.',
}

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className="bg-grid">
            {children}
         </body>
      </html>
   )
}
