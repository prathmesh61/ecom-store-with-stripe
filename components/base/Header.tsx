"use client";
import React from "react";
import { MapPin, Search, ShoppingBasketIcon } from "lucide-react";
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
type Props = {};

const Header = (props: Props) => {
  const { cart } = useCartStore();
  console.log(cart);

  return (
    <header className="w-full h-[60px] bg-bgNavPrimary text-white px-10 py-4">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3">
          <span className="font-extrabold text-2xl">
            Amazon.<small>in</small>
          </span>
          <div className="hidden items-center gap-1 lg:flex">
            <MapPin width={15} height={15} />
            <div className="flex flex-col ">
              <span className="text-[10px]">
                Delivering to Chhindwāra 480001
              </span>
              <span className="text-[10px]">Update address</span>
            </div>
          </div>
        </div>
        <div className="w-fit flex flex-auto">
          <input
            type="text"
            placeholder="Seach on amazon.in"
            className="w-full py-1 px-4 bg-white placeholder:text-gray-500 border-none outline-none rounded-l-md"
          />
          <Search
            width={35}
            height={32}
            className="bg-[#F3A847] py-1 px-4 w-fit rounded-r-md"
          />
        </div>
        <div className="flex items-center gap-2 justify-end">
          <div className="hidden flex-col md:flex">
            <span className="text-xs">Hello signIn</span>
            <span className="text-xs font-bold">Account List</span>
          </div>
          <div className="hidden flex-col md:flex">
            <span className="text-xs">Returens</span>
            <span className="text-xs font-bold">& Orders</span>
          </div>
          <Sheet>
            <SheetTrigger>
              <div className="flex items-center">
                <ShoppingBasketIcon width={26} height={26} />
                <span className="text-sm font-bold">{cart.length}</span>
              </div>
            </SheetTrigger>
            <SheetContent className="overflow-y-auto">
              <SheetHeader>
                <SheetTitle>Cart</SheetTitle>
                <SheetDescription>
                  <div className="flex flex-col gap-8 mt-5">
                    {cart.length > 0 ? (
                      cart.map((item) => (
                        <CartProduct item={item} key={item.id} />
                      ))
                    ) : (
                      <>
                        <p className="font-bold font-mono">
                          Zero products in cart
                        </p>
                      </>
                    )}
                  </div>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Header;
