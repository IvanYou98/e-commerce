import './cart-item.styles.scss'

export const CartItem = ({cartItem}) => {
    const {name, quantity, price, imageUrl} = cartItem;
    return (
        <div className='cart-item-container'>
            <img src={imageUrl}/>
            <div className='item-details'>
                <h2 className='name'>{name}</h2>
                <span>{quantity} x ${price}</span>
            </div>
        </div>
    )
}