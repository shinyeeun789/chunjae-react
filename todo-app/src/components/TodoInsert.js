// 새로운 항목을 입력하고 추가할 수 있는 컴포넌트
// state를 통해 인풋의 상태 관리

import React, { useCallback, useState } from 'react';
import { MdAdd } from 'react-icons/md';
import '../TodoInsert.scss';

const TodoInsert = ({onInsert}) => {
  const [value, setValue] = useState('');
  
  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(e => {
      onInsert(value);
      setValue('');
      e.preventDefault();       // 새로고침 방지
    }
  )

  return (
    <form className='TodoInsert' onSubmit={onSubmit}>
        <input placeholder='할 일을 입력하세요' value={value} onChange={onChange} />
        <button type="submit">
            <MdAdd />
        </button>
    </form>
  );
};

export default TodoInsert