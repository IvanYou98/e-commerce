import {CartItemContainer, Image, ItemDetails, Name} from "./cart-item.styles";

export const CartItem = ({cartItem}) => {
    const {name, quantity, price, imageUrl} = cartItem;
    return (
        <CartItemContainer>
            <Image src={imageUrl}/>
            <ItemDetails>
                <Name>{name}</Name>
                <span>{quantity} x ${price}</span>
            </ItemDetails>
        </CartItemContainer>
    )
}