import { useEffect } from "react";
import toast from "react-hot-toast";
import axios from "../lib/axios";
import { useProduct } from "../contexts/ProductContext";
import ProductCard from "../components/ProductCard";

function Home() {
  const { products, setProducts } = useProduct([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const res = await axios.get(`/products`);
        console.log(res);
        setProducts(res.data.data);
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
    fetchProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen">
      <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h1 className="text-center text-4xl sm:text-5xl font-bold mb-8">
          Products
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 justify-items-center">
          {products?.length === 0 && (
            <h2 className="text-3xl font-semibold text-gray-300 text-center col-span-full">
              No products found
            </h2>
          )}

          {products?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
