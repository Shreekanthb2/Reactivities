import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { List, Header } from "semantic-ui-react";
import { ActivityList } from "./Component/ActivityList";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8080/api/activities").then((response) => {
      console.log(response);
      setActivities(response.data);
    });
  }, []);

  return (
    <div>
      <ActivityList activities={activities}/>
    </div>
  );
}

export default App;
