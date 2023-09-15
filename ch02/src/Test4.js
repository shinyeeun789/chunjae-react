// ref : (셀프) 참조용 => useRef
// 주로 클래스형에서 많이 사용됨
// rcc | rccp | rcfc

import React, { Component } from 'react'
import './Test4.css';

class Test4 extends Component {
    input = React.createRef();                          // ref 생성
    state = { password: '', clicked: false, validated: false };

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    };

    handleButtonClick = (e) => {
        this.setState({
            clicked: true,
            validated: this.state.password === '1234'
        });
        // input 요소 중 현재 커서가 있는 곳
        this.input.current.focus();
    }

    render() {
        return (
            <div className='App'>
                <h2> 폼 검증 ref </h2>
                <input type='password' ref={this.input} value={this.state.password} onChange={this.handleChange}
                    className={
                        this.state.clicked 
                            ? this.state.validated 
                                ? 'success' 
                                : 'failure'
                            : ''
                    } />
                <button onClick={this.handleButtonClick}> 검증 </button>
            </div>
        )
    }
}

export default Test4;