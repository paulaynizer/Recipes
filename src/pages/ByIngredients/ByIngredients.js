import React, { useState, useEffect } from "react";
import styles from "./ByIngredients.module.css";

const ByIngredients = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchInput, setSearchInput] = useState(""); // State to hold the search input
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/list.php?i=list";

  const handleSearchChange = (event) => {
    setSearchInput(event.target.value);
  };

  useEffect(() => {
    // Fetch the list of ingredients from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Extract the ingredients array from the API response
        const ingredientsArray = data.meals.map((meal) => ({
          idIngredient: meal.idIngredient,
          strIngredient: meal.strIngredient,
        }));
        // Update the searchResults state with the fetched ingredients
        setSearchResults(ingredientsArray);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []); // Empty dependency array means this effect runs once, similar to componentDidMount

  const filteredIngredients = searchResults.filter((ingredient) =>
    ingredient.strIngredient.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className={styles.home}>
      <div className={styles.search}>
        <h1>Busque um ingrediente</h1>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Digite o nome do ingrediente"
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
            <h2>{ingredient.strIngredient}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ByIngredients;
