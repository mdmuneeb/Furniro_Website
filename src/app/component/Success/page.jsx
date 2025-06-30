'use client';
import { useEffect } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

export default function SuccessPage() {
  const searchParams = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const { user } = useUser();
  const router = useRouter();

  useEffect(() => {
    const saveOrder = async () => {
      const cart = JSON.parse(localStorage.getItem('cart') || '[]');
      const total = cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);

      const deliveryDate = new Date();
      deliveryDate.setDate(deliveryDate.getDate() + 7);
      if (deliveryDate.getDay() === 0) deliveryDate.setDate(deliveryDate.getDate() + 1); // Skip Sunday

      await fetch('/api/save-order', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userId: user?.id,
          products: cart.map(({ name, price, quantity }) => ({
            name,
            price,
            quantity: quantity || 1,
          })),
          totalPrice: total,
          deliveryDate,
        }),
      });

      localStorage.removeItem('cart');
    };

    if (sessionId && user?.id) {
      saveOrder();
    }
  }, [sessionId, user]);

  return (
    <div className="p-8 text-center">
      <h1 className="text-3xl font-bold text-green-600">Payment Successful</h1>
      <p className="mt-4 text-gray-700">Your order has been placed and is being processed.</p>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => router.push('/component/Orders')}
          className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800"
        >
          View Orders
        </button>
        <button
          onClick={() => router.push('/component/Shop')}
          className="border border-black px-4 py-2 rounded hover:bg-black hover:text-white"
        >
          Back to Shop
        </button>
      </div>
    </div>
  );
}
