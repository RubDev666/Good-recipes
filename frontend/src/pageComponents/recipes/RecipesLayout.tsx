import {Heading, RecipesContainer} from "./recipesLayout.ts";

import {CardRecipe} from "../../components/ui/CardRecipe/CardRecipe.tsx";
import type {SectionSliderProps} from "../../types/props.ts";

export default function RecipesLayout({tag, title: nameCategory, recipes}: SectionSliderProps) {
    return (
        <>
            <Heading>
                <img src="/images/category-recipes.webp" alt="top-image" className={'w-full'} />

                <h1>{nameCategory}</h1>
            </Heading>

            <RecipesContainer className={'container'}>
                {recipes.map(recipe => {
                    const id = recipe.idMeal ?? recipe.idDrink;
                    const title = recipe.strMeal ?? recipe.strDrink;
                    const img = recipe.strMealThumb ?? recipe.strDrinkThumb;

                    if (!id || !title || !img) return null;

                    return (
                        <CardRecipe key={id} tag={tag} img={img} title={title} id={id} />
                    )
                })}
            </RecipesContainer>
        </>
    )
}