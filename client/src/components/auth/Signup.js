import React from "react";
import classes from "./Auth.module.css";

class Signup extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    accountType: "",
    password: "",
    verifyPassword: "",
  };

  credentials = {};

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();
    // Verify Password
    if (e.target["password"] === e.target["verifyPassword"]) {
      const { firstName, lastName, email, password, accountType } = this.state;
      this.credentials = {
        firstName,
        lastName,
        email,
        password,
        accountType,
      };
      // console.log("Credentials: ", this.credentials);
    } else {
      alert("wrong password");
    }

    // console.log("State Values: " + this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      accountType: "",
      password: "",
      verifyPassword: "",
    });
  }

  render() {
    return (
      <div>
        <form className={classes.FormGroup}>
          <input
            type="text"
            value={this.state.firstName}
            placeholder="First Name"
            onChange={(e) => this.onChange(e)}
            className={classes.InputItem}
            name="firstName"
          />
          <input
            onChange={(e) => this.onChange(e)}
            type="text"
            value={this.state.lastName}
            placeholder="Last Name"
            className={classes.InputItem}
            name="lastName"
          />
          <input
            onChange={(e) => this.onChange(e)}
            type="text"
            value={this.state.email}
            placeholder="Email"
            className={classes.InputItem}
            name="email"
          />
          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "grey",
              height: "32px",
              width: "85%",
              marginLeft: "auto",
              marginRight: "6%",
              marginTop: "5%",
              marginBottom: "2%",
              fontSize: "14px",
              fontFamily: "Helvetica",
            }}
          >
            <span
              style={{
                color: "grey",
                borderBottom: "1px solid aqua",
                marginRight: "25px",
                fontSize: "14px",
              }}
            >
              Account Type:
            </span>
            <label htmlFor="account-type">Patient</label>
            <input
              style={{ display: "flex", margin: "0 10px" }}
              onChange={(e) => this.onChange(e)}
              className={classes.Radio}
              type="radio"
              name="accountType"
              value="patient"
            />
            <label htmlFor="account-type">Doctor</label>
            <input
              className={classes.Radio}
              style={{ display: "flex", margin: "0 10px" }}
              type="radio"
              onChange={(e) => this.onChange(e)}
              name="accountType"
              value="doctor"
            />
          </div>
          <input
            placeholder="Password"
            onChange={(e) => this.onChange(e)}
            type="password"
            className={classes.InputItem}
            name="password"
            value={this.state.password}
          />
          <input
            placeholder="Confirm Password"
            onChange={(e) => this.onChange(e)}
            type="password"
            className={classes.InputItem}
            name="verifyPassword"
            value={this.state.verifyPassword}
          />
          <button className={classes.Button} onClick={(e) => this.onSubmit(e)}>
            Sign Up
          </button>
        </form>
      </div>
    );
  }
}

export default Signup;
