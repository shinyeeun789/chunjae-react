// 구조 할당(props)의 사용

const Test5 = (props) => {
  return (
    <div className="App">
        <h2> 저의 이름은 {props.irum} 입니다. </h2>
        <h2> 나이는 {props.age}살 입니다. </h2>
        <h2> 사는 곳은 {props.addr} 입니다. </h2>
    </div>
  )
}

Test5.defaultProps = {
    irum : '김이름',
    age : 20,
    addr : '비밀'
}

export default Test5