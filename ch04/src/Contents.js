import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Pagination from 'react-bootstrap/Pagination';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PlaceHolder from './100x180.svg';
import Carousel from 'react-bootstrap/Carousel';
import Vs1 from './vs1.svg';
import Vs2 from './vs2.svg';
import Vs3 from './vs3.svg';
import Form from 'react-bootstrap/Form';
import "./Contents.scss";
const Contents = () => {
    let active = 2;
    let items = [];
    for (let number = 1; number <= 5; number++) {
      items.push(
        <Pagination.Item key={number} active={number === active}>
          {number}
        </Pagination.Item>,
      );
    } 
    return (
        <div className='contents'>
            <figure className='visual'>
                <Carousel>
                    <Carousel.Item>
                        <Card.Img variant="top" src={Vs1} />
                        <Carousel.Caption>
                            <h3>First slide label</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card.Img variant="top" src={Vs2} />
                        <Carousel.Caption>
                            <h3>Second slide label</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <Card.Img variant="top" src={Vs3} />
                        <Carousel.Caption>
                            <h3>Third slide label</h3>
                            <p>
                                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                            </p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </figure>
            <div className='page'>
                <h2>Grid</h2>
                <Container>
                    <Row>
                        <Col>1 of 2</Col>
                        <Col>2 of 2</Col>
                    </Row>
                    <Row>
                        <Col>1 of 3</Col>
                        <Col>2 of 3</Col>
                        <Col>3 of 3</Col>
                    </Row>
                </Container>
                <hr/><br />
            </div>
            <div className='page'>    
                <h2>Table</h2>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Username</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td colSpan={2}>Larry the Bird</td>
                        <td>@twitter</td>
                        </tr>
                    </tbody>
                </Table>
                <div>
                    <Pagination>{items}</Pagination>
                </div>
            </div>
            <div className='page'>
                <h2>목록 페이지</h2>
                <div>
                    <ul className='list'>
                        <li>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={PlaceHolder} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </li>
                        <li>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={PlaceHolder} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </li>
                        <li>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={PlaceHolder} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </li>
                        <li>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={PlaceHolder} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </li>
                        <li>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={PlaceHolder} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </li>
                        <li>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={PlaceHolder} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </li>
                        <li>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={PlaceHolder} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </li>
                        <li>
                            <Card style={{ width: '18rem' }}>
                                <Card.Img variant="top" src={PlaceHolder} />
                                <Card.Body>
                                    <Card.Title>Card Title</Card.Title>
                                    <Card.Text>
                                    Some quick example text to build on the card title and make up the
                                    bulk of the card's content.
                                    </Card.Text>
                                    <Button variant="primary">Go somewhere</Button>
                                </Card.Body>
                            </Card>
                        </li>
                    </ul>
                </div>
            </div>
            <div className='page'>
                <h2>Form</h2>
                <div className='form-area'>
                    <Form>
                        <Form.Select aria-label="Default select example">
                            <option>Open this select menu</option>
                            <option value="1">One</option>
                            <option value="2">Two</option>
                            <option value="3">Three</option>
                        </Form.Select>
                        <hr/>
                        <div>
                            {['checkbox', 'radio'].map((type) => (
                                <div key={`default-${type}`} className="mb-3">
                                <Form.Check // prettier-ignore
                                    type={type}
                                    id={`default-${type}`}
                                    label={`default ${type}`}
                                />

                                <Form.Check
                                    disabled
                                    type={type}
                                    label={`disabled ${type}`}
                                    id={`disabled-default-${type}`}
                                />
                                </div>
                            ))}
                        </div>
                        <hr />
                        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="name@example.com" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control as="textarea" rows={3} />
                        </Form.Group>
                        <div>
                            <Button variant="primary">Primary</Button>{' '}
                            <Button variant="secondary">Secondary</Button>{' '}
                            <Button variant="success">Success</Button>{' '}
                            <Button variant="warning">Warning</Button>{' '}
                            <Button variant="danger">Danger</Button>{' '}
                            <Button variant="info">Info</Button>{' '}
                            <Button variant="light">Light</Button>{' '}
                            <Button variant="dark">Dark</Button>
                            <Button variant="link">Link</Button>
                        </div>
                    </Form>
                </div>    
            </div>
        </div>
    )
}

export default Contents