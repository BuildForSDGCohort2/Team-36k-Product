import React from "react";
import classes from "./Header.module.css";

function Header() {
  return (
    <div className={classes.NavBar}>
      <div className={classes.NavBar__Logo}>DigiPharm</div>
      <div className={classes.NavBar__Links}>
        <div className={classes.NavBar__LinksProfile}>User</div>
      </div>
    </div>
  );
}

export default Header;
