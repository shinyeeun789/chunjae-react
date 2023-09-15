// Test1, Test2, Test3은 함수로 컴포넌트를 생성한 예제

const Test3 = () => {
    const season = ["봄", "여름", "가을", "겨울"];
    return (
        <div className="App">
            <ul>
            {
                season.map((data, index) => (
                    <li key={index}> {data} </li>
                ))
            }
            </ul>
        </div>
    )
}

export default Test3