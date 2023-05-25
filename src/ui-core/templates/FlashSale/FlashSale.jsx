import React, { Component } from "react";
import "./FlashSale.css";
import FlashSaleCard from "../FlashSaleCard/FlashSaleCard";
import ItemCard from "../ItemCard/ItemCard";

export default class FlashSale extends Component {
  constructor(props) {
    super(props);

    this.state = {
      flashItems: [],
    };
  }

  componentDidMount = () => {
    fetch("https://fakestoreapi.com/products?limit=5")
      .then((res) => res.json())
      .then((json) => {
        this.setState({flashItems:json});
      });
  };

  render() {
    return (
      <div className="flash-sale-main-container">
        <h2 className="flash-sale-title">Flash Sale</h2>
        <div className="flash-sale-container">
          {this.state.flashItems.map((fi) => {
            return <ItemCard key={fi.id} itemData={fi} />;
          })}
        </div>
      </div>
    );
  }
}
