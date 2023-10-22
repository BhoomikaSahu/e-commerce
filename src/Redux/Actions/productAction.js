import { CREATE_PRODUCT, DELETE_ALL_PRODUCTS, PRODUCT_QUANTITY, REMOVE_PRODUCT } from "../Constants/productConstants"

export const createProduct = (data) => {
    return{
        type: CREATE_PRODUCT,
        payload: {
            id: new Date().getTime().toString(),
            data: data
        },
    }
}

export const deleteAllProducts = () => {
    return {
        type: DELETE_ALL_PRODUCTS,
    }
}

export const productQuantity = (id, qty) => {
    return {
        type: PRODUCT_QUANTITY,
        payload: {
            id: id,
            qty: qty
        }
    }
}

export const removeProduct = (id) => {
    return {
        type: REMOVE_PRODUCT,
        payload: {
            id: id
        }
    }
}