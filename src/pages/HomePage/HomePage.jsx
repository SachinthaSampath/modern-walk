import React, { Component } from "react";
import "./HomePage.css";

import Header from "../../components/Header/Header";
import FlashSale from "../../components/FlashSale/FlashSale";
import Category from "../../components/Category/Category";

export default class HomePage extends Component {
  // constructor(props) {
  //   super(props);
  // }

  render() {
    return (
      <div>
        <Header />
        <FlashSale flashSaleItems={this.flashSaleItems} />
        <Category />
      </div>
    );
  }
}
