// NavLink   : 조건 연결 및 사이트 이동
// Outlet    : Route로 감싸서 설정하면, 공통 페이지가 되고, 서브 컴포넌트에서는 교체될 대상을 설정하는 훅(hook)

import React from 'react'
import { Container, Table } from 'react-bootstrap'
import { Outlet, NavLink } from 'react-router-dom'

const Articles = () => {
    return (
        <div>
            <Container className='mt-5 mb-5'>
                <h1 className='mb-4'>게시글 목록</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th> # </th>
                        <th> 제목 </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td><ArticleItem id={1} /></td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td><ArticleItem id={2} /></td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td><ArticleItem id={3} /></td>
                        </tr>
                    </tbody>
                </Table>
                <Outlet />
            </Container>
        </div>
    )
}

const ArticleItem = ({ id }) => {
    const activeStyle = {
        color : 'deeppink', fontSize : 24,
    };
    return (
        <NavLink to={`/articles/${id}`} style={({ isActive }) => (isActive ? activeStyle : undefined)}>게시글 {id} 번째 내용입니다. </NavLink>
    )
}

export default Articles