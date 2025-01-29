import { createBrowserRouter } from "react-router";

import Root from "./routes/Root";
import Main from "./routes/Main";
import Login from "./routes/Login";
import Register from "./routes/Register";

import { Meals, RecipeMeals, CategoryMeals } from "./routes/meals";
import { Cocktails, RecipeCocktail, CategoryCocktails } from "./routes/cocktails";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root/>,
        errorElement: <div>Not Found</div>,
        children: [
            {
                path: '/',
                element: <Main/>,
            },
            {
                path: '/meals',
                element: <Meals />,
            },
            {
                path: '/meals/:category',
                element: <CategoryMeals />,
            },
            {
                path: '/meals/:category/:IdRecipe',
                element: <RecipeMeals />,
            },
            {
                path: '/cocktails',
                element: <Cocktails />,
            },
            {
                path: '/cocktails/:category',
                element: <CategoryCocktails />,
            },
            {
                path: '/cocktails/:category/:IdRecipe',
                element: <RecipeCocktail />,
            },
            {
                path: '/login',
                element: <Login />,
            },
            {
                path: '/register',
                element: <Register />,
            },
        ]
    }
]);

export default router;