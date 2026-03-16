import React from "react";
import "./components.css";

function CategorySidebar({ categories = [], onFilter }) {

  const handleChange = (e) => {
    const value = e.target.value;
    onFilter(value === "all" ? null : value);
  };

  return (
    <div className="category-sidebar">

      <select className="category-dropdown" onChange={handleChange}>

        <option value="all">All Categories</option>

        {categories.map((c) => (
          <option key={c.id} value={c.id}>
            {c.name}
          </option>
        ))}

      </select>

    </div>
  );
}

export default CategorySidebar;
