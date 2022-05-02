import {useParams} from "react-router-dom";
import {Fragment, useEffect, useState} from "react";
import {useContext} from "react";
import {CategoriesContext} from "../../contexts/products.context";
import {ProductCard} from "../product-card/product-card.component";
import './category.styles.scss'

export const Category = () => {
    const {category} = useParams();
    const {categoriesMap} = useContext(CategoriesContext);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        setProducts(categoriesMap[category])
    }, [categoriesMap, category])

    return (
        <Fragment>
            <h2 className='title'>{category.toUpperCase()}</h2>
            <div className='category-xx-container'>
                {products && products.map(product => <ProductCard key={product.id} product={product}/>)}
            </div>
        </Fragment>
    )

}