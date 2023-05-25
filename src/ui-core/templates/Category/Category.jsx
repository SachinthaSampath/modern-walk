import React from "react";
import "./Category.css";
import FlexContainer from "../../layouts/FlexContainer/FlexContainer";
import CategoryCard from "../../components/molecules/CategoryCard/CategoryCard";

export default function Category() {
  return (
    <div className="category-main-container"> 
      <FlexContainer heading="Categories">
        <CategoryCard name="Men's Clothing" page="mens" />
        <CategoryCard name="Women's Clothing" page="womens" />
      </FlexContainer>
    </div>
  );
}
