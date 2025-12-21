import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
   metadataBase: new URL('https://www.gmppayroll.org'),
   title: "Global Payroll Implementation Services | GMP Payroll",
   description: "Expert independent global payroll consulting. Zero-error implementations, audit compliance, and data migration for multinational enterprises.",
   alternates: {
      canonical: '/',
   },
   robots: {
      index: true,
      follow: true,
   },
   icons: {
      icon: '/favicon.svg',
   },
};

export default function RootLayout({ children }) {
   const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'ProfessionalService',
      'name': 'GMP Payroll',
      'url': 'https://www.gmppayroll.org',
      'logo': 'https://www.gmppayroll.org/logo.svg',
      'description': 'Independent global payroll implementation consulting for enterprise clients.',
      'address': {
         '@type': 'PostalAddress',
         'addressCountry': 'IN'
      },
      'priceRange': '$$$'
   };

   return (
      <html lang="en">
         <body className={inter.className}>
            <script
               type="application/ld+json"
               dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <Navbar />
            <main>
               {children}
            </main>
            <Footer />
         </body>
      </html>
   );
}
