import React from "react";
import { Card } from "react-bootstrap";

function CustomiseHeader({ modalPrice, Modalpizza }) {
  return (
    <div>
      <Card.Img variant="top" src={Modalpizza.imageSRC} />
      <Card.Body>
        <Card.Title>₹{modalPrice}</Card.Title>
        <Card.Title>{Modalpizza.name}</Card.Title>
        <Card.Text>{Modalpizza.description}</Card.Text>
      </Card.Body>
    </div>
  );
}

export default CustomiseHeader;
