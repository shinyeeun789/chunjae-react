// useEffect : 해당 이벤트를 진행하고 난 후에 실행되어야 할 내용을 기술하는 훅(hook)

import React, { useEffect, useRef } from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const Test4 = () => {
    const inputRef = useRef();
    useEffect(() => {
        console.log(inputRef.current.value);
        inputRef.current.focus();
    }, []);
    const loginPro = (e) => {
        alert(`환영합니다. ${inputRef.current.value} 님~!`);
        inputRef.current.focus();
    }
    return (
        <>
            <header>
                <fieldset className='mt-5'>
                    <InputGroup className="container mb-3">
                        <Form.Control ref={inputRef} type="text" placeholder='id input'/>
                        <Button variant="outline-secondary" id="button-addon1" onClick={loginPro}> Login </Button>
                    </InputGroup>
                </fieldset>
            </header>
        </>
    )
}

export default Test4