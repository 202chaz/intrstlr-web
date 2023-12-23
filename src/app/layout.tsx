import './globals.css'
import type { Metadata } from 'next'
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'

const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})

const tStarPro = localFont({
  src: '/fonts/TStarProBold.woff',
  display: 'swap',
  style: 'bold'
})

const tStarProHeavy = localFont({
  src: '/fonts/TStarProHeavy.woff',
  display: 'swap',
  style: 'bold'
})

export const metadata: Metadata = {
  title: 'INTRSTLR | Coming Soon',
  description: 'Coming Soon Page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:url" content="https://intrstlr.com/" />
        <meta property="og:site_name" content="Intrstlr" />
        <meta property="og:title" content="Intrstlr" />
        <meta property="og:type" content="website" />
        <meta property="og:description" content="Intrstlr presents the Candle Collection." />
        <meta property="og:image" content="https://intrstlr.nyc3.cdn.digitaloceanspaces.com/three_candles.png" />
        <title>Intrstlr</title>
        <meta name="description" content="Intrstlr presents the Candle Collection." />
        <meta name="keywords" content="intrstlr, candles, aromatherapy, aromatherapy candles, luxury candles" />
        {/* <!-- Twitter Meta Tags --> */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta property="twitter:domain" content="https://intrstlr.com" />
        <meta property="twitter:url" content="https://intrstlr.com" />
        <meta name="twitter:title" content="Intrstlr" />
        <meta name="twitter:description" content="Intrstlr presents the Candle Collection." />
        <meta name="twitter:image" content="https://intrstlr.nyc3.cdn.digitaloceanspaces.com/three_candles.png" />
      </head>
      <body className={tStarProHeavy.className}>{children}</body>
    </html>
  )
}
