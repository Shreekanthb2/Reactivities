import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { Button, Card } from "react-bootstrap";
import Moment from "react-moment";
import { Link, useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

export default observer(function ActivityDetails() {
  const { activityStore } = useStore();
  const { selectedActivity, loadActivity, loading } = activityStore;
  const { id } = useParams<{ id: string }>();

  useEffect(() => {
    if (id) loadActivity(id);
  }, [id, loadActivity]);

  if (loading || !selectedActivity)
    return (
      <LoadingComponent
        content="Loading Activity..."
        loading={loading}
      ></LoadingComponent>
    );

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
          as={Link}
          to={`/manage/${selectedActivity.id}`}
          variant="primary"
          size="sm"
        >
          Edit
        </Button>
        <Button
          as={Link}
          to={"/activities"}
          variant="secondary"
          size="sm"
          className="float-right"
        >
          Cancel
        </Button>
      </Card.Footer>
    </Card>
  );
});
