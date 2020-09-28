import React, { Component } from "react";

import Card from "../../Card/Card";
import Modal from "../../Modal/Modal";
import classes from "./HealthTrack.module.css";

export class HealthTrack extends Component {
  state = {
    showModal: false,
  };

  showModal = () => {
    this.setState((prevState) => {
      return { showModal: !prevState.showModal };
    });
  };

  render() {
    return (
      <div className={classes.Content}>
        <div className={classes.Container}>
          <Card />
        </div>
        <div
          onClick={() => this.showModal()}
          className={classes.Container__Complaint}
        >
          <span className={classes.Plus__Icon}>+</span>
          <span>Make New Complaint</span>
        </div>
        {this.state.showModal ? <Modal show={this.showModal} /> : null}
      </div>
    );
  }
}

export default HealthTrack;
