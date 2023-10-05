import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Recipes from '../../components/Recipes';
import styles from './Ingredients.module.css';
const Ingredients = () => {
  const { strIngredient } = useParams();
  const [recipes, setRecipes] = useState([]);
  const apiUrl = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${strIngredient}`;
console.log(strIngredient)
  useEffect(() => {
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        setRecipes(data.meals || []);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, [apiUrl]);

  return (
    <div className={styles.ingredients}>
      <h1>Recipes with {strIngredient}</h1>
      <div className={styles.results}>
        {recipes.map((meal) => (
          <Recipes meal={meal} />
        ))}
      </div>
    </div>
  );
};

export default Ingredients;
