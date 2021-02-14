import React from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import {FormControl} from 'react-bootstrap';

function Plan (props) {
  // functions to save plan text
  const savePlanFunc = (e) => {
    switch (e.target.id) {
      case 'plan0':
        props.setPlans({
          ...props.plans,
          plan0: e.target.value,
        });
        break;
      case 'plan1':
        props.setPlans({
          ...props.plans,
          plan1: e.target.value,
        });
        break;
      case 'plan2':
        props.setPlans({
          ...props.plans,
          plan2: e.target.value,
        });
        break;
    }
  }

  return (
    <React.Fragment>
      <p className="plan-text">What Happened?</p>
      <div className="general-container">
        <FormControl
          id="plan0"
          className="handwriting-area plan-textarea"
          as="textarea"
          rows={4}
          placeholder=""
          onChange={savePlanFunc}
        />
      </div>
      <p className="large-text plan-text">
        What can you <b>learn</b>. What can you do to <b> prevent</b> this from
        happening again?
      </p>
      <p className="plan-text">Long term? (1 month to 1 year)</p>
      <div className="general-container">
        <FormControl
          id="plan0"
          className="handwriting-area plan-textarea"
          as="textarea"
          rows={3}
          placeholder="I'm going to find a part time job and save up some money so I'll have more freedom ... I'm going to focus on school and get higher than a 3.0 ... I'm going to do a 30 day challenge to learn/get better at a skill ... I'm going to be kinder to myself and not put myself down this month... "
          onChange={savePlanFunc}
        />
      </div>
      <p className="plan-text">Short term? (1 day to 1 week)</p>
      <div className="general-container">
        <FormControl
          id="plan1"
          className="handwriting-area plan-textarea"
          as="textarea"
          rows={3}
          placeholder="I'm going to say no to at least 5 people this week ... I'm going to get an extra hour of sleep every day this week ... I will ask my best friend for some mental health support today ... I'm going to meditate every day this week ... I'm going to workout twice this week ... "
          onChange={savePlanFunc}
        />
      </div>
      <p className="plan-text">Right now? (within next 5 minutes)</p>
      <div className="general-container">
        <FormControl
          id="plan2"
          className="handwriting-area plan-textarea"
          as="textarea"
          rows={3}
          placeholder="I'm going to listen to my favorite song ... I'm going to go outside for some fresh air ... I'm going to a take a 30 minute game break ... I'm going to go browse r/funny and look up some jokes ... I'm going to go take a nap ... I'm going to have my favorite snack ... I'm going to vent in my journal ... I'm going to doodle ..."
          onChange={savePlanFunc}
        />
      </div>
      <p className="small-text">
        Are your goals SMART? (S)pecific, (M)easurable, (A)ttainable,
        (R)elevant, (T)ime-bound?
      </p>
    </React.Fragment>
  );
}

export default Plan;