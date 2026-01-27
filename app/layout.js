import './globals.css'
import AnalyticsWrapper from './analytics';

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
<script async defer src="https://cdn.captflow.com/script.js" data-token="d24ada6f-b7ff-4ff0-b3d4-42512d3817d7"></script>
      </head>
      <body>
        {children}
        <AnalyticsWrapper />
      </body>
    </html>
  )
}
