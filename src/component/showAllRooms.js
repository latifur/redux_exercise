import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { BUY_PRODUCT } from "../redux/actions";

import Product from "./product";

function AllRooms() {
  const AllData = useSelector(state => state.Room);
  console.log(AllData);
  const dispatch = useDispatch();
  const AddToCart = e => {
    const thisSlug = e.target.id;
    const thisCartItem = AllData.filter(
      result => result.fields.slug == thisSlug
    );
    console.log("this is filtered item", thisCartItem);
    const cartItemInfo = {
      title: thisCartItem[0].fields.name,
      slug: thisCartItem[0].fields.slug,
      imgUrl: thisCartItem[0].fields.images[0].fields.file.url,
      price: thisCartItem[0].fields.price,
      qty: 1
    };
    dispatch(BUY_PRODUCT(cartItemInfo));
  };
  const AllRoomsTitles = AllData.map((item, index) => {
    return (
      <Col md={3} key={index}>
        <Product
          img={item.fields.images[0].fields.file.url}
          title={item.fields.name}
          price={item.fields.price}
          buyDisabled={item.fields.buyDisabled}
          slug={item.fields.slug}
          id={item.fields.slug}
          AddToCart={e => AddToCart(e)}
        />
      </Col>
    );
  });
  return <>{AllRoomsTitles}</>;
}

class ShowAllRooms extends Component {
  render() {
    return (
      <Container className="my-4">
        <Row>
          <AllRooms />
        </Row>
      </Container>
    );
  }
}

export default ShowAllRooms;
