import React from 'react'
import { Button, Card, Carousel, Container, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Vs1 from '../images/vs1.jpg';
import Vs2 from '../images/vs2.jpg';
import Vs3 from '../images/vs3.jpg';
import cat1 from '../images/cat1.jpg';
import cat2 from '../images/cat2.jpg';
import cat3 from '../images/cat3.jpg';
import './Home.scss';

const Home = () => {
    const navigate = useNavigate();
    const goDataroom = () => {
        navigate("/dataroom", { replace : true });
    }
    const goProfile = name => {
        navigate("/profile/" + name, {replace : true});
    }
    return (
        <div>
            <figure className='visual'>
                <Carousel>
                    <Carousel.Item>
                        <Card.Img variant="top" src={Vs1} style={{height: '500px'}}/>
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card.Img variant="top" src={Vs2} style={{height: '500px'}}/>
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card.Img variant="top" src={Vs3} style={{height: '500px'}}/>
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </figure>
            <Container>
                <h2> Home </h2>
                <hr/>
                <div className="d-flex justify-content-around">
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={cat1} />
                            <Card.Body>
                            <Card.Title> 김이름 </Card.Title>
                            <Card.Text>
                                개발자 김이름에 대한 상세 정보를 알고 싶다면?
                            </Card.Text>
                            <Button variant="primary" onClick={ () => goProfile('kim') }> 더보기 </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={cat2} />
                            <Card.Body>
                            <Card.Title> 이이름 </Card.Title>
                            <Card.Text>
                                개발자 이이름에 대한 상세 정보를 알고 싶다면?
                            </Card.Text>
                            <Button variant="primary" onClick={ () => goProfile('lee') }> 더보기 </Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={cat3} />
                            <Card.Body>
                            <Card.Title> 박이름 </Card.Title>
                            <Card.Text>
                                개발자 박이름에 대한 상세 정보를 알고 싶다면?
                            </Card.Text>
                            <Button variant="primary" onClick={ () => goProfile('park') }> 더보기 </Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className='dataroom mb-5'>
                    <Button className='btn' variant="outline-primary" onClick={goDataroom}> 자료 더보기 </Button>
                    <Table striped bordered hover>
                        <thead>
                            <tr>
                            <th>#</th>
                            <th>제목</th>
                            <th>작성자</th>
                            <th>작성일</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td colSpan={4}> 등록된 자료가 없습니다. </td>
                            </tr>
                        </tbody>
                    </Table>
                </div>
            </Container>
        </div>
    )
}

export default Home