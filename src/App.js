import {React, useState, useRef} from 'react';
import './App.css';
import {Row, Col, Nav, Tab, Tabs, TabContainer, TabContent, TabPane} from 'react-bootstrap';
import RippleAnime from './components/RippleAnime';
import Rate from './components/Rate.js';
import Plan from './components/Plan';
import Breathe from './components/Breathe.js';

const defaultFeelingsList = [
  { key: 0, feeling: "stressed", intensity: 50, selected: false },
  { key: 1, feeling: "lonely", intensity: 50, selected: false },
  { key: 2, feeling: "angry", intensity: 50, selected: false },
  { key: 3, feeling: "hopeless", intensity: 50, selected: false },
  { key: 4, feeling: "scared", intensity: 50, selected: false },
  { key: 5, feeling: "empty", intensity: 50, selected: false },
  { key: 6, feeling: "overwhelmed", intensity: 50, selected: false },
  { key: 7, feeling: "disappointed", intensity: 50, selected: false },
  { key: 8, feeling: "numb", intensity: 50, selected: false },
  { key: 9, feeling: "ashamed", intensity: 50, selected: false },
  { key: 10, feeling: "uncomfortable", intensity: 50, selected: false },
  { key: 11, feeling: "lack of control", intensity: 50, selected: false },
  { key: 12, feeling: "desperate", intensity: 50, selected: false },
  { key: 13, feeling: "disgusted", intensity: 50, selected: false },
  { key: 14, feeling: "heartbroken", intensity: 50, selected: false },
  { key: 15, feeling: "mournful", intensity: 50, selected: false },
  { key: 16, feeling: "physical pain", intensity: 50, selected: false },
  { key: 17, feeling: "annoyed", intensity: 50, selected: false },
  { key: 18, feeling: "bored", intensity: 50, selected: false },
  { key: 19, feeling: "lost", intensity: 50, selected: false },
];

function App() {
  // list of text for feelings
  const [feelingsList, setFeelingsList] = useState(defaultFeelingsList);
  const [selectedFeelingsList, setSelectedFeelingsList] = useState([]);


  return (
    <Tab.Container defaultActiveKey="first" className="main-tabs-container">
      <Row>
        <Col sm={12}>
          <Nav variant="pills" className="flex-row">
            <Nav.Item className="tab-selector">
              <Nav.Link eventKey="first">Feel</Nav.Link>
            </Nav.Item>
            <Nav.Item className="tab-selector">
              <Nav.Link eventKey="second">Rate</Nav.Link>
            </Nav.Item>
            <Nav.Item className="tab-selector">
              <Nav.Link eventKey="third">Breathe</Nav.Link>
            </Nav.Item>
            <Nav.Item className="tab-selector">
              <Nav.Link eventKey="fourth">Plan</Nav.Link>
            </Nav.Item>
            <Nav.Item className="tab-selector">
              <Nav.Link eventKey="fifth">Action</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={12}>
          <Tab.Content>
            <Tab.Pane eventKey="first" className="main-tab">
              <RippleAnime
                feelingsList={feelingsList}
                setFeelingsList={setFeelingsList}
                selectedFeelingsList={selectedFeelingsList}
                setSelectedFeelingsList={setSelectedFeelingsList}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="second" className="main-tab">
              <Rate
                selectedFeelingsList={selectedFeelingsList}
                setSelectedFeelingsList={setSelectedFeelingsList}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="third" className="main-tab">
              <Breathe
                selectedFeelingsList={selectedFeelingsList}
                setSelectedFeelingsList={setSelectedFeelingsList}
              />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth" className="main-tab">
              <Plan />
            </Tab.Pane>
            <Tab.Pane eventKey="fifth" className="main-tab">
              <p className="breathe-text">Put Your Plan into Action</p>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default App;
