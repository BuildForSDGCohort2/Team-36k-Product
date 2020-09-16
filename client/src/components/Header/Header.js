import React from "react";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import classes from "./Header.module.css";

class Header extends React.Component {
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
            <div className={classes.NavBar__Links_Items}>User</div>
            <div className={classes.NavBar__Links_Items}>Logout</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
