import {useParams} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import {ProductCard} from "../product-card/product-card.component";
import  {CategoryContainer, Title} from './category.styles'
import {useSelector} from "react-redux";
import {selectCategoriesMap} from "../../store/categories/categories.selector";

export const Category = () => {
    const {category} = useParams();
    // const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);

    const categoriesMap = useSelector(selectCategoriesMap);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [categoriesMap, category])

    return (
        <Fragment>
            <Title>{category.toUpperCase()}</Title>
            <CategoryContainer>
                {products && products.map(product => <ProductCard key={product.id} product={product}/>)}
            </CategoryContainer>
        </Fragment>
    )
}