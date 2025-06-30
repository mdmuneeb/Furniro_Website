'use client';

import React, { useEffect, useState } from 'react';
import { client } from '@/sanity/lib/client';
import { useUser } from '@clerk/nextjs';

const Order = () => {
  const [orders, setOrders] = useState([]);
  const { user, isLoaded } = useUser();

  useEffect(() => {
    const fetchOrders = async () => {
      if (!isLoaded || !user) return;

      try {
        const query = `*[_type == "order" && userId == "${user.id}"] | order(_createdAt desc)`;
        const data = await client.fetch(query);
        setOrders(data);
      } catch (error) {
        console.error('Failed to fetch orders from Sanity:', error);
      }
    };

    fetchOrders();
  }, [user, isLoaded]);

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-center mb-6">Your Orders</h1>

      {!isLoaded ? (
        <p className="text-center text-gray-600">Loading...</p>
      ) : orders.length === 0 ? (
        <p className="text-center text-gray-600">No orders found.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full table-auto border border-collapse border-gray-300">
            <thead className="bg-gray-100">
              <tr>
                <th className="border px-4 py-2">Order ID</th>
                <th className="border px-4 py-2">Products</th>
                <th className="border px-4 py-2">Total Price</th>
                <th className="border px-4 py-2">Delivery Date</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order) => (
                <tr key={order._id}>
                  <td className="border px-4 py-2">{order._id}</td>
                  <td className="border px-4 py-2">
                    <ul className="list-disc pl-4">
                      {order.products?.map((product, index) => (
                        <li key={index}>
                          {product.name} (x{product.quantity}) – Rs. {product.price}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="border px-4 py-2">Rs. {order.totalPrice}</td>
                  <td className="border px-4 py-2">
                    {new Date(order.deliveryDate).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Order;
