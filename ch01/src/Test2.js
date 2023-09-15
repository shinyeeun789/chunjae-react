//rafce : 리액트 기본 템플릿을 불러오는 단축 명령어


// 표현식과 내부 스타일링, 인라인 스타일링, 조건 연산자, if문을 활용하여 컴포넌트 만들기

// 방법1 (ES5)
// function Test2() { }

// 방법2
// const Test2 = function() { }

// 방법3 (ES6)
const Test2 = () => {
    const food = "떡볶이";
    const style = {
        fontSize:"1.5em",
        padding:"20px"
    };

    return (
        <div className="App">
            <p className="title"> {food} </p>
            <ul style={style}>
                <li style={{
                    backgroundColor:"#FBF0B2",
                    fontWeight:"bold"
                }}> 청년다방 </li>
                <li style={{
                    backgroundColor:"#FFDBAA",
                    fontWeight:"bold"
                }}> 엽기떡볶이 </li>
                <li style={{
                    backgroundColor:"#96C291",
                    fontWeight:"bold"
                }}> 신전떡볶이 </li>
            </ul>
        </div>
    )
}

export default Test2