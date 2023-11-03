import React from 'react'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function Cards({data}) {
console.log(data)
  return (
    <Card style={{ width: "18rem", border: "7px solid white" }}>
      <Card.Img variant="top" src={data.imgSrc} />
      <Card.Title>name:{data.name}</Card.Title>
      <ListGroup variant="flush">
        <ListGroup.Item>team:{data.team}</ListGroup.Item>
        <ListGroup.Item>nationality:{data.team}</ListGroup.Item>
        <ListGroup.Item>number:{data.team}</ListGroup.Item>
        <ListGroup.Item>Age:{data.team}</ListGroup.Item>
      </ListGroup>
    </Card>
  );
}

export default Cards;