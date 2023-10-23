import './globals.css'
import { DM_Sans } from 'next/font/google'

const DMSans = DM_Sans({ subsets: ['latin'] })

export const metadata = {
  title: 'Jolint | Dashboard',
  description: `Empower DEI Transformation with Jolint's Data-Driven Dashboard`,
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={DMSans.className}>{children}</body>
    </html>
  )
}
