// 클래스형의 state(상태정보) 함수
import { Component } from 'react';

class Test8 extends Component {
    constructor(props) {
        super(props);
        this.state = {              // this.state = state;와 같음
            number: 0
        };
    }
    render() {
        const { number } = this.state;
        return (
            <div className='App'>
                <h2> { number } </h2>
                <button onClick={() => this.setState({number:number+1})}> 증가 </button>
            </div>
        )
    }
}

export default Test8