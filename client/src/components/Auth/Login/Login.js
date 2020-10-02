import React from "react";
import classes from "../Auth.module.css";
import healthPng from "../../../assets/health.png";
import axios from "axios";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };

  credentials = {};

  onChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    this.credentials = {
      password: this.state.password,
      email: this.state.email,
    };

    //Verify Auth

    this.setState({
      email: "",
      password: "",
    });

    axios
      .post("http://localhost:5000/api/auth/user/login", this.credentials)
      .then((response) => {
        if (response.status === 200) {
          console.log(`${response.status}: ${response.data.message}`);
          this.props.logInComplete(true);
          // show slick animation transition
        }
      })
      .catch((error) => {
        console.log(`${error}: Check Your Email or Password`);
        // show failed authentication animation warning all around
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
