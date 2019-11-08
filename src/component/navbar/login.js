import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { NavDropdown } from "react-bootstrap";
import { LOG_OUT } from "../../redux/actions";

function Login() {
  const userInfo = useSelector(state => state.User);
  const dispatch = useDispatch();

  function logOut() {
    dispatch(LOG_OUT());
  }

  if (userInfo.loginStatus !== true) {
    return (
      <Link to="/login" className="nav-link">
        Login
      </Link>
    );
  } else {
    return (
      <>
        <NavDropdown title={userInfo.currentUserName} id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">User Info</NavDropdown.Item>
          <button
            className="btn btn-link dropdown-item"
            onClick={() => logOut()}
          >
            Log Out
          </button>
        </NavDropdown>
        {/* <Link className="nav-link">{userInfo.currentUserName}</Link> */}
      </>
    );
  }
}

export default Login;
