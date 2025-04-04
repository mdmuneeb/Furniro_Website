import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: [],
}

export interface CartItem {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    add:(state, action: PayloadAction<CartItem>)=>{
          const cartList =  JSON.parse(localStorage.getItem("cart") || '[]') ;
          state.items = cartList; 
          state.items.push(action.payload);
          // const newCart = [...cartList, action.payload];
          console.log(action.payload);
          
          localStorage.setItem("cart", JSON.stringify(state.items));
        },

    removeFromCart:(state,  action: PayloadAction<{ _id: string }>)=>{
      const cartList =  JSON.parse(localStorage.getItem("cart") || '[]') ;
      state.items = cartList.filter((item:CartItem) => item._id != action.payload._id)
      localStorage.setItem("cart", JSON.stringify(state.items))
    }
  },
})

// Action creators are generated for each case reducer function
export const { add,  removeFromCart} = cartSlice.actions

export default cartSlice.reducer