"use client";
import { useCartStore } from "@/store/cart";
import React from "react";
import CartProduct from "../CartProduct";

type Props = {};

const CartProducts = (props: Props) => {
  const { cart, remove: removeFromCart } = useCartStore();
  return (
    <div className="flex flex-col items-center gap-2">
      {cart.map((item) => (
        <CartProduct item={item} key={item.id} />
      ))}
    </div>
  );
};

export default CartProducts;
