import React from "react";
import Header from "../Header/Header";
import SideBar from "../SideBar/SideBar";

function Main() {
  return (
    <div>
      {/* Header - Navbar */}
      <Header />
      {/* Sidebar - Options Menu */}
      <SideBar />
      {/* Main menu - Dashboard */}
    </div>
  );
}

export default Main;
