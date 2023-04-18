import Image from 'next/image'
import os from 'os' // Node API 
import Counter from '@/components/Counter'
import './pages.module.css'

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
    console.log('안녕 - 서버 ');
    console.log('os.hostname()  : ', os.hostname());
  return (
    <>
      <h1>Jacob 대문 홈페이지다.</h1>   
      <Counter></Counter>
      <Image src="https://images.unsplash.com/photo-1581088814297-0131aebbd149?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
      alt = 'nature image'
      width={500}
      height={500}
      ></Image>
  </>
  );
}
