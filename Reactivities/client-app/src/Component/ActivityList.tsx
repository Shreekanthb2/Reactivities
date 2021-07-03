import React, { useEffect } from "react";
import axios from "axios";
import { Activity } from "../Interfaces/Interfaces";
import { ListGroup } from "react-bootstrap";
import "./ActivityList.css"

interface State {
  activities: any;
}

interface Props {
  activities: Array<Activity>;
}

export class ActivityList extends React.Component<Props> {
constructor(props: Props) {
    super(props);
  }
  render() {
    return (
      <>
        <h1>Activities</h1>
        <ListGroup>
          {this.props.activities.map((a:Activity) => (
  <ListGroup.Item key={a.id}>{a.title}</ListGroup.Item>
          ))}
          </ListGroup>
        </>
    );
  }
}
