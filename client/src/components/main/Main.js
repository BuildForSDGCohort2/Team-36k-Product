import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";
import Footer from "../Header/Footer";
import Content from "../Content/Content";
import classes from "./Main.module.css";

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {};

  render() {
    return (
      <div>
        {/* Header - Navbar */}
        <div className={classes.Container__Header}>
          <Header />
        </div>
        <div className={classes.Container}>
          {/* Sidebar - Options Menu */}
          <div className={classes.Container__SideBar}>
            <SideBar />
          </div>
          {/* Main Window Container */}
          <div className={classes.Container__Main}>
            <Content />
          </div>
        </div>
        {/* Main Footer */}
        <div className={classes.Container__Footer}>
          <Footer />
        </div>
      </div>
    );
  }
}

export default Main;
