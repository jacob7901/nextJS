import Link from 'next/link';
import styles from './layout.module.css'
import { Metadata } from 'next';


export const metadata: Metadata= {
  title: '멋진 제품 사이트',
  description: '멋진 제품을 판매하는 것입니다.',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
        <nav className={styles.nav}>
            <Link href="/products/women">여성옷</Link>
            <Link href="/products/man">남성옷</Link>
        </nav>
        <section className={styles.product}>
            { children }
        </section>
    </>
  )
}