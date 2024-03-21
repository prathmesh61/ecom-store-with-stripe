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
    <section className=" w-full grid grid-flow-dense space-y-10">
      <div className="w-full grid col-span-1 md:grid-cols-4 grid-flow-dense  gap-3">
        {products.slice(0, 4).map((item) => (
          <div className="w-full col-span-1  bg-white shadow-md" key={item.id}>
            <Product item={item} />
          </div>
        ))}
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-2 ">
        {products.slice(4, 5).map((item) => (
          <div
            className="w-full col-span-3 row-span-3 bg-white shadow-md"
            key={item.id}
          >
            <Product item={item} />
          </div>
        ))}
      </div>
      <div className="w-full grid col-span-1 md:grid-cols-4 grid-flow-dense  gap-3">
        {products.slice(6, products.length).map((item) => (
          <div
            className="w-full col-span-1   bg-white shadow-md "
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
