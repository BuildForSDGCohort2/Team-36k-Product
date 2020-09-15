import React, { Component } from "react";
import avatar from "../../assets/avatar.png";
import classes from "./SideBar.module.css";

export class SideBar extends Component {
  render() {
    console.log("Side Bar Status: " + this.props.open);

    return (
      <div
        className={
          this.props.open
            ? `${classes.SideBar} ${classes.Open}`
            : `${classes.SideBar}`
        }
      >
        <div className={classes.SideBar__Profile}>
          <img
            className={classes.SideBar__Profile_Image}
            src={avatar}
            alt="avatar"
          />
        </div>
        <div className={classes.SideBar__Items}>
          <div className={classes.SideBar__Item}>Dashboard</div>
          <div className={classes.SideBar__Item}>Health Track</div>
          <div className={classes.SideBar__Item}>Profile</div>
          <div className={classes.SideBar__Item}>About</div>
          <div className={classes.SideBar__Item}>Logout</div>
        </div>
      </div>
    );
  }
}

export default SideBar;
