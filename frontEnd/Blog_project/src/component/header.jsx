import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

function Header() {
  return (
    <div>
      <Navbar expand="lg" style={{backgroundColor : "#0275d8",display :"flex", alignItems:"center",justifyContent:""}} className="">
        <Container fluid>
          <Navbar.Brand href="#"> BLOG </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="#action1">Home</Nav.Link>
              <Nav.Link href="#action2">Posts</Nav.Link>
              <Nav.Link href="#action2">Create</Nav.Link>
              <Nav.Link href="#action2">Admin Dashboard</Nav.Link>
            </Nav>
            <Button variant="light" style={{margin : "5px"}}>Login</Button>{' '}
            <Button variant="light" style={{margin : "5px"}}>Register</Button>{' '}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
