import {CartIconContainer, ShoppingCartIcon, ItemCount} from "./cart-icon.styles";
import {useDispatch, useSelector} from "react-redux";
import {selectCartCount, selectIsCartOpen} from "../../store/cart/cart.selector";
import {setIsCartOpen} from "../../store/cart/cart.action";


export const CartIcon = () => {
    const isCartOpen = useSelector(selectIsCartOpen);
    const totalCnt = useSelector(selectCartCount);
    const dispatch = useDispatch();

    const clickHandler = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    }

    return (
        <CartIconContainer onClick={clickHandler}>
            <ShoppingCartIcon/>
            <ItemCount>{totalCnt}</ItemCount>
        </CartIconContainer>
    )
}