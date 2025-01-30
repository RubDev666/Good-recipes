import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { getRecipes } from "../../api/api-actions";
import type { ApiMealCategory } from "../../types/api-types";

export default function CategoryMeals() {
    const [recipes, setRecipes] = useState<ApiMealCategory[] | null>([]);

    const location = useLocation();

    useEffect(() => {
        const fetchCategorie = async () => {
            const category = location.pathname.split('/')[2];

            try {
                const data: ApiMealCategory[] = await getRecipes(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${category}`);

                console.log(data);

                setRecipes(data);
            } catch (error) {
                setRecipes(null);
            }
        }

        fetchCategorie();
    }, [])

    return (
        <>
            <p>category meals</p>
        </>
    )
}