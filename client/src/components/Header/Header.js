import React from "react";
import { Link } from "react-router-dom";
import HamburgerIcon from "./HamburgerIcon/HamburgerIcon";
import classes from "./Header.module.css";

class Header extends React.Component {
  constructor(props){
    super(props);

    this.state = {user_name: localStorage.getItem("user_name")}
  }

  linkStyle = {
    textDecoration: "none",
    color: "white",
  };

  componentDidMount(){
  }

  shouldComponentUpdate(){
    if(this.state.user_name === ""){
      return true;
    }

    return false;
  }

  render() {

    return (
      <div className={classes.NavBar}>
        <div className={classes.NavBar__Navigation}>
          <div
            onClick={() => this.props.drawerButtonClicked()}
            className={classes.NavBar__Button}
          >
            <HamburgerIcon />
          </div>
          <div className={classes.NavBar__Logo}>DigiPharm</div>
          <div className={classes.NavBar__Spacer}></div>
          <div className={classes.NavBar__Links}>
            <Link style={this.linkStyle} to="/profile">
              <div onClick={null} className={classes.NavBar__Links_Items}>
                {this.state.user_name}
              </div>
            </Link>
            <div
              onClick={() => this.props.logOut()}
              className={classes.NavBar__Links_Items}
            >
              Logout
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
