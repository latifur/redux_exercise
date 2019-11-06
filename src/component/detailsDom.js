import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function DetailsDom(props) {
  return (
    <>
      <img src={props.img} className="img-fluid mb-4" />
      <h3>{props.title}</h3>
      <Row className="justify-content-between">
        <Col md={7}>
          <p>{props.description}</p>
        </Col>
        <Col md={4}>
          {props.itemType === "room" ? (
            <>
              <h5>Room Features</h5>
              <p>
                <strong>Room Type:</strong> {props.itemCatagoryType}
              </p>
              <p>
                <strong>Cost:</strong> ${props.itemPrice} Per Day
              </p>
              <p>
                <strong>Payment Type:</strong> Advance on Hand
              </p>
              <p>
                <strong>Available Date:</strong> Not Sure Keep Your Check
                Everyday
              </p>
              <p>
                <strong>Breakfast:</strong>
                {props.itemBreakFast
                  ? " Breakfast Included"
                  : " Breakfast Not Included"}
              </p>

              <p>
                <b>Extra Facilities:</b> <br /> {props.itemExtra}
              </p>
            </>
          ) : (
            <>
              <h2>Phone Feature</h2>
              <p>
                <strong>Phone Price: </strong> {props.itemPrice}
              </p>
              <p>
                <strong>Company: </strong>{" "}
                <span className="text-uppercase">{props.itemCompany}</span>
              </p>
              <p>
                <strong>Payment Type: </strong> Advance on Hand
              </p>
              <p>
                <strong>Delivery Type: </strong> Not Sure
              </p>
            </>
          )}
        </Col>
      </Row>
    </>
  );
}

export default DetailsDom;
