// eslint-disable-next-line
import { ItemTemplate } from "./ItemTemplate";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Recommendations({ recommendations }) {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch(
        `http://localhost:8000/api/product/${recommendations}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (!res.ok) {
        console.log("Error fetching products");
        return;
      }
      const data = await res.json();
      // console.log(data.data.products);
      setProducts(...[data.data.products]);
      console.log(products);
    };
    fetchProducts();
  }, [recommendations]);
  if (products.length === 0) {
    console.log("No products found");
    return null;
  }
  console.log(products, "here");
  return (
    <div className="flex flex-col items-center justify-center h-auto w-screen gap-5 md:gap-10 pt-10 :pt-28 pb-3 md:pb-10 ">
      <div className="test-xl md:text-3xl font-bold">
        {recommendations === "getNewArrivals"
          ? "New Arrivals"
          : "Top Discounts"}
      </div>
      <div className="flex flex-row items-center justify-center bg-secondary w-full p-4 gap-5">
        <div className="flex flex-row items-center justify-start w-90p h-96p gap-5 md:gap-10 overflow-x-hidden pl-5 md:pl-10">
          {products.map((product) => {
            if (product.stock > 0) {
              return <ItemTemplate key={product._id} item={product} />;
            }
          })}
        </div>
        <div
          onClick={() => navigate(`/searchPage/${recommendations}`)}
          className="border-2 border-primary bg-primary text-center text-xs md:text-base font-bold rounded-md px-2  hover:scale-105 text-black transition-all "
        >
          View All
        </div>
      </div>
    </div>
  );
}
export default Recommendations;
