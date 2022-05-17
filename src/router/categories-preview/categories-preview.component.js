import '../shop/shop.styles.scss'
import {CategoryPreview} from "../../components/category-preview/category-preview.component";
import {useSelector} from "react-redux";
import {selectCategoriesIsLoading, selectCategoriesMap} from "../../store/categories/categories.selector";
import Spinner from "../../components/spinner/spinner.component";

export const CategoriesPreview = () => {
    // const {categoriesMap} = useContext(CategoriesContext);

    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);


    console.log(isLoading);
    return (
        <div className='shop-container'>
            {
                isLoading ? <Spinner/> :
                Object.keys(categoriesMap).map(title => {
                const products = categoriesMap[title];
                return <CategoryPreview key={title}
                                        title={title}
                                        products={products}/>
            })}
        </div>
    )
}



