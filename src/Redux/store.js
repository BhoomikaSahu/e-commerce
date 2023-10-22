import {configureStore } from '@reduxjs/toolkit';
import { productReducer } from './Reducers/productReducer';
import { cartReducer } from './Reducers/cartReducer';

const reducer = {
    productReducer,
    cartReducer,
}

const store = configureStore({reducer})

export default store;