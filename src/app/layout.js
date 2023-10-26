import './globals.css'
import { Kumbh_Sans } from 'next/font/google'

const KumbhSans = Kumbh_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Jolint | Dashboard',
  description: `Empower DEI Transformation with Jolint's Data-Driven Dashboard`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={KumbhSans.className}>{children}</body>
    </html>
  )
}
