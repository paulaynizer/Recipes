import React, { useState, useEffect } from "react";
import styles from "./ByIngredients.module.css";
import { Link } from 'react-router-dom';

const ByIngredients = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState(""); // State to hold the search input
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        
        const ingredientsArray = data.meals.map((meal) => ({
          idIngredient: meal.idIngredient,
          strIngredient: meal.strIngredient,
        }));
        setSearchResults(ingredientsArray);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const filteredIngredients = searchResults.filter((ingredient) =>
    ingredient.strIngredient.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className={styles.home}>
      <div className={styles.search}>
        <h1>Find the recipe by ingredient</h1>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Type the ingredient"
            value={searchInput} // Use searchInput here
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className={styles.results}>
        {filteredIngredients.map((ingredient) => (
          <div key={ingredient.idIngredient} className={styles.ingredient}>
            
            <img
              src={`https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}.png`}
              alt={ingredient.strIngredient}
              className={styles.ingredientImage}
            />
            
            <Link to={`/ingredient/${ingredient.strIngredient.toLowerCase()}`} className={styles.btn}>{ingredient.strIngredient}</Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ByIngredients;
