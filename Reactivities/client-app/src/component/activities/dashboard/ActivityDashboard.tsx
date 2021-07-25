import React from "react";
import { Activity } from "../../../app/models/activity";
import { Col, Container, Row } from "react-bootstrap";
import "../Activities.css";
import { ActivityList } from "./ActivityList";
import { ActivityDetails } from "../details/ActivityDetails";
import { ActivityForm } from "../form/ActivityForm";

interface Props {
  activities: Activity[];
  selectedActivity: Activity | undefined;
  editMode: boolean;
  selectActivity: (id: string) => void;
  cancelSelectActivity: () => void;
  handleDeleteActivity: (id: string) => void;
  handleFormOpen: (id: string) => void;
  handleFormClose: () => void;
  handleCreateOrEditActivity: (activity: Activity) => void;
}

export function ActivityDashboard({
  activities,
  selectedActivity,
  editMode,
  selectActivity,
  cancelSelectActivity,
  handleDeleteActivity,
  handleFormOpen,
  handleFormClose,
  handleCreateOrEditActivity,
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
          {selectedActivity && !editMode && (
            <ActivityDetails
              activity={selectedActivity}
              cancelSelectActivity={cancelSelectActivity}
              handleFormOpen={handleFormOpen}
            />
          )}
          {editMode && (
            <ActivityForm
              handleFormClose={handleFormClose}
              activity={selectedActivity}
              handleCreateOrEditActivity={handleCreateOrEditActivity}
            />
          )}
        </Col>
      </Row>
    </Container>
  );
}
