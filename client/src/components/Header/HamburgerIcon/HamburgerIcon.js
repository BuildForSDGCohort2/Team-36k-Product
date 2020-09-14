import React from "react";
import classes from "./HamburgerIcon.module.css";

export default function HamburgerIcon(props) {
  return (
    <div
      // onClick={props.openSideMenu(false)}
      className={classes.Hamburger__Toggle}
    >
      <span className={classes.Hamburger__Stripe}></span>
      <span className={classes.Hamburger__Stripe}></span>
      <span className={classes.Hamburger__Stripe}></span>
    </div>
  );
}
