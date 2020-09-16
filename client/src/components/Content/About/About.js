import React, { Component } from "react";
import classes from "./About.module.css";

export class About extends Component {
  render() {
    return (
      <div className={classes.Container}>
        <div className={classes.Container__Container}>
          <div className={classes.Container__Title}>About Digipharm</div>
          <div className={classes.Container__Content}>
            <div className={classes.Container__Main}>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Corrupti quae ad omnis, pariatur nostrum unde possimus,
                quibusdam ipsam saepe voluptate ea repudiandae expedita dolor,
                libero distinctio! Aliquam libero ut soluta?
              </p>
              {/* <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Praesentium, et! Assumenda, repellat enim obcaecati animi
                accusamus veniam, recusandae corporis aspernatur quis voluptatem
                suscipit distinctio, dolores et quo illum perspiciatis quae?
              </p> */}
            </div>
            <div className={classes.Spacer}></div>
            <div className={classes.Container__Info}>
              <div className={classes.Container__Info_Item}>Instagram</div>
              <div className={classes.Container__Info_Item}>Facebook</div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
