import React, { useState } from "react";
import "./Search.css";

const Search = ({ foodList }) => {
  const [query, setQuery] = useState("");

  const filteredFoods = foodList.filter((food) =>
    food.name.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="search-container">
      
      <input
        type="text"
        placeholder="Search food..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />

      {query && (
        <div className="search-results">
          {filteredFoods.map((food) => (
            <p key={food._id}>{food.name}</p>
          ))}
        </div>
      )}

    </div>
  );
};

export default Search;