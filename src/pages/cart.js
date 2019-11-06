import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Table } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { BUY_PRODUCT, REMOVE_PRODUCT, CHANGE_QUANTITY } from "../redux/actions";

function CartPage() {
  const ShopCart = useSelector(state => state.Cart);
  const dispatch = useDispatch();
  const RemoveItem = e => {
    const thisSlug = e.target.id;
    dispatch(REMOVE_PRODUCT(thisSlug));
  };

  const ChangeQty = e => {
    const value = e.target.value;
    const thisSlug = e.target.id;
    dispatch(CHANGE_QUANTITY(value, thisSlug));
  };

  if (ShopCart.cartItem.length == 0) {
    return (
      <>
        <h3 className="text-center">Nothing is Added To Cart.</h3>
      </>
    );
  } else {
    return (
      <>
        <Container>
          <h3>Shopping Cart</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>Remove</th>
                <th>Product Name</th>
                <th>Product Image</th>
                <th>Unit Price</th>
                <th>Qty</th>
                <th>Sutotal</th>
              </tr>
            </thead>
            <tbody>
              {ShopCart.cartItem.map((item, index) => {
                return (
                  <tr key={index}>
                    <td>
                      <button
                        onClick={event => RemoveItem(event)}
                        id={item.slug}
                        className="remove_item btn btn-link"
                      >
                        X
                      </button>
                    </td>
                    <td>{item.title}</td>
                    <td>
                      <img
                        src={item.imgUrl}
                        height="80"
                        width="80"
                        className="img-fluid"
                      />
                    </td>
                    <td>{item.price}</td>
                    <td>
                      <button
                        onClick={event => ChangeQty(event)}
                        value="Decrease"
                        id={item.slug}
                        className="remove_item btn btn-link"
                        disabled={item.qty <= 1 ? true : false}
                      >
                        -
                      </button>
                      {item.qty}
                      <button
                        onClick={event => ChangeQty(event)}
                        value="increase"
                        id={item.slug}
                        className="remove_item btn btn-link"
                        disabled={item.qty >= 5 ? true : false}
                      >
                        +
                      </button>
                      {item.qty > 4 ? (
                        <p>
                          <small>
                            এত্তগুলা একসাথে অর্ডার করা যাবে না।
                            <br/> মানিব্যাগ খালি
                            হবে
                          </small>
                        </p>
                      ) : (
                        ""
                      )}
                    </td>
                    <td>{item.price * item.qty}</td>
                  </tr>
                );
              })}
            </tbody>
            <tfoot>
              <td colspan="5" className="text-right">
                <h4>Total</h4>
              </td>
              <td>
                <h3>$ {ShopCart.cartTotal}</h3>
              </td>
            </tfoot>
          </Table>
        </Container>
      </>
    );
  }
}

export default CartPage;
