import React from "react";
import LoginForm from "../component/user/loginForm";
import { useSelector, useDispatch } from "react-redux";
import { LOG_IN } from "../redux/actions";
import { Redirect, useHistory, Link } from "react-router-dom";

const Login = () => {
  const userInfo = useSelector(state => state.User);
  const dispatch = useDispatch();

  function tryLogin(e, username, password) {
    e.preventDefault();
    console.log(username, password);
    dispatch(LOG_IN(username, password));
  }

  return (
    <>
      {userInfo.loginStatus ? (
        <Redirect to="/" />
      ) : (
        <LoginForm
          tryLogin={(e, username, password) => tryLogin(e, username, password)}
          loginStatus={userInfo.loginStatus}
        />
      )}
    </>
  );
};

export default Login;
