import { useEffect, useState } from "react";

import { getCategories } from "../../api/api-actions";

export default function Meals() {
    const [categories, setCategories] = useState<any[] | null>([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategories('https://www.themealdb.com/api/json/v1/1/categories.php');

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
