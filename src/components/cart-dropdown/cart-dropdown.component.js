import './cart-dropdown.styles.scss'
import {Button} from "../button/button.component";
import {useContext} from "react";
import {CartContext} from "../../contexts/cart.context";


export const CartDropdown = () => {



    return (
        <div className= {`cart-dropdown-container`} >
            <div className='cart-items'>
                <Button>CHECKOUT</Button>
            </div>
        </div>
    )
}

