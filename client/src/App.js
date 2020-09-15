import React from "react";
import Auth from "./components/Auth/Auth";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import SideBar from "./components/SideBar/SideBar";

import "./App.css";
import Footer from "./components/Footer/Footer";
class App extends React.Component {
  state = {
    isAuthenticated: false,
    sideDrawerOpen: false,
  };

  drawerButtonClickHandler = () => {
    // console.log("Hamburger Clicked: " + this.state.sideDrawerOpen);
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  render() {
    return (
      <div className="App">
        {/* <Auth /> */}
        <nav className="Nav">
          <Header drawerButtonClicked={this.drawerButtonClickHandler} />
        </nav>
        <main className="Main">
          <Main openSideMenu={this.state.sideDrawerOpen} />
        </main>
        <footer className="Footer">
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
