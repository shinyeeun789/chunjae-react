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