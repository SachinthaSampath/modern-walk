import React, { useState, useEffect } from "react";
import "./FlashSale.css";
import FlexContainer from "../../layouts/FlexContainer/FlexContainer";

import ItemCard from "../../components/molecules/ItemCard/ItemCard";

export default function FlashSale() {
  const [flashItems, setFlashItems] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch(
          "https://fakestoreapi.com/products?limit=5"
        );
        const jsonData = await response.json();
        setFlashItems(jsonData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);
 
  return (
    <div className="flash-sale-container"> 
      <FlexContainer heading={"Flash Sale"}>
        {flashItems.map((fi) => {
          return <ItemCard key={fi.id} itemData={fi} />;
        })}
      </FlexContainer>
    </div>
  );
}
