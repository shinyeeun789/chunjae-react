//로그인 창: 아이디와 비밀번호를 입력한 후 아이디가 admin이고, 비밀번호가 1234인 경우 "로그인 환영" 메시지 출력
//아니면 "아이디 또는 비밀번호가 일치하지 않습니다."라는 메시지를 출력한 후
//그리고 성공과 실패시 모두 원래 폼을 초기화 하여 다시 로딩시킴
import React, {useState} from 'react'
const Test3 = () => {
    const [message, setMessage] = useState('로그인 전');
    const [form, setForm] = useState({
        id:'',
        pw:''
    });
    const { id, pw } = form;
    
    //이벤트
    const onChange = (e) => {
        setTimeout(() => console.log(e), 500)
        const nextForm = {
            ...form,
            [e.target.name] : e.target.value
        };
        setForm(nextForm);
    };
    const onClick = () => {
        if(id === 'admin' && pw ==='1234') {
            alert("로그인 성공");
            setMessage('로그인 성공');
        } else {
            alert("아이디 또는 비밀번호가 일치하지 않습니다.");
            setMessage('로그인 실패');
        }
        setForm({
            id:'',
            pw:''
        })
    };
    const onKeyPress = (e) => {                         //Enter Key 입력시 onClick 이벤트 발생 -> 이벤트 트리거
        if(e.key === 'Enter'){
            onClick();
        }
    };
    const onReset = (e) => {
        setForm({
            id:'',
            pw:''
        })
    }
  return (
    <div className='App'>
        <h1>로그인</h1>
        <input type="text" name="id" placeholder='아이디 입력' value={id} onChange={onChange}/>
        <input type='password' name='pw' placeholder='비밀번호 입력' value={pw} onChange={onChange} onKeyPress={onKeyPress}/>
        <p style={{color:"skyblue", fontWeight:"bold"}}> {message} </p>
        <button onClick={onClick}>로그인</button>
        <button onClick={onReset}>초기화</button>
    </div>
  )
}
export default Test3