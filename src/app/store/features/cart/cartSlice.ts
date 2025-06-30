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
  quantity: number;
}

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {

    // add:(state, action: PayloadAction<CartItem>)=>{
    //       const cartList =  JSON.parse(localStorage.getItem("cart") || '[]') ;
    //       state.items = cartList; 
    //       state.items.push(action.payload);
    //       // const newCart = [...cartList, action.payload];
    //       console.log(action.payload);
          
    //       localStorage.setItem("cart", JSON.stringify(state.items));
    //     }
    add: (state, action: PayloadAction<CartItem>) => {
  const cartList: CartItem[] = JSON.parse(localStorage.getItem("cart") || '[]');

  const existingItemIndex = cartList.findIndex(item => item._id === action.payload._id);

  if (existingItemIndex !== -1) {
    // Item exists, increase quantity
    cartList[existingItemIndex].quantity += 1;
  } else {
    // New item, add with quantity: 1
    cartList.push({ ...action.payload, quantity: 1 });
  }

  state.items = cartList;
  localStorage.setItem("cart", JSON.stringify(cartList));
},

    // removeFromCart:(state,  action: PayloadAction<{ _id: string }>)=>{
    //   const cartList =  JSON.parse(localStorage.getItem("cart") || '[]') ;
    //   state.items = cartList.filter((item:CartItem) => item._id != action.payload._id)
    //   localStorage.setItem("cart", JSON.stringify(state.items))
    // }
  // }
  removeFromCart: (state, action: PayloadAction<{ _id: string }>) => {
  let cartList: CartItem[] = JSON.parse(localStorage.getItem("cart") || '[]');

  const existingItemIndex = cartList.findIndex(item => item._id === action.payload._id);

  if (existingItemIndex !== -1) {
    if (cartList[existingItemIndex].quantity > 1) {
      cartList[existingItemIndex].quantity -= 1;
    } else {
      cartList = cartList.filter(item => item._id !== action.payload._id);
    }
  }

  state.items = cartList;
  localStorage.setItem("cart", JSON.stringify(cartList));
}
  },
})

// Action creators are generated for each case reducer function
export const { add,  removeFromCart} = cartSlice.actions

export default cartSlice.reducer