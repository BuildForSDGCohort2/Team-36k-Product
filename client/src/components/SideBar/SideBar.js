import React, { Component } from "react";
import { Link } from "react-router-dom";
import avatar from "../../assets/avatar.png";
import classes from "./SideBar.module.css";

export class SideBar extends Component {
  linkStyle = {
    textDecoration: "none",
  };

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
          <Link style={this.linkStyle} to="/dashboard">
            <div className={classes.SideBar__Item}>Dashboard</div>
          </Link>
          <Link style={this.linkStyle} to="/healthtrack">
            <div className={classes.SideBar__Item}>Health Track</div>
          </Link>
          <Link style={this.linkStyle} to="/profile">
            <div className={classes.SideBar__Item}>Profile</div>
          </Link>
          <Link style={this.linkStyle} to="about">
            <div className={classes.SideBar__Item}>About</div>
          </Link>
          <div className={classes.SideBar__Item}>Logout</div>
        </div>
      </div>
    );
  }
}

export default SideBar;
