import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";
import H1 from '../../atoms/typography/H1/H1';

type CategoryCardProps={
  name:string,
  page:string
}

export default function CategoryCard({ name, page }:CategoryCardProps) {
  
  return (
    <div className="category-card-container">
      <Link to={`/${page}`}>
        <H1>{name}</H1>
      </Link>
    </div>

  );
}
