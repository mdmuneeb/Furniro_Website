import Stripe from 'stripe';
import { NextRequest, NextResponse } from 'next/server';

if (!process.env.STRIPE_SECRET_KEY) {
  throw new Error("Missing STRIPE_SECRET_KEY");
}

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

type CartItem = {
  name: string;
  price: number;
  quantity: number;
};

export async function POST(req: NextRequest) {
  try {
    const { items }: { items: CartItem[] } = await req.json();

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: items.map((item) => ({
        price_data: {
          currency: 'usd',
          product_data: {
            name: item.name,
          },
          unit_amount: item.price * 100,
        },
        quantity: item.quantity,
      })),
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/Success`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/Cancel`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    const error = err as Error;
    console.error('Stripe error:', error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
