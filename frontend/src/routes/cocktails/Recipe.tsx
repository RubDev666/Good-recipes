import { useEffect, useState } from "react";
import { useLocation } from "react-router";

import { getRecipe } from "../../api/api-actions";
import type { ApiRecipe } from "../../types/api-types";
import { RecipeComponent } from "../../components/ui/recipe/Recipe";

export default function RecipeCocktail() {
    const [recipe, setRecipe] = useState<ApiRecipe | null>(null);

    const location = useLocation();
    
    useEffect(() => {
        const fetchRecipe = async () => {
            const id = location.pathname.split('/')[3]; //15346

            try {
                const data: ApiRecipe = await getRecipe('drink', id);

                console.log(data);

                setRecipe(data);
            } catch (error) {
                console.log(error);
                setRecipe(null);
            }
        }

        fetchRecipe();
    }, [])

    return(
        <>
            <RecipeComponent />
        </>
    )
}