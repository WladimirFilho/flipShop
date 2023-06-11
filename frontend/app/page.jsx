import Product from "@/Components/ProductCard";
import products from "@/products";

export default function Home() {
  return (
    <main className="main-layout">
      <h1 className="text-3xl font-bold my-8">Latest Products</h1>
      <ul className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-stretch ">
        {products.map((product) => (
          <Product product={product} />
        ))}
      </ul>
    </main>
  );
}
