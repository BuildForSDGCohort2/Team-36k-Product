import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SideBar from "../SideBar/SideBar";
import HealthTrack from "../Content/HealthTrack/HealthTrack";
import Profile from "../Content/Profile/Profile";
import About from "../Content/About/About";
import DashBoard from "../Content/DashBoard/DashBoard";

import classes from "./Main.module.css";
import BackDrop from "../BackDrop/BackDrop";

class Main extends React.Component {
  state = {};

  render() {
    let backDrop = this.props.openSideMenu ? (
      <BackDrop clicked={this.props.clickBackDrop} />
    ) : null;

    return (
      <div className={classes.Main__Container}>
        {/* Sidebar - Options Menu*/}
        <div className={classes.Main__Container__SideBar}>
          <SideBar open={this.props.openSideMenu} />
        </div>

        {/* Render BackDrop when Side Menu is Opened */}
        {backDrop}

        {/* Main Window Container */}
        <div className={classes.Main__Container_Content}>
          <Switch>
            <Route path="/healthtrack" component={HealthTrack} />
            <Route path="/profile" component={Profile} />
            <Route path="/about" component={About} />
            <Route path="/" component={DashBoard} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Main;
