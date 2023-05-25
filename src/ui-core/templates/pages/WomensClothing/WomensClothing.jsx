import React, { useEffect, useState } from "react";
import "./WomensClothing.css";
import Header from "../../../components/molecules/Header/Header";
import ItemCard from "../../../components/molecules/ItemCard/ItemCard";
import FlexContainer from "../../../layouts/FlexContainer/FlexContainer";

export default function WomensClothing() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
  }, []);

  return (
    <>
      <Header headingText="Modern Walk" />
      <FlexContainer heading={"Women's Clothing"}>
        {items.map((i) => {
          return <ItemCard key={i.id} itemData={i} />;
        })}
      </FlexContainer>
    </>
  );
}
