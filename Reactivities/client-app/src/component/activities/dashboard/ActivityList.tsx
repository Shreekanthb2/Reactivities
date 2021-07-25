import { observer } from "mobx-react-lite";
import { Badge, Button, Card } from "react-bootstrap";
import { XLg } from "react-bootstrap-icons";
import Moment from "react-moment";
import { Segment } from "semantic-ui-react";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";

export default observer(function ActivityList() {
  const { activityStore } = useStore();
  const {
    activitiesByDate: activities,
    selectActivity,
    deleteActivity,
  } = activityStore;
  return (
    <Segment>
      {activities.map((activity: Activity) => (
        <Card className="mb-2 activities-card-items" key={activity.id}>
          <Card.Header>
            {activity.title}
            <XLg
              className="float-right activity-card-delete"
              onClick={() => deleteActivity(activity.id)}
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
});
