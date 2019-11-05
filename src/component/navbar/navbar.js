import React, { Component } from "react";
import ProductCart from "./cart";
import {
  Navbar,
  Nav,
  NavDropdown,
  Form,
  FormControl,
  Button
} from "react-bootstrap";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { BUY_PRODUCT } from "../../redux/actions";

const AppNavbar = () => {
  const Cart = useSelector(state => state.Cart);
  return (
    <Navbar bg="light" expand="lg">
      <Link className="navbar-brand" to="/">
        Latifur-shop
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <ul className="navbar-nav navbar-right">
            <li className="nav-item">
              <Link className="nav-link" to="/phones">
                Phones
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/rooms">
                Rooms
              </Link>
            </li>

            <NavDropdown
              title={"Cart" + "(" + Cart.itemIntoCart + ")"}
              id="basic-nav-dropdown"
            >
              <ProductCart />
            </NavDropdown>
          </ul>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default AppNavbar;
