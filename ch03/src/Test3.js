// useRef : setter가 없으며, 자체가 객체이다. 해당 데이터는 current 속성을 활용하며, 자체적으로 렌더링 되지 않음
import React, { useRef, useState } from 'react';

const Test3 = () => {
    const korScore = useRef(0);             // Object 타입
    const [ engScore, setEngScore ] = useState(0);

    const onUseRef = (e) => {
        korScore.current += 10;
        console.log("국어 : " + korScore.current);
    }

    const onUseState = (e) => {
        setEngScore(engScore + 10);
        console.log("영어 : " + engScore);
    }
    return (
        <div className='App'>
            <button onClick={onUseRef}> useRef </button>
            <button onClick={onUseState}> useState </button>
            <h2> {`국어 : ${korScore.current}`} </h2>
            <h2> {`영어 : ${engScore}`} </h2>
        </div>
    )
}

export default Test3