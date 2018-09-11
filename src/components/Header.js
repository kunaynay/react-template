import React, { Component } from "react";
import "./Header.css";
import Background from "../img/bg-masthead.jpg";

class Header extends Component {
  render() {
    const myStyles = {
      backgroundImage: `url( ${Background} )`,
      height: "65vh",
      backgroundSize: "cover",
      
    };

    return (
      <header style={myStyles}>
        <h1>{this.props.title}</h1>
        <p>This is a testing theme!</p>
        <a href="#button">{this.props.button}</a>
      </header>
    );
  }
}

export default Header;
