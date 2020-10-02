import React from "react";
import classes from "../Auth.module.css";
import axios from "axios";
class Signup extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
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
      const { firstName, lastName, email, password } = this.state;
      this.credentials = {
        firstName,
        lastName,
        email,
        password,
        phoneNumber: "",
      };

      console.log("Credentials: ", this.credentials);
      axios
        .post("http://localhost:5000/api/auth/user", this.credentials)
        .then((response) => {
          console.log(`${response.status}: ${response.statusText}`);
          this.props.redirectToLogin();
        })
        .catch((error) => {
          console.log(error.message);
        });
    } else {
      alert("wrong password");
    }

    // console.log("State Values: " + this.state);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      verifyPassword: "",
    });
  }

  render() {
    return (
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
        {/* <div className={classes.AccountType}>
          <span className={classes.AccountType__Label}>Account Type:</span>
          <label htmlFor="account-type">Patient</label>
          <input
            onChange={(e) => this.onChange(e)}
            className={classes.Radio}
            type="radio"
            name="accountType"
            value="patient"
          />
          <label htmlFor="account-type">Doctor</label>
          <input
            className={classes.Radio}
            type="radio"
            onChange={(e) => this.onChange(e)}
            name="accountType"
            value="doctor"
          />
        </div> */}
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
        <button
          className={classes.Button__Submit}
          onClick={(e) => this.onSubmit(e)}
        >
          Sign Up
        </button>
      </form>
    );
  }
}

export default Signup;
