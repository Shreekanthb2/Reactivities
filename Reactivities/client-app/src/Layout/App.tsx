import React, { useEffect, useState } from "react";
import axios from "axios";
import { Activity } from "../models/activity";
import { ActivityDashboard } from "../component/activities/dashboard/ActivityDashboard";
import { Navigationbar } from "../component/Navigationbar";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);

  useEffect(() => {
    axios
      .get<Activity[]>("http://localhost:8080/api/activities")
      .then((response) => {
        console.log(response);
        setActivities(response.data);
      });
  }, []);

  function handleSelectedActivity(id: string) {
    setSelectedActivity(activities.find((a) => a.id === id));
  }
  function handleCancelSelectedActivity() {
    setSelectedActivity(undefined);
  }

  function handleDeleteActivity(id: string) {
    var newActivities: Activity[] = [];
    activities.map((activity) =>
      activity.id !== id ? newActivities.push(activity) : ""
    );
    if (selectedActivity?.id === id) {
      setSelectedActivity(undefined);
    }
    setActivities(newActivities);
  }

  return (
    <>
      <Navigationbar />
      <ActivityDashboard
        activities={activities}
        selectedActivity={selectedActivity}
        selectActivity={handleSelectedActivity}
        cancelSelectActivity={handleCancelSelectedActivity}
        handleDeleteActivity={handleDeleteActivity}
      />
    </>
  );
}

export default App;
