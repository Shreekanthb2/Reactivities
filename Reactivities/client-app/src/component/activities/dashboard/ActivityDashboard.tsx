import { Col, Container, Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useStore } from "../../../app/stores/store";
import ActivityList from "./ActivityList";
import "../Activities.css";
import { useEffect } from "react";
import LoadingComponent from "../../../app/layout/LoadingComponent";

export default observer(function ActivityDashboard() {
  // (props:Props) == props.activities
  const { activityStore } = useStore();
  const { loadActivities, loading } = activityStore;

  useEffect(() => {
    loadActivities();
  }, [activityStore, loadActivities]);

  if (loading)
    return (
      <LoadingComponent
        loading={loading}
        content="Loading the Activities..."
      ></LoadingComponent>
    );

  return (
    <Container>
      <Row>
        <Col xs={12} md={7} className="activity-card">
          <ActivityList />
        </Col>
        <Col xs={12} md={5} className="activity-card">
          {/* {selectedActivity && !editMode && <ActivityDetails />}
          {editMode && <ActivityForm />} */}
          <h1>Activity Filters</h1>
        </Col>
      </Row>
    </Container>
  );
});
