"use client";
import React from "react";
import axios from "axios";
import { ShoppingBasketIcon } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCartStore } from "@/store/cart";
import CartProduct from "../CartProduct";
import { Button } from "../ui/button";
import Stripe from "stripe";
import { loadStripe } from "@stripe/stripe-js";
import { useRouter } from "next/navigation";

type Props = {};

const Cart = (props: Props) => {
  const { cart } = useCartStore();
  const router = useRouter();
  const totalPrice = cart.reduce(
    (acc, curr) => acc + curr.quantity * curr.price,
    0
  );
  // stripe integration
  let stripePromise = Stripe || null;
  const getStipePromise = () => {
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || "";
    if (!stripePromise && !!key) {
      stripePromise = loadStripe(key);
    }
    return stripePromise;
  };
  const handleCheckout = async () => {
    try {
      getStipePromise();
      const { data } = await axios("/api/checkout", {
        method: "POST",
        data: JSON.stringify(cart),
        headers: { "Content-Type": "application/json" },
      });
      router.push(data.session.url);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <Sheet>
      <SheetTrigger>
        <div className="flex items-center">
          <ShoppingBasketIcon width={26} height={26} />
          <span className="text-sm font-bold">{cart.length}</span>
        </div>
      </SheetTrigger>
      {/* @ts-ignore */}
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>Cart</SheetTitle>
          <SheetDescription>
            <div className="flex flex-col gap-5">
              {totalPrice > 0 && (
                <div className="flex flex-col gap-2">
                  <span className="font-bold text-base font-mono">
                    Total Price: {totalPrice.toFixed(2)}
                  </span>
                  <Button
                    className="bg-[#FFD814] w-full text-black text-sm hover:text-white "
                    onClick={handleCheckout}
                  >
                    Add to cart
                  </Button>
                </div>
              )}
              <div className="flex flex-col gap-8 mt-5">
                {cart.length > 0 ? (
                  cart.map((item) => <CartProduct item={item} key={item.id} />)
                ) : (
                  <>
                    <p className="font-bold font-mono">Zero products in cart</p>
                  </>
                )}
              </div>
            </div>
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
};

export default Cart;
