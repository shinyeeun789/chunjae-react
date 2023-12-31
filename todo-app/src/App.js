// yarn add sass classnames react-icons
import { useCallback, useReducer, useRef, useState } from 'react';
import './App.css';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';
import TodoTemplate from './components/TodoTemplate';

function createBulkTodos() {
  const array = [];
  for (let i=1; i<= 2500; i++) {
    array.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }
  return array;
}

// !! 방법 2 useReducer 사용 !!
function todoReducer(todos, action) {
  switch(action.type) {
    case 'INSERT' :   // 새로 추가
      return todos.concat(action.todo);
    case 'REMOVE' :   // 제거
      return todos.filter(todo => todo.id !== action.id);
    case 'TOGGLE' :   // 토글
      return todos.map(todo => 
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo,
      );
    default :
      return todos;
  }
}

function App() {
  // const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  const nextId = useRef(2501);

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    dispatch({ type: 'INSERT', todo });
    nextId.current += 1;
  }, []);

  const onDelete = useCallback(id => {
    dispatch({ type: 'REMOVE', id });
  }, []);

  const onToggle = useCallback(id => {
    dispatch({ type: 'TOGGLE', id });
  }, []);

/*
  !! 방법 1 함수형 업데이트 사용 !!

  const onInsert = useCallback(text => {
    const todo = {
      id: nextId.current,
      text,
      checked: false,
    };
    // 함수형 업데이트 : useCallback 사용 시 두 번째 파라미터에 todos를 넣지 않아도 됨
    setTodos(todos => todos.concat(todo));      
    nextId.current += 1;
  }, []);

  const onDelete = useCallback(id => {
    // 함수형 업데이트 : useCallback 사용 시 두 번째 파라미터에 todos를 넣지 않아도 됨
    setTodos(todos => todos.filter(todo => todo.id !== id));
  }, []);

  const onToggle = useCallback(id => {
    // 함수형 업데이트 : useCallback 사용 시 두 번째 파라미터에 todos를 넣지 않아도 됨
    setTodos(todos => todos.map(todo =>
      todo.id === id ? { ...todo, checked: !todo.checked } : todo,
    ),);
  }, []);
*/

  return (
    <div className="App">
      <TodoTemplate> 
        <TodoInsert onInsert={onInsert} />
        <TodoList todos={todos} onDelete={onDelete} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
}

export default App;
