import React, { Component } from "react";
import Card from "../../Card/Card";
import classes from "./DashBoard.module.css";

export class DashBoard extends Component {
  render() {
    return (
      <div className={classes.Content}>
        <div className={classes.Container}>
          {/* Display User Health Graph */}
          <Card />
          {/* Disaply user Health Prescritions */}
          <Card />
        </div>
      </div>
    );
  }
}

export default DashBoard;
