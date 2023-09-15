// 클래스 형태로 컴포넌트 만들기 (옛날 방식)
// Test1, Test2, Test3은 자식 컴포넌트

import { Component } from "react";
import Test1 from "./Test1";
import Test2 from "./Test2";
import Test3 from "./Test3";

class Test4 extends Component {
    render() {
        return (
            <div className="App">
                <Test1 />
                <Test2 />
                <Test3 />
            </div>
        );
    }
}

export default Test4;