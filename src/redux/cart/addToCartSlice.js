import { createSlice } from "@reduxjs/toolkit";

export const addToCartSlice = createSlice({
    name: 'addToCart',
    initialState: {
        value: []
    },
    reducers: {
        addto_cart: ((state, action) => {
            state.value.push(action.payload)
        }),
        remove_item: ((state, action) => {
            const index = action.payload
            state.value.splice(index, 1)
        })
    }
})

export const { addto_cart, remove_item } = addToCartSlice.actions

export default addToCartSlice.reducer