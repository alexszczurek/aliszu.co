import './globals.css'
// import { Jost } from 'next/font/google'

// const jost = Jost ({ subsets: ['latin'] })

export const metadata = {
  title: 'aliszu',
  description: 'Indie Hacker, Music Lover (espessialy vinyl records), Dog Owner, F1 Fan and cool person.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
