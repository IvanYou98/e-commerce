import '../../router/shop/shop.styles.scss'
import {CategoryPreview} from "../category-preview/category-preview.component";
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/categories/categories.selector";

export const CategoriesPreview = () => {
    // const {categoriesMap} = useContext(CategoriesContext);

    const categoriesMap = useSelector(selectCategoriesMap);

    return (
        <div className='shop-container'>
            {Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title}
                                        title={title}
                                        products={products}/>
            })}
        </div>
    )
}



