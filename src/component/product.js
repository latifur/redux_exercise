import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { CHANGE_QUANTITY } from "../redux/actions";

function Product(props) {
  const dispatch = useDispatch();
  const ChangeQty = e => {
    const value = e.target.value;
    const thisSlug = e.target.id;
    dispatch(CHANGE_QUANTITY(value, thisSlug));
  };
  return (
    <Card className="mb-3">
      <Card.Img variant="top" src={props.img} />
      <Card.Body>
        <Card.Title>
          <Link to={`/details/${props.slug}`}>{props.title}</Link>
        </Card.Title>
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
