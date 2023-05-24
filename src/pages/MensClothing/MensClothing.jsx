import React, { Component } from "react";
import "./MensClothing.css";
import Header from "../../components/Header/Header";

import ItemCard from "../../components/ItemCard/ItemCard";

export default class MensClothing extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      items: [],
    };
  }

  componentDidMount = () => {
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((json) => {
        this.setState({items:json});
      });
  };

  render() {
    
    return (
      <div className="mens-clothing-main-container">
        <Header />
        <div className="mens-clothing-sub-container">
          <h2>Men's Clothing</h2>
          <div className="mens-clothing-item-container">
            {this.state.items.map((i) => {
              return <ItemCard itemData={i} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
