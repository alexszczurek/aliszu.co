import './globals.css'
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
  title: 'aliszu',
  description: 'Indie Hacker, Music Lover (espessialy vinyl records), Dog Owner, F1 Fan and cool person.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={metadata.title} />
        <meta property="og:description" content={metadata.description} />
        <meta property="og:image" content="img/ogIMG.png" />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
