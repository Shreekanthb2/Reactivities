import { makeAutoObservable, runInAction } from "mobx";
import agent from "../api/agent";
import { Activity } from "../models/activity";
export default class ActicityStore {
  activityRegistery: Map<string, Activity> = new Map<string, Activity>();
  selectedActivity: Activity | undefined = undefined;
  editMode: boolean = false;
  loading: boolean = true;

  constructor() {
    makeAutoObservable(this, {});
  }

  get activitiesByDate() {
    return Array.from(this.activityRegistery.values()).sort((a, b) => {
      return Date.parse(a.date) - Date.parse(b.date);
    });
  }

  loadActivities = async () => {
    try {
      const activities = await agent.Activities.list();
      activities.forEach((activity) => {
        this.setActivity(activity);
      });
      this.setLoading(false);
    } catch (error) {
      console.log(error);
      this.setLoading(false);
    }
  };
  loadActivity = async (id: string) => {
    let activity = this.getActivity(id);
    if (activity) {
      this.selectedActivity = activity;
      return activity;
    } else {
      this.setLoading(true);
      try {
        activity = await agent.Activities.details(id);
        this.setActivity(activity);
        this.selectedActivity = activity;
        this.setLoading(false);
        return activity;
      } catch (error) {
        console.error(error);
        this.setLoading(false);
      }
    }
  };

  private setActivity = (activity: Activity) => {
    activity.date = activity.date.split("T")[0];
    this.activityRegistery.set(activity.id, activity);
  };

  private getActivity = (id: string) => {
    return this.activityRegistery.get(id);
  };

  setLoading = (state: boolean) => {
    this.loading = state;
  };

  // selectActivity = (id: string) => {
  //   this.selectedActivity = this.activityRegistery.get(id);
  //   //this.selectedActivity = this.activities.find((act) => act.id === id);
  // };
  // cancelSelectedActivity = () => {
  //   this.selectedActivity = undefined;
  // };
  // openForm = (id?: string) => {
  //   id ? this.selectActivity(id) : this.cancelSelectedActivity();
  //   this.editMode = true;
  // };
  // closeForm = () => {
  //   this.editMode = true;
  // };

  createActivity = async (activity: Activity) => {
    debugger;
    try {
      await agent.Activities.create(activity);
      runInAction(() => {
        this.activityRegistery.set(activity.id, activity);
        //this.activities.push(activity);
        this.selectedActivity = activity;
        this.editMode = false;
      });
    } catch (error) {
      runInAction(() => {
        this.editMode = false;
      });
      console.error(error);
    }
  };

  updateActivity = async (activity: Activity) => {
    debugger;
    try {
      await agent.Activities.update(activity);
      runInAction(() => {
        // this.activities = [
        //   ...this.activities.filter((a) => a.id !== activity.id),
        //   activity,
        // ];
        this.activityRegistery.set(activity.id, activity);
        this.selectedActivity = activity;
        this.editMode = false;
      });
    } catch (error) {
      runInAction(() => {
        this.editMode = false;
      });
      console.error(error);
    }
  };

  deleteActivity = async (id: string) => {
    try {
      await agent.Activities.delete(id);
      runInAction(() => {
        this.activityRegistery.delete(id);
        // this.activities = [...this.activities.filter((a) => a.id !== id)];
        // if (this.selectedActivity?.id === id) this.cancelSelectedActivity();
      });
    } catch (error) {
      console.error(error);
    }
  };
}
