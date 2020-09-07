import React, { Component } from "react";
import Card from "../Card/Card";
import classes from "./Content.module.css";

export class Content extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    );
  }
}

export default Content;
