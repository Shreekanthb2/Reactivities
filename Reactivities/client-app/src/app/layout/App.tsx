import { useEffect, useState } from "react";
import { Activity } from "../models/activity";
import { ActivityDashboard } from "../../component/activities/dashboard/ActivityDashboard";
import { Navigationbar } from "../../component/Navigationbar";
import { v4 as uuid } from "uuid";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";

function App() {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [selectedActivity, setSelectedActivity] = useState<
    Activity | undefined
  >(undefined);
  const [editMode, setEditMode] = useState(false);
  const [loading, setLoader] = useState(true);

  useEffect(() => {
    agent.Activities.list().then((response) => {
      let activityList: Activity[] = [];
      response.forEach((activity) => {
        activity.date = activity.date.split("T")[0];
        activityList.push(activity);
      });
      setActivities(activityList);
      setLoader(false);
    });
  }, []);

  function handleSelectedActivity(id: string) {
    setSelectedActivity(activities.find((a) => a.id === id));
  }

  function handleCancelSelectedActivity() {
    setSelectedActivity(undefined);
  }

  function handleCreateOrEditActivity(activity: Activity) {
    if (activity.id) {
      agent.Activities.update(activity).then(() => {
        let filteredActivities = activities.filter((a) => a.id !== activity.id);
        setActivities([...filteredActivities, activity]);
      });
    } else {
      activity.id = uuid();
      agent.Activities.create(activity).then(() => {
        setActivities([...activities, activity]);
      });
    }
    setEditMode(false);
    setSelectedActivity(activity);
  }

  function handleDeleteActivity(id: string) {
    agent.Activities.delete(id).then(() => {
      var newActivities: Activity[] = [];
      activities.map((activity) =>
        activity.id !== id ? newActivities.push(activity) : ""
      );
      if (selectedActivity?.id === id) {
        setSelectedActivity(undefined);
      }
      setActivities(newActivities);
    });
  }

  function handleFormOpen(id?: string) {
    id ? handleSelectedActivity(id) : handleCancelSelectedActivity();
    setEditMode(true);
  }

  function handleFormClose() {
    setEditMode(false);
  }
  if (loading)
    return (
      <LoadingComponent
        loading={loading}
        content="Loading the Activities..."
      ></LoadingComponent>
    );

  return (
    <>
      <Navigationbar handleFormOpen={handleFormOpen} />
      <ActivityDashboard
        activities={activities}
        selectedActivity={selectedActivity}
        selectActivity={handleSelectedActivity}
        cancelSelectActivity={handleCancelSelectedActivity}
        handleDeleteActivity={handleDeleteActivity}
        editMode={editMode}
        handleFormOpen={handleFormOpen}
        handleFormClose={handleFormClose}
        handleCreateOrEditActivity={handleCreateOrEditActivity}
      />
    </>
  );
}

export default App;
