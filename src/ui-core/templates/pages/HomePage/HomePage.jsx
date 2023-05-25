import React from "react";
import "./HomePage.css";

import Header from "../../../components/molecules/Header/Header";
import FlashSale from "../../FlashSale/FlashSale";
import Category from "../../Category/Category";

export default function HomePage() {
  return (
    <div className="home-page-container">
      <Header headingText="Modern Walk" />
      <FlashSale />
      <Category />
    </div>
  );
}
