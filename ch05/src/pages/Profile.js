import React from 'react';
import { useParams } from 'react-router-dom';
import cat1 from '../images/cat1.jpg';
import cat2 from '../images/cat2.jpg';
import cat3 from '../images/cat3.jpg';

const data = {
    sangmin: {
        name: '상민',
        description: '백엔드를 좋아하는 개발자',
        pic: cat1,
    },
    yeeun: {
        name: '예은',
        description: '프론트엔드를 좋아하는 개발자',
        pic: cat2,
    },
    sehun: {
        name: '세훈',
        description: '서울을 좋아하는 개발자',
        pic: cat3,
    }
}

const Profile = () => {
    const params = useParams();         // /profile/:username에서 들어오는 파라미터(username)
    const profile = data[params.username];
    return (
        <div>
            <h2> Profile </h2>
            <hr/>
            {profile ? (
                <div>
                    <h3> {profile.name} </h3>
                    <p> {profile.description} </p>
                    <img src={profile.pic}></img>
                </div>
            ) : (
                <div>
                    <h3> 해당하는 데이터가 없습니다. </h3>
                </div>
            )}
        </div>
    )
}

export default Profile