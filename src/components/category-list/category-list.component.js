import CategoryItem from "../category-item/category-item.component";
import {CategoryContainer} from './category-list.styles'

const CategoryList = ({categories}) => (
    <CategoryContainer>
        {categories.map(category => <CategoryItem key={category.id} category={category}/>)}
    </CategoryContainer>
)

export default CategoryList;