import React from "react";
import { Link } from "react-router-dom";
import { H1 } from "../../atoms";
import { CategoryCardProps } from "./CategoryCard.types";
import StyledCategoryCard from "./CategoryCard.styled";

export default function CategoryCard({
  name,
  page,
  type,
}: CategoryCardProps): React.JSX.Element {
  return (
    <StyledCategoryCard type={type}>
      <Link to={`/${page}`}>
        <H1>{name}</H1>
      </Link>
    </StyledCategoryCard>
  );
}
