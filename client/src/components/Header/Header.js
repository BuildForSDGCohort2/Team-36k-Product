import React from "react";
import { Link } from "react-router-dom";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import classes from "./Header.module.css";

class Header extends React.Component {
  linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  render() {
    return (
      <div className={classes.NavBar}>
        <div className={classes.NavBar__Navigation}>
          <div
            onClick={() => this.props.drawerButtonClicked()}
            className={classes.NavBar__Button}
          >
            <HamburgerIcon />
          </div>
          <div className={classes.NavBar__Logo}>DigiPharm</div>
          <div className={classes.NavBar__Spacer}></div>
          <div className={classes.NavBar__Links}>
            <Link style={this.linkStyle} to="/profile">
              <div onClick={null} className={classes.NavBar__Links_Items}>
                {localStorage.getItem("user_name")}
              </div>
            </Link>
            <div
              onClick={() => this.props.logOut()}
              className={classes.NavBar__Links_Items}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
