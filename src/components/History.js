import React from 'react';
import {Button} from 'react-bootstrap';

function History (props) {
  const deleteHistoryHandler = (event) => {
    props.setHistory(props.history.filter(e => e.id !== event.target.id ));
  }
  return (
    <React.Fragment>
      {props.history.map((e) => (
        <div className="general-container">
          <div className="history-container" key={e.id}>
            <p className="timestamp-history">{e.timestamp}</p>
            {e.feelings.map((e2) => (
              <p className="feelings-history" key={e2.key}>
                {e2.feeling + " " + e2.intensity + "%"}
              </p>
            ))}
            <p>Right Now (within next 5 min)</p>
            <p className="text-small plans-history">{e.plans.plan2}</p>
            <p>Short Term (1 day to 1 week)</p>
            <p className="text-small plans-history">{e.plans.plan1}</p>
            <p>Long Term (1 month to 1 year)</p>
            <p className="text-small plans-history">{e.plans.plan0}</p>
            <div className="general-container">
              <Button
                id={e.id}
                className="crimson-btn"
                onClick={deleteHistoryHandler}
              >
                {" "}
                Delete
              </Button>
            </div>
          </div>
        </div>
      ))}
    </React.Fragment>
  );
}

export default History;