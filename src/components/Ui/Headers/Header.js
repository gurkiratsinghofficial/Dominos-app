import React from "react";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";
import logo from "../../../images/logo.png";
/**
 * @description: JSX for rendering main navigation bar
 */
function Header() {
  return (
    <div>
      <Navbar bg="primary" variant="dark">
        <Navbar.Brand>
          <img
            alt=""
            src={logo}
            width="30"
            height="30"
            className="d-inline-block align-top"
          />{" "}
          <b>Domino's Pizza</b>
        </Navbar.Brand>
        <Nav className="mr-auto"></Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <Form.Text>My account</Form.Text>
        </Form>
      </Navbar>
    </div>
  );
}

export default Header;
