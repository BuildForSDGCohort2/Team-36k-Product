import axios from "axios";
import React, { Component } from "react";
import Card from "../../Card/Card";
import Modal from "../../Modal/Modal";
import classes from "./HealthTrack.module.css";

export class HealthTrack extends Component {
  state = {
    showModal: false,
    userPrescriptionList: [],
    user_id: "",
  };

  componentDidMount() {
    let id = localStorage.getItem("user_id");
    this.fetchPrescriptionData(id);
  }

  fetchPrescriptionData = (id) => {
    if (id === null) return;
    let tempPrescList = [];
    axios
      .get("/api/prescriptions")
      .then((response) => {
        tempPrescList = response.data.filter((item) => item.user_id === id);
        this.setState({ userPrescriptionList: tempPrescList });
      })
      .catch((error) => {
        // Display Error Output
        // console.log(error.message);
      });
  };

  complaintSubmitted = () => {
    let id = localStorage.getItem("user_id");
    this.fetchPrescriptionData(id);
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
          {this.state.userPrescriptionList.map((item, index) => {
            return <Card prescDetails={item} key={item._id} />;
          })}
        </div>
        <div
          onClick={() => this.showModal()}
          className={classes.Container__Complaint}
        >
          <span className={classes.Plus__Icon}>+</span>
          <span>Make New Complaint</span>
        </div>
        {this.state.showModal ? (
          <Modal submitted={this.complaintSubmitted} show={this.showModal} />
        ) : null}
      </div>
    );
  }
}

export default HealthTrack;
