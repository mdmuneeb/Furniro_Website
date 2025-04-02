import { createSlice } from '@reduxjs/toolkit'

export interface ProductState {
  items: string[];
}

const initialState: ProductState = {
  items: [],
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    // increment: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
    //   state.value += 1

        add:(state:any, action:any)=>{
            state.items.push(action.payload);
        }
// },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action: PayloadAction<number>) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { add } = productSlice.actions

export default productSlice.reducer