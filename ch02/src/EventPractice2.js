import React, { useState } from 'react'

const EventPractice2 = () => {
    const [form, setForm] = useState({
        id: '',
        pw: ''
    });
    const [message, setMessage] = useState('');
    const {id, pw} = form;

    const onChange = (e) => {
        setTimeout(() => console.log(e), 500);
        const nextForm = ({
            ...form,
            [e.target.name] : e.target.value
        });
        setForm(nextForm);
    }

    const onClick = () => {
        if(form.id === 'admin' && form.pw === '1234') {
            setMessage("로그인 환영~");
        } else {
            setMessage("아이디 또는 비밀번호가 일치하지 않습니다.");
        }
        setForm({id: '', pw: ''});
    }

    const onReset = () => {
        setForm({id: '', pw: ''});
    }

    const onKeyPress = (e) => {
        if(e.key === 'Enter') {
            onClick();
        }
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

export default EventPractice2