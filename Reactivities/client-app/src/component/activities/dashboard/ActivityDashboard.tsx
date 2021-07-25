import { Col, Container, Row } from "react-bootstrap";
import { ActivityDetails } from "../details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import ActivityList from "./ActivityList";
import "../Activities.css";

export default observer(function ActivityDashboard() {
  // (props:Props) == props.activities
  const { activityStore } = useStore();
  const { selectedActivity, editMode } = activityStore;
  return (
    <Container>
      <Row>
        <Col xs={12} md={7} className="activity-card">
          <ActivityList />
        </Col>
        <Col xs={12} md={5} className="activity-card">
          {selectedActivity && !editMode && <ActivityDetails />}
          {editMode && <ActivityForm />}
        </Col>
      </Row>
    </Container>
  );
});
