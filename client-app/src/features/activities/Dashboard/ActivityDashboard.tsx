import React, { useContext } from "react";
import { Grid } from "semantic-ui-react";
import ActivityList from "./ActivityList";
import ActivityDetails  from "../Details/ActivityDetails";
import ActivityForm  from "../Forms/ActivityForm";
import ActivityStore from "../../../app/stores/activityStore";
import { observer } from "mobx-react-lite";


 const ActivityDashboard: React.FC= () => {
  const activityStore = useContext(ActivityStore);
  const {editMode,activity} = activityStore
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityList/>
      </Grid.Column>
      <Grid.Column width={6}>

        <h1>Activity filters</h1>
        
      </Grid.Column>
    </Grid>
  );
};
export default observer(ActivityDashboard);