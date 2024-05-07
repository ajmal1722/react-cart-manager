import { configureStore } from '@reduxjs/toolkit'
import viewCartReducer, { view_cart } from './cart/ViewCartSlice';
import addToCartReducer from './cart/addToCartSlice';

const store = configureStore({
    reducer: {
        viewCart: viewCartReducer,
        addToCart: addToCartReducer
    }
})

export default store;