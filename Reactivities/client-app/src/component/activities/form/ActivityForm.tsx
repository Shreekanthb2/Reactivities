import { observer } from "mobx-react-lite";
import { useEffect } from "react";
import { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Link, useHistory, useParams } from "react-router-dom";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";
import { v4 as uuid } from "uuid";
import "../Activities.css";

export default observer(function ActivityForm() {
  const history = useHistory();
  const { activityStore } = useStore();
  const { loadActivity, createActivity, updateActivity, loading } =
    activityStore;
  const { id } = useParams<{ id: string }>();
  const [activity, setActivitity] = useState<Activity>({
    id: "",
    title: "",
    category: "",
    date: "",
    description: "",
    venue: "",
    city: "",
  });

  useEffect(() => {
    if (id) loadActivity(id).then((activity) => setActivitity(activity!));
  }, [id, loadActivity]);

  function handleSubmit(e: any) {
    e.preventDefault();

    if (activity.id.length === 0) {
      activity.id = uuid();
      var newActivity = {
        ...activity,
        id: uuid(),
      };
      createActivity(newActivity).then(() =>
        history.push(`/activities/${newActivity.id}`)
      );
    } else {
      updateActivity(activity).then(() =>
        history.push(`/activities/${activity.id}`)
      );
    }
  }
  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivitity({ ...activity, [name]: value });
  }
  if (loading)
    return (
      <LoadingComponent
        content="Loading the Activity..."
        loading={loading}
      ></LoadingComponent>
    );
  return (
    <Form
      autoComplete="off"
      onSubmit={handleSubmit}
      className="activity-page-top"
    >
      <Form.Group className="activity-form-group" controlId="formTitile">
        <Form.Label className="activity-form-label">Title</Form.Label>
        <Form.Control
          name="title"
          type="text"
          placeholder="Enter Title"
          value={activity.title}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group
        className="activity-form-group"
        controlId="activityForm.formDescription"
      >
        <Form.Label>Description</Form.Label>
        <Form.Control
          name="description"
          as="textarea"
          rows={3}
          value={activity.description}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formCategory" className="activity-form-group">
        <Form.Label>Category</Form.Label>
        <Form.Control
          name="category"
          type="text"
          placeholder="Enter Category"
          value={activity.category}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formDate" className="activity-form-group">
        <Form.Label>Date</Form.Label>
        <Form.Control
          name="date"
          type="date"
          placeholder="Enter Date"
          value={activity.date}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formCity" className="activity-form-group">
        <Form.Label>City</Form.Label>
        <Form.Control
          name="city"
          type="text"
          placeholder="Enter City"
          value={activity.city}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Form.Group controlId="formVenue" className="activity-form-group">
        <Form.Label>Venue</Form.Label>
        <Form.Control
          name="venue"
          type="text"
          placeholder="Enter Venue"
          value={activity.venue}
          onChange={handleInputChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit" onClick={(e) => handleSubmit}>
        Submit
      </Button>
      <Button
        as={Link}
        to="/activities"
        variant="secondary"
        type="cancel"
        className="float-right"
      >
        Cancel
      </Button>
    </Form>
  );
});
