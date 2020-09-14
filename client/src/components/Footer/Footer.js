import React from "react";
import classes from "./Footer.module.css";

function Footer() {
  return (
    <div className={classes.Footer}>
      <div className={classes.Footer__Links}>
        <span className={classes.Footer__Links_Item}>Digipharm@2020</span>
      </div>
    </div>
  );
}

export default Footer;
