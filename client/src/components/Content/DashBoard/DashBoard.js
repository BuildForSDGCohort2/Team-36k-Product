import React, { Component } from "react";
import classes from "./DashBoard.module.css";
import Graph from "./Graph/Graph";
import Summary from "./Summary/Summary";

export class DashBoard extends Component {
  render() {
    return (
      <div className={classes.Content}>
        <div className={classes.Container}>
          {/* Display User Health Graph */}
          <div className={classes.Container__Graph}>
            <Graph />
          </div>

          {/* Disaply user Health Prescritions */}
          <div className={classes.Container__Summary}>
            <Summary />
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
