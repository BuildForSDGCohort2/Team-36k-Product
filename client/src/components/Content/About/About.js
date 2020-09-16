import React, { Component } from "react";
import classes from "./About.module.css";

export class About extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.Container__Title}>About Digipharm</div>
        <div className={classes.Container__Content}>
          <div className={classes.Container__Main}>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Inventore
            aliquam perferendis eos tempore voluptates nesciunt libero corrupti.
            Odio facilis dolore voluptas commodi quam. Eum similique voluptatem
            temporibus quasi exercitationem amet.
          </div>
        </div>
      </div>
    );
  }
}

export default About;
