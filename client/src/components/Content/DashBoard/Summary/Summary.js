import React, { Component } from "react";

import classes from "./Summary.module.css";

export class Summary extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.Heading}>
          <p
            className={`${classes.Heading__Text} ${classes.Heading__Text_Title}`}
          >
            Doctors Advice
          </p>
          <p className={classes.Heading__Text}>src: WebMD.com</p>
        </div>
        <div className={classes.Description}>
          <p className={classes.Content__Paragragh}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            nostrum, qui magni fugit delectus sint odio, animi modi possimus
            porro esse, dolorem vel est aperiam asperiores tempora cum incidunt
            iste?
          </p>
          <p className={classes.Content__Paragragh}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            veniam consequatur dolorum quidem a tempore debitis error accusamus
            beatae qui, laudantium nulla eveniet at repudiandae ea, quisquam
            necessitatibus ipsam dicta.
          </p>

          <p className={classes.Content__Paragragh}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
            mollitia, delectus iusto, assumenda alias minus corporis impedit
            inventore voluptatum consequatur nisi quas quisquam nemo? Eveniet,
            laboriosam vitae. Laboriosam, voluptatum repellat?
          </p>
        </div>
      </div>
    );
  }
}

export default Summary;
