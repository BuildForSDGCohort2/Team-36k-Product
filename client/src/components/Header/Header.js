import React from "react";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import classes from "./Header.module.css";

class Header extends React.Component {
  navButtonClicked = function (isOpen) {
    console.log("Nav Clicked Header: " + isOpen);
  };

  render() {
    return (
      <div className={classes.NavBar}>
        <div className={classes.NavBar__Navigation}>
          <div
            onClick={() => this.props.openSideMenu(false)}
            className={classes.NavBar__Button}
          >
            <HamburgerIcon openSideMenu={this.navButtonClicked} />
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
