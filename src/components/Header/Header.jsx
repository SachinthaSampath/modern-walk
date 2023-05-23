import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <div className="main-heading-container">
         <Link to="/"><h1 className="main-heading" href="https">Modern Walk</h1></Link>
      </div>
    );
  }
}
