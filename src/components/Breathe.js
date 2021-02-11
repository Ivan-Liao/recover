import React from "react";
import anime from "animejs";
import { Row } from 'react-bootstrap';

var randomMovement = function () {
  return anime.random(-50, 50) + "rem";
};

function animation() {
  console.log("animation");
  var timelineParameters = anime.timeline({
    loop: false,
  });

  timelineParameters
    .add({
      targets: [".feeling-bubble"],
      translateX: 0,
      translateY: 0,
      duration: 100,
    })
    .add({
      targets: ".feeling-bubble",
      translateX: [
        { value: randomMovement },
        { value: randomMovement },
        { value: randomMovement },
      ],
      translateY: [{ value: -200 }, { value: -400 }, { value: -700 }],
      opacity: [{ value: 0.7 }, { value: 0 }],
      easing: "linear",
      duration: 8900,
    })
  timelineParameters.complete = function () {
    animation();
  };
}

function Breathe(props) {
  const animationRef = React.useRef(null);
  React.useEffect(() => {
    const interval = setInterval(() => {
      animationRef.current = animation();
    }, 9000);
  }, []);
  return (
    <React.Fragment>
      <p className="breathe-text">Accept Your Feelings...</p>
      <p className="breathe-text">Breathe in for 3 seconds...</p>
      <p className="breathe-text">Hold for 3 seconds...</p>
      <p className="breathe-text">Breathe out for 3 seconds...</p>
      <Row>
        {props.selectedFeelingsList.map((e) => (
          <div className="feeling-bubble" key={e.key}>
            <pre>
              <p className="feeling-bubble-text">
                {[e.feeling, e.intensity].join("\n")}%
              </p>
            </pre>
          </div>
        ))}
      </Row>
      <p className="medium-text">Repeat at least 10 times. Feel free to change the number of seconds to whatever you feel comfortable with.</p>
    </React.Fragment>
  );
}

export default Breathe;