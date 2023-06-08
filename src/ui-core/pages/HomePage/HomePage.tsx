import React from "react";
import Header from "../../components/molecules/Header/Header";
import FlashSale from "../../templates/FlashSale/FlashSale";
import Category from "../../templates/Category/Category";
import { useEffect, useState } from "react";
import { Item } from "../../../types/Item";

import axios from "axios";

export default function HomePage() {
  //useState to hold item data
  const [flashItems, setFlashItems] = useState<Item[] | undefined>(undefined);

  useEffect(() => {
    //will run only on first render onMount
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products?limit=6",
    })
      .then((res) => {
        console.log(res.data);
        setFlashItems(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div className="home-page-container">
      <Header headingText="Modern Walk" />
      <FlashSale flashItems={flashItems} />
      <Category />
    </div>
  );
}
