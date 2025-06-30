"use client";

import Link from 'next/link';

export default function CancelPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center text-center p-8">
      <h1 className="text-3xl font-bold text-red-600 mb-4">❌ Payment Cancelled</h1>
      <p className="mb-6 text-gray-600">You cancelled the payment. Feel free to continue shopping.</p>
      <Link href="/component/MainCart" className="text-blue-600 underline">
        Go back to Cart
      </Link>
    </div>
  );
}