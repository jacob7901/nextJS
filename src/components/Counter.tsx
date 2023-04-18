"use client";
import { useState } from 'react'
import  './Counter.module.css'

 const Counter = () => {
    const [count, setCount] = useState(0);

  return (
    <>
        <p>{count}</p>
        <button className='numButton' onClick={() => setCount((num) => num + 1)}>
            숫자 증가시키기
        </button>
    </>
  );
}

export default Counter