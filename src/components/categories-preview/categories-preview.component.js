import {useContext} from "react";
import {CategoriesContext} from "../../contexts/products.context";
import '../../router/shop/shop.styles.scss'
import {CategoryPreview} from "../category-preview/category-preview.component";

export const CategoriesPreview = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <div className='shop-container'>
            {Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return <CategoryPreview key = {title}
                                        title={title}
                                        products={products}/>
            })}
        </div>

    )
}



