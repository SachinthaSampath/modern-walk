import React, { Component } from "react";
import './ItemCard.css'

export default class ItemCard extends Component {
  render() {
    const { title, img, price, desc } = this.props.itemData;

    return (
      <div className="item-card-container">
        <h2 className="item-card-title">{title}</h2>
        <img src={img} alt="Flash sale item" className="item-card-img"/>
        <div className="item-card-details-container">
          <h2 className="item-card-price">Rs {price}</h2>
          <p className="item-card-desc">{desc}</p>
        </div>
      </div>
    );
  }
}
