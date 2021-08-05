import { Navigationbar } from "../../component/Navigationbar";
import { observer } from "mobx-react-lite";
import ActivityDashboard from "../../component/activities/dashboard/ActivityDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";
import HomePage from "../../component/home/HomePage";
import ActivityDetails from "../../component/activities/details/ActivityDetails";
import ActivityForm from "../../component/activities/form/ActivityForm";

function App() {
  return (
    <>
      <Navigationbar />
      <Container>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path="/activities" component={ActivityDashboard}></Route>
        <Route path="/activities/:id" component={ActivityDetails}></Route>
        <Route
          path={["/createActivity", "/manage/:id"]}
          component={ActivityForm}
        ></Route>
      </Container>
    </>
  );
}

export default observer(App);
