import React from "react";
import "./Category.css";
import SectionLayout from "../../layouts/SectionLayout/SectionLayout";
import CategoryCard from "../../components/molecules/CategoryCard/CategoryCard";

export default function Category() {
  return (
    <div className="category-main-container"> 
      <SectionLayout heading="Categories">
        <CategoryCard name="Men's Clothing" page="mens" />
        <CategoryCard name="Women's Clothing" page="womens" />
      </SectionLayout>
    </div>
  );
}