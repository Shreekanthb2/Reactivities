import { Button, Nav, Navbar } from "react-bootstrap";
import { PersonCheck } from "react-bootstrap-icons";
import { useStore } from "../app/stores/store";

export function Navigationbar() {
  const { activityStore } = useStore();

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
          <Nav.Link className="activities-nav-link">Activities</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link>
            <Button variant="primary" onClick={() => activityStore.openForm()}>
              Create
            </Button>{" "}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
