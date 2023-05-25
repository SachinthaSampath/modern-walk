import React, { Component } from "react";
import "./WomensClothing.css";
import Header from "../../components/Header/Header";
import ItemCard from "../../components/ItemCard/ItemCard";

export default class WomensClothing extends Component {
  constructor(props) {
    super(props);
   
    this.state = {
      items: [],
    };
  }
  
  componentDidMount = () => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((json) => {
        this.setState({items:json});
      });
  };

  render() {
    
    return (
      <div className="womens-clothing-main-container">
        <Header />
        <div className="womens-clothing-sub-container">
          <h2>Women's Clothing</h2>
          <div className="womens-clothing-item-container">
            {this.state.items.map((i) => {
              return <ItemCard itemData={i} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
