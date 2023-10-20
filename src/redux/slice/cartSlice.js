import {createSlice} from '@reduxjs/toolkit';

 const cartSlice=createSlice({

    // name key and value doesnt have any significance , its ur wish to add or remove name key and value
    name:'cart',
    initialState:[],
    reducers:{
        // Actions----------------------

        // state= initialState and action is the argument passed by component which contain the payload
        addToCart:(state,action)=>{
            state.push(action.payload)
        },
        // need product id as argument for adding
        removeFromCart:(state,action)=>{
            return state.filter(item=>item.id!=action.payload)
        }
    }


 })

//  {} => we have to import multiple items

// action exporting
 export const {addToCart,removeFromCart}=cartSlice.actions
//  state exporting
 export default cartSlice.reducer