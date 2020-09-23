import React, { Component } from "react";

import BackDrop from "../BackDrop/BackDrop";
import classes from "./Modal.module.css";

export class Modal extends Component {
  render() {
    return (
      <div>
        <div className={classes.Container}>
          <textarea
            className={classes.Container__Field}
            placeholder="What is wrong with you?"
            name="complaint"
            type="text"
          />

          <div className={classes.Container__Buttons}>
            <input
              className={classes.Container__Button_Submit}
              type="button"
              value="Submit"
            />
            <input
              className={classes.Container__Button_Switch}
              type="button"
              value="Record"
            />
          </div>
        </div>
        <BackDrop clicked={this.props.show} />
      </div>
    );
  }
}

export default Modal;
