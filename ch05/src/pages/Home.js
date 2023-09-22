import React from 'react'
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
        <h2> Home </h2>
        <hr/>
        <ul>
            <li>
                <Link to="/about"> Intro </Link>
            </li>
            <li>
                <Link to="/profile/sangmin"> 상민 프로필 </Link>
            </li>
            <li>
                <Link to="/profile/yeeun"> 예은 프로필 </Link>
            </li>
            <li>
                <Link to="/profile/sehun"> 세훈 프로필 </Link>
            </li>
            <li>
                <Link to="/profile/name"> 모르는 사람 프로필 </Link>
            </li>
        </ul>
    </div>
  )
}

export default Home