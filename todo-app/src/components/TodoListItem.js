// 각 할 일 항목에 대한 정보를 보여 주는 컴포넌트
// todo 객체를 props로 받아 와서 상태에 따라 다른 스타일의 UI를 보여줌

import React from 'react'
import { MdCheckBox, MdCheckBoxOutlineBlank, MdRemoveCircleOutline } from 'react-icons/md'
import cn from 'classnames';
import '../TodoListItem.scss';

const TodoListItem = ( {todo, onDelete, onToggle} ) => {
    const { id, text, checked } = todo;
    return (
        <div className='TodoListItem'>
            <div className={cn('checkbox', {checked})} onClick={() => onToggle(id)}>
                {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank /> }
                <div className='text'> {text} </div>
            </div>
            <div className='remove' onClick={() => onDelete(id) }>
                <MdRemoveCircleOutline />
            </div>
        </div>
    )
}

export default React.memo(TodoListItem);        // TodoListItem 컴포넌트는 todo, onRemove, onToggle이 바뀌지 않으면 리렌더링 하지 않음