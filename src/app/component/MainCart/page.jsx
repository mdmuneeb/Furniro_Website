"use client";

import React, { useEffect, useState } from 'react'
import Label from '../Label/page'
import { urlFor } from '@/sanity/lib/image';
import { useAppDispatch } from '@/app/store/hooks/index';
import { removeFromCart } from '@/app/store/features/cart/cartSlice';

const MainCart = () => {
  const [dataItems, setData] = useState([]);
  const [amount, setAmount] = useState(0);

  useEffect(()=>{
    let storedItems = JSON.parse(localStorage.getItem("cart"));
    if(storedItems){
      let Price = 0;
      setData(storedItems);
      storedItems.forEach(item => {
        Price += item.price;
      });

      setAmount(Price);
    
    }
  }, [])
  

  const dispatch = useAppDispatch()

  let handleRemoveFromCart = (product) =>{
    dispatch(removeFromCart(product))
    console.log(product);
    let updatedItems = JSON.parse(localStorage.getItem("cart")) || [];
    setData(updatedItems);
    let updatedAmount = updatedItems.reduce((total, item) => total + item.price, 0);
    setAmount(updatedAmount); 
  }
  
  
  
  
  
  return (

  <div className=''>
      <div className='py-20 px-[10rem]'>
        <h1 className='text-4xl font-bold'>Cart</h1>
        <div className='flex gap-2'>
          <p className='font-bold'>Home</p>
          <p>{'>'}</p>
          <p>Cart</p>
        </div>
      </div>

      <div className='flex justify-around gap-10 mb-32 px-[10rem]'>
        

        <div class="relative overflow-x-auto grow">
            <table class="w-full text-sm text-left rtl:text-right ">
                <thead class="text-x bg-[#F9F1E7]">
                    <tr>
                        <th scope="col" class="px-6 py-3 text-center">
                            Product
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Price
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Quantity
                        </th>
                        <th scope="col" class="px-6 py-3">
                            Subtotal
                        </th>
                        <th scope="col" class="px-6 py-3">
                        </th>
                    </tr>
                </thead>
                <tbody>
                    { 
                    dataItems.length > 0 && 
                    dataItems.map((item)=>{
                      return (

                        <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 border-gray-200">
                          <td scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                            <div className='flex items-center gap-5'>
                              <img src={urlFor(item.image.asset)} alt={item.description} className='h-16 w-16' />
                              <p>{item.description}</p>
                            </div>
                          </td>
                          <td className="px-6 py-4 text-[#9F9F9F]">
                            $ {item.price}
                          </td>
                          <td class="px-6 py-4 bg-white">
                            <span className='p-2 rounded border border-[#9F9F9F]'>1</span>

                          </td>
                          <td class="px-6 py-4">
                            $ {item.price}
                          </td>
                          <td class="px-6 py-4">
                            <svg onClick={()=>handleRemoveFromCart(item)} className='cursor-pointer' width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M23.625 7H20.125V4.8125C20.125 3.84727 19.3402 3.0625 18.375 3.0625H9.625C8.65977 3.0625 7.875 3.84727 7.875 4.8125V7H4.375C3.89102 7 3.5 7.39102 3.5 7.875V8.75C3.5 8.87031 3.59844 8.96875 3.71875 8.96875H5.37031L6.0457 23.2695C6.08945 24.202 6.86055 24.9375 7.79297 24.9375H20.207C21.1422 24.9375 21.9105 24.2047 21.9543 23.2695L22.6297 8.96875H24.2812C24.4016 8.96875 24.5 8.87031 24.5 8.75V7.875C24.5 7.39102 24.109 7 23.625 7ZM18.1562 7H9.84375V5.03125H18.1562V7Z" fill="#B88E2F" />
                            </svg>
                          </td>
                        </tr>
                      );
                    })
                    }
                </tbody>
            </table>
        </div>


        <div className='bg-[#F9F1E7] pt-3 px-12 pb-14'>
          <h2 className='text-2xl font-bold text-center'>Cart Totals</h2>
          <div className='py-8'>
            <div className='flex justify-around items-center gap-8'>
              <p className='font-bold'>Sub Total</p>
              <p className='text-[#9F9F9F]'>Rs. {amount}</p>
            </div>
            <div className='flex justify-around items-center gap-8 pt-3'>
              <p className='font-bold'>Total</p>
              <p className='text-[#B88E2F] '>Rs. {amount}</p>
            </div>
          </div>
          <div className='flex justify-center'>
            <button className='border border-black rounded-md px-12 py-2'>Check Out</button>
          </div>
        </div>

      </div>
      <div>
        <Label/>
      </div>

    </div>
  )
}

export default MainCart
