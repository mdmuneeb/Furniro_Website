import React from 'react';

const Billing = () => {
  return (
    <div>
      <div className='py-20 px-4 sm:px-8 md:px-16 lg:px-[10rem]'>
        <h1 className='text-4xl font-bold'>Checkout</h1>
        <div className='flex gap-2'>
          <p className='font-bold'>Home</p>
          <p>{'>'}</p>
          <p>Checkout</p>
        </div>
      </div>
      
      <div>
        <div className='grid grid-cols-1 md:grid-cols-2 px-4 sm:px-8 md:px-[10rem] gap-8 md:gap-24'>
            <div className='flex-1'>
                <form className="max-w-sm mx-auto">
                    <h2 className='text-4xl font-semibold py-3'>Billing Details</h2>
                    <div className="mb-5">
                        <div className="flex space-x-4">
                            <div className="w-1/2">
                                <label htmlFor="email1" className="block mb-2 text-sm font-medium text-gray-900">First Name</label>
                                <input type="text" id="email1" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>
                            <div className="w-1/2">
                                <label htmlFor="email2" className="block mb-2 text-sm font-medium text-gray-900">Last Name</label>
                                <input type="text" id="email2" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                            </div>
                        </div>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="company" className="block mb-2 text-sm font-medium text-gray-900">Company Name (Optional)</label>
                        <input type="text" id="company" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="country" className="block mb-2 text-sm font-medium text-gray-900">Country / Region</label>
                        <select id="country" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="address" className="block mb-2 text-sm font-medium text-gray-900">Street address</label>
                        <input type="text" id="address" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="city" className="block mb-2 text-sm font-medium text-gray-900">Town / City</label>
                        <input type="text" id="city" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="province" className="block mb-2 text-sm font-medium text-gray-900">Province</label>
                        <select id="province" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5">
                            <option selected>Choose a province</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>

                    <div className="mb-5">
                        <label htmlFor="zip" className="block mb-2 text-sm font-medium text-gray-900">ZIP code</label>
                        <input type="text" id="zip" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="phone" className="block mb-2 text-sm font-medium text-gray-900">Phone</label>
                        <input type="text" id="phone" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" />
                    </div>

                    <div className="mb-5">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Email address</label>
                        <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="john.doe@company.com"/>
                    </div>

                    <div className="mb-5">
                        <input type="text" id="additionalInfo" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="Additional Information"/>
                    </div>

                </form>
            </div>

            <div className='flex-1'>
                <div className='flex justify-between'>
                    <div>
                        <h3 className='text-2xl font-semibold'>Product</h3>
                        <div className='flex gap-3'>
                            <p className='text-[#9F9F9F]'>Asgaard sofa</p>
                            <p>X</p>
                            <p>1</p>
                        </div>
                        <p>Subtotal</p>
                        <p>Total</p>
                    </div>
                    <div className='text-end'>
                        <h3 className='text-2xl font-semibold'>SubTotal</h3>
                        <p className=''>Rs. 250,000.00</p>
                        <p className=''>Rs. 250,000.00</p>
                        <p className='text-2xl font-bold text-[#B88E2F]'>Rs. 250,000.00</p>
                    </div>
                </div>
                <div className='border-t border-[#D9D9D9] pt-5'>
                    <div className="flex items-center mb-4">
                        <input id="direct-bank" type="radio" value="" name="payment-method" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                        <label htmlFor="direct-bank" className="ms-2 text-sm text-gray-900 font-semibold">Direct Bank Transfer</label>
                    </div>
                    <div>
                        <p className='text-[#9F9F9F]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>    
                    </div>
                    <div className='my-5'>
                        <div className="flex items-center mb-4">
                            <input id="cash-on-delivery" type="radio" value="" name="payment-method" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500" />
                            <label htmlFor="cash-on-delivery" className="ms-2 text-sm font-medium text-gray-900">Cash On Delivery</label>
                        </div>
                    </div>
                    <div>
                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b>privacy policy.</b></p>
                    </div>

                    <div className='flex justify-center my-10'>
                        <button className='border-2 border-black rounded-xl px-20 py-5 text-xl hover:text-white hover:bg-black'>Place Order</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Billing;
