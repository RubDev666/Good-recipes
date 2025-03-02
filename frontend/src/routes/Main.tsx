import MainContent from "../pageComponents/main/mainContent/MainContent";
import SectionSlider from "../pageComponents/main/sectionSlider/SectionSlider";
import ViewMoreSection from "../pageComponents/main/ViewMoreSection/ViewMoreSection.tsx";

import type { ApiCategory } from "../types/api-types";
import type {ViewMoreSectionProps} from "../types/props.ts";

const RECIPES_SECTIONS: { [x: string]: ApiCategory[] } = {
    meals: [
        {
            strMeal: "Croatian lamb peka",
            strMealThumb: "https://www.themealdb.com/images/media/meals/pn59o51628769837.jpg",
            idMeal: "53056"
        },
        {
            strMeal: "French Omelette",
            strMealThumb: "https://www.themealdb.com/images/media/meals/yvpuuy1511797244.jpg",
            idMeal: "52915"
        },
        {
            strMeal: "Blini Pancakes",
            strMealThumb: "https://www.themealdb.com/images/media/meals/0206h11699013358.jpg",
            idMeal: "53080"
        },
        {
            strMeal: "Blackberry Fool",
            strMealThumb: "https://www.themealdb.com/images/media/meals/rpvptu1511641092.jpg",
            idMeal: "52891"
        },
        {
            strMeal: "15-minute chicken & halloumi burgers",
            strMealThumb: "https://www.themealdb.com/images/media/meals/vdwloy1713225718.jpg",
            idMeal: "53085"
        },
        {
            strMeal: "Szechuan Beef",
            strMealThumb: "https://www.themealdb.com/images/media/meals/1529443236.jpg",
            idMeal: "52950"
        },
        {
            strMeal: "Lasagne",
            strMealThumb: "https://www.themealdb.com/images/media/meals/wtsvxx1511296896.jpg",
            idMeal: "52844"
        },
    ],
    coffees: [
        {
            strDrink: "Frappé",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vqwryq1441245927.jpg",
            idDrink: "12768"
        },
        {
            strDrink: "Mocha-Berry",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vtwyyx1441246448.jpg",
            idDrink: "14209"
        },
        {
            strDrink: "Zorro",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/kvvd4z1485621283.jpg",
            idDrink: "15328"
        },
        {
            strDrink: "Jamaican Coffee",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/xqptps1441247257.jpg",
            idDrink: "15825"
        },
        {
            strDrink: "Afternoon",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/vyrurp1472667777.jpg",
            idDrink: "13162"
        },
        {
            strDrink: "Thai Iced Coffee",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/rqpypv1441245650.jpg",
            idDrink: "12784"
        },
        {
            strDrink: "Swedish Coffee",
            strDrinkThumb: "https://www.thecocktaildb.com/images/media/drink/ywtrvt1441246783.jpg",
            idDrink: "15521"
        }
    ]
}

const CATEGORIES_SECTIONS: {[x: string]: ViewMoreSectionProps} = {
    meals: {
        tag: 'meals',
        title: 'What are you going to cook today?',
        nameCategories: [
            'Chicken',
            'Starter',
            'Beef',
            'Vegetarian',
            'Goat',
            'SeaFood'
        ]
    },
    cocktails: {
        tag: 'cocktails',
        title: 'The best cocktails for every moment',
        nameCategories: [
            'Soft Drink',
            'Beer',
            'Cocoa',
            'Cocktail',
            'Ordinary Drink'
        ]
    }
}

export default function Main() {
    return (
        <>
            <MainContent />

            <SectionSlider title="Meals for you" tag="meals" recipes={RECIPES_SECTIONS.meals} />

            <ViewMoreSection title={CATEGORIES_SECTIONS.meals.title} tag={CATEGORIES_SECTIONS.meals.tag} nameCategories={CATEGORIES_SECTIONS.meals.nameCategories} />

            <SectionSlider title="For coffee lovers" tag="cocktails" recipes={RECIPES_SECTIONS.coffees} />

            <ViewMoreSection title={CATEGORIES_SECTIONS.cocktails.title} tag={CATEGORIES_SECTIONS.cocktails.tag} nameCategories={CATEGORIES_SECTIONS.cocktails.nameCategories} />
        </>
    )
}
