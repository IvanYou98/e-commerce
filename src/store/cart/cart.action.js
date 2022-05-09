import {createAction} from "../../utils/reducer/reducer.utils";
import {CART_ACTION_TYPES} from "./cart.types";


// Helper functions
const incItemsHelper = (cartItems, productToAdd) => {
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


const decItemsHelper = (cartItems, productToAdd) => {
    return cartItems.map(item =>
        item.id === productToAdd.id
            ? {...item, quantity: item.quantity - 1}
            : item).filter(item => item.quantity !== 0);
}

const removeItemsHelper = (cartItems, productToClear) => {
    return cartItems.filter(item => item.id !== productToClear.id);
}


export const setIsCartOpen = payload => createAction(CART_ACTION_TYPES.SET_IS_CART_OPEN, payload)

export const incItemsInCart = (cartItems,  product) => {
    const newCartItems = incItemsHelper(cartItems, product);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const decItemsInCart = (cartItems, product) => {
    const newCartItems = decItemsHelper(cartItems, product);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}

export const removeItemsInCart = (cartItems, product) => {
    const newCartItems = removeItemsHelper(cartItems, product);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEMS, newCartItems);
}


