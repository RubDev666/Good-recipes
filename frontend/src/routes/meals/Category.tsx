import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { getRecipes } from "../../api/api-actions";
import type { ApiMealCategory } from "../../types/api-types";

import RecipesLayout from "../../pageComponents/recipes/RecipesLayout.tsx";

export default function CategoryMeals() {
    const [recipes, setRecipes] = useState<ApiMealCategory[]>([]);
    const [nameCategory, setCategory] = useState('');

    const location = useLocation();

    useEffect(() => {
        const fetchCategory = async () => {
            const category = location.pathname.split('/')[3];

            try {
                const data: ApiMealCategory[] = await getRecipes(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);

                //console.log(data);

                setRecipes(data);
                setCategory(category)
            } catch (error) {
                console.log(error);
                setRecipes([]);
            }
        }

        fetchCategory();
    }, [location])

    return (
        <RecipesLayout recipes={recipes} tag={'meals'} title={nameCategory} />
    )
}