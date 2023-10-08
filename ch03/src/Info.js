import React, { useState, useEffect } from 'react'

const Info = () => {
    const [name, setName] = useState('');
    const [nickname, setNickname] = useState('');
    useEffect(() => {
        console.log(name);
    }, [name]);

    const onChangeName = e => {
        setName(e.target.value);
    }

    const onChangeNickname = e => {
        setNickname(e.target.value);
    }

    return (
        <div>
            <input type="text" placeholder='이름 입력' onChange={onChangeName} />
            <input type="text" placeholder='닉네임 입력' onChange={onChangeNickname} />
            <p> 이름 : {name} </p>
            <p> 닉네임 : {nickname} </p>
        </div>
    )
}

export default Info