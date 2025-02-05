import { ApiCategory, TagRecipe } from "./api-types";

export type SliderProps = {
    recipes: ApiCategory[];
    tag: TagRecipe;
}

export type CardRecipeProps = {
    tag: TagRecipe;
    title: string;
    img: string;
    id: string;
}