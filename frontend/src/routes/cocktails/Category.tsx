import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { getRecipes } from "../../api/api-actions";
import type { ApiDrinkCategory } from "../../types/api-types";

import RecipesLayout from "../../pageComponents/recipes/RecipesLayout.tsx";

export default function CategoryCocktails() {
    const [recipes, setRecipes] = useState<ApiDrinkCategory[]>([]);
    const [nameCategory, setCategory] = useState('');

    const location = useLocation();

    useEffect(() => {
        const fetchCategorie = async () => {
            const category = location.pathname.split('/')[3].replace('_', '/');

            try {
                const data: ApiDrinkCategory[] = await getRecipes(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);

                //console.log(data);

                setRecipes(data);
                setCategory(category.split('%20').join(' '))
            } catch (error) {
                console.log(error);
                setRecipes([]);
            }
        }

        fetchCategorie();
    }, [])

    return (
        <RecipesLayout recipes={recipes} tag={'cocktails'} title={nameCategory} />
    )
}
