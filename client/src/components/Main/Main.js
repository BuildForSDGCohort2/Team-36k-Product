import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Footer from "../Footer/Footer";
import Content from "../Content/Content";
import classes from "./Main.module.css";

class Main extends React.Component {
  state = {};
  showDrawer = {
    display: this.props.open,
  };

  render() {
    return (
      <div className={classes.Main__Container}>
        {/* Sidebar - Options Menu*/}
        <div className={classes.Main__Container__SideBar}>
          <SideBar />
        </div>
        {/* Main Window Container */}
        <div className={classes.Main__Container_Content}>
          <Content />
        </div>
      </div>
    );
  }
}

export default Main;
