import './globals.css'

export const metadata = {
  title: 'aliszu',
  description: 'Indie Hacker, Music Lover (espessialy vinyl records), Dog Owner, F1 Fan and cool person.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>{children}</body>
    </html>
  )
}
