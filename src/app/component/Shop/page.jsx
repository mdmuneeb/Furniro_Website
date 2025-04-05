"use client"; 
import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart'
import Label from '../Label/Label'
// import { client } from '@/sanity/lib/client.js'
import { client } from '@/sanity/lib/client';

// async function getData(){
//     let data = await client.fetch(`*[_type == 'product']`)
//     return data
    
// }

const Shop = () => {

    const [data, setData] = useState([]);
    const [dataTwo, setDataTwo] = useState([]);
    const [category, setCategory] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); 
    const itemsPerPage = 6; 
    const [totalPages, setTotalPages] = useState(0);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isDropdownOpenPages, setIsDropdownOpenPages] = useState(false);
    const [categoryType, setCategoryType] = useState("Default");


    useEffect(() => {
      async function fetchData() {
        try {
          const products = await client.fetch(`*[_type == 'product']`);
          setData(products);
          setDataTwo(products);
          setTotalPages(Math.ceil(products.length / itemsPerPage));

          const category = await client.fetch(`*[_type == 'category']`);
          setCategory(category);
          console.log(category);
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      fetchData();
    }, []);

    let handleCategoryChange = (category) => {
      setCategoryType(category);
      setIsDropdownOpen(false);

      switch (category) {
        case 'Chair':
          setData(data.filter(item => item.category === 'Chair'));
          break;
        case 'Sofa':
          setData(data.filter(item => item.category === 'Sofa'));
          break;
        case 'Table':
          setData(data.filter(item => item.category === 'Table'));
          break;
        default:
          setData(dataTwo);
      }
    
    }



  return (
    <div>
<div className='h-[19rem] bg-[#F9F1E7] flex justify-center items-center'>
  <div className='text-center'>
    <h1 className='text-4xl sm:text-5xl font-semibold'>Shop</h1>
    <p className='pt-2 ps-2 text-sm sm:text-base'>
      <b>Home</b> {'>'} Shop
    </p>
  </div>
</div>

<div className='border-t border-white py-6 sm:py-10 bg-[#F9F1E7] flex flex-col sm:flex-row justify-between px-6 sm:px-24'>
  <div className='flex flex-col sm:flex-row gap-4 sm:gap-5 items-center'>
    <div>
      <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.0238 7.14285H8.92857M6.54762 7.14285H2.97619M22.0238 19.0476H8.92857M6.54762 19.0476H2.97619M16.0714 13.0952H2.97619M22.0238 13.0952H18.4524M7.7381 4.7619C8.05383 4.7619 8.35663 4.88733 8.57989 5.11058C8.80315 5.33384 8.92857 5.63664 8.92857 5.95238V8.33333C8.92857 8.64906 8.80315 8.95187 8.57989 9.17512C8.35663 9.39838 8.05383 9.52381 7.7381 9.52381C7.42236 9.52381 7.11956 9.39838 6.8963 9.17512C6.67304 8.95187 6.54762 8.64906 6.54762 8.33333V5.95238C6.54762 5.63664 6.67304 5.33384 6.8963 5.11058C7.11956 4.88733 7.42236 4.7619 7.7381 4.7619V4.7619ZM7.7381 16.6667C8.05383 16.6667 8.35663 16.7921 8.57989 17.0153C8.80315 17.2386 8.92857 17.5414 8.92857 17.8571V20.2381C8.92857 20.5538 8.80315 20.8566 8.57989 21.0799C8.35663 21.3031 8.05383 21.4286 7.7381 21.4286C7.42236 21.4286 7.11956 21.3031 6.8963 21.0799C6.67304 20.8566 6.54762 20.5538 6.54762 20.2381V17.8571C6.54762 17.5414 6.67304 17.2386 6.8963 17.0153C7.11956 16.7921 7.42236 16.6667 7.7381 16.6667ZM17.2619 10.7143C17.5776 10.7143 17.8804 10.8397 18.1037 11.063C18.327 11.2862 18.4524 11.589 18.4524 11.9048V14.2857C18.4524 14.6014 18.327 14.9042 18.1037 15.1275C17.8804 15.3508 17.5776 15.4762 17.2619 15.4762C16.9462 15.4762 16.6434 15.3508 16.4201 15.1275C16.1969 14.9042 16.0714 14.6014 16.0714 14.2857V11.9048C16.0714 11.589 16.1969 11.2862 16.4201 11.063C16.6434 10.8397 16.9462 10.7143 17.2619 10.7143V10.7143Z" stroke="black" strokeLinecap="round" strokeWidth="round"/>
      </svg>
    </div>
    <div>Filter</div>
    <div>
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M13.6667 17.1667C12.7384 17.1667 11.8482 16.7979 11.1918 16.1416C10.5354 15.4852 10.1667 14.5949 10.1667 13.6667C10.1667 12.7384 10.5354 11.8482 11.1918 11.1918C11.8482 10.5354 12.7384 10.1667 13.6667 10.1667C14.5949 10.1667 15.4852 10.5354 16.1415 11.1918C16.7979 11.8482 17.1667 12.7384 17.1667 13.6667C17.1667 14.5949 16.7979 15.4852 16.1415 16.1416C15.4852 16.7979 14.5949 17.1667 13.6667 17.1667ZM4.33334 17.1667C3.40508 17.1667 2.51484 16.7979 1.85846 16.1416C1.20208 15.4852 0.833336 14.5949 0.833336 13.6667C0.833336 12.7384 1.20208 11.8482 1.85846 11.1918C2.51484 10.5354 3.40508 10.1667 4.33334 10.1667C5.26159 10.1667 6.15183 10.5354 6.80821 11.1918C7.46459 11.8482 7.83334 12.7384 7.83334 13.6667C7.83334 14.5949 7.46459 15.4852 6.80821 16.1416C6.15183 16.7979 5.26159 17.1667 4.33334 17.1667ZM13.6667 7.83334C12.7384 7.83334 11.8482 7.4646 11.1918 6.80822C10.5354 6.15184 10.1667 5.2616 10.1667 4.33334C10.1667 3.40509 10.5354 2.51485 11.1918 1.85847C11.8482 1.20209 12.7384 0.833344 13.6667 0.833344C14.5949 0.833344 15.4852 1.20209 16.1415 1.85847C16.7979 2.51485 17.1667 3.40509 17.1667 4.33334C17.1667 5.2616 16.7979 6.15184 16.1415 6.80822C15.4852 7.4646 14.5949 7.83334 13.6667 7.83334ZM4.33334 7.83334C3.40508 7.83334 2.51484 7.4646 1.85846 6.80822C1.20208 6.15184 0.833336 5.2616 0.833336 4.33334C0.833336 3.40509 1.20208 2.51485 1.85846 1.85847C2.51484 1.20209 3.40508 0.833344 4.33334 0.833344C5.26159 0.833344 6.15183 1.20209 6.80821 1.85847C7.46459 2.51485 7.83334 3.40509 7.83334 4.33334C7.83334 5.2616 7.46459 6.15184 6.80821 6.80822C6.15183 7.4646 5.26159 7.83334 4.33334 7.83334Z" fill="black"/>
      </svg>
    </div>
    <div>
      <p className='text-xs sm:text-base'>
        Showing 1 – {Math.min(itemsPerPage,data.length)} of {data.length} results
      </p>
    </div>
  </div>

  <div className='flex flex-col sm:flex-row gap-4 sm:gap-5 items-center'>
    <div>
      <p className='text-xs sm:text-base'>Show</p>
    </div>
    <div className=' text-[#9F9F9F] p-2'>
      {/* <p className='text-xs sm:text-base'>16</p> */}
    
      <div class="relative inline-block text-left cursor-pointer">
        <div>
          <button type="button" onClick={()=> setIsDropdownOpenPages(!isDropdownOpenPages)} class="inline-flex w-full justify-center gap-x-1.5 bg-white rounded-md  px-3 py-2 text-sm font-semibold  ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 border-none" id="menu-button" aria-expanded="true" aria-haspopup="true">
            16
            <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {isDropdownOpenPages && (<div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div class="py-1" role="none">
            <p href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">16</p>
            <p href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">32</p>
            <p href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">48</p>
          </div>
        </div>)}
      </div>

    
    
    
    
    
    
    
    
    
    
    </div>
    <div>
      <p className='text-xs sm:text-base'>Short By</p>
    </div>
    <div className=' text-[#9F9F9F] py-2 px-8 sm:px-12'>
      {/* <p className='text-xs sm:text-base'>Default</p> */}
    
      <div class="relative inline-block text-left cursor-pointer">
        <div>
          <button type="button" onClick={()=> setIsDropdownOpen(!isDropdownOpen)} class="inline-flex w-full justify-center gap-x-1.5 bg-white rounded-md  px-3 py-2 text-sm font-semibold  ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 border-none" id="menu-button" aria-expanded="true" aria-haspopup="true">
            {categoryType}
            <svg class="-mr-1 size-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fillRule="evenodd" d="M5.22 8.22a.75.75 0 0 1 1.06 0L10 11.94l3.72-3.72a.75.75 0 1 1 1.06 1.06l-4.25 4.25a.75.75 0 0 1-1.06 0L5.22 9.28a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
        {isDropdownOpen && (<div class="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white ring-1 shadow-lg ring-black/5 focus:outline-hidden" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
          <div class="py-1" role="none">
            {
              category.map((cat, index)=>{
                return(
                  <button key={index} class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-0" onClick={()=>handleCategoryChange(cat.CategoryName)}>{cat.CategoryName} </button>
                )
              })
            }
            {/* <p href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">Chair</p>
            <p href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">Sofa</p>
            <p href="#" class="block px-4 py-2 text-sm text-gray-700" role="menuitem" tabindex="-1" id="menu-item-2">Table</p> */}
          </div>
        </div>)}
      </div>

    
    
    
    
    
    
    
    
    
    
    
    </div>
  </div>
</div>

      <div className="flex justify-center mt-16">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                {data.map((product)=>{
                    return(
                        <div key={product._id}>
                            <Cart  ProductInfo={product} />
                        </div>
                    ) 
                    
                })}
        </div>
     </div>

     <div className='flex justify-center items-center my-12 gap-10'>
        <div className='bg-[#B88E2F] text-white py-2 px-4 rounded-sm'>
            <p>1</p>
        </div>
        <div className='bg-[#F9F1E7] text-black py-2 px-4 rounded-sm'>
            <p>2</p>
        </div>
        <div className='bg-[#F9F1E7] text-black py-2 px-4 rounded-sm'>
            <p>3</p>
        </div>
        <div className='bg-[#F9F1E7] text-black py-2 px-6 rounded-sm'>
            <p>Next</p>
        </div>
        {/* {Array.from({ length: totalPages }, (_, i) => (
        <button key={i + 1} onClick={() => setCurrentPage(i + 1)}>
            {i + 1}
        </button>
        ))}
        <div>
            <button onClick={nextPage} disabled={isLastPage}>Next</button>
        </div> */}
     </div>


{/* <div className="flex justify-center my-10">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={isFirstPage}
          className={`px-4 py-2 border ${isFirstPage ? "text-gray-400" : "text-black"}`}
        >
          Previous
        </button>
        <span className="px-4">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={isLastPage}
          className={`px-4 py-2 border ${isLastPage ? "text-gray-400" : "text-black"}`}
        >
          Next
        </button>
      </div> */}






     <div>
        <Label/>
     </div>


    </div>
  )
}

export default Shop
