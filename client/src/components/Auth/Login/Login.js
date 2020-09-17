import React from "react";
import classes from "../Auth.module.css";
import healthPng from "../../../assets/health.png";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    //Verify Auth
    console.log("Email: " + this.state.email);
    console.log("Password: " + this.state.password);

    this.setState({
      email: "",
      password: "",
    });
  }

  render() {
    return (
      <form className={classes.FormGroup}>
        <div className={classes.FormGroup__Profile}>
          <img
            className={classes.FormGroup__Profile_Image}
            src={healthPng}
            style={{ height: "200px", width: "200px" }}
            alt=""
          />
        </div>
        <input
          type="text"
          placeholder="Email"
          className={classes.InputItem}
          name="email"
          value={this.state.email}
          onChange={(e) => this.onChange(e)}
        />
        <input
          placeholder="Password"
          type="password"
          className={classes.InputItem}
          name="password"
          value={this.state.password}
          onChange={(e) => this.onChange(e)}
        />
        <input
          type="button"
          value="Login"
          className={classes.Button__Submit}
          onClick={(e) => this.onSubmit(e)}
        />
        {/* <button type="submit"></button> */}
      </form>
    );
  }
}

export default Login;
