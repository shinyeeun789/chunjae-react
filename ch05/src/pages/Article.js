// useParams : 요청 파라미터의 값을 가져올 때 사용하는 훅(hook)
import React from 'react'
import { useParams } from 'react-router-dom';

const Article = () => {
    const { id } = useParams();    
    return (
        <div className='mt-5'>
            <h3> 게시글 {id} 번째 제목 </h3>
            <p> 게시글 {id} 번째 글의 내용입니다. </p>
        </div>
    )
}

export default Article