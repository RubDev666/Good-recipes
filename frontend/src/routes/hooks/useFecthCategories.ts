import { useEffect, useState } from "react"
import { ApiCategories } from "../../types/api-types"
import { getCategories } from "../../api/api-actions";


export const useFecthCategories = (url: string) => {
    const [categories, setCategories] = useState<ApiCategories[] | null>([]);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data: ApiCategories[] = await getCategories(url)
                setCategories(data)
                console.log('fetchCategories successful');
            } catch (error) {
                console.log(error);
                setCategories(null)
                setError('Error in fetchCategories')
            }
        }
        fetchCategories()
    }, [url])

    return {
        categories, error
    }
}
