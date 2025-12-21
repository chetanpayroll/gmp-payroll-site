import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata = {
   title: "Global Payroll Implementation Excellence | Chetan Sharma",
   description: "Zero-Error Payroll Transformations. Independent payroll implementation consultant for mid-to-large multinationals.",
};

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={inter.className}>
            <Navbar />
            <main>
               {children}
            </main>
            <Footer />
         </body>
      </html>
   );
}
