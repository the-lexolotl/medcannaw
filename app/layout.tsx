import './globals.css'
import { ClerkProvider } from '@clerk/nextjs'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

export const metadata = {
  title: 'Medical Cannabis Awareness Week | MCAW',
  description: 'Together for Patients. A UK-wide awareness, education and community campaign for prescribed cannabis-based medicines.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <head>
          <link rel="stylesheet" href="https://use.typekit.net/zwi3gyi.css" />
        </head>
        <body>
          <Nav />
          <main>{children}</main>
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  )
}

