import React, { Component } from "react";
import { Link } from "react-router-dom";
import './Navigation.css';

export default class Navigation extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/mens">Mens Clothing</Link>
          </li>
          <li>
            <Link to="/womens">Womens Clothing</Link>
          </li>
        </ul>
      </nav>
    );
  }
}
