import { CART_ADD_ITEMS, CART_REMOVE_ITEMS } from "../Constants/cartConstants"

const intialState = {
    cartList: []
}

export const cartReducer = (state=intialState, action) => {
    switch(action.type){
        case CART_ADD_ITEMS: {
            const {id, data} = action.payload
            const existItem = state.cartList.find(item => item.id === id)
            if(existItem){
                return state
            }
            else{
                return {
                    ...state,
                    cartList: [...state.cartList, {id: id, data: data}]
                }
            }
        }
        case CART_REMOVE_ITEMS: {
            const {id} = action.payload;;
            const newList = state.cartList.filter(item => item.id!==id)
            return{
                ...state,
                cartList: newList
            }
        }
        default: {
            return state
        };
    }
}