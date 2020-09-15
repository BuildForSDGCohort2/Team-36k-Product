import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import SideBar from "../SideBar/SideBar";
import HealthTrack from "../Content/HealthTrack/HealthTrack";
import Profile from "../Content/Profile/Profile";
import About from "../Content/About/About";
import DashBoard from "../Content/DashBoard/DashBoard";

import classes from "./Main.module.css";

class Main extends React.Component {
  state = {};

  render() {
    return (
      <Router>
        <div className={classes.Main__Container}>
          {/* Sidebar - Options Menu*/}
          <div className={classes.Main__Container__SideBar}>
            <SideBar open={this.props.openSideMenu} />
          </div>

          {/* Main Window Container */}
          <div className={classes.Main__Container_Content}>
            <Switch>
              <Route path="/dashboard" component={DashBoard} />
              <Route path="/healthtrack" component={HealthTrack} />
              <Route path="/profile" component={Profile} />
              <Route path="/About" component={About} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default Main;
