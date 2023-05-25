import React, { useEffect, useState } from "react";
import "./MensClothing.css";
import Header from "../../../components/molecules/Header/Header";
import ItemCard from "../../../components/molecules/ItemCard/ItemCard";
import FlexContainer from "../../../layouts/FlexContainer/FlexContainer";

export default function MensClothing() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    //run on first render (componentsDidMount)
    fetch("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => res.json())
      .then((json) => {
        setItems(json);
      });
    return () => {
      //runs on cleanup (componenetWillUnmount)
    };
  }, []);

  return (
    <>
      <Header headingText="Modern Walk" />
      <FlexContainer heading={"Men's Clothing"}>
        {items.map((i) => {
          return <ItemCard key={i.id} itemData={i} />;
        })}
      </FlexContainer>
    </>
  );
}
