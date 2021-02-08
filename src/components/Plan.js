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
      <p className="plan-text">
        What will you do long term? (1 month to 1 year)
      </p>
      <textarea className="handwriting-area" rows="3" cols="100"></textarea>
      <p className="plan-text">What will you do short term? (1 day to 1 week)</p>
      <textarea className="handwriting-area" rows="3" cols="100"></textarea>
      <p className="plan-text">
        What will you do right now? (within next 5 minutes)
      </p>
      <textarea className="handwriting-area" rows="3" cols="100"></textarea>
    </React.Fragment>
  );
}

export default Plan;