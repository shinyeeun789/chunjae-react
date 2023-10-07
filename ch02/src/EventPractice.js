import React, { useState } from 'react'

const EventPractice = () => {
    let style = {
        textAlign: "center"
    }
    let [msg, setMsg] = useState('');
    let onChangeHandler = (e) => {
        setMsg(e.target.value);
        console.log(e.target.value);
    }

    return (
        <div style={style}>
            <h1> 이벤트 연습 </h1>
            <input type = "text" 
                name = "message" 
                value = {msg}
                placeholder = "아무거나 입력해 보세요" 
                onChange = { onChangeHandler } />
            <button onClick={(e) => {
                setMsg('');
            }}> 지우기 </button>
            <button onClick={(e) => {
                if(msg === '그만 하고 싶어') {
                    alert('정답입니다!');
                } else {
                    alert('다시 한 번 생각해보세요~');
                }
            }}> 확인 </button>
        </div>
    )
}

export default EventPractice