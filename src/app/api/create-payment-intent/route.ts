import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: '2025-05-28.basil', // Use latest stable version; change if needed
});

// Define the expected item shape
interface CheckoutItem {
  name: string;
  price: number;
  quantity: number;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const items: CheckoutItem[] = body.items;

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100, // in cents
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/Success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/Cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const errorMessage =
      err instanceof Error ? err.message : 'An unknown error occurred';
    console.error('Stripe error:', errorMessage);

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
}
