import { useEffect, useState } from "react";

import { getCategories } from "../../api/api-actions";
import type { ApiCategories } from "../../types/api-types";
import { CategoryCard } from "../../pageComponents/Category/CategoryCard";

export default function Cocktails() {
    const [categories, setCategories] = useState<ApiCategories[] | null>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data: ApiCategories[] = await getCategories('https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list');

                console.log(data);

                setCategories(data);
            } catch (error) {
                setCategories(null);
            }
        }

        fetchCategories();
    }, [])

    return(
        <div>
            <h1>Cocktails</h1>
            <CategoryCard title="Custom cocktail" image="https://www.recetasnestle.com.mx/sites/default/files/2024-11/Mx_RN_BANNER_CATEGORIAS_RECETARIOS_BEBIDAS_191124.jpg" />
        </div>
    )
}
