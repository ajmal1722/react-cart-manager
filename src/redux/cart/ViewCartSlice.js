import { createSlice } from "@reduxjs/toolkit"; 

export const viewCartSlice = createSlice({
    name: 'viewCart',
    initialState: {
        value: false
    },
    reducers: {
        view_cart: (state, action) => {
            state.value = action.payload.viewCart
        }
    }
})

export const { view_cart } = viewCartSlice.actions

export default viewCartSlice.reducer