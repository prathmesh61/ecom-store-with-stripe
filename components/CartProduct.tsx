"use client";
import { Star } from "lucide-react";
import Image from "next/image";

import React from "react";
import { Button } from "./ui/button";
import { useCartStore } from "@/store/cart";

type Props = {
  item: CartItem;
};

const CartProduct = ({ item }: Props) => {
  const { remove: removeFromCart } = useCartStore();

  return (
    <>
      <div className="flex flex-col gap-2">
        <Image
          src={item.image}
          alt={item.title}
          className="object-cover"
          width={100}
          height={100}
        />
        <div className="flex items-center justify-between">
          <h2 className="text-xs font-bold text-black">{item.title}</h2>
          <span className="flex gap-1">
            <Star width={16} height={16} />
            <span className="text-xs">{item.rating.rate}</span>
          </span>
        </div>
        <p className="text-sm font-extrabold text-black/50">
          Quantity: {item.quantity}
        </p>
        <p className="text-xl font-extrabold text-black">${item.price}</p>
        <Button variant={"destructive"} onClick={() => removeFromCart(item)}>
          remove
        </Button>
      </div>
    </>
  );
};

export default CartProduct;
