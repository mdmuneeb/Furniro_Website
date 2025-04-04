"use client";
import React, { useState } from "react";
import Cart from "../../Cart/Cart.jsx";
import ShoppingCart from "../../../component/ShoppingCart/page.jsx";

const Single = () => {
  const [cartVisible, setCartVisible] = useState(false);

  const handleAddToCart = () => {
    setCartVisible(true); // Show the ShoppingCart
  };

  const handleCloseCart = () => {
    setCartVisible(false); // Hide the ShoppingCart
  };

  return (
    <div className="relative">
      {/* Grey-out Background Overlay */}
      {cartVisible && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={handleCloseCart} // Close cart on clicking outside
        ></div>
      )}

      {/* ShoppingCart Component */}
      {cartVisible && (
        <div className="fixed top-0 right-0 z-50">
          <ShoppingCart />
        </div>
      )}

      {/* Main Content */}
      <div className={`flex flex-col ${cartVisible ? "pointer-events-none" : ""}`}>
        {/* Breadcrumb */}
        <div className="flex py-8 bg-[#F9F1E7] ps-20 gap-5">
          <div className="flex gap-3">
            <p className="text-[#9F9F9F]">Home</p>
            <p className="font-bold">{">"}</p>
            <p className="text-[#9F9F9F]">Shop</p>
            <p className="font-bold">{">"}</p>
          </div>
          <div className="px-6 border-s-2 border-[#9F9F9F]">Asgaard sofa</div>
        </div>

        {/* Product Details */}
        <div className="flex justify-center px-20 pt-10">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex">
              <div>
                <img src="/sofa_1.png" alt="" />
                <img src="/sofa_2.png" alt="" />
                <img src="/sofa_3.png" alt="" />
                <img src="/sofa_4.png" alt="" />
              </div>
              <div>
                <img src="/main_sofa.png" alt="" />
              </div>
            </div>
            <div>
              <div>
                <h1 className="text-5xl">Asgaard sofa</h1>
                <h3 className="text-[#9F9F9F]">Rs. 250,000.00</h3>
                <p className="pt-16">
                  Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound.
                </p>
              </div>
              <div className="mt-8">
                <p className="text-[#9F9F9F] mb-2">Size</p>
                <div className="flex gap-5">
                  <p>L</p>
                  <p>XL</p>
                  <p>XS</p>
                </div>
              </div>
              <div>
                <p className="text-[#9F9F9F] mt-4 mb-2">Color</p>
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-[#816DFA]"></div>
                  <div className="w-6 h-6 rounded-full bg-[#000000]"></div>
                  <div className="w-6 h-6 rounded-full bg-[#B88E2F]"></div>
                </div>
              </div>
              <div className="flex gap-5 items-center mt-5 pb-16 border-b border-[#D9D9D9]">
                <div className="flex gap-10 border px-5 py-2 rounded-lg border-[#9F9F9F]">
                  <p>-</p>
                  <p>1</p>
                  <p>+</p>
                </div>
                <div
                  className="px-16 border rounded-lg py-2 border-black cursor-pointer"
                  onClick={handleAddToCart}
                >
                  <p>Add To Cart</p>
                </div>
              </div>
              <div className="flex gap-3 py-16 text-[#9F9F9F]">
                <div>
                  <p>SKU</p>
                  <p>Category</p>
                  <p>Tags</p>
                  <p>Share</p>
                </div>
                <div>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                  <p>:</p>
                </div>
                <div>
                  <p>SS001</p>
                  <p>Sofas</p>
                  <p>Sofa, Chair, Home, Shop</p>
                  <p className="flex gap-3">{/* Add SVG icons here */}</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="border-t border-b border-[#D9D9D9] pt-12 pb-10">
          <div className="flex justify-center items-center gap-16 text-2xl">
            <p className="font-bold">Description</p>
            <p className="text-[#9F9F9F]">Additional Information</p>
          </div>
          <div className="text-[#9F9F9F] px-48 mt-10 mb-5">
            <div>
              <p>
                Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.
              </p>
            </div>
            <div className="pt-6">
              <p>
                Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-8">
            <img src="/sofa_s_1.png" alt="" />
            <img src="/sofa_s_2.png" alt="" />
          </div>
        </div>

        {/* Related Products */}
        <div className="pt-12 pb-24">
          <h2 className="text-2xl font-bold text-center">Related Products</h2>
          <div className="flex justify-center pt-6">
            <div className="grid grid-cols-4 gap-4">
              <div>
                <Cart />
              </div>
              <div>
                <Cart />
              </div>
              <div>
                <Cart />
              </div>
              <div>
                <Cart />
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-9">
            <button className="border border-[#B88E2F] text-[#B88E2F] w-[14rem] h-[2.5rem] hover:bg-[#B88E2F] hover:text-white">
              Show More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Single;
