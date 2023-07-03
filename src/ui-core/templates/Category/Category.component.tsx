import React from "react";
import "./Category.scss";
import { SectionLayout } from "../../layouts";
import { CategoryCard } from "../../components";

export default function Category(): React.JSX.Element {
  return (
    <div className="category-main-container">
      <SectionLayout heading="Categories">
        <CategoryCard name="Men's Clothing" page="mens" />
        <CategoryCard name="Women's Clothing" page="womens" />
      </SectionLayout>
    </div>
  );
}
