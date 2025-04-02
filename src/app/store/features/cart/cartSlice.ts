import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  items: string[];
}

const initialState: CartState = {
  items: [],
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    add:(state:any, action:any)=>{
          let cartList =  JSON.parse(localStorage.getItem("cart") || '[]') ;
          state.items = cartList; 
          state.items.push(action.payload);
          // const newCart = [...cartList, action.payload];
          localStorage.setItem("cart", JSON.stringify(state.items));
        },

    removeFromCart:(state:any, action:any)=>{
      let cartList =  JSON.parse(localStorage.getItem("cart") || '[]') ;
      state.items = cartList.filter((item:any) => item._id != action.payload._id)
      localStorage.setItem("cart", JSON.stringify(state.items))
    }
  },
})

// Action creators are generated for each case reducer function
export const { add,  removeFromCart} = cartSlice.actions

export default cartSlice.reducer