import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "IRCTC - Indian Railway Booking",
  description: "Book train tickets, check PNR status, and track trains with IRCTC",
  icons: {
    icon: "/images/irctc.png",
    shortcut: "/images/irctc.png",
    apple: "/images/irctc.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow pt-16 bg-gray-50">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
