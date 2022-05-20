import React from "react";
import Navbar from "react-bootstrap/Navbar";
import ThemeSwitcher from "./ThemeSwitcher";
import "./App.css";

function CountryNavbar(props) {
  return (
    <>
      <Navbar style={{position: 'fixed'}} className="color-nav">
        <div className="navbarText">Where in the world? </div>
        <div className="themeSwitcher">
          <ThemeSwitcher />
        </div>
      </Navbar>
    </>
  );
}

export default CountryNavbar;
