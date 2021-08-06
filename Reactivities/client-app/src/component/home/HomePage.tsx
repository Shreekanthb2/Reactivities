import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <Container style={{ marginTop: "1em" }}>
      <h1>Home Page</h1>
      <br />
      <h4>
        Go to
        <Link to="/activities"> Activities</Link>
      </h4>
    </Container>
  );
}
