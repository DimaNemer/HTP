import { Inter } from "next/font/google";
import "./globals.css";
import CookieBanner from "@/components/CookieBanner";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata = {
  title: "HTP Cybersecurity Consultancy",
  description: "Total Control of Cyber & AI Risk",
};

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`}>
      <body className={`${inter.className} font-sans bg-background text-textMain antialiased flex flex-col min-h-screen`}>
        <Navbar />
        <div className="flex-grow">
          {children}
        </div>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
