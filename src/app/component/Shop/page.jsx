"use client"; 
import React, { useEffect, useState } from 'react';
import Cart from '../../component/Cart/page.jsx'
import Label from '../../component/Label/page.jsx'
// import { client } from '@/sanity/lib/client.js'
import { client } from '@/sanity/lib/client';

// async function getData(){
//     let data = await client.fetch(`*[_type == 'product']`)
//     return data
    
// }

const Shop = () => {

    const [data, setData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1); 
    const itemsPerPage = 8; 
    const [totalPages, setTotalPages] = useState(0);

    useEffect(() => {
      async function fetchData() {
        try {
          const products = await client.fetch(`*[_type == 'product']`);
          setData(products);
          setTotalPages(Math.ceil(products.length / itemsPerPage));
        } catch (error) {
          console.error("Error fetching data:", error);
        }
      }
  
      fetchData();
    }, []);




  return (
    <div>
      <div className='h-[19rem] bg-[#F9F1E7] flex justify-center items-center'>
        <div>
            <h1 className='text-5xl font-semibold'>Shop</h1>
            <p className='pt-2 ps-2'>
                <b>Home</b> {'>'} Shop
            </p>
        </div>
      </div>


      <div className='border-t  border-white py-10 bg-[#F9F1E7] flex justify-between px-24'>
        <div className='flex gap-x-5 items-center'>
            <div>
                <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.0238 7.14285H8.92857M6.54762 7.14285H2.97619M22.0238 19.0476H8.92857M6.54762 19.0476H2.97619M16.0714 13.0952H2.97619M22.0238 13.0952H18.4524M7.7381 4.7619C8.05383 4.7619 8.35663 4.88733 8.57989 5.11058C8.80315 5.33384 8.92857 5.63664 8.92857 5.95238V8.33333C8.92857 8.64906 8.80315 8.95187 8.57989 9.17512C8.35663 9.39838 8.05383 9.52381 7.7381 9.52381C7.42236 9.52381 7.11956 9.39838 6.8963 9.17512C6.67304 8.95187 6.54762 8.64906 6.54762 8.33333V5.95238C6.54762 5.63664 6.67304 5.33384 6.8963 5.11058C7.11956 4.88733 7.42236 4.7619 7.7381 4.7619V4.7619ZM7.7381 16.6667C8.05383 16.6667 8.35663 16.7921 8.57989 17.0153C8.80315 17.2386 8.92857 17.5414 8.92857 17.8571V20.2381C8.92857 20.5538 8.80315 20.8566 8.57989 21.0799C8.35663 21.3031 8.05383 21.4286 7.7381 21.4286C7.42236 21.4286 7.11956 21.3031 6.8963 21.0799C6.67304 20.8566 6.54762 20.5538 6.54762 20.2381V17.8571C6.54762 17.5414 6.67304 17.2386 6.8963 17.0153C7.11956 16.7921 7.42236 16.6667 7.7381 16.6667ZM17.2619 10.7143C17.5776 10.7143 17.8804 10.8397 18.1037 11.063C18.327 11.2862 18.4524 11.589 18.4524 11.9048V14.2857C18.4524 14.6014 18.327 14.9042 18.1037 15.1275C17.8804 15.3508 17.5776 15.4762 17.2619 15.4762C16.9462 15.4762 16.6434 15.3508 16.4201 15.1275C16.1969 14.9042 16.0714 14.6014 16.0714 14.2857V11.9048C16.0714 11.589 16.1969 11.2862 16.4201 11.063C16.6434 10.8397 16.9462 10.7143 17.2619 10.7143V10.7143Z" stroke="black" strokeLinecap="round" strokeWidth="round"/>
                </svg>
            </div>
            <div>
                Filter
            </div>
            <div>
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.6667 17.1667C12.7384 17.1667 11.8482 16.7979 11.1918 16.1416C10.5354 15.4852 10.1667 14.5949 10.1667 13.6667C10.1667 12.7384 10.5354 11.8482 11.1918 11.1918C11.8482 10.5354 12.7384 10.1667 13.6667 10.1667C14.5949 10.1667 15.4852 10.5354 16.1415 11.1918C16.7979 11.8482 17.1667 12.7384 17.1667 13.6667C17.1667 14.5949 16.7979 15.4852 16.1415 16.1416C15.4852 16.7979 14.5949 17.1667 13.6667 17.1667ZM4.33334 17.1667C3.40508 17.1667 2.51484 16.7979 1.85846 16.1416C1.20208 15.4852 0.833336 14.5949 0.833336 13.6667C0.833336 12.7384 1.20208 11.8482 1.85846 11.1918C2.51484 10.5354 3.40508 10.1667 4.33334 10.1667C5.26159 10.1667 6.15183 10.5354 6.80821 11.1918C7.46459 11.8482 7.83334 12.7384 7.83334 13.6667C7.83334 14.5949 7.46459 15.4852 6.80821 16.1416C6.15183 16.7979 5.26159 17.1667 4.33334 17.1667ZM13.6667 7.83334C12.7384 7.83334 11.8482 7.4646 11.1918 6.80822C10.5354 6.15184 10.1667 5.2616 10.1667 4.33334C10.1667 3.40509 10.5354 2.51485 11.1918 1.85847C11.8482 1.20209 12.7384 0.833344 13.6667 0.833344C14.5949 0.833344 15.4852 1.20209 16.1415 1.85847C16.7979 2.51485 17.1667 3.40509 17.1667 4.33334C17.1667 5.2616 16.7979 6.15184 16.1415 6.80822C15.4852 7.4646 14.5949 7.83334 13.6667 7.83334ZM4.33334 7.83334C3.40508 7.83334 2.51484 7.4646 1.85846 6.80822C1.20208 6.15184 0.833336 5.2616 0.833336 4.33334C0.833336 3.40509 1.20208 2.51485 1.85846 1.85847C2.51484 1.20209 3.40508 0.833344 4.33334 0.833344C5.26159 0.833344 6.15183 1.20209 6.80821 1.85847C7.46459 2.51485 7.83334 3.40509 7.83334 4.33334C7.83334 5.2616 7.46459 6.15184 6.80821 6.80822C6.15183 7.4646 5.26159 7.83334 4.33334 7.83334Z" fill="black"/>
                </svg>
            </div>
            <div className=''>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.5 6.75H19.5C20.2956 6.75 21.0587 7.06607 21.6213 7.62868C22.1839 8.19129 22.5 8.95435 22.5 9.75V14.25C22.5 15.0456 22.1839 15.8087 21.6213 16.3713C21.0587 16.9339 20.2956 17.25 19.5 17.25H4.5C3.70435 17.25 2.94129 16.9339 2.37868 16.3713C1.81607 15.8087 1.5 15.0456 1.5 14.25V9.75C1.5 8.95435 1.81607 8.19129 2.37868 7.62868C2.94129 7.06607 3.70435 6.75 4.5 6.75ZM4.5 8.25C4.10218 8.25 3.72064 8.40804 3.43934 8.68934C3.15804 8.97064 3 9.35218 3 9.75V14.25C3 14.6478 3.15804 15.0294 3.43934 15.3107C3.72064 15.592 4.10218 15.75 4.5 15.75H19.5C19.8978 15.75 20.2794 15.592 20.5607 15.3107C20.842 15.0294 21 14.6478 21 14.25V9.75C21 9.35218 20.842 8.97064 20.5607 8.68934C20.2794 8.40804 19.8978 8.25 19.5 8.25H4.5ZM1.5 3C1.5 2.80109 1.57902 2.61032 1.71967 2.46967C1.86032 2.32902 2.05109 2.25 2.25 2.25H21.75C21.9489 2.25 22.1397 2.32902 22.2803 2.46967C22.421 2.61032 22.5 2.80109 22.5 3C22.5 3.19891 22.421 3.38968 22.2803 3.53033C22.1397 3.67098 21.9489 3.75 21.75 3.75H2.25C2.05109 3.75 1.86032 3.67098 1.71967 3.53033C1.57902 3.38968 1.5 3.19891 1.5 3ZM1.5 21C1.5 20.8011 1.57902 20.6103 1.71967 20.4697C1.86032 20.329 2.05109 20.25 2.25 20.25H21.75C21.9489 20.25 22.1397 20.329 22.2803 20.4697C22.421 20.6103 22.5 20.8011 22.5 21C22.5 21.1989 22.421 21.3897 22.2803 21.5303C22.1397 21.671 21.9489 21.75 21.75 21.75H2.25C2.05109 21.75 1.86032 21.671 1.71967 21.5303C1.57902 21.3897 1.5 21.1989 1.5 21Z" fill="black"/>
                </svg>
            </div>
            <div>
                <p>
                Showing 1–16 of 32 results
                </p>
            </div>
        </div>
        <div className='flex gap-x-5 items-center'>
            <div>
                <p>Show</p>
            </div>
            <div className='bg-white text-[#9F9F9F] p-2'>
                <p>16</p>
            </div>
            <div>
                <p>Short By</p>
            </div>
            <div className='bg-white text-[#9F9F9F] py-2 px-12'>
                <p className=''>Default</p>
            </div>
        </div>
      </div>

      <div className="flex justify-center mt-16">

        <div className="grid grid-cols-4 gap-4">
                {data.map((product)=>{
                    return(
                        <div>
                            <Cart key={product._id} ProductInfo={product} />
                        </div>
                    ) 
                    
                })}
            {/* <div>
                <Cart/>
            </div>
            <div>
                <Cart/>
            </div>
            <div>
                <Cart/>
            </div>
            <div>
                <Cart/>
            </div>
            <div>
                <Cart/>
            </div>
            <div>
                <Cart/>
            </div>
            <div>
                <Cart/>
            </div>
            <div>
                <Cart/>
            </div> */}
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
