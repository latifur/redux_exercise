import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { BUY_PRODUCT } from "../redux/actions";

import Product from "./product";

function AllPhones() {
  const AllData = useSelector(state => state.Phone);
  console.log(AllData);
  const dispatch = useDispatch();
  const AddToCart = e => {
    const thisSlug = e.target.id;
    const thisCartItem = AllData.filter(result => result.slug == thisSlug);
    console.log("this is filtered item", thisCartItem);
    const cartItemInfo = {
      title: thisCartItem[0].title,
      slug: thisCartItem[0].slug,
      imgUrl: thisCartItem[0].img,
      price: thisCartItem[0].price,
      qty: 1,
      itemType: thisCartItem[0].itemType
    };
    dispatch(BUY_PRODUCT(cartItemInfo));
  };
  const AllPhoneTitles = AllData.map((item, index) => {
    return (
      <Col md={3} key={index}>
        <Product
          img={item.img}
          title={item.title}
          price={item.price}
          buyDisabled={item.buyDisabled}
          slug={item.slug}
          id={item.slug}
          AddToCart={e => AddToCart(e)}
          itemType={item.itemType}
        />
      </Col>
    );
  });
  return <>{AllPhoneTitles}</>;
}

class ShowAllPhone extends Component {
  render() {
    return (
      <Container className="my-4">
        <Row>
          <AllPhones />
        </Row>
      </Container>
    );
  }
}

export default ShowAllPhone;
