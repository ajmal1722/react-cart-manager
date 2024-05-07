import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
    name: 'addToCart',
    initialState: {
        value: []
    },
    reducers: {
        addto_cart: ((state, action) => {
            state.value.push(action.payload)
        }) 
    }
})

export const { addto_cart } = addToCartSlice.actions

export default addToCartSlice.reducer