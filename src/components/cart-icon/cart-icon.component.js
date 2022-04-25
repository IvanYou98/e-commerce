import './cart-icon.styles.scss'
import {ReactComponent as ShoppingIcon} from "../../assets/shopping-bag.svg";
import {CartContext} from "../../contexts/cart.context";
import {useContext} from "react";

export const CartIcon = () => {
    const clickHandler = () => {
        setToggle(!toggle);
    }

    const {toggle, setToggle, totalCnt} = useContext(CartContext);

    return (
        <div className='cart-icon-container' onClick={clickHandler}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{totalCnt}</span>
        </div>
    )
}