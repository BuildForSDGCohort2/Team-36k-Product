import axios from "axios";
import React, { Component } from "react";
import Card from "../../Card/Card";
import Modal from "../../Modal/Modal";
import classes from "./HealthTrack.module.css";

export class HealthTrack extends Component {
  constructor(props) {
    super(props);
  }

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
      .get("http://localhost:5000/api/prescriptions")
      .then((response) => {
        response.data.forEach((item) => {
          tempPrescList.push(item.user_id === id ? item : null);
        });
        this.setState({ userPrescriptionList: tempPrescList });
      })
      .catch((error) => {
        console.log(error.message);
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
            return <Card prescDetails={item} key={index} />;
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
