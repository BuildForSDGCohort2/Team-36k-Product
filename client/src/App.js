import React from "react";
import Auth from "./components/auth/Auth";
import Main from "./components/main/Main";
import "./App.css";

class App extends React.Component {
  state = {
    isAuthenticated: false,
  };

  render() {
    return (
      <div className="App">
        {/* <Auth /> */}
        <Main />
      </div>
    );
  }
}

export default App;
