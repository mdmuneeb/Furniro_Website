import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-white py-8 border-t">
      <div className="container mx-auto px-24">
        <div className="flex flex-wrap items-start justify-between">
          {/* Logo Section */}
          <div className="w-1/4">
            <h1 className="text-2xl font-bold">Funiro.</h1>
          </div>

          {/* Links Section */}
          <div className="w-1/4">
            <h3 className="text-gray-500 mb-4">Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Home</a></li>
              <li><a href="#" className="hover:underline">Shop</a></li>
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
            </ul>
          </div>

          {/* Help Section */}
          <div className="w-1/4">
            <h3 className="text-gray-500 mb-4">Help</h3>
            <ul className="space-y-2">
              <li><a href="#" className="hover:underline">Payment Options</a></li>
              <li><a href="#" className="hover:underline">Returns</a></li>
              <li><a href="#" className="hover:underline">Privacy Policies</a></li>
            </ul>
          </div>

          {/* Newsletter Section */}
          <div className="w-1/4">
            <h3 className="text-gray-500 mb-4">Newsletter</h3>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter Your Email Address"
                className="flex-1 border-b border-black px-4 py-2 rounded-l"
              />
              <button className="hover:bg-black hover:text-white border-b border-black bg-white text-black mx-4 px-4 py-2 rounded-r">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t mt-8 pt-4">
          <p className="text-sm text-gray-500 text-center">
            2023 Funiro. All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
