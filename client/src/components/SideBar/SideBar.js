import React, { Component } from "react";
import classes from "./SideBar.module.css";
import avatar from "../../assets/avatar.png";

export class SideBar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={classes.SideBarContainer}>
        <div>
          <img
            className={classes.SideBar__ProfileImage}
            src={avatar}
            alt="avatar"
          />
        </div>
        <div className={classes.SideBar__Item}>Dashboard</div>
        <div className={classes.SideBar__Item}>Health Track</div>
        <div className={classes.SideBar__Item}>Profile</div>
        <div className={classes.SideBar__Item}>About</div>
        <div className={classes.SideBar__Item}>Logout</div>
      </div>
    );
  }
}

export default SideBar;
