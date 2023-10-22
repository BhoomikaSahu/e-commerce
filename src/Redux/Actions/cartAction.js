import { CART_ADD_ITEMS, CART_REMOVE_ITEMS } from "../Constants/cartConstants"

export const addToCart = (id, data) => {
    return {
        type: CART_ADD_ITEMS,
        payload: {
            id: id,
            data: data
        },
    }
}

export const removeFromCart = (id) => {
    return {
        type: CART_REMOVE_ITEMS,
        payload: {
            id: id
        }
    }
}