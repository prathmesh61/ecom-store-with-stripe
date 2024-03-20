import React from "react";
import Product from "../Product";
type Props = {};
async function fetchPoducts(URL: string) {
  const response = await fetch(URL);
  if (!response.ok) {
    throw new Error("Problem in fetching Products");
  }
  return response.json();
}
const Products = async (props: Props) => {
  const products: Product[] = await fetchPoducts(
    "https://fakestoreapi.com/products"
  );

  return (
    <section className=" w-full flex flex-col gap-y-5">
      <div className="w-full flex items-center justify-center flex-wrap gap-8">
        {products.slice(0, 5).map((item) => (
          <div
            className="w-full max-w-[280px] h-full  min-h-[400px]  bg-white shadow-md"
            key={item.id}
          >
            <Product item={item} />
          </div>
        ))}
      </div>
      <div className="w-full flex  justify-center flex-wrap gap-2 ">
        {products.slice(4, 5).map((item) => (
          <div
            className="w-[750px] flex items-center justify-center bg-white  min-h-[400px] shadow-md"
            key={item.id}
          >
            <Product item={item} />
          </div>
        ))}
      </div>
      <div className="w-full flex items-center justify-center flex-wrap gap-8">
        {products.slice(6, products.length).map((item) => (
          <div
            className="w-full max-w-[280px] h-full  min-h-[400px]  bg-white shadow-md "
            key={item.id}
          >
            <Product item={item} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Products;
