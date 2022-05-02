import {CartIconContainer, ShoppingCartIcon, ItemCount} from "./cart-icon.styles";
import {CartContext} from "../../contexts/cart.context";
import {useContext} from "react";

export const CartIcon = () => {
    const clickHandler = () => {
        setToggle(!toggle);
    }

    const {toggle, setToggle, totalCnt} = useContext(CartContext);

    return (
        <CartIconContainer onClick={clickHandler}>
            <ShoppingCartIcon/>
            <ItemCount>{totalCnt}</ItemCount>
        </CartIconContainer>
    )
}