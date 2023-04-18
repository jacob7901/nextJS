import './globals.css'
import Link from 'next/link';
import styles from './layout.module.css'
import { Metadata } from 'next';


// metadata를 지정할 수 있다. 
// 흰트를 얻으면서 어떤키와 속성을 적을 수 있는지 알고 싶으면 타입을 적으면 된다.
// export const metadata: Metadata = {
export const metadata: Metadata= {
  title: '멋진 제품 사이트',
  description: '멋진 제품을 판매하는 것입니다.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <header className={styles.header}>
          <h1>Demo Note</h1>
          <nav className={styles.nav}>
            <Link href="/products">Products</Link>
            <Link href="/contact">Contact</Link>
            <Link href="/about">About</Link>

          </nav>
        </header>
        { children }

      </body>
    </html>
  )
}
