import {createContext, useEffect, useReducer, useState} from "react";

export const CartContext = createContext({})


// Step 1: define an initial state
const INIT_STATE = {
    isCartOpen: false,
    cartItems: [],
    totalCnt: 0,
    totalPrice: 0
}


export const CART_ACTION_TYPES = {
    SET_CART_ITEMS: 'SET_CART_ITEMS',
    SET_IS_CART_OPEN: 'SET_IS_CART_OPEN'
}


const cartReducer = (state, action) => {
    const {type, payload} = action;
    switch (type) {
        case CART_ACTION_TYPES.SET_CART_ITEMS:
            return {
                ...state,
                ...payload
            }
        case CART_ACTION_TYPES.SET_IS_CART_OPEN:
            return {
                ...state,
                isCartOpen: payload
            }
        default:
            throw new Error(`Fail to dispatch action type ${type}`);
    }
}


// helper functions
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
    return cartItems.filter(item => item.id !== productToClear.id);
}

export const CartContextProvider = ({children}) => {

    const [{isCartOpen, cartItems, totalCnt, totalPrice}, dispatch] = useReducer(cartReducer, INIT_STATE);


    const updateCartItemsReducer = newCartItems => {
        const newTotalCnt = newCartItems.reduce((value, cartItem) => value + cartItem.quantity, 0);
        const newTotalPrice = newCartItems.reduce((value, cartItem) => value + cartItem.quantity * cartItem.price, 0);
        dispatch({
            type: CART_ACTION_TYPES.SET_CART_ITEMS,
            payload: {
                cartItems: newCartItems,
                totalPrice: newTotalPrice,
                totalCnt: newTotalCnt
            }
        })
    }

    const setIsCartOpen = (isCartOpen) => {
        dispatch({
            type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
            payload: isCartOpen
        });
    }

    const addItemToCart = (product) => {
        const newCartItems = addCartItem(cartItems, product);
        updateCartItemsReducer(newCartItems);
    }

    const decItemFromCart = (product) => {
        const newCartItems = decCartItem(cartItems, product);
        updateCartItemsReducer(newCartItems);
    }

    const clearItemFromCart = (product) => {
        const newCartItems = clearCartItem(cartItems, product);
        updateCartItemsReducer(newCartItems);
    }


    const value = {
        isCartOpen,
        setIsCartOpen,
        addItemToCart,
        cartItems,
        totalCnt,
        totalPrice,
        decItemFromCart,
        clearItemFromCart
    };

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}