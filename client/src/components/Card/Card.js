import React from "react";
import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.CardContainer}>
      <p>{props.prescDetails.date}</p>
      <p>{props.prescDetails.complaint}</p>
      <p>{props.prescDetails.ailments[0]}</p>
      <p>{props.prescDetails.ailments[1]}</p>

      {/*       <p>Doctor</p>
      <p>Doctor</p>
      <p>Doctor</p>
      <p>Doctor</p> */}
    </div>
  );
}

export default Card;
