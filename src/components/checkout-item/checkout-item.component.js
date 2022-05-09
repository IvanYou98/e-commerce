import {
    CheckoutItemContainer,
    ImageContainer,
    Image,
    Quantity,
    Name,
    Arrow,
    Price,
    Value,
    RemoveButton
} from './checkout-item.styles'
import {useDispatch, useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";
import {decItemsInCart, incItemsInCart, removeItemsInCart} from "../../store/cart/cart.action";

export const CheckoutItem = ({cartItem}) => {
    const cartItems = useSelector(selectCartItems);
    const dispatch = useDispatch();

    const incItem = () => {
        dispatch(incItemsInCart(cartItems, cartItem));
    }

    const decItem = () => {
        dispatch(decItemsInCart(cartItems, cartItem));
    }

    const removeItem = () => {
        dispatch(removeItemsInCart(cartItems, cartItem));
    }


    const {name, quantity, id, price, imageUrl} = cartItem;
    return (
        <CheckoutItemContainer key={id}>
            <ImageContainer>
                <Image src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={decItem}>&#10094;</Arrow>
                <Value as='span'>{quantity}</Value>
                <Arrow onClick={incItem}>&#10095;</Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton onClick={removeItem}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}