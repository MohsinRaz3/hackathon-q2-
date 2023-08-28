import { Header } from "../components/layout/Header"
import { Inter } from 'next/font/google'
import Providers from '../components/Provider'
import { ClerkProvider } from "@clerk/nextjs"

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Hackathon-sanity',
  description: 'Project by Mohsin Raz',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <Providers>

            <Header />
            <main className="px-8">
              {children}
            </main>

          </Providers>
        </body>
      </html>
    </ClerkProvider>
  )
}
