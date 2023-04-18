import React from 'react'
import styles from './layout.module.css'
import { getProduct, getProducts } from '@/service/products';
import NotFoundPage from '@/app/pages/404';

// Props 타입을 정의 
type Props = {
  params: {
    slug: string;
    className: string;

  }
}


export default async function ProductPage({ params: {slug} }: Props) {
  const product = await getProduct(slug);

  if(!product){
    NotFoundPage();
  }

  // 서버 파일에 있는 데이터 중 해당 제품의 정보를 찾아서 그걸 보여줌
  return <h1>{ product.name } 제품 설명 페이지!</h1>
}

//  동적으로 어떤 경로라도 페이지를 만들어 둘 수 없었다. 
//  동적 경로를 만들어 줄 수 있도록 하자. (Nextjs에게 함수로 알려준다.)
// SSR 을 하기 위해서는 getStaticProps 를 사용해야 한다하
  // 특정한 경로에 한해서는 페이지를 만들어 두고 싶다.
export async function generateStaticParams(){
  const products = await getProducts();
  // const products = ['shirt', 'pants', 'shoes'];
  return products.map((product) => ( {
      slug: product.id,
    }));
  }