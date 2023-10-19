import {configureStore } from '@reduxjs/toolkit';
// wishlistSlice is the default export of wishlistSlice.js=wishlistSlice.reducers
import wishlistSlice from './wishlistSlice';

const store=configureStore({
    reducer:{
        // wishlistSlice=wishlistSlice.reducers from wishlistSlice.js file = state
        wishlistReducers:wishlistSlice
    }
})
console.log(wishlistSlice)
export default store