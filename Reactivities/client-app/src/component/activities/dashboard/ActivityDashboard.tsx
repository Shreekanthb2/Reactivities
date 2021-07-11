import React from "react";
import { Activity } from "../../../models/activity";
import { Col, Container, Row } from "react-bootstrap";
import "../Activities.css";
import { ActivityList } from "./ActivityList";
import { ActivityDetails } from "../details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  handleDeleteActivity: (id: string) => void;
}

export function ActivityDashboard({
  activities,
  selectedActivity,
  selectActivity,
  cancelSelectActivity,
  handleDeleteActivity,
}: Props) {
  // (props:Props) == props.activities
  return (
    <Container>
      <Row>
        <Col xs={12} md={7} className="activity-card">
          <ActivityList
            activities={activities}
            selectActivity={selectActivity}
            handleDeleteActivity={handleDeleteActivity}
          />
        </Col>
        <Col xs={12} md={5} className="activity-card">
          {selectedActivity && (
            <ActivityDetails
              activity={selectedActivity}
              cancelSelectActivity={cancelSelectActivity}
            />
          )}
          <ActivityForm />
        </Col>
      </Row>
    </Container>
  );
}
