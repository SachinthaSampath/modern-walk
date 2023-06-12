import React, { useContext, useEffect, useState } from "react";
import Header from "../../components/molecules/Header/Header";
import ItemCard from "../../components/molecules/ItemCard/ItemCard";
import SectionLayout from "../../layouts/SectionLayout/SectionLayout";

import { Item } from "../../../types/Item";
import axios from "axios";
import { UserContext } from "../../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { getMentsProducts } from "../../../services/product.service";

export default function MensClothing() {
  //validate user
  const { user } = useContext(UserContext);
  const navigate = useNavigate();
  if (!user?.isLoggedIn) {
    navigate("/login");
  }

  //state to hold items
  const [items, setItems] = useState<Item[] | undefined>(undefined);

  useEffect(() => {
    //get flash sale items when page loads
    (async () => {
      let items = await getMentsProducts();
      console.log(items);
      setItems(items);
    })();
  }, []);

  return (
    <>
      <Header headingText="Modern Walk" />
      <SectionLayout heading={"Men's Clothing"}>
        {items?.map((i: Item) => {
          return <ItemCard key={i.id} itemData={i} />;
        })}
      </SectionLayout>
    </>
  );
}
