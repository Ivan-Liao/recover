import React from "react";
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
    color: "#FF8682",
    height: 20,
    width: "50%",
  },
  // marginTop shifts the thumb position on track
  thumb: {
    height: 60,
    width: 60,
    backgroundColor: "#fff",
    border: "2px solid currentColor",
    marginTop: -25,
    marginLeft: -25,
    "&:focus, &:hover, &$active": {
      boxShadow: "inherit",
    },
  },
  active: {},
  valueLabel: {
    left: "calc(10% + 4px)",
    fontSize: "2rem",
  },
  track: {
    height: 20,
    borderRadius: 10,
  },
  rail: {
    height: 20,
    borderRadius: 10,
  },
})(Slider);

function Rate() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <p className="handwriting-area">Pretty</p>
      <PrettoSlider
        className="feelings-slider"
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}
      />
      <p className="handwriting-area">Pretty</p>
      <PrettoSlider
        className="feelings-slider"
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}
      />
      <p className="handwriting-area">Pretty</p>
      <PrettoSlider
        className="feelings-slider"
        valueLabelDisplay="auto"
        aria-label="pretto slider"
        defaultValue={20}
      />
    </React.Fragment>
  );
}

export default Rate;
