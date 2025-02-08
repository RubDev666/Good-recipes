import type{ ApiCategory, TagRecipe } from "./api-types";
import type { SliderFeatures } from "./global";

export type SliderProps = {
    recipes: ApiCategory[];
    tag: TagRecipe;
    sliderFeatures: SliderFeatures;
}

export type SectionSliderProps = Pick<SliderProps, 'recipes' | 'tag'> & {title: string};

export type CardRecipeProps = Pick<SectionSliderProps, 'tag' | 'title'> & {
    img: string;
    id: string;
}

export type ViewMoreSectionProps = Pick<SectionSliderProps, 'tag' | 'title'> & {
    nameCategories: string[]
};