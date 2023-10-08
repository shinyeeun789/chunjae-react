//useReducer : 현재 상태변수(state) 객체와 행동(action) 객체를 인자로 받아서
//새로운 상태를 반환하는 훅(hook)
//useState 보다 더 복잡하고, 다양한 변수나 객체를 관리할 수 있도록 하는 훅

import React, { useReducer } from 'react'

const Test7 = ({ step=1, min=0, max=10 }) => {
    const initState = { count:0 };                  // useReducer를 위한 초기화
    const reducer = (state, action) => {
        switch(action.type){
            case "COUNTUP" :
                return state.count < action.max ? { count: state.count + action.step } : state;
            case "COUNTDOWN" :
                return state.count > action.min ? { count: state.count - action.step } : state;
            case "RANDOM" :
                return {
                    count : Math.floor(Math.random() * (action.max - action.min)) 
                    + action.min,
                };
            case "RESET" :
                return initState;
            default : throw new Error("action.type 에러 : "+action.type);
        }
    } 
    const [ state, dispatch ] = useReducer(reducer, initState);
    // useReducer의 첫 번째 파라미터 : 리듀서 함수
    //              두 번째 파라미터 : 해당 리듀서의 기본값
    // useReducer Hook 사용 시 state 값과 dispatch 함수를 받아옴
    // state : 현재 가리키고 있는 상태 
    // dispatch : 액션을 발생시키는 함수 => 함수 안에 파라미터로 액션 값을 넣어 주면 리듀서 함수가 호출되는 구조
    return (
        <>
            <p> 단계 : {step}, 최대 : {max}, 최소 : {min}</p>
            <h2>현재값 : {state.count}</h2>
            <hr/>
            <button onClick={() => dispatch({ type:"COUNTUP", step, max })}>증가</button>
            <button onClick={() => dispatch({ type:"COUNTDOWN", step, min })}>감소</button>
            <button onClick={() => dispatch({ type:"RANDOM", min, max })}>랜덤</button>
            <button onClick={() => dispatch({ type:"RESET" })}>초기화</button>
        </>
    )
}
export default Test7