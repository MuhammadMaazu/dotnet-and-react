import React, { useState, FormEvent, useContext } from "react";
import { Segment, Form, Button } from "semantic-ui-react";
import { IActivity } from "../../../app/models/Activity";
import {v4 as uuid} from 'uuid';
import ActivityStore from "../../../app/stores/activityStore";
import { observer } from "mobx-react-lite";
interface IProps {
  activity: IActivity;
}

 const ActivityForm: React.FC<IProps> = ({
  activity: initialFormState
}) => {
  
  const activityStore = useContext(ActivityStore)
  const{createActivity,submitting,editActivity,cancelFormOpen} = activityStore;
    const initForm = () => {
        if (initialFormState) {
          return initialFormState;
        } else {
          return {
            id: "",
            title: "",
            category: "",
            description: "",
            date: "",
            city: "",
            venue: ""
          };
        }
      };
    const [activity, setActivity] = useState(initForm());
  // const handleInputChange = (event:any)=>{
  const handleInputChange = (
    event: FormEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.currentTarget;
    setActivity({ ...activity, [name]: value });
  };
  const handleSubmit =()=>{
    if(activity.id.length===0){
        let newActivity = {
          ...activity,id:uuid()}
        createActivity(newActivity);
    
    }
    else{
        editActivity(activity);
    }
  }

  return (
    <Segment clearing>
      <Form>
        <Form.Input
          placeholder="Title"
          name="title"
          onChange={handleInputChange}
          value={activity.title}
        />
        <Form.TextArea
          rows="2"
          placeholder="Description"
          name="description"
          onChange={handleInputChange}
          value={activity.description}
        />
        <Form.Input
          placeholder="Category"
          onChange={handleInputChange}
          name="category"
          value={activity.category}
        />
        <Form.Input
          type="datetime-local"
          placeholder="Date"
          onChange ={handleInputChange}
          name="date"
          value={activity.date}
        />
        <Form.Input
          placeholder="City"
          onChange={handleInputChange}
          name="city"
          value={activity.city}
        />
        <Form.Input
          placeholder="Venue"
          value={activity.venue}
          name="venue"
          onChange={handleInputChange}
        />
        <Button
          floated="right"
          positive
          type="submit"
          onChange={handleInputChange}
          content="submit"
          onClick={handleSubmit}
          loading={submitting}
        />
        <Button
          floated="right"
          content="cancel"
          onClick={cancelFormOpen}
        />
      </Form>
    </Segment>
  );
};
export default observer(ActivityForm)