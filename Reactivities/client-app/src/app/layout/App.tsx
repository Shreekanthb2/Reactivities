import { useEffect } from "react";
import { Activity } from "../models/activity";
import { Navigationbar } from "../../component/Navigationbar";
import agent from "../api/agent";
import LoadingComponent from "./LoadingComponent";
import { observer } from "mobx-react-lite";
import { useStore } from "../stores/store";
import ActivityDashboard from "../../component/activities/dashboard/ActivityDashboard";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";

function App() {
  const { activityStore } = useStore();
  const { loadActivities, loading } = activityStore;

  useEffect(() => {
    loadActivities();
  }, [activityStore]);

  if (loading)
    return (
      <LoadingComponent
        loading={loading}
        content="Loading the Activities..."
      ></LoadingComponent>
    );

  return (
    <>
      <Navigationbar />
      <ActivityDashboard />
    </>
  );
}

export default observer(App);
