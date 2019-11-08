import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  FormControl,
  FormLabel,
  Form,
  Button,
  Tabs,
  Tab
} from "react-bootstrap";
import LoginInputForms from "./login";
import Register from "./register";

class LoginForm extends React.Component {
  render() {
    return (
      <Container>
        <Row className="py-5">
          <Col md={6} className="mx-auto">
            <Tabs fill defaultActiveKey="Login" id="uncontrolled-tab-example">
              <Tab eventKey="Login" title="Login">
                <LoginInputForms
                  tryToLogin={(e, username, password) =>
                    this.props.tryLogin(e, username, password)
                  }
                />
              </Tab>
              <Tab eventKey="Register" title="Register">
                <Register />
              </Tab>
            </Tabs>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default LoginForm;
