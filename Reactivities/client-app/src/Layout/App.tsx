import React, { useEffect, useState } from "react";
import axios from "axios";
import { ActivityList } from "../Component/ActivityList";
import "bootstrap/dist/css/bootstrap.min.css";

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
      <ActivityList activities={activities} />
    </div>
  );
}

export default App;
