import React from "react";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import classes from "./Auth.module.css";

class Auth extends React.Component {
  state = {
    switchAuthType: false,
    authComponentState: {},
  };

  activeStyle = {
    backgroundColor: "aqua",
    color: "white",
    border: "none",
    fontFamily: "Helvetica",
  };

  //////////////////////
  // props received
  // isLoggedIn

  render() {
    return (
      <div className={classes.Container}>
        {/* Form Logo Goes Here */}
        <div className={classes.AdSide}>
          <p className={classes.Para}>DigiPharm</p>
          {/* <img src="./health.png" alt="" /> */}
        </div>

        {/* Form Signin - Signup Goes Here */}
        <div className={classes.AuthSide}>
          <div className={classes.FormToggle}>
            <div className={classes.Spacer}></div>
            <button
              className={classes.FormToggle__Button}
              style={!this.state.switchAuthType ? this.activeStyle : {}}
              onClick={() => this.setState({ switchAuthType: false })}
            >
              Signup
            </button>
            <button
              className={classes.FormToggle__Button}
              style={this.state.switchAuthType ? this.activeStyle : {}}
              onClick={() => this.setState({ switchAuthType: true })}
            >
              Login
            </button>
          </div>
          {this.state.switchAuthType ? (
            <Login logInComplete={this.props.loggedIn} />
          ) : (
            <Signup />
          )}
        </div>
      </div>
    );
  }
}

export default Auth;
