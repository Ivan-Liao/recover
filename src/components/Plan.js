import React from 'react';
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300 + theme.spacing(3) * 2,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

const PrettoSlider = withStyles({
  root: {
    color: "#52af77",
    height: 8,
  },
  thumb: {
    height: 24,
    width: 24,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -8,
    marginLeft: -12,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(-50% + 4px)",
  },
  track: {
    height: 8,
    borderRadius: 4,
  },
  rail: {
    height: 8,
    borderRadius: 4,
  },
})(Slider);

function Plan () {
  return (
    <React.Fragment>
      <p className="large-text plan-text">
        What can you <b>learn</b> from this bad situation and what can you do to <b> prevent</b> these feelings from happening again?
      </p>
      <p className="plan-text">Long term? (1 month to 1 year)</p>
      <textarea className="handwriting-area" placeholder="I'm going to find a part time job and save up some money so I'll have more freedom ... I'm going to focus on school and get higher than a 3.0 ... I'm going to do a 30 day challenge to learn/get better at a skill ... I'm going to be kinder to myself and not put myself down this month... " rows="3" cols="100"></textarea>
      <p className="plan-text">Short term? (1 day to 1 week)</p>
      <textarea className="handwriting-area" placeholder="I'm going to say no to at least 5 people this week ... I'm going to get an extra hour of sleep every day this week ... I will ask my best friend for some mental health support today ... I'm going to meditate every day this week ... I'm going to workout twice this week ... " rows="3" cols="100"></textarea>
      <p className="plan-text">Right now? (within next 5 minutes)</p>
      <textarea className="handwriting-area" placeholder="I'm going to listen to my favorite song ... I'm going to go outside for some fresh air ... I'm going to a take a 30 minute game break ... I'm going to go browse r/funny and look up some jokes ... I'm going to go take a nap ... I'm going to have my favorite snack ... I'm going to vent in my journal ... I'm going to doodle ..." rows="3" cols="100"></textarea>
    </React.Fragment>
  );
}

export default Plan;