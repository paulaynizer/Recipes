import React from 'react';
import { Link } from 'react-router-dom'; // Certifique-se de importar Link
import styles from './Recipes.module.css'; // Certifique-se de importar os estilos

const Recipes = ({ meal }) => { // Recebe a refeição como propriedade
  return (
    <div key={meal.idMeal} className={styles.meal}>
      <img src={meal.strMealThumb} alt={meal.strMeal} />
      <div className={styles.description}>
        <h2>{meal.strMeal}</h2>
        <h3>{meal.strCategory}</h3>
      </div>
      <Link to={`/meal/${meal.idMeal}`} className={styles.btn}>See more</Link>
    </div>
  );
}

export default Recipes;
