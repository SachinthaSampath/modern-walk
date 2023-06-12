import React, { useContext } from "react";
import Header from "../../components/molecules/Header/Header";
import FlashSale from "../../templates/FlashSale/FlashSale";
import Category from "../../templates/Category/Category";
import { useEffect, useState } from "react";
import { Item } from "../../../types/Item";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { UserContext } from "../../../contexts/UserContext";
import { getFlashSaleProducts } from "../../../services/product.service";

export default function HomePage() {
  //validate user
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  if (!user?.isLoggedIn) {
    navigate("/login");
  }

  //useState to hold item data
  const [flashItems, setFlashItems] = useState<Item[] | undefined>(undefined);

  useEffect(() => {
    //get flash sale items when page loads
    (async () => {
      let items = await getFlashSaleProducts();
      console.log(items);
      setFlashItems(items);
    })();
  }, []);

  return (
    <div className="home-page-container">
      <Header headingText="Modern Walk" />
      <FlashSale flashItems={flashItems} />
      <Category />
    </div>
  );
}
