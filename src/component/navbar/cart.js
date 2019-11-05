import React from "react";
import { Link } from "react-router-dom";
import { NavDropdown, Row, Col } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { BUY_PRODUCT, REMOVE_PRODUCT } from "../../redux/actions";

function ProductCart() {
  const ShopCart = useSelector(state => state.Cart);
  const dispatch = useDispatch();
  const RemoveItem = e => {
    const thisSlug = e.target.id;
    dispatch(REMOVE_PRODUCT(thisSlug));
  };
  return (
    <>
      <div className="cart-inner">
        {ShopCart.cartItem.map((item, index) => {
          return (
            <div key={index} className="mx-3 cart-item">
              <Row>
                <Col sm={4}>
                  <img src={item.imgUrl} className="img-fluid" />
                </Col>
                <Col sm={8}>
                  <p>{item.title}</p>
                  <p>QTY: {item.qty}</p>
                  <p>Price: $ {item.price}</p>
                  <button
                    onClick={event => RemoveItem(event)}
                    id={item.slug}
                    className="remove_item btn-link"
                  >
                    X
                  </button>
                </Col>
              </Row>
              <hr />
            </div>
          );
        })}
      </div>
      <div className="d-flex justify-content-between flex-wrap mx-2">
        <h4>Total: $ {ShopCart.cartTotal}</h4>
        <Link className="btn btn-primary" to="/cart">
          Go To Cart
        </Link>
      </div>
    </>
  );
}

export default ProductCart;
