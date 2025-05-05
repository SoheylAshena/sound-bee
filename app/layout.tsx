import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import ProgressLoader from "../components/layout/ProgressLoader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const oneday = localFont({
  src: "../public/fonts/ONEDAY.ttf",
  variable: "--font-oneday",
});

const iransns = localFont({
  src: "../public/fonts/IRS.ttf",
  variable: "--font-iransns",
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
      <body
        className={`bg-background ${geistSans.variable} ${iransns.variable} ${geistMono.variable} ${oneday.variable} antialiased`}
      >
        <ProgressLoader />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
