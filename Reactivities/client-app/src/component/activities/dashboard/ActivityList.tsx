import { Badge, Button, Card } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";
import Moment from "react-moment";
import { Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";

interface Props {
  activities: Activity[];
  selectActivity: (id: string) => void;
  handleDeleteActivity: (id: string) => void;
}

export function ActivityList({
  activities,
  selectActivity,
  handleDeleteActivity,
}: Props) {
  return (
    <Segment>
      {activities.map((activity: Activity) => (
        <Card className="mb-2 activities-card-items" key={activity.id}>
          <Card.Header>
            {activity.title}
            <XLg
              className="float-right activity-card-delete"
              onClick={() => handleDeleteActivity(activity.id)}
            />
          </Card.Header>
          <Card.Body>
            <Card.Title>
              <Moment format="DD MMM YYYY">{activity.date}</Moment>
            </Card.Title>
            <Card.Text>{activity.description}</Card.Text>
            <Card.Text>
              <Badge style={{ backgroundColor: "green" }}>
                {activity.category}
              </Badge>
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <Button
              variant="primary"
              className="float-right"
              onClick={() => selectActivity(activity.id)}
            >
              View
            </Button>
          </Card.Footer>
        </Card>
      ))}
    </Segment>
  );
}
