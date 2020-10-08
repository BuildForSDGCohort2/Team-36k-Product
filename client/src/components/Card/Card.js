import React, { Fragment } from "react";
import classes from "./Card.module.css";

function Card(props) {
  return (
    <div className={classes.CardContainer}>
      {props.prescDetails === null ? null : (
        <Fragment>
          <p className={classes.DateSection}>
            {props.prescDetails.date} <span className={classes.Spacer}></span>
            {/* <button className={classes.DeleteButton}>x</button> */}
          </p>
          <p>{props.prescDetails.complaint}</p>
          <p>{`${props.prescDetails.ailments[0]} ${props.prescDetails.ailments[1]}`}</p>
          <p>{`${props.prescDetails.dosage[0]} ${props.prescDetails.dosage[1]}`}</p>

          {/* <p>Status: pending</p> */}
        </Fragment>
      )}
    </div>
  );
}

export default Card;
