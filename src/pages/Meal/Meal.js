import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./Meal.module.css";

const Meal = () => {
    const { id } = useParams();
    const [meal, setMeal] = useState(null);

    useEffect(() => {
        // Função assíncrona para buscar detalhes do meal com base no id
        const fetchMealDetails = async () => {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`);
                const data = await response.json();
                const mealDetails = data.meals && data.meals[0];
                setMeal(mealDetails);
            } catch (error) {
                console.error("Erro ao buscar detalhes do meal:", error);
            }
        };

        // Chama a função para buscar os detalhes do meal quando o id muda
        fetchMealDetails();
    }, [id]);

    if (!meal) {
        return <div>Loading...</div>;
    }

    // Função para obter a lista de ingredientes
    const getIngredientsList = () => {
        const ingredientsList = [];
        for (let i = 1; i <= 20; i++) {
            const ingredientKey = `strIngredient${i}`;
            const measureKey = `strMeasure${i}`;
            if (meal[ingredientKey] && meal[measureKey]) {
                ingredientsList.push(`${meal[measureKey]} ${meal[ingredientKey]}`);
            }
        }
        return ingredientsList;
    };

    return (
        <div className={styles.meal}>
            <div className={styles.mealTitle}>
                <h1>{meal.strMeal}</h1>
                <h2>{meal.strCategory}</h2>
            </div>
            <div className={styles.mealInfo}>
                <div className={styles.imgHolder}>
                    <img src={meal.strMealThumb} alt={meal.strMeal} />
                    {meal.strTags && (
                        <h2>Tags: {meal.strTags}</h2>
                    )}
                </div>
                <div className={styles.mealText}>
                    <div className={styles.ingredients}>
                        <h3>Ingredients:</h3>
                        <ul>
                            {getIngredientsList().map((ingredient, index) => (
                                <li key={index}>{ingredient}</li>
                            ))}
                        </ul>
                    </div>

                    <div className={styles.steps}>
                        <h3>Steps:</h3>
                        <ol>
                            {meal.strInstructions.split("\n").filter(Boolean).map((step, index) => (
                                <li key={index}>{step}</li>
                            ))}
                        </ol>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Meal;
