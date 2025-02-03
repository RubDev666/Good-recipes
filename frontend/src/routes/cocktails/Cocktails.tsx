import { useEffect, useState } from "react";

import { getCategories } from "../../api/api-actions";
import type { ApiCategories } from "../../types/api-types";
import { CategoryLayout } from "../../pageComponents/Category/CategoryLayout";

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
                throw error
            }
        }

        fetchCategories();
    }, [])

    return <CategoryLayout title="Cocktails" cards={categories}  />
    
}
