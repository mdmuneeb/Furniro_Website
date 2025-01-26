import React from 'react'

const Billing = () => {
  return (
    <div>
      <div className='py-20 px-[10rem]'>
        <h1 className='text-4xl font-bold'>Checkout</h1>
        <div className='flex gap-2'>
          <p className='font-bold'>Home</p>
          <p>{'>'}</p>
          <p>Checkout</p>
        </div>
      </div>
      
      <div>
        <div className='flex px-[10rem] gap-24'>
            <div className='flex-1'>
                <form class="max-w-sm mx-auto">
                    <h2 className='text-4xl font-semibold py-3'>Billings Details</h2>
                    <div class="mb-5">
                        <div class="flex space-x-4">
                            <div class="w-1/2">
                                <label for="email1" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First Name</label>
                                <input type="text" id="email1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                            <div class="w-1/2">
                                <label for="email2" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last Name</label>
                                <input type="text" id="email2" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                            </div>
                        </div>
                    </div>

                    <div class="mb-5">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company Name (Optional)</label>
                        <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                    </div>


                    <div class="mb-5">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Country / Region</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>

                    <div class="mb-5">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Street address</label>
                        <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                    </div>

                    <div class="mb-5">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Town / City</label>
                        <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                    </div>

                    <div class="mb-5">
                        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Province</label>
                        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            <option selected>Choose a country</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>

                    <div class="mb-5">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">ZIP code</label>
                        <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                    </div>

                    <div class="mb-5">
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone</label>
                        <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  />
                    </div>

                    <div class="mb-5">
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
                        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com"/>
                    </div> 

                    <div class="mb-5">
                        <input type="text" id="password" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder='Additional Information'/>
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
                    <div class="flex items-center mb-4">
                        <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                        <label for="default-radio-1" class="ms-2 text-sm text-gray-900 dark:text-gray-300 font-semibold">Direct Bank Transfer</label>
                    </div>
                    <div>
                        <p className='text-[#9F9F9F]'>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>    
                    </div>
                    <div className='my-5'>
                        <div class="flex items-center mb-4 ">
                            <input id="default-radio-1" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="default-radio-1" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Direct Bank Transfer</label>
                        </div>
                        <div class="flex items-center">
                            <input checked id="default-radio-2" type="radio" value="" name="default-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                            <label for="default-radio-2" class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">Cash On Delivery</label>
                        </div>
                    </div>
                    <div>
                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <b> privacy policy.</b></p>
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
