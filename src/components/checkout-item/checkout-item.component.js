import {CartContext} from "../../contexts/cart.context";
import {useContext} from "react";
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

export const CheckoutItem = ({cartItem}) => {
    const {addItemToCart, decItemFromCart, clearItemFromCart} = useContext(CartContext);
    const handleRemoveItem = () => {
        clearItemFromCart(cartItem);
    }

    const addItem = () => {
        addItemToCart(cartItem)
    }

    const delItem = () => {
        decItemFromCart(cartItem)
    }
    const {name, quantity, id, price, imageUrl} = cartItem;
    return (

        <CheckoutItemContainer key={id}>
            <ImageContainer>
                <Image src={imageUrl} alt={`${name}`}/>
            </ImageContainer>
            <Name>{name}</Name>
            <Quantity>
                <Arrow onClick={delItem}>&#10094;</Arrow>
                <Value as='span'>{quantity}</Value>
                <Arrow onClick={addItem} >&#10095;</Arrow>
            </Quantity>
            <Price>{price}</Price>
            <RemoveButton  onClick={handleRemoveItem}>&#10005;</RemoveButton>
        </CheckoutItemContainer>
    )
}