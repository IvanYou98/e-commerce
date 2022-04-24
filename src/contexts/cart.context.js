import {createContext, useState} from "react";

export const CartContext = createContext({
    toggle: false,
    setToggle: () => {
    },
    cartItems: []
})

export const addCartItem = (cartItems, productToAdd) => {
    const contains = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );
    if (contains) {
        return cartItems.map(item =>
            item.id === productToAdd.id
                ? {...item, quantity: item.quantity + 1}
                : item);
    }
    return [...cartItems, {...productToAdd, quantity: 1}];

}

export const CartContextProvider = ({children}) => {
    const [toggle, setToggle] = useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (product) =>
        setCartItems(addCartItem(cartItems, product))

    const value = {toggle, setToggle, addItemToCart, cartItems};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}