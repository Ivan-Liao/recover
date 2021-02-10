import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import anime from "animejs";
import v4 from "../../node_modules/uuid/dist/v4.js";


function RippleAnime(props) {

  // animation
  const animationRef = React.useRef(null);
  React.useEffect(() => {
    const interval = setInterval(() => {
      let randFeeling = Math.floor(Math.random() * Math.floor(19));
      animationRef.current = anime({
        targets: ".feeling-btn",
        scale: [
          { value: 1.5, easing: "easeOutSine", duration: 700 },
          { value: 1, easing: "easeInOutQuad", duration: 1500 }, // back to original size
        ],
        delay: anime.stagger(600, { grid: [4, 5], from: randFeeling }), // spread speed
        loop: false,
      });
    }, 5000);
  }, []);

  // button handler to append to list of selected feelings
  const feelingsButtonHandler = (e) => {
    var tmp = [];
    props.selectedFeelingsList.forEach((e2) => {
      tmp.push(e2.feeling)
    });
    if (!tmp.includes(e.target.textContent)) {
      props.setSelectedFeelingsList([
        ...props.selectedFeelingsList, 
        {key: v4(),
          feeling: e.target.textContent}
      ]);
    }
    else {
      props.setSelectedFeelingsList([
        ...props.selectedFeelingsList.filter(function(item) {return item.feeling !== e.target.textContent})
      ])
    }
  }

  return (
    <React.Fragment>
      <div className="container">
        <Container>
          <Row>
            <Col>
              {props.feelingsList.slice(0, 4).map((el) => (
                <Button
                  key={el.key}
                  className="feeling-btn"
                  onClick={feelingsButtonHandler}
                >
                  <p className="ripple-text">{el.feeling}</p>
                </Button>
              ))}
            </Col>
            <Col>
              {props.feelingsList.slice(4, 8).map((el) => (
                <Button
                  key={el.key}
                  className="feeling-btn"
                  onClick={feelingsButtonHandler}
                >
                  <p className="ripple-text">{el.feeling}</p>
                </Button>
              ))}
            </Col>
            <Col>
              {props.feelingsList.slice(8, 12).map((el) => (
                <Button
                  key={el.key}
                  className="feeling-btn"
                  onClick={feelingsButtonHandler}
                >
                  <p className="ripple-text">{el.feeling}</p>
                </Button>
              ))}
            </Col>
            <Col>
              {props.feelingsList.slice(12, 16).map((el) => (
                <Button
                  key={el.key}
                  className="feeling-btn"
                  onClick={feelingsButtonHandler}
                >
                  <p className="ripple-text">{el.feeling}</p>
                </Button>
              ))}
            </Col>
            <Col>
              {props.feelingsList.slice(16, 20).map((el) => (
                <Button
                  key={el.key}
                  className="feeling-btn"
                  onClick={feelingsButtonHandler}
                >
                  <p className="ripple-text">{el.feeling}</p>
                </Button>
              ))}
            </Col>
          </Row>
          <Row>
            <p className="selected-feelings handwriting-area">
              I'm feeling{" "}
              {props.selectedFeelingsList.map((e) => e.feeling).join(", ")}
            </p>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
}

export default RippleAnime;