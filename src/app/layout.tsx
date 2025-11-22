import type { Metadata } from 'next'
import { Rubik } from "next/font/google"
import './globals.css'

export const metadata: Metadata = {
  title: 'Thanh Loc Transfer | Da Nang Airport Transfer & Tours',
  description: 'Reliable Da Nang airport transfer & daily tours – safe rides, friendly drivers, and the best price guarantee.',
  keywords: ["airport", "danang", "transfer service"],
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },
  openGraph: {
    title: "Thanh Loc Transfer | Da Nang Airport Transfer & Tours",
    description: "Reliable Da Nang airport transfer & daily tours – safe rides, friendly drivers, and the best price guarantee.",
    url: "https://thanhloctransfer.com/",
    images: [
      {
        url: "/images/new/og.png",
        width: 1200,
        height: 630,
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
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
  twitter: {
    card: 'summary_large_image',
    title: "Thanh Loc Transfer | Da Nang Airport Transfer & Tours",
    description: "Reliable Da Nang airport transfer & daily tours – safe rides, friendly drivers, and the best price guarantee.",
    images: ['https://thanhloctransfer.com/images/new/og.png'], // Must be an absolute URL
  },
}

const rubik = Rubik({subsets: ["latin"], weight: ["300" , "400" , "500" , "600" , "700" , "800" , "900"]})


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body  className={rubik.className} >{children}</body>
    </html>
  )
}
