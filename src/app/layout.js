
import './globals.css'
import { Inter } from 'next/font/google'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import { MyProvider } from '@/context'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog App',
  description: 'The best blog app!',
}

export default function RootLayout({ children }) {
  const myData = 1;
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyProvider>
          <Header />
          {children}
          <Footer />
        </MyProvider>
      </body>
    </html>
  )
}
