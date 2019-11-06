import React, { Component } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Container } from "react-bootstrap";

import DetailsDom from "../component/detailsDom";

function ProductDetailsInfo(props) {
  const AllPhone = useSelector(state => state.Phone);
  const allRooms = useSelector(state => state.Room);

  let detailsItem = AllPhone.filter(result => result.slug === props.itemSlug);
  if (detailsItem.length < 1) {
    detailsItem = allRooms.filter(
      result => result.fields.slug === props.itemSlug
    );
  }

  console.log("is this product has defined", detailsItem);
  if (detailsItem.length < 1) {
    return <h4>This Product is not Available</h4>;
  } else {
    if (detailsItem[0].fields && detailsItem[0].fields.itemType == "room") {
      return (
        <>
          <DetailsDom
            img={detailsItem[0].fields.images[0].fields.file.url}
            title={detailsItem[0].fields.name}
            description={detailsItem[0].fields.description}
            itemType={detailsItem[0].fields.itemType}
            itemPrice={detailsItem[0].fields.price}
            itemCatagoryType={detailsItem[0].fields.type}
            itemExtra={detailsItem[0].fields.extras}
            itemBreakFast={detailsItem[0].fields.breakfast}
          />
        </>
      );
    } else {
      return (
        <>
          <DetailsDom
            img={detailsItem[0].img}
            title={detailsItem[0].title}
            description={detailsItem[0].info}
            itemType={detailsItem[0].itemType}
            itemPrice={detailsItem[0].price}
            itemCompany={detailsItem[0].company}
          />
        </>
      );
    }
  }
}

export default class ProductDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      itemSlug: props.match.params.slug
    };
  }

  render() {
    return (
      <Container>
        <ProductDetailsInfo itemSlug={this.state.itemSlug} />
      </Container>
    );
  }
}
