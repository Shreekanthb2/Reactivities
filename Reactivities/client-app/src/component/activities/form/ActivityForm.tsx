import React from "react";
import { Button, Form } from "react-bootstrap";

export function ActivityForm() {
  return (
    <Form>
      <Form.Group controlId="formTitile">
        <Form.Label>Title</Form.Label>
        <Form.Control type="text" placeholder="Enter Title" />
      </Form.Group>
      <Form.Group controlId="activityForm.formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control as="textarea" rows={3} />
      </Form.Group>
      <Form.Group controlId="formCategory">
        <Form.Label>Category</Form.Label>
        <Form.Control type="text" placeholder="Enter Category" />
      </Form.Group>
      <Form.Group controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control type="datetime-local" placeholder="Enter Date" />
      </Form.Group>
      <Form.Group controlId="formCity">
        <Form.Label>City</Form.Label>
        <Form.Control type="text" placeholder="Enter City" />
      </Form.Group>
      <Form.Group controlId="formVenue">
        <Form.Label>Venue</Form.Label>
        <Form.Control type="text" placeholder="Enter Venue" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <Button variant="secondary" type="cancel" className="float-right">
        Cancel
      </Button>
    </Form>
  );
}
