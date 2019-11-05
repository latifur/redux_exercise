import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";

function Product(props) {
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <div className="d-flex justify-content-between">
          <Card.Text>Price: ${props.price}</Card.Text>
          <Button
            variant="primary"
            size="sm"
            disabled={props.buyDisabled ? false : true}
            id={props.slug}
            onClick={props.AddToCart}
          >
            BUY
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
}

export default Product;
