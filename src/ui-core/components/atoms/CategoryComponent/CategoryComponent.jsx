import React, { Component } from "react";
import "./CategoryComponent.css";
import { Link } from "react-router-dom";

export default class CategoryComponent extends Component {
  render() {
    const { name, page } = this.props;
    return (   
    <div className="tegory-componenet-cacontainer">
        <Link to={`/${page}`}><h1>{name}</h1></Link>
    </div>
    );
  }
}
