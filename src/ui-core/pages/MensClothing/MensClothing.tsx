import React, { useEffect, useState } from "react";
import Header from "../../components/molecules/Header/Header";
import ItemCard from "../../components/molecules/ItemCard/ItemCard";
import SectionLayout from "../../layouts/SectionLayout/SectionLayout";

import { Item } from "../../../types/Item";
import axios from "axios";

export default function MensClothing() {
  //state to hold items
  const [items, setItems] = useState<Item[] | undefined>(undefined);

  useEffect(() => {
    //run on first render (componentsDidMount)
    axios({
      method: "GET",
      url: "https://fakestoreapi.com/products/category/men's clothing",
      data: {},
    })
      .then((res) => {
        setItems(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
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
