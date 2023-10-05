import React, { useState } from "react";
import styles from "./ByLetter.module.css";
import { Link } from "react-router-dom";

const ByLetter = () => {
  const [searchResults, setSearchResults] = useState([]);
  const apiUrl = "https://www.themealdb.com/api/json/v1/1/search.php?f=";
  const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

  const handleSearchClick = async (letter) => {
    try {
      const response = await fetch(apiUrl + letter);
      const data = await response.json();
      setSearchResults(data.meals || []);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className={styles.home}>
      <div className={styles.search}>
        <h1>Busque uma receita</h1>
        <div className={styles.searchContainer}>
          <div className={styles.carousel}>
            {alphabet.map((letter) => (
              <Link
                key={letter}
                className={styles.letter}
                onClick={() => handleSearchClick(letter)}
              >
                {letter.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.results}>
        {searchResults.map((meal) => (
          <div key={meal.idMeal} className={styles.meal}>
            <h2>{meal.strMeal}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ByLetter;
