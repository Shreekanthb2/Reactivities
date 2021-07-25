import { ChangeEvent, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { Activity } from "../../../app/models/activity";
import { useStore } from "../../../app/stores/store";

export function ActivityForm() {
  const { activityStore } = useStore();
  const { selectedActivity, closeForm, createActivity, updateActivity } =
    activityStore;
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    category: "",
    date: "",
    description: "",
    venue: "",
    city: "",
  };
  const [activity, setActivitity] = useState<Activity>(initialState);
  function handleSubmit(e: any) {
    e.preventDefault();
    activity.id ? updateActivity(activity) : createActivity(activity);
  }
  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivitity({ ...activity, [name]: value });
  }
  return (
    <Form autoComplete="off" onSubmit={handleSubmit}>
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
        variant="secondary"
        type="cancel"
        className="float-right"
        onClick={() => closeForm()}
      >
        Cancel
      </Button>
    </Form>
  );
}
