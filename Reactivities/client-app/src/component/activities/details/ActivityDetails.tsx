import { Button, Card } from "react-bootstrap";
import Moment from "react-moment";
import { useStore } from "../../../app/stores/store";

export function ActivityDetails() {
  const { activityStore } = useStore();
  const { selectedActivity, cancelSelectedActivity, openForm } = activityStore;
  if (!selectedActivity) return <span></span>;
  return (
    <Card className="activities-card-items">
      <Card.Img
        variant="top"
        src={`/assets/categoryImages/${selectedActivity.category}.jpg`}
      />
      <Card.Body>
        <Card.Title>{selectedActivity.title}</Card.Title>
        <Card.Text>{selectedActivity.description}</Card.Text>
        <Card.Text>
          <Moment format="DD MMM YYYY">{selectedActivity.date}</Moment>
        </Card.Text>
      </Card.Body>
      <Card.Footer>
        <Button
          variant="primary"
          size="sm"
          onClick={() => openForm(selectedActivity.id)}
        >
          Edit
        </Button>
        <Button
          variant="secondary"
          size="sm"
          className="float-right"
          onClick={cancelSelectedActivity}
        >
          Cancel
        </Button>
      </Card.Footer>
    </Card>
  );
}
