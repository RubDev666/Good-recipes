import { CategoryLayout } from "../../pageComponents/Category/CategoryLayout";
import { useFecthCategories } from "../hooks/useFecthCategories";

const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list'

export default function Cocktails() {
    const { categories, error } = useFecthCategories(url)

    if (error) {
        return <p>Error : {error}</p>
    }

    return <CategoryLayout title="Cocktails" cards={categories} />

}
