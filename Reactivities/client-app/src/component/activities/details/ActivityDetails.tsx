import { Button, Card } from "react-bootstrap";
import Moment from "react-moment";
import { Activity } from "../../../models/activity";

interface Props {
  activity: Activity;
  cancelSelectActivity: () => void;
}

export function ActivityDetails({ activity, cancelSelectActivity }: Props) {
  return (
    <Card className="activities-card-items">
      <Card.Img
        variant="top"
        src={`/assets/categoryImages/${activity.category}.jpg`}
      />
      <Card.Body>
        <Card.Title>{activity.title}</Card.Title>
        <Card.Text>{activity.description}</Card.Text>
        <Card.Text>
          <Moment format="DD MMM YYYY">{activity.date}</Moment>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button variant="primary" size="sm">
          Edit
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="float-right"
          onClick={() => cancelSelectActivity()}
        >
          Cancel
        </Button>
      </Card.Footer>
    </Card>
  );
}
