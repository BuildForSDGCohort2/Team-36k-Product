import React from "react";
import classes from "./auth.module.css";

class Signup extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    accountType: "",
  };

  onSubmit(e) {}

  render() {
    return (
      <div>
        <form className={classes.FormGroup}>
          <input
            type="text"
            placeholder="First Name"
            className={classes.InputItem}
            name="firstName"
          />
          <input
            type="text"
            placeholder="Last Name"
            className={classes.InputItem}
            name="lastName"
          />
          <input
            type="text"
            placeholder="Email"
            className={classes.InputItem}
            name="email"
          />
          <span>
            <span
              style={{
                display: "inline",
                color: "grey",
                borderBottom: "1px solid aqua",
                marginRight: "15px",
                marginLeft: "0px",
                paddingLeft: "0",
                fontSize: "14px",
                fontFamily: "Helvetica",
              }}
            >
              Account Type:
            </span>
            <label htmlFor="account-type">Patient</label>
            <input
              className={classes.Radio}
              type="radio"
              name="account-type"
              value="patient"
            />
            <label htmlFor="account-type">Doctor</label>
            <input
              className={classes.Radio}
              type="radio"
              name="account-type"
              value="doctor"
            />
          </span>
          <input
            placeholder="Password"
            type="password"
            className={classes.InputItem}
            name="password"
          />
          <input
            placeholder="Confirm Password"
            type="password"
            className={classes.InputItem}
            name="verifyPassword"
          />
          <input
            type="button"
            value="Sign Up"
            className={classes.Button}
            onClick={(e) => this.onSubmit(e)}
          />
        </form>
      </div>
    );
  }
}

export default Signup;
