import React from 'react';
import './Test2.scss';

const Test2 = () => {
    let arr = Array.from({length:1000}, () => 0);
    return (
        <div>
            {
                arr.map((el, i) => (
                    <div key={i} className='snow'></div>
                ))
            }
        </div>
    )
}

export default Test2