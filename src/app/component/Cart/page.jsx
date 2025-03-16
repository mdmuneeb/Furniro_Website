import React from 'react';

const Cart = () => {
  return (
    <div className="relative group w-64 bg-white shadow-md overflow-hidden">
      {/* Image Section */}
      <div className="relative">
        <img 
          src="/Product/Product_images_1.png" 
          alt="Night Lamp" 
          className="w-full h-64 object-cover"
        />
        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-[#3A3A3A] bg-opacity-75 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <div className="flex flex-col items-center space-y-2">
            <button className="bg-[#FFFFFF] text-[#B88E2F] px-4 py-2 w-[12rem] font-semibold">Add to Cart</button>
            <div className="flex space-x-4">
              <button className="text-white flex justify-around gap-2">
                <svg width="16" height="15" className='pt-1' viewBox="0 0 16 15" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.99973 13.0361C-5.33333 5.66669 3.99999 -2.33331 7.99973 2.72539C12 -2.33331 21.3333 5.66669 7.99973 13.0361Z" stroke="white" strokeWidth="1.8"/>
                </svg>
                Like
              </button>
              <button className="text-white flex justify-around gap-2">
                <svg width="12" height="14" className='pt-1' viewBox="0 0 12 14" fill="white" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10 9.66671C9.47467 9.66671 9 9.87337 8.644 10.2047L3.94 7.46671C3.97333 7.31337 4 7.16004 4 7.00004C4 6.84004 3.97333 6.68671 3.94 6.53337L8.64 3.79337C9 4.12671 9.47333 4.33337 10 4.33337C11.1067 4.33337 12 3.44004 12 2.33337C12 1.22671 11.1067 0.333374 10 0.333374C8.89333 0.333374 8 1.22671 8 2.33337C8 2.49337 8.02667 2.64671 8.06 2.80004L3.36 5.54004C3 5.20671 2.52667 5.00004 2 5.00004C0.893333 5.00004 0 5.89337 0 7.00004C0 8.10671 0.893333 9.00004 2 9.00004C2.52667 9.00004 3 8.79337 3.36 8.46004L8.05867 11.2054C8.02112 11.3563 8.00143 11.5112 8 11.6667C8 12.0623 8.1173 12.4489 8.33706 12.7778C8.55682 13.1067 8.86918 13.3631 9.23463 13.5145C9.60009 13.6658 10.0022 13.7054 10.3902 13.6283C10.7781 13.5511 11.1345 13.3606 11.4142 13.0809C11.6939 12.8012 11.8844 12.4448 11.9616 12.0569C12.0387 11.6689 11.9991 11.2668 11.8478 10.9013C11.6964 10.5359 11.44 10.2235 11.1111 10.0038C10.7822 9.784 10.3956 9.66671 10 9.66671Z" fill="white"/>
                </svg>
                Share
              </button>
            </div>
          </div>
        </div>

        <div className="p-4">
          <h2 className="text-xl font-semibold">Grifo</h2>
          <p className="text-gray-600">Night lamp</p>
          <p className="text-lg font-bold text-gray-800">Rp 1.500.000</p>
        </div>

      </div>

      {/* Text Section */}
    </div>
  );
};

export default Cart;
