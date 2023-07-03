import React from "react";
import { Link } from "react-router-dom";
import { H1 } from "../../atoms";
import { CategoryCardProps } from "./CategoryCard.types";

export default function CategoryCard({
  name,
  page,
}: CategoryCardProps): React.JSX.Element {
  return (
    <div className="category-card-container">
      <Link to={`/${page}`}>
        <H1>{name}</H1>
      </Link>
    </div>
  );
}
