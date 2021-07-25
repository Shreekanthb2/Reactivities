import React from "react";
import { Button, Nav, Navbar } from "react-bootstrap";
import { PersonCheck } from "react-bootstrap-icons";

interface Props {
  handleFormOpen: () => void;
}

export function Navigationbar({ handleFormOpen }: Props) {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="activities-nav-bar fixed-top"
    >
      <Navbar.Brand className="activities-nav-brand" href="#home">
        <PersonCheck style={{ marginRight: "10px" }}> </PersonCheck>
        Reactivities
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link className="activities-nav-link" href="#activities">
            Activities
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="#create">
            <Button variant="primary" onClick={() => handleFormOpen()}>
              Create
            </Button>{" "}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
