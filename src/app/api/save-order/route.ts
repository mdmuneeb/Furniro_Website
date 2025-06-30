// app/api/save-order/route.ts
import { NextRequest, NextResponse } from 'next/server';
import { client } from '@/sanity/lib/client';

export async function POST(req: NextRequest) {
  const body = await req.json();

  try {
    await client.create({
      _type: 'order',
      userId: body.userId,
      products: body.products,
      totalPrice: body.totalPrice,
      deliveryDate: body.deliveryDate,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Failed to save order' }, { status: 500 });
  }
}
