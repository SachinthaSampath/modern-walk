import React, { Component } from "react";
import "./HomePage.css";

import Header from "../../components/Header/Header";
import FlashSale from "../../components/FlashSale/FlashSale";
import Category from "../../components/Category/Category";

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.flashSaleItems = [
      {
        id:1,
        title: "Mens Cotton Jacket",
        img: "",
        price: "55.99",
        desc: "Great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking...",
      },
      {
        id:2,
        title: "Women's Short Sleevs",
        img: "",
        price: "7.95",
        desc: "100% Polyester, Machine wash, 100% cationic polyester interlock, Machine Wash & Pre Shrunk...",
      },
    ];
  }

  render() {
    return (
      <div>
        <Header />
        <FlashSale flashSaleItems={this.flashSaleItems}/>
        <Category/>
      </div>
    );
  }
}
