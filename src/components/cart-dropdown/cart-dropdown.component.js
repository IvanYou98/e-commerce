import {CartDropdownContainer, CartItems} from "./cart-dropdown.styles";
import {Button} from "../button/button.component";
import {CartItem} from "../cart-item/cart-item.component";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";
import {useNavigate} from "react-router-dom";


export const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    const navigate = useNavigate()
    return (
        <CartDropdownContainer>
            <CartItems>
                {cartItems.map(item => <CartItem key={item.id} cartItem={item}/>)}
                <Button onClick={() => navigate("/checkout")}>CHECKOUT</Button>
            </CartItems>
        </CartDropdownContainer>
        // <div className={`cart-dropdown-container`}>
        //     <div className='cart-items'>
        //
        //     </div>
        // </div>
    )
}

