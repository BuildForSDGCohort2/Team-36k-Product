import React, { Component } from "react";
import classes from "./SideBar.module.css";

export class SideBar extends Component {
  render() {
    return (
      <div className={classes.SideContainer}>
        <img src="../../../assets/avatar.png" alt="avatar" />
        <div>
          <div>dashboard</div>
          <div>Health Track</div>
          <div>Profile</div>
          <div>About</div>
        </div>
      </div>
    );
  }
}

export default SideBar;
