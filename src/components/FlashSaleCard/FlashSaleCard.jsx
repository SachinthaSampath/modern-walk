import React, { Component } from "react";
import './FlashSaleCard.css'

export default class FlashSaleCard extends Component {
  render() {
    const { title, img, price, desc } = this.props.itemData;

    return (
      <div className="flash-sale-card-container">
        <h2 className="flash-sale-card-title">{title}</h2>
        <img src={img} alt="Flash sale item" className="flash-sale-card-img"/>
        <div className="flash-sale-card-details-container">
          <h2 className="flash-sale-card-price">Rs {price}</h2>
          <p className="flash-sale-card-desc">{desc}</p>
        </div>
      </div>
    );
  }
}
