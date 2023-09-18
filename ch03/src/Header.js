// 데이터를 전달받고자 하는 곳에서 useContext 사용
import React, { useContext } from 'react';
import { AgeContext } from './AgeContext';
import { NameContext } from './NameContext';

const Header = () => {
    const age = useContext(AgeContext);             // 20
    const user = useContext(NameContext);           // 김이름
    console.log('user : ' + user);
    console.log('age : ' + age);
    return (
        <div>
            <p> 안녕하세요 {user}님 :) </p>
            <p> {user}의 나이 : {age}세 </p>
        </div>
    )
}

export default Header