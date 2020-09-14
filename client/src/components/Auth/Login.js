import React from "react";
import classes from "./Auth.module.css";
import healthPng from "../../assets/health.png";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  onSubmit(e) {}

  render() {
    return (
      <div>
        <div>
          <img
            src={healthPng}
            style={{ height: "200px", width: "200px" }}
            alt=""
          />
        </div>
        <form className={classes.FormGroup}>
          <input
            type="text"
            placeholder="Email"
            className={classes.InputItem}
            name="email"
          />
          <input
            placeholder="Password"
            type="password"
            className={classes.InputItem}
            name="password"
          />
          <input
            type="button"
            value="Login"
            className={classes.Button}
            onClick={(e) => this.onSubmit(e)}
          />
          {/* <button type="submit"></button> */}
        </form>
      </div>
    );
  }
}

export default Login;
