import {CartDropdownContainer, CartItems, EmptyMessage} from "./cart-dropdown.styles";
import {Button} from "../button/button.component";
import {CartItem} from "../cart-item/cart-item.component";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCartItems} from "../../store/cart/cart.selector";


export const CartDropdown = () => {
    const cartItems = useSelector(selectCartItems);
    const navigate = useNavigate()
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)
                                  : <EmptyMessage>Your Cart is Empty</EmptyMessage>}
                <Button onClick={() => navigate("/checkout")}>CHECKOUT</Button>
            </CartItems>
        </CartDropdownContainer>

    )
}

