'use client';
import React, { useEffect, useState } from 'react'
import styles from './MeowArticle.module.css'

const MeowArticle = () => {
    // text를 선언했기 때문에 text가 들어갈 자리 즉 {factText} 대신 이 text를 사용할 수 있다. 
    // useState 를 이용하면 초기값을 설정할 수 있다. 이 경우 text이기 때문에 초기값을 text로 '' 설정한다. 
    const [ text, setText ] = useState('고양이 말을 불러오는 중입니다. 잠시만 기다려주세요. ');

    // useEffect 를 사용하는 이유는 무엇일까?
    // useEffect 는 렌더링이 끝난 후에 실행되는 함수이다.
    // 따라서 useEffect 를 사용하면 렌더링이 끝난 후에 실행되는 함수를 만들 수 있다.
    // useEffect 함수를 사용하는데 이 함수는 두가지 인자를 받는다.
    // 첫번째 인자는 함수이고 두번째 인자는 배열이다.
    // 딱 한번만 실행되는 함수를 만들고 싶다면 두번째 인자를 빈 배열로 설정하면 된다.
    useEffect( () => {
        {/* await 대신 fetch를 이용하자.
        fetch 는 promise 를 리턴한다.
        const res = await fetch('https://meowfacts.herokuapp.com/', { 대신
        1. fetch로 해당 주소로 요청을 보낸다. 
        2. fetch는 Promise를 리턴하니까(반응 코드가 올꺼고) 그 반응 코드를 json으로 변환한다. 
            따라서 fetch('Address').then () 이런식으로 쓸 수 있다.
        3. 변환한 json은 그다음에 (.then) 변환된 데이터가 정상적으로 오면 그 데이터를 data라는 변수에 담는다.
        4. fetch 를 사용했기 때문에 그리고 밑에서 await를 사용하지 않으니까 위에 async를 붙이지 않아도 된다.
        
    */}
        
        fetch('https://meowfacts.herokuapp.com/')
            .then((res) => res.json())
            .then((data) => setText(data.data[0]));

        // next: { revalidate: 3},
        // cache: 'no-store'
        //  마지막에 [] 를 붙이면 한번만 실행된다.
        }, []);

        // 아래의 두 데이터는 더 이상 필요가 없다. fetch를 사용해서 데이터를 받아오기 때문이다.
        // const data = await res.json();
        // const factText = data.data[0];

  return (
    <article className={styles.article}>
        { text }
      </article>
 );
}

export default MeowArticle