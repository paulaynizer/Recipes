import React, { useState } from "react";
import styles from "./Home.module.css";
const Home = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=";

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearchClick = async () => {
    try {
      const response = await fetch(apiUrl + searchTerm);
      const data = await response.json();
      setSearchResults(data.meals || []);
    } catch (error) {
      console.error("Erro ao buscar dados:", error);
    }
  };

  return (
    <div className={styles.home}>

      <div className={styles.search}>

        <img src="/images/inicial.png" alt="ingredients"></img>
        <div className={styles.searchDiv}>
          <h1 className={styles.title}>Random Recipes</h1>
          <div className={styles.searchContainer}>

            <h1>Find the best recipe</h1>
            <div className={styles.searchField}>
              <input
                type="text"
                placeholder="Type here..."
                value={searchTerm}
                onChange={handleSearchChange}
              />
              <button onClick={handleSearchClick}>Find</button>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.results}>
        {searchResults.map((meal) => (
          <div key={meal.idMeal} className={styles.meal}>
            <img src={meal.strMealThumb} alt={meal.strMeal} />
            <h2>{meal.strMeal}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
