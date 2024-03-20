import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const key = process.env.STRIPE_SECRET_KEY || "";
// This is your test secret API key.
export async function POST(request: NextRequest, response: NextResponse) {
  const body = await request.json();
  console.log(body);
  try {
    if (body.length > 0) {
      const session = await stripe.checkout.sessions.create({
        mode: "payment",

        line_items: body.map((item: CartItem) => {
          return {
            price_data: {
              currency: "inr",
              product_data: {
                name: item.title,
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
          };
        }),
        phone_number_collection: {
          enabled: true,
        },
        success_url: `${request.headers.get("origin")}/success`,
        cancel_url: `${request.headers.get("origin")}/cancel`,
      });
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(err.message);
  }
}
