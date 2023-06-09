import React, { useContext } from "react";
import Header from "../../components/molecules/Header/Header";
import FlashSale from "../../templates/FlashSale/FlashSale";
import Category from "../../templates/Category/Category";
import { useEffect, useState } from "react";
import { Item } from "../../../types/Item";

import axios from "axios";
import { UserContext } from "../../../contexts/UserContext";

export default function HomePage() {
  //useState to hold item data
  const [flashItems, setFlashItems] = useState<Item[] | undefined>(undefined);

  //userContest
  const { user } = useContext(UserContext);

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
  console.log(user);

  return (
    <div className="home-page-container">
      <Header headingText="Modern Walk" />
      <FlashSale flashItems={flashItems} />
      <Category />
    </div>
  );
}
