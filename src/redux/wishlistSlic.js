 
 
 import {createSlice} from '@reduxjs/toolkit';

 const wishlistSlice=createSlice({

    // name key and value doesnt have any significance , its ur wish to add or remove name key and value
    name:'wishlist',
    initialState:[],
    reducers:{
        // Actions----------------------

        // state= initialState and action is the argument passed by component which contain the payload
        addToWishlist:(state,action)=>{
            state.push(action.payload)
        },
        removeFromWishlist:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }


 })

//  {} => we have to import multiple items

// action exporting
 export const {addToWishlist,removeFromWishlist}=wishlistSlice.actions
//  state exporting
 export default wishlistSlice.reducer