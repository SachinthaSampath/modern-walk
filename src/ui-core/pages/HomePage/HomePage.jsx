import React from "react";
import Header from "../../components/molecules/Header/Header";
import FlashSale from "../../templates/FlashSale/FlashSale";
import Category from "../../templates/Category/Category";
import { useEffect, useState } from "react";

export default function HomePage() {
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
    <div className="home-page-container">
      <Header headingText="Modern Walk" />
      <FlashSale flashItems={flashItems} />
      <Category />
    </div>
  );
}
