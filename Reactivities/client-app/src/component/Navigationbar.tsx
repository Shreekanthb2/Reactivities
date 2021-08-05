import { Button, Nav, Navbar } from "react-bootstrap";
import { PersonCheck } from "react-bootstrap-icons";
import { NavLink } from "react-router-dom";

export function Navigationbar() {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="activities-nav-bar fixed-top"
    >
      <Navbar
        className="activities-nav-brand"
        as={NavLink}
        to="/"
        activeStyle={{ color: "wheat !important" }}
      >
        <PersonCheck style={{ marginRight: "10px" }}> </PersonCheck>
        Reactivities
      </Navbar>
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link
            activeStyle={{ color: "wheat !important" }}
            className="activities-nav-link"
            as={NavLink}
            to="/activities"
          >
            Activities
          </Nav.Link>
        </Nav>
        <Nav>
          <Button
            variant="primary"
            activeStyle={{ color: "wheat !important" }}
            // onClick={() => activityStore.openForm()}
            as={NavLink}
            to="/createActivity"
          >
            Create
          </Button>{" "}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
