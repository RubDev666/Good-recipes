import type{ ApiCategory, TagRecipe } from "./api-types";
import type { SliderFeatures } from "./global";

export type SliderProps = {
    recipes: ApiCategory[];
    tag: TagRecipe;
    sliderFeatures: SliderFeatures;
}

export type SectionSliderProps = Pick<SliderProps, 'recipes' | 'tag'> & {title: string};

export type CardRecipeProps = {
    tag: TagRecipe;
    title: string;
    img: string;
    id: string;
}