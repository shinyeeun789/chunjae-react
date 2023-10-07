import React, { Component } from 'react';
import './Test4.css';

class ValidationSample extends Component {
    input = React.createRef();              // ref 생성
    state = {
        password : '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });

        // input 요소 중 현재 커서가 있는 곳
        this.input.current.focus();
    }

    render() {
        return (
        <div>
            <input
                type="password"
                ref={this.input}
                value={this.state.password}
                onChange={this.handleChange}
                className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
            />
            <button onClick={this.handleButtonClick}> 검증하기 </button>
        </div>
        );
    }
}

export default ValidationSample;