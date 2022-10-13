import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import {List} from './data'

const Movies = (props) => {
  return (
    <div>
    <Container>
        <Row>{
        List.map((movie)=>
        <Col>
        <Card bg={props.mode} style={{ width: '12rem', marginTop: '15px' }}>
      <Card.Img variant="top" src={movie.img.src} />
      <Card.Body>
        <Card.Title className={props.textmode}>#{movie.ranking}- {movie.title} ({movie.year})</Card.Title>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Distributor : {movie.distributor}</ListGroup.Item>
        <ListGroup.Item>Amount : {movie.amount}</ListGroup.Item>
      </ListGroup>
    </Card>
    </Col>
        )
        }
        </Row>
    </Container>
    </div>
  )
}

export default Movies
