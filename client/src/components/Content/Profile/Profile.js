import React, { Component } from "react";
import classes from "./Profile.module.css";

export class Profile extends Component {
  render() {
    return (
      <div className={classes.Content}>
        <div className={classes.Content__Heading}>
          <div className={classes.Content__Heading_Item}>About You</div>
          <div className={classes.Content__Heading_Item}>
            Your Public Profile
          </div>
        </div>
        <div className={classes.Container}>
          <input
            className={classes.Container__Item}
            type="text"
            name="first_name"
            placeholder="First Name"
          />
          <input
            className={classes.Container__Item}
            type="text"
            name="last_name"
            placeholder="Last Name"
          />
          <input
            className={classes.Container__Item}
            type="text"
            name="email"
            placeholder="Email"
          />
          <input
            className={classes.Container__Item}
            type="text"
            name="username"
            placeholder="Country"
          />
          <input
            className={classes.Container__Item}
            type="text"
            name="location"
            placeholder="Location"
          />
        </div>
        <div className={classes.Container__Actions}>
          <button className={classes.Container__Actions_Button}>save</button>
          <button className={classes.Container__Actions_Button}>discard</button>
        </div>
      </div>
    );
  }
}

export default Profile;
