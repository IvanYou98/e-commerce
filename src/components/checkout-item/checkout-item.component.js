import {CartContext} from "../../contexts/cart.context";
import {useContext} from "react";
import './checkout-item.styles.scss'

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
        <div key={id} className='checkout-item-container'>
            <div className="image-container">
                <img src={imageUrl} alt={`${name}`}/>
            </div>
            <div className='name'>{name}</div>
            <div className='quantity'>
                <div className="arrow" onClick={delItem}>&#10094;</div>
                <span className='value'>{quantity}</span>
                <div className="arrow" onClick={addItem}>&#10095;</div>
            </div>
            <div className='price'>{price}</div>
            <div className="remove-button" onClick={handleRemoveItem}>&#10005;</div>
        </div>
    )
}