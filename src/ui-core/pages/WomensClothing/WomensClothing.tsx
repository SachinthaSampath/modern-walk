import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/molecules/Header/Header";
import ItemCard from "../../components/molecules/ItemCard/ItemCard";
import SectionLayout from "../../layouts/SectionLayout/SectionLayout";

import { Item } from "../../../types/Item";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../../contexts/UserContext";
import {
  getFlashSaleProducts,
  getWomentsProducts,
} from "../../../services/product.service";

export default function WomensClothing() {
  //validate user
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  if (!user?.isLoggedIn) {
    navigate("/login");
  }

  const [items, setItems] = useState<Item[] | undefined>(undefined);

  useEffect(() => {
    //get flash sale items when page loads
    (async () => {
      let items = await getWomentsProducts();
      console.log(items);
      setItems(items);
    })();
  }, []);

  return (
    <>
      <Header headingText="Modern Walk" />
      <SectionLayout heading={"Women's Clothing"}>
        {items?.map((i: Item) => {
          return <ItemCard key={i.id} itemData={i} />;
        })}
      </SectionLayout>
    </>
  );
}
