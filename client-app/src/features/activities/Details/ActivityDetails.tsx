import React, { useContext, useEffect } from "react";
import { Grid } from "semantic-ui-react";
import ActivityStore from "../../../app/stores/activityStore";
import { observer } from "mobx-react-lite";
import { RouteComponentProps } from "react-router-dom";
import { LoadingComponent } from "../../../app/layout/LoadingComponent";
import { ActivityDetailedHeader } from "./ActivityDetailedHeader";
import { ActivityDetailedSidebar } from "./ActivityDetailedSidebar";
import { ActivityDetailedInfor } from "./ActivityDetailedInfor";
import { ActivityDetailedChat } from "./ActivityDetailedChat";

const ActivityDetails: React.FC<RouteComponentProps<{ id: string }>> = ({
  match,
  history,
}) => {
  const activityStore = useContext(ActivityStore);
  const { activity, loadActivity, loadingInitial } = activityStore;

  useEffect(() => {
    loadActivity(match.params.id);
  }, [loadActivity, match.params.id]);

  if (loadingInitial || !activity)
    return <LoadingComponent inverted={true} content="loading activity..." />;
  return (
    <Grid>
      <Grid.Column width={10}>
        <ActivityDetailedHeader activity={activity} />
        <ActivityDetailedInfor activity={activity} />
        <ActivityDetailedChat />
      </Grid.Column>
      <Grid.Column width={2}>
        <ActivityDetailedSidebar></ActivityDetailedSidebar>
      </Grid.Column>
      
    </Grid>
  );
};
export default observer(ActivityDetails);
