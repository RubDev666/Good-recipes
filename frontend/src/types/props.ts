import type{ ApiCategory, TagRecipe } from "./api-types";
import type { SliderFeatures } from "./global";

export type SliderProps = {
    recipes: ApiCategory[];
    tag: TagRecipe;
    sliderFeatures: SliderFeatures;
}

export type CardRecipeProps = {
    tag: TagRecipe;
    title: string;
    img: string;
    id: string;
}