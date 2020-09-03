import React from "react";
import classes from "./auth.module.css";

class Login extends React.Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  onSubmit(e) {}

  render() {
    return (
      <div>
        <div>
          <img
            src="./health.png"
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
        </form>
      </div>
    );
  }
}

export default Login;
