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
    isDrawerToggled: false,
  };

  navButtonClickHandler = (isOpen) => {
    // console.log("Hamburger Clicked: " + isOpen);
  };

  render() {
    return (
      <div className="App">
        {/* <Auth /> */}
        <nav>
          <Header openSideMenu={this.navButtonClickHandler} />
        </nav>
        <main>
          <Main />
        </main>
        <footer>
          <Footer />
        </footer>
      </div>
    );
  }
}

export default App;
