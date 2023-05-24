import React, { Component } from "react";
import "./Category.css";
import CategoryComponent from "../CategoryComponent/CategoryComponent";

export default class Category extends Component {
  constructor(props) {
    super(props);
    this.categories = [];
  }

  render() {
    return (
      <div className="category-main-container">
        <h2 className="category-container-titile">Categories</h2>
        <div className="category-container">
          <CategoryComponent name="Men's Clothing" page="mens" />
          <CategoryComponent name="Women's Clothing" page="womens" />
        </div>
      </div>
    );
  }
}

// rename to template