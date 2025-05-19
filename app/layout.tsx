import type { Metadata } from "next";
import localFont from "next/font/local";

import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

import "./globals.css";

const oneday = localFont({
  src: "../public/fonts/ONEDAY.ttf",
  variable: "--font-oneday",
});

const iransns = localFont({
  src: "../public/fonts/IRS.ttf",
  variable: "--",
});

const yekan = localFont({
  src: "../public/fonts/Yekan.woff2",
  variable: "--font-yekan",
});

export const metadata: Metadata = {
  title: "Sound Bee - Professional Sound Bar Repair Workshop",
  description: "Expert repair services for premium sound bars including JBL, Bose, Yamaha, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" dir="rtl">
      <body className={`bg-background ${iransns.variable} ${oneday.variable} ${yekan.variable} antialiased`}>
        <Navbar />

        <main>{children}</main>

        <Footer />
      </body>
    </html>
  );
}
