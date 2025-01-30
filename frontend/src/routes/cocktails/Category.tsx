import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { getRecipes } from "../../api/api-actions";
import type { ApiDrinkCategory } from "../../types/api-types";

export default function CategoryCocktails() {
    const [recipes, setRecipes] = useState<ApiDrinkCategory[] | null>([]);

    const location = useLocation();

    useEffect(() => {
        const fetchCategorie = async () => {
            const category = location.pathname.split('/')[2];

            try {
                const data: ApiDrinkCategory[] = await getRecipes(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${category}`);

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
            <p>category cocktails</p>
        </>
    )
}
