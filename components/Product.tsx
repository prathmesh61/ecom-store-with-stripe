"use client";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { useCartStore } from "@/store/cart";

type Props = {
  item: Product;
};

const Product = ({ item }: Props) => {
  const { add: handleAddToCart } = useCartStore();
  return (
    <div className="flex flex-col justify-between gap-y-2 p-4">
      <div className="flex items-center justify-center">
        <Image
          src={item.image}
          width={200}
          height={200}
          className="object-contain"
          alt={item.title}
        />
      </div>
      <div className="flex flex-col gap-y-3">
        <h2 className="text-xs font-semibold mt-3">{item.title}</h2>
        <p className="text-[12px] font-light ">
          {item.description.slice(0, 100) + "..."}
        </p>
      </div>
      <Button
        className="bg-[#FFD814] w-full text-black text-sm hover:text-white "
        onClick={() => handleAddToCart(item)}
      >
        Add to cart
      </Button>
    </div>
  );
};

export default Product;
