import {useParams} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import {ProductCard} from "../../components/product-card/product-card.component";
import {CategoryContainer, Title} from './category.styles'
import {useSelector} from "react-redux";
import {selectCategoriesMap, selectCategoriesIsLoading} from "../../store/categories/categories.selector";
import Spinner from "../../components/spinner/spinner.component";

export const Category = () => {
    const {category} = useParams();
    // const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);

    const categoriesMap = useSelector(selectCategoriesMap);
    const isLoading = useSelector(selectCategoriesIsLoading);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [categoriesMap, category])

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            {
                isLoading ? <Spinner/> : (
                    <CategoryContainer>
                        {products && products.map(product => <ProductCard key={product.id} product={product}/>)}
                    </CategoryContainer>
                )
            }
        </Fragment>
    )
}