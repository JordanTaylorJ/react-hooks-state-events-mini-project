import React, {useState} from "react";
import { CATEGORIES } from "../data";

function CategoryFilter({categories, selectedCategory, onSelectCategory}) {
  const filteredCategories = CATEGORIES.filter(category => category.includes(selectedCategory))
  const categoryButtons = categories.map((category) => {
    const className = category === selectedCategory ? "selected" : null;
    return <button
      key={category}
      className={className}
      onClick={() => onSelectCategory(category)}
    > 
      {category} 
    </button>
  })

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {/* render <button> elements for each category here */}
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
