// NavLink   : 조건 연결 및 사이트 이동
// Outlet    : Route로 감싸서 설정하면, 공통 페이지가 되고, 서브 컴포넌트에서는 교체될 대상을 설정하는 훅(hook)
// useParams : 요청 파라미터의 값을 가져올 때 사용하는 훅(hook)
// useNavigate : 자바스크립트와 같은 페이지 이동 또는 URL 제어와 

import React from 'react'
import { Outlet, NavLink } from 'react-router-dom'

const Articles = () => {
    return (
        <div>
            <h1>글 목록</h1>
            <ul>
                <ArticleItem id={1} />
                <ArticleItem id={2} />
                <ArticleItem id={3} />
            </ul>
            <Outlet />
        </div>
    )
}

const ArticleItem = ({ id }) => {
    const activeStyle = {
        color : 'deeppink', fontSize : 24,
    };
    return (
        <li><NavLink to={`/articles/${id}`} style={({ isActive }) => (isActive ? activeStyle : undefined)}>게시글 {id} 번째 내용입니다. </NavLink></li>
    )
}

export default Articles