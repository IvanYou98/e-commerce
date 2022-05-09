import {ProductCardContainer} from './product-card.styles'
import {Button, BUTTON_TYPE_CLASSES} from "../button/button.component";
import {incItemsInCart} from "../../store/cart/cart.action";
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";

export const ProductCard = ({product}) => {

    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const addProductToCart = () => {
        dispatch(incItemsInCart(cartItems, product));
    };

    const {name, price, imageUrl} = product;
    return (
        <ProductCardContainer>
            <img src={imageUrl} alt={`${name}`}/>
            <div className="footer">
                <span className="name">{name}</span>
                <span className="price">{price}</span>
            </div>
            <Button buttonType={BUTTON_TYPE_CLASSES.inverted}
                    onClick={addProductToCart}
            >Add to cart</Button>
        </ProductCardContainer>
    )
}