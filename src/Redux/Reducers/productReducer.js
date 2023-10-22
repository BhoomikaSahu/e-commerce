import {
  CREATE_PRODUCT,
  DELETE_ALL_PRODUCTS,
  PRODUCT_QUANTITY,
  REMOVE_PRODUCT,
} from "../Constants/productConstants";

const initialState = {
  products: [],
};

export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_PRODUCT: {
      const { id, data } = action.payload;
      const { productName } = data;
      const res = state.products.find(product => product.data.productName === productName);
      return res ? state : {
        ...state,
        products: [...state.products, { id: id, data: data }],
      }
    }
    case DELETE_ALL_PRODUCTS: {
      return {
        products: [],
      };
    }
    case PRODUCT_QUANTITY: {
      const { id, qty } = action.payload;
      return {
        ...state,
        products: state.products.map((product) =>
          product.id === id
            ? {
                ...product,
                data: {
                  ...product.data,
                  stock: Number(product.data.stock) - Number(qty),
                },
              }
            : product
        ),
      };
    }
    case REMOVE_PRODUCT: {
      const {id} = action.payload;
      console.log('ttype id', typeof(id));
            const newList = state.products.filter(item => console.log('in-type id', typeof(item.id)) )
            return{
                ...state,
                products: newList
            }
    }
    default: {
      return state;
    }
  }
};
