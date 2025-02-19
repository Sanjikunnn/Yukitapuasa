import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import StarryBackground from "@/components/star/page";


export const metadata: Metadata = {
  title: "Yukita Puasa! - Jadwal Sholat & Imsak",
  icons: {
    icon: '/brand.ico'
  },
  description: "Awas Puasa! adalah portal yang menghadirkan jadwal sholat dan imsak dengan akurat dan mudah diakses",
  applicationName: 'Awas Puasa!',
  referrer: 'origin-when-cross-origin',
  keywords: ['puasa', 'imsak', 'sholat', 'ramadhan', 'jadwal imsak', 'jadwal sholat', 'quran', 'baca quran', 'puasa ramadhan', 'bulan ramadhan'],
  authors: [{ name: 'Fzmhq' }, { name: 'Faizal Muhamad Iqbal', url: 'https://klaw.my.id' }],
  creator: 'Fzmhq',
  publisher: 'RIOT REVENGER',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: 'Yukita Puasa! - Jadwal Sholat & Imsak',
    description: 'Yukita Puasa! adalah portal yang menghadirkan jadwal sholat dan imsak dengan akurat dan mudah diakses',
    url: 'https://imsak.my.id',
    siteName: 'Yukita Puasa!',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/brand.ico" sizes="any" />
      </head>
      <body><StarryBackground numberOfStars={50}>{children}</StarryBackground></body>
    </html>
  );
}
