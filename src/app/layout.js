import './globals.css'
import { Montserrat} from 'next/font/google'

const mts = Montserrat({ subsets: ['latin']})


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mts.className}>{children}</body>
    </html>
  )
}
