import React from 'react'
import SingleData from './SingleData/page';

const ShoppingCart = () => {
  return (
    <div className='bg-white w-96 p-5'>
      <div className='flex justify-between'>
        <h1 className='text-xl font-bold border-b border-[#D9D9D9] size-14 grow'>Shopping Cart</h1>
        <div className='size-14 grow-0'>
            <svg width="17" height="19" viewBox="0 0 17 19" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.3125 1.1875C9.09986 1.1875 9.85497 1.50028 10.4117 2.05703C10.9685 2.61378 11.2812 3.36889 11.2812 4.15625V4.75H5.34375V4.15625C5.34375 3.36889 5.65653 2.61378 6.21328 2.05703C6.77003 1.50028 7.52514 1.1875 8.3125 1.1875ZM12.4688 4.75V4.15625C12.4688 3.05394 12.0309 1.99679 11.2514 1.21734C10.472 0.437889 9.41481 0 8.3125 0C7.21019 0 6.15304 0.437889 5.37359 1.21734C4.59414 1.99679 4.15625 3.05394 4.15625 4.15625V4.75H0V16.625C0 17.2549 0.250223 17.859 0.695621 18.3044C1.14102 18.7498 1.74511 19 2.375 19H14.25C14.8799 19 15.484 18.7498 15.9294 18.3044C16.3748 17.859 16.625 17.2549 16.625 16.625V4.75H12.4688ZM1.1875 5.9375H15.4375V16.625C15.4375 16.9399 15.3124 17.242 15.0897 17.4647C14.867 17.6874 14.5649 17.8125 14.25 17.8125H2.375C2.06006 17.8125 1.75801 17.6874 1.53531 17.4647C1.31261 17.242 1.1875 16.9399 1.1875 16.625V5.9375Z" fill="#9F9F9F"/>
            </svg>
        </div>
      </div>
      <div>
        <SingleData/>
        <SingleData/>
      </div>
      <div className='mt-5 '>
        <div className='flex justify-around border-b pb-5 border-[#D9D9D9]'>
            <p>Subtotal</p>
            <p className='text-[#B88E2F]'>Rs. 520,000.00</p>
        </div>
        <div className='mt-5'>
            <div>
                <button className='border border-black px-8 rounded-full'>Cart</button>
                <button className='border border-black px-8 rounded-full mx-2'>Checkout</button>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default ShoppingCart;
