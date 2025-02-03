import type { FetchRecipe } from "../types/api-types";

const COCKTAILS = [
    {
        idCategory: '1',
        strCategory: 'Cocktail',
        strCategoryDescription: 'A cocktail is a mixed drink typically made with a distilled liquor and other ingredients.',
        strCategoryThumb: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1738361982/Cocktail-categories-api/emnmxuhg6tbq5horvyjy.jpg'
    },
    {
        idCategory: '2',
        strCategory: 'Ordinary Drink',
        strCategoryDescription: 'An ordinary drink is a simple mixed drink that is commonly served in bars.',
        strCategoryThumb: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1738361982/Cocktail-categories-api/ojijp5pl9ejkl8pzgici.jpg'
    },
    {
        idCategory: '3',
        strCategory: 'Punch / Party Drink',
        strCategoryDescription: 'Punch or party drinks are large-batch beverages often served at social gatherings.',
        strCategoryThumb: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1738362811/Cocktail-categories-api/t4dpokbqo01a7teewiyo.webp'
    },
    {
        idCategory: '4',
        strCategory: 'Shake',
        strCategoryDescription: 'A shake is a cold beverage typically made with milk, ice cream, and flavorings.',
        strCategoryThumb: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1738363274/Cocktail-categories-api/kal9dq1sesbzq0d99qmf.jpg'
    },
    {
        idCategory: '5',
        strCategory: 'Other / Unknown',
        strCategoryDescription: 'This category includes drinks that do not fit into the other defined categories.',
        strCategoryThumb: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1738363395/Cocktail-categories-api/b1yonfb8no08upkmobbp.avif'
    },
    {
        idCategory: '6',
        strCategory: 'Cocoa',
        strCategoryDescription: 'Cocoa drinks are made with cocoa powder and are typically served hot.',
        strCategoryThumb: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1738363468/Cocktail-categories-api/psmcs0fdzqjrjtkyduwi.webp'
    },
    {
        idCategory: '7',
        strCategory: 'Shot',
        strCategoryDescription: 'A shot is a small serving of spirits or a mixed drink intended to be consumed quickly.',
        strCategoryThumb: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1738363512/Cocktail-categories-api/zphnwom5ufxuhgxgnzyz.jpg'
    },
    {
        idCategory: '8',
        strCategory: 'Coffee / Tea',
        strCategoryDescription: 'This category includes beverages made with coffee or tea.',
        strCategoryThumb: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1738363622/Cocktail-categories-api/cy6afplprd6ivgltfswi.jpg'
    },
    {
        idCategory: '9',
        strCategory: 'Homemade Liqueur',
        strCategoryDescription: 'Homemade liqueurs are alcoholic beverages made at home, often with fruits or herbs.',
        strCategoryThumb: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1738363703/Cocktail-categories-api/bqbuxwgjct0gd7nq06d7.jpg'
    },
    {
        idCategory: '10',
        strCategory: 'Beer',
        strCategoryDescription: 'Beer is a fermented beverage made from grains, typically barley, and flavored with hops.',
        strCategoryThumb: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1738363858/Cocktail-categories-api/plqpnxkuooh877kdccel.jpg'
    },
    {
        idCategory: '11',
        strCategory: 'Soft Drink',
        strCategoryDescription: 'Soft drinks are non-alcoholic beverages that are usually carbonated and sweetened.',
        strCategoryThumb: 'https://res.cloudinary.com/dkav9fvlo/image/upload/v1738363930/Cocktail-categories-api/s4nuknxwnlv6rjptqrne.avif'
    }
]

export async function getCategories(url: string) {
    if (url.includes('cocktail')) {
        return COCKTAILS;
    } else {
        const res = await fetch(url).then(respuesta => respuesta.json());

        return res.categories;
    }
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
