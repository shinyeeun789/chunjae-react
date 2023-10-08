import React, { useReducer } from 'react'

const Counter = ({step=1, min=0, max=10}) => {
    const initState = { count: 0 };
    const reducer = function(state, action) {
        switch(action.type) {
            case 'INCREMENT':
                return state.count < action.max ? { count: state.count + action.step } : state;
            case 'DECREMENT':
                return state.count > action.min ? { count: state.count - action.step } : state;
            case 'RANDOM':
                return { count: Math.floor(Math.random() * (action.max - action.min)) - action.min };
            case 'RESET':
                return initState;
            default:
                return state;
        }
    }

    const [state, dispatch] = useReducer(reducer, initState);
    return (
        <div>
            <p> 현재 카운터의 값 <b>{state.count}</b>입니다. </p>
            <button type="button" onClick={() => dispatch({ type: 'INCREMENT', step, max })}> +1 </button>
            <button type="button" onClick={() => dispatch({ type: 'DECREMENT', step, min })}> -1 </button>
            <button type="button" onClick={() => dispatch({ type: 'RANDOM', min, max })}> 랜덤 </button>
            <button type="button" onClick={() => dispatch({ type: 'RESET' })}> 초기화 </button>
        </div>
    )
}

export default Counter