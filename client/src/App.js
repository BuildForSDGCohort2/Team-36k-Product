import React from "react";
import Auth from "./components/Auth/Auth";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import "./App.css";
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

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  render() {
    let main = (
      <div>
        <nav className="Nav">
          <Header drawerButtonClicked={this.drawerButtonClickHandler} />
        </nav>
        <main className="Main">
          <Main
            openSideMenu={this.state.sideDrawerOpen}
            clickBackDrop={this.backDropClickHandler}
          />
        </main>
        <footer className="Footer">
          <Footer />
        </footer>
      </div>
    );

    return (
      <div className="App">
        <Auth />
        {/* {main} */}
      </div>
    );
  }
}

export default App;
