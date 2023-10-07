import React, { useState } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import InputGroup from 'react-bootstrap/InputGroup';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

// 객체의 배열
const Test2 = () => {
    const [names, setNames] = useState([
        {id: 1, text: '박이름'},
        {id: 2, text: '신이름'},
        {id: 3, text: '백이름'},
        {id: 4, text: '구이름'}
    ]);
    
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);
    const onChange = (e) => {
        setInputText(e.target.value);
    };
    const onClick = (e) => {
        const nextNames = names.concat({
            id : nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
    };
    const onRemove = (id) => {
        // 불변성을 유지하면서 배열의 특정 항목을 지울 때는 배열의 내장 함수 filter 사용
        // filter 함수 사용 시 배열에서 특정 조건을 만족하는 원소들만 쉽게 분류 가능
        const nextNames = names.filter(data => data.id !== id);
        setNames(nextNames);
    };

    const namesList = names.map((data) => <ListGroup.Item key={data.id} onDoubleClick={() => onRemove(data.id)}>{data.id} ： {data.text}</ListGroup.Item>)
    return (
        <div className='App'>
            <InputGroup className="container mb-3">
                <Form.Control value={inputText} onChange={onChange}/>
                <Button variant="outline-secondary" id="button-addon1" onClick={onClick}> 추가 </Button>
            </InputGroup>
            <ListGroup>
                {namesList}
            </ListGroup>
        </div>
    )
}

export default Test2