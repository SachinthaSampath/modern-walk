import React from "react"; 
import { Link } from "react-router-dom";
import { H1 } from "../../atoms";
import { CategoryCardProps } from "./CategoryCard.types";

export default function CategoryCard({
  name,
  page,
  className,
}: CategoryCardProps): React.JSX.Element {
  return (
    <div className={className}>
      <Link to={`/${page}`}>
        <H1>{name}</H1>
      </Link>
    </div>
  );
}
