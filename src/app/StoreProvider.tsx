"use client";


import React, { ReactNode, useRef } from 'react'
import { Provider } from 'react-redux';
import { AppStore, makeStore } from './store/store';
import { add } from './store/features/cart/cartSlice';



const StoreProvider = ({children}:{children:ReactNode}) => {

    const storeRef = useRef<AppStore>(undefined)
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    // storeRef.current.dispatch(add("testproductid"))
  }
  return (
    <Provider store={storeRef.current}>
        {children}
    </Provider>
  )
}

export default StoreProvider
