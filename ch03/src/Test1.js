import React from 'react'

// 배열
const Test1 = () => {
    const names = ['김이름', '이이름', '박이름', '최이름'];
    const nameList = names.map((data) => <li> {data} </li>);
    return (
        <div>
            <ul> {nameList} </ul>
        </div>
    )
}

export default Test1