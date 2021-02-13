import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

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
    fontSize: "2.2rem",
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



function Rate(props) {
  const rateSliderHandler = (event, newValue) => {
    props.setSelectedFeelingsList(
      props.selectedFeelingsList.map((e) => {
        if (e.feeling === event.target.ariaLabel) {
          return {
            ...e,
            intensity: newValue,
          };
        }
        return e;
      })
    );
  };
  return (
    <React.Fragment>
      {props.selectedFeelingsList.map((el) => (
        <div className="feelings-sliders" key={el.key}>
          <p className="handwriting-area slider-text">{el.feeling}</p>
          <PrettoSlider
            className="feelings-slider"
            valueLabelDisplay="auto"
            aria-label={el.feeling}
            defaultValue={50}
            onChange={rateSliderHandler}
          />
        </div>
      ))}
    </React.Fragment>
  );
}

export default Rate;
