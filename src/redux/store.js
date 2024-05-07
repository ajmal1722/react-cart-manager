import { configureStore } from '@reduxjs/toolkit'
import viewCartReducer, { view_cart } from './cart/ViewCartSlice';

const store = configureStore({
    reducer: {
        viewCart: viewCartReducer
    }
})

export default store;