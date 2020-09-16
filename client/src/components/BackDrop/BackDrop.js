import React from "react";
import classes from "./BackDrop.module.css";

export default function BackDrop(props) {
  return (
    <div onClick={() => props.clicked()} className={classes.BackDrop}></div>
  );
}
