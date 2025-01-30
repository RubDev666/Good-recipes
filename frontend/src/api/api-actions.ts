import type { FetchRecipe } from "../types/api-types";

export async function getCategories(url: string) {
    const res = await fetch(url).then(respuesta => respuesta.json());

    return res.categories ?? res.drinks;
};

export async function getRecipes(url: string) {
    const res = await fetch(url).then(respuesta => respuesta.json());

    return res.drinks ?? res.meals;
};

export async function getRecipe(type: FetchRecipe, id: string) {
    if (type === 'meal') {
        const url = 'https://www.themealdb.com/api/json/v1/1/lookup.php?i=' + id;

        const res = await fetch(url).then(respuesta => respuesta.json());

        return res.meals[0];
    } else if (type === 'drink') {
        const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id;

        const res = await fetch(url).then(respuesta => respuesta.json());

        return res.drinks[0];
    }
};
