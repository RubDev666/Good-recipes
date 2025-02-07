
import { CategoryLayout } from "../../pageComponents/Category/CategoryLayout";
import { useFecthCategories } from "../hooks/useFecthCategories";

const url = 'https://www.themealdb.com/api/json/v1/1/categories.php'
export default function Meals() {
    const { categories, error } = useFecthCategories(url)
   
       if (error) {
           return <p>Error : {error}</p>
       }

    return <CategoryLayout title="Meals"  cards={categories}  />
    
}
