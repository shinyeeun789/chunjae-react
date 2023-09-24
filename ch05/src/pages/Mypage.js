// Navigate == Link + replace
// Navigate : Route로 설정된 특정 페이지로 이동
import React from 'react'
import { Container } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

const Mypage = (isLoggedIn) => {
  if (!isLoggedIn) {
    return <Navigate to="/login" replace={true} />;
  }
  return (
    <>
      <Container style={{minHeight:'80vh'}}>
        <h2 className='mt-5'> 마이페이지 </h2>
      </Container>
    </>
  )
}

export default Mypage