import { useEffect, useState } from "react";

import { getCategories } from "../../api/api-actions";
import type { ApiCategories } from "../../types/api-types";

export default function Meals() {
    const [categories, setCategories] = useState<ApiCategories[] | null>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data: ApiCategories[] = await getCategories('https://www.themealdb.com/api/json/v1/1/categories.php');

                console.log(data);

                setCategories(data);
            } catch (error) {
                setCategories(null);
            }
        }

        fetchCategories();
    }, [])

    return (
        <>
            <p>Meals</p>
        </>
    )
}
