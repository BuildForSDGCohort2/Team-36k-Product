import React, { Component } from "react";
import axios from "axios";

import BackDrop from "../BackDrop/BackDrop";
import classes from "./Modal.module.css";

export class Modal extends Component {
  state = {
    complaint: "",
  };

  id = localStorage.getItem("user_id");
  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmit = () => {
    this.props.show();
    // Post to the users prescription column
    if (this.id !== null) {
      // Add prescriptin to our database column
      axios
        .post("/api/prescriptions", {
          complaint: this.state.complaint,
          user_id: this.id,
        })
        .then((response) => {
          // console.log(response);
        })
        .catch((error) => {
          // console.log(error.message);
        });
    } else {
      console.log("User Id not found Please Sign in");
    }

    // Clear the state after submission
    this.setState({ complaint: "" });
    this.props.submitted();
  };

  onRecordClick = () =>{
    console.log("Starting Recording");
  }

  render() {
    return (
      <div>
        <div className={classes.Container}>
          {/* <h3 className={classes.Container__Header}>Please Enter Your Ailments separated by commas</h3> */}
          <textarea
            className={classes.Container__Field}
            placeholder="Enter Your Complaints Separated by Commas
            Eg. head-ache, pains, nsomnia, cold, flu..."
            name="complaint"
            value={this.state.complaint}
            onChange={(e) => this.onChange(e)}
            type="text"
          />

          <div className={classes.Container__Buttons}>
            <input
              className={classes.Container__Button_Submit}
              type="button"
              value="Submit"
              onClick={() => this.onSubmit()}
            />
            <input
              className={classes.Container__Button_Switch}
              type="button"
              value="Record"
              onClick={() => this.onRecordClick()}
            />
          </div>
        </div>
        <BackDrop clicked={this.props.show} />
      </div>
    );
  }
}

export default Modal;
