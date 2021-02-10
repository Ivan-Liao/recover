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



function Rate(props) {
  const rateSliderHandler = (event, newValue) => {
    // props.setSelectedFeelingsList(
    //   props.selectedFeelingsList.map((e) => {
    //     console.log(event.target.name)
    //     if (e.feeling === event.target.name) {
    //       return {
    //         ...e,
    //         feelingIntensity: newValue,
    //       };
    //     }
    //   })
    // );
  };
  return (
    <React.Fragment>
      {props.selectedFeelingsList.map((el) => (
        <div className="feelings-sliders" key={el.key}>
          <p className="handwriting-area">{el.feeling}</p>
          <PrettoSlider
            className="feelings-slider"
            valueLabelDisplay="auto"
            aria-label="pretto slider"
            defaultValue={50}
            onChange={rateSliderHandler}
            name={el.feeling}
          />
        </div>
      ))}
    </React.Fragment>
  );
}

export default Rate;
