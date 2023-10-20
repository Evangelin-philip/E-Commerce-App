import {configureStore } from '@reduxjs/toolkit';
// wishlistSlice is the default export of wishlistSlice.js=wishlistSlice.reducers
import wishlistSlice from './slice/wishlistSlice';
import cartSlice from './slice/cartSlice'

const store=configureStore({
    reducer:{
        // wishlistSlice=wishlistSlice.reducers from wishlistSlice.js file = state
        wishlistReducers:wishlistSlice,
        // cartSlice = cartSlice.reducer  from cartslice.js = containg state
        cartReducers:cartSlice
    }
})
// console.log(wishlistSlice)
export default store