// todos 배열을 props로 받아온 후, 이를 배열 내장 함수 map을 사용해서 여러 개의 TodoListItem 컴포넌트로 변환하여 보여줌
import '../TodoList.scss';

import React from 'react'
import TodoListItem from './TodoListItem';

const TodoList = ({ todos, onDelete, onToggle }) => {
  return (
    <div className='TodoList'>
        {todos.map(todo => (
            <TodoListItem todo={todo} onDelete={onDelete} onToggle={onToggle} />
        ))}
    </div>
  )
}

export default TodoList