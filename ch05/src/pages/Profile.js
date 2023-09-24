import React from 'react';
import { useParams } from 'react-router-dom';
import cat1 from '../images/cat1.jpg';
import cat2 from '../images/cat2.jpg';
import cat3 from '../images/cat3.jpg';
import "./Profile.scss";
import { Container } from 'react-bootstrap';

const data = {
    kim: {
        name: '김이름',
        description: '백엔드를 좋아하는 개발자',
        pic: cat1,
    },
    lee: {
        name: '이이름',
        description: '프론트엔드를 좋아하는 개발자',
        pic: cat2,
    },
    park: {
        name: '박이름',
        description: '서울을 좋아하는 개발자',
        pic: cat3,
    }
}

const Profile = () => {
    const params = useParams();         // /profile/:username에서 들어오는 파라미터(username)
    const profile = data[params.username];
    return (
        <div>
            <Container className='mt-5 mb-5'>
                <h2> Profile </h2>
                <hr/>
                {profile ? (
                    <div className='Profile'>
                        <h3> {profile.name} </h3>
                        <p> {profile.description} </p>
                        <img src={profile.pic} alt={profile.name}></img>
                    </div>
                ) : (
                    <div>
                        <h3> 해당하는 데이터가 없습니다. </h3>
                    </div>
                )}
            </Container>
        </div>
    )
}

export default Profile