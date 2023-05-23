import React, { Component } from "react";
import "./FlashSale.css";
import FlashSaleCard from "../FlashSaleCard/FlashSaleCard";

export default class FlashSale extends Component {
  render() {
    const { flashSaleItems } = this.props;
    return (
      <div className="flash-sale-main-container">
        <h2 className="flash-sale-title">Flash Sale</h2>
        <div className="flash-sale-container">
          {flashSaleItems.map((fi) => {
            return <FlashSaleCard key={fi.id} itemData={fi} />;
          })}
        </div>
      </div>
    );
  }
}
