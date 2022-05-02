import {Fragment, useContext} from "react";
import {CategoriesContext} from "../../contexts/products.context";
import './shop.styles.scss'
import {ProductCard} from "../../components/product-card/product-card.component";

export const Shop = () => {
    const {categoriesMap} = useContext(CategoriesContext);
    return (
        <Fragment>
            {Object.keys(categoriesMap).map(title => (
                <Fragment key={title}>
                    <h1>{title}</h1>
                    <div className="products-container">
                        {categoriesMap[title].map(product => (
                            <ProductCard key={product.id} product={product}/>
                        ))}
                    </div>
                </Fragment>
            ))}
        </Fragment>

    )
}



