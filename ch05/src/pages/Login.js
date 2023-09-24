// Navigate : Route로 설정된 특정 페이지로 이동
import React, { useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Navigate } from 'react-router-dom';

const Login = ({ authenticated, login }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleClick = () => {
    try {
      login({ email, password });
    } catch(e) {
      alert("Failed to login");
      setEmail("");
      setPassword("");
    }
  };

  if (authenticated) return <Navigate to="/login" replace={true} />;

  return (
    <>
      <Container style={{minHeight : '70vh'}}>
        <h1 className='mt-5'> Login </h1>
        <Form.Label htmlFor="email"> E-Mail </Form.Label>
        <input value={email} onChange={({ target : { value }}) => setEmail(value)} class="form-control" type="text" placeholder="email" />
        <Form.Label htmlFor="password" className='mt-4'> Password </Form.Label>
        <input value={password} onChange={({ target: { value }}) => setPassword(value)} class="form-control" type="password" placeholder='password' />
        <div className='d-grid gap-2'>
          <Button onClick={handleClick} className='mt-4' size='lg'> Login </Button>
        </div>
      </Container>
    </>
  )
}

export default Login;