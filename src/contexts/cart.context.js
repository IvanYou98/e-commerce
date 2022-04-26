import {createContext, useEffect, useState} from "react";
export const CartContext = createContext({})

const addCartItem = (cartItems, productToAdd) => {
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

const decCartItem = (cartItems, productToAdd) => {
    return cartItems.map(item =>
        item.id === productToAdd.id
            ? {...item, quantity: item.quantity - 1}
            : item).filter(item => item.quantity !== 0);
}

const clearCartItem = (cartItems, productToClear) => {
    return cartItems.filter(item =>  item.id !== productToClear.id);
}

export const CartContextProvider = ({children}) => {
    const [toggle, setToggle] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [totalCnt, setTotalCnt] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);


    useEffect(() => {
        const total = cartItems.reduce((value, cartItem) => value + cartItem.quantity, 0);
        setTotalCnt(total);
    }, [cartItems])


    useEffect(() => {
        const total = cartItems.reduce((value, cartItem) => value + cartItem.quantity * cartItem.price, 0);
        setTotalPrice(total);
    }, [cartItems])




    const addItemToCart = (product) => {
        setCartItems(addCartItem(cartItems, product))
    }

    const decItemFromCart = (product) => {
        setCartItems(decCartItem(cartItems, product))
    }

    const clearItemFromCart = (product) => {
        setCartItems(clearCartItem(cartItems, product))
    }


    const value = {toggle, setToggle, addItemToCart, cartItems, totalCnt, totalPrice, decItemFromCart, clearItemFromCart};

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}