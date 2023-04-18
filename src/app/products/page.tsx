import React from 'react'
import styles from './layout.module.css'
import Link from 'next/link'
import { getProducts } from '@/service/products'
import MeowArticle from '@/components/MeowArticle';
import Image from 'next/image';
import clothImage from '../../../public/images/clothes.jpg';

// export const revalidate = 3;

// const products = ['shirt', 'pants', 'skirt', 'shoes']
// 지금은 정적 변수를 이용해서 지정을 했는데 
// src/service/product.ts 에서 함수를 정의해 두었기 때문에
// 그 함수를 호출해서 사용할 수 있다. 따라서 위의 const products 는 지우고 밑에 만들 수 있다. 



export default async function ProductIntroPage() {
  const products = await getProducts();

// 서버 파일(DB) 에 있는 제품의 리스트를 읽어와서, 그걸 보여줌
  return (
    <>
      <h1 className={styles.title}>제품 소개 페이지!</h1>
      <Image src={clothImage} alt='Clothes'></Image>
      <ul>
        {/* 반복 작업이니 매핑 작업 실시
        1. 위에서 4개의 제품에 대해 배열로 만들었음. 
        2. 따라서 products.map() 을 사용하여 4번 반복작업을 수행한다. 
        3. map() 의 인자로는 (product, index) 를 사용한다.
        4. mapping의 시작은 <li> 테그로 시작한다. 
        5. <li> 테그의 key 는 index 를 사용한다.
        6. 테그의 내용은 <Link> 를 쓰고 그 안에 ``를 써서 경로를 만든다.
        7. 경로는 /products/${product} 를 사용한다. 텍스트는 {product} 를 사용한다.
         */}
        { products.map(({id, name }, index) => (
        <li key={index}>
          <Link href={`/products/${id}`}>{name}</Link>
        </li>
        ))}
      </ul>

      {/* 고양이 말 나오는 부분은 서버 component가 아니라 client component 로 변경하고 싶다. 
      따라서 nextjs/src/app/component 아래에 MeowArticle.tsx 를 만들고 관련 내용을 옮긴다. 
      products 페이지에서 노출되는 부분 (고양이 말 나오는 부분)은 서버 component가 아니라
      client component이기 때문에 빼고 client component를 만들고 그걸 불러온다. 

      따라서 <article> 테그 이하 모두 옮기고 <MeowArticle /> 을 삽입한다.
      */}
      <MeowArticle />
    </>
  )
}