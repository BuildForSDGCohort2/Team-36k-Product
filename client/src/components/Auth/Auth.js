import React from "react";
import Login from "./Login";
import Signup from "./Signup";
import classes from "./Auth.module.css";

class Auth extends React.Component {
  state = {
    isLogginIn: false,
    authComponentState: {},
  };

  activeStyle = {
    backgroundColor: "aqua",
    color: "white",
    border: "none",
    fontFamily: "Helvetica",
  };

  render() {
    return (
      <div className={classes.Container}>
        {/* Form Logo Goes Here */}
        <div className={classes.AdSide}>
          <div>
            <p className={classes.Para}>DigiPharm</p>
            {/* <img src="./health.png" alt="" /> */}
          </div>
        </div>
        {/* Form Signin - Signup Goes Here */}
        <div className={classes.AuthSide}>
          <div className={classes.FormToggle}>
            <button
              style={!this.state.isLogginIn ? this.activeStyle : {}}
              onClick={() => {
                this.setState({ isLogginIn: false });
              }}
            >
              Signup
            </button>
            <button
              style={this.state.isLogginIn ? this.activeStyle : {}}
              onClick={() => this.setState({ isLogginIn: true })}
            >
              Login
            </button>
          </div>
          {this.state.isLogginIn ? <Login /> : <Signup />}
        </div>
      </div>
    );
  }
}

export default Auth;
