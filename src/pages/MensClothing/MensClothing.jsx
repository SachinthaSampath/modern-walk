import React, { Component } from "react";
import "./MensClothing.css";
import Header from "../../components/Header/Header";

import ItemCard from "../../components/ItemCard/ItemCard";

export default class MensClothing extends Component {
  constructor(props) {
    super(props);
    this.flashSaleItems = [
      {
        id: 1,
        title: "Mens Cotton Jacket",
        img: "",
        price: "55.99",
        desc: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...",
      },
      {
        id: 2,
        title: "Women's Short Sleevs",
        img: "",
        price: "7.95",
        desc: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk...",
      },
    ];
  }

  render() {
    const items = this.flashSaleItems;
    return (
      <div className="mens-clothing-main-container">
        <Header />
        <div className="mens-clothing-sub-container">
          <h2>Men's Clothing</h2>
          <div className="mens-clothing-item-container">
            {items.map((i) => {
              return <ItemCard itemData={i} />;
            })}
          </div>
        </div>
      </div>
    );
  }
}
