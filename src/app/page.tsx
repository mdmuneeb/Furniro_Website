"use client"; 
import Cart from "./component/Cart/Cart";
import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';

export default function Home() {

      const [data, setData] = useState([]);
      const [showShowButton, setShowShowButton] = useState(false);
      const [productsInfo, setProductsInfo] = useState([]);
  
      useEffect(() => {
        async function fetchData() {
          try {
            const products = await client.fetch(`*[_type == 'product']`);
            setProductsInfo(products);
            
            if(products.length > 4){
              const shortList = products.slice(0,4); 
              setShowShowButton(true);
              setData(shortList);
              console.log(shortList);
              
            }
            else{
              setData(products);
              setShowShowButton(false);
            }
          } catch (error) {
            console.error("Error fetching data:", error);
          }
        }
    
        fetchData();
      }, []);

      const showMoreButtonFunction = () =>{
        setShowShowButton(false);
        setData(productsInfo);
      }
  return (
    <>
    <div>
    <div className="relative">
      <img src="/landingPage.png" className="w-full h-[35rem] object-cover" alt="Landing Page" />

      <div className="absolute inset-0 flex flex-col justify-center items-center sm:items-end text-white bg-opacity-50 px-4">
        <div className="bg-[#FFF3E3] p-8 w-full sm:w-[45rem] rounded-md">
          <h3 className="text-lg md:text-2xl text-black">New Arrival</h3>
          <h1 className="text-2xl md:text-5xl font-bold my-4 text-[#B88E2F]">Discover Our New Collection</h1>
          <h3 className="text-sm md:text-lg mb-6 text-black">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
          </h3>
          <button className="bg-[#B88E2F] text-white px-14 py-4 rounded-md transition hover:text-[#B88E2F] hover:bg-white hover:border border-[#B88E2F]">
            Buy Now
          </button>
        </div>
      </div>
    </div>

      {/* <div className=" mt-10 flex justify-center flex-col">
        <div className="mb-14 ">
          <h2 className="text-2xl font-bold text-center">Browse The Range</h2>
          <h3 className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
        </div>
        <div className="flex justify-center items-center"> 
          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-center items-center w-[95%] sm:w-[80%]">
            <div>
              <img src="/btr_image_1.png" alt="" className="h-[23rem]"/>
              <div className="text-center my-5">
                <p className="font-semibold">Dining</p>
              </div>
            </div>
            <div>
              <img src="/btr_image_2.png" alt="" className="h-[23rem]"/>
              <div className="text-center my-5">
                <p className="font-semibold">Living</p>
              </div>
            </div>
            <div>
              <img src="/btr_image_3.png" alt="" className="h-[23rem]"/>
              <div className="text-center my-5">
                <p className="font-semibold">Bedroom</p>
              </div>
            </div> 
          </div>
        </div>
      </div> */}

<div className="mt-10 ">
  <div className="mb-14">
    <h2 className="text-2xl font-bold text-center">Browse The Range</h2>
    <h3 className="text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h3>
  </div>
  <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 justify-center items-center w-[95%] sm:w-[80%] mx-auto">
    <div className="flex flex-col items-center">
      <img src="/btr_image_1.png" alt="" className="h-[23rem]" />
      <div className="text-center my-5">
        <p className="font-semibold">Dining</p>
      </div>
    </div>
    <div className="flex flex-col items-center">
      <img src="/btr_image_2.png" alt="" className="h-[23rem]" />
      <div className="text-center my-5">
        <p className="font-semibold">Living</p>
      </div>
    </div>
    <div className="flex flex-col items-center">
      <img src="/btr_image_3.png" alt="" className="h-[23rem]" />
      <div className="text-center my-5">
        <p className="font-semibold">Bedroom</p>
      </div>
    </div>
  </div>
</div>


      <div className="mt-6">
        <div className="flex justify-center mb-8">
          <h2 className="text-2xl font-bold">Our Products</h2>
        </div>
        <div className={`flex justify-center ${showShowButton ? '': 'mb-10'}`}>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {data.map((product, index)=>{
                  return(
                      <div key={index}>
                          <Cart  ProductInfo={product} />
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
        {showShowButton && (<div className="flex justify-center my-8">
          <button onClick={showMoreButtonFunction} className="border border-[#B88E2F] text-[#B88E2F] w-[14rem] h-[2.5rem] hover:bg-[#B88E2F] hover:text-white" >Show More</button>
        </div>)}
      </div>
    </div>
    </>
  );
}
