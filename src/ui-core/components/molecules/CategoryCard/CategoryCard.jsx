import React from "react";
import "./CategoryCard.css";
import { Link } from "react-router-dom";

export default function CategoryCard({ name, page }) {
  
  return (
    <div className="category-card-container">
      <Link to={`/${page}`}>
        <h1>{name}</h1>
      </Link>
    </div>
  );
}
