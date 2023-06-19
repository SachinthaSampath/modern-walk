import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";
import { H1 } from "../../atoms";
import { CategoryCardProps } from "./CategoryCard.types";

export default function CategoryCard({ name, page }: CategoryCardProps) {
  return (
    <div className="category-card-container">
      <Link to={`/${page}`}>
        <H1>{name}</H1>
      </Link>
    </div>
  );
}
