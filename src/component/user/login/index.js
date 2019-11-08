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

export default class LoginInputForms extends Component {
  constructor() {
    super();
    this.state = {
      userName: "",
      password: ""
    };
  }
  handleChange(e) {
    const changedValue = e.target.value;

    switch (e.target.name) {
      case "username": {
        this.setState({
          userName: changedValue
        });
      }
      case "password": {
        this.setState({
          password: changedValue
        });
      }
    }
  }

  render() {
    return (
      <>
        <Form
          className="px-3"
          onSubmit={e =>
            this.props.tryToLogin(e, this.state.userName, this.state.password)
          }
        >
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              name="username"
              onChange={e => this.handleChange(e)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Password"
              name="password"
              onChange={e => this.handleChange(e)}
            />
          </Form.Group>
          <Form.Group controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </>
    );
  }
}
