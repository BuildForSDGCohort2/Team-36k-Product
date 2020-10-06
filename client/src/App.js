import React from "react";
import Auth from "./components/Auth/Auth";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
class App extends React.Component {
  state = {
    isAuthenticated: true,
    sideDrawerOpen: false,
  };

  isLoggedIn = (param) => {
    this.setState({ isAuthenticated: param });
    sessionStorage.setItem("isLoggedIn", param);
  };

  drawerButtonClickHandler = () => {
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
        <Router>
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
        </Router>
      </div>
    );

    return (
      <div className="App">
        {/* <Auth /> */}
        {this.state.isAuthenticated ? (
          main
        ) : (
          <Auth loggedIn={this.isLoggedIn} />
        )}
      </div>
    );
  }
}

export default App;
