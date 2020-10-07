import React from "react";
import Auth from "./components/Auth/Auth";
import Main from "./components/Main/Main";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
class App extends React.Component {
  state = {
    isAuthenticated: false,
    sideDrawerOpen: false,
  };

  isLoggedIn = (param) => {
    localStorage.setItem("isLoggedIn", param);
    this.setState({ isAuthenticated: param });
  };

  logOut = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("user_id");
    localStorage.removeItem("user_name");
    this.setState({ isAuthenticated: false });
  };

  drawerButtonClickHandler = () => {
    this.setState((prevState) => {
      return { sideDrawerOpen: !prevState.sideDrawerOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ sideDrawerOpen: false });
  };

  componentDidMount() {
    // Check State
    if (localStorage.getItem("isLoggedIn")) this.isLoggedIn(true);
  }

  render() {
    let main = (
      <div>
        <Router>
          <nav className="Nav">
            <Header
              logOut={this.logOut}
              drawerButtonClicked={this.drawerButtonClickHandler}
            />
          </nav>
          <main className="Main">
            <Main
              logOut={this.logOut}
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
