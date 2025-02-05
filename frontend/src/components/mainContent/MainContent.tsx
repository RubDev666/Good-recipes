import { useEffect, useState } from "react";
import Slider from "../slider/Slider";

import type { ApiCategory } from "../../types/api-types";

import { Greeting, ImageContainer } from "./mainContent.styles";

const MAIN_RECIPES: { [hour: string]: ApiCategory[] } = {
    "morning": [
        {
            strMeal: "Bread omelette",
            strMealThumb: "https://www.themealdb.com/images/media/meals/hqaejl1695738653.jpg",
            idMeal: "53076"
        },
        {
            strMeal: "Breakfast Potatoes",
            strMealThumb: "https://www.themealdb.com/images/media/meals/1550441882.jpg",
            idMeal: "52965"
        },
        {
            strMeal: "English Breakfast",
            strMealThumb: "https://www.themealdb.com/images/media/meals/utxryw1511721587.jpg",
            idMeal: "52895"
        },
        {
            strMeal: "Fruit and Cream Cheese Breakfast Pastries",
            strMealThumb: "https://www.themealdb.com/images/media/meals/1543774956.jpg",
            idMeal: "52957"
        },
        {
            strMeal: "Full English Breakfast",
            strMealThumb: "https://www.themealdb.com/images/media/meals/sqrtwu1511721265.jpg",
            idMeal: "52896"
        },
        {
            strMeal: "Home-made Mandazi",
            strMealThumb: "https://www.themealdb.com/images/media/meals/thazgm1555350962.jpg",
            idMeal: "52967"
        },
        {
            strMeal: "Salmon Eggs Eggs Benedict",
            strMealThumb: "https://www.themealdb.com/images/media/meals/1550440197.jpg",
            idMeal: "52962"
        },
        {
            strMeal: "Smoked Haddock Kedgeree",
            strMealThumb: "https://www.themealdb.com/images/media/meals/1550441275.jpg",
            idMeal: "52964"
        }
    ],
    "afternoon": [
        {
            strMeal: "Kentucky Fried Chicken",
            strMealThumb: "https://www.themealdb.com/images/media/meals/xqusqy1487348868.jpg",
            idMeal: "52813"
        },
        {
            strMeal: "Beef Asado",
            strMealThumb: "https://www.themealdb.com/images/media/meals/pkopc31683207947.jpg",
            idMeal: "53071"
        },
        {
            strMeal: "Spaghetti Bolognese",
            strMealThumb: "https://www.themealdb.com/images/media/meals/sutysw1468247559.jpg",
            idMeal: "52770"
        },
        {
            strMeal: "Chicken & mushroom Hotpot",
            strMealThumb: "https://www.themealdb.com/images/media/meals/uuuspp1511297945.jpg",
            idMeal: "52846"
        },
        {
            strMeal: "Vegan Chocolate Cake",
            strMealThumb: "https://www.themealdb.com/images/media/meals/qxutws1486978099.jpg",
            idMeal: "52794"
        },
        {
            strMeal: "Pumpkin Pie",
            strMealThumb: "https://www.themealdb.com/images/media/meals/usuqtp1511385394.jpg",
            idMeal: "52857"
        },
        {
            strMeal: "Broccoli & Stilton soup",
            strMealThumb: "https://www.themealdb.com/images/media/meals/tvvxpv1511191952.jpg",
            idMeal: "52842"
        },
        {
            strMeal: "Salmon Avocado Salad",
            strMealThumb: "https://www.themealdb.com/images/media/meals/1549542994.jpg",
            idMeal: "52960"
        }
    ],
    "evening": [

    ]
}

export default function MainContent() {
    const [hour, setHour] = useState("");

    useEffect(() => {
        getGreeting();
    }, []);

    const getGreeting = () => {
        const now = new Date();
        const hour = now.getHours();

        if (hour < 12) {
            setHour("morning");
        } else if (hour < 18) {
            setHour("afternoon");
        } else {
            setHour("evening");
        }
    };

    return (
        <main>
            <ImageContainer>
                <picture>
                    <source srcSet="https://www.recetasnestle.com.mx/sites/default/files/styles/webp/public/2022-07/header-all-categories-mobile.jpg.webp?itok=zaGz___N" media="(max-width: 940px)" />
                    <img src="https://www.recetasnestle.com.mx/sites/default/files/styles/webp/public/2022-07/header-all-categories-desktop.jpg.webp?itok=mtKSyTLV" alt="main-img" width={390} height={40} />
                </picture>
            </ImageContainer>

            <div className="container">
                <Greeting className="text-color-1">{`Good ${hour}.`} </Greeting>
                <h2 className="slider-title">Welcome to Good Recipes</h2>
            </div>

            {hour !== "" && <Slider recipes={MAIN_RECIPES[hour]} tag={hour === 'evening' ? 'cocktails' : 'meals'} />}
        </main>
    )
}