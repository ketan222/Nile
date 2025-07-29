import NavBarBuyer from "../components/NavBarBuyer.jsx";
import UserFotter from "../components/UserFotter.jsx";
// import RatingWithReviewOverviewer from "../components/RatingWithReviewOverviewer.jsx";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SearchPageComponent from "../components/SearchPageComponent.jsx";
import { useCont } from "../Context/Context.jsx";

export default function SearchPage() {
  const { filter } = useParams();
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  // console.log(filter);
  const { search } = useCont();

  // console.log(search);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        console.log(filter + "filter");
        const response = await fetch(
          `http://localhost:8000/api/product/${filter || "getProductFiltered"}`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProducts(data.data.products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    const searchProducts = async () => {
      try {
        console.log(search + "+++");
        const res = await fetch(
          `http://localhost:8000/api/product/getSearchResult`,
          {
            method: "POST",
            headers: {
              "Content-type": "application/json",
            },
            body: JSON.stringify({ search }),
          }
        );
        // console.log()
        if (!res.ok) {
          throw new Error("Error searching the product");
        }
        const data = await res.json();
        setProducts(data.data.products);
      } catch (err) {
        console.log(err);
      }
    };
    if (search !== "") searchProducts();
    else fetchProducts();
  }, [filter, search]);
  // console.log(products);

  if (products.length === 0) {
    return (
      <div className="h-screen w-screen flex flex-col">
        <NavBarBuyer />
        <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-2xl font-bold">No Products Found</h1>
          <p className="text-gray-500">Try searching for something else.</p>
        </div>
        <UserFotter />
      </div>
    );
  }

  return (
    <div className="h-screen w-screen flex flex-col">
      <NavBarBuyer />

      {/* Main content */}
      <div className="flex flex-grow justify-center items-start overflow-y-scroll scrollbar-hidden p-1">
        <div className=" flex flex-col w-[100%] md:w-[90%] h-full p-4 overflow-y-scroll  scrollbar-hidden ">
          {products.map((product) => (
            <SearchPageComponent
              key={product._id}
              product={product}
              onClick={() => {
                // console.log("hello");
                navigate(`/getProduct/${product._id}`);
              }}
            />
          ))}
        </div>
      </div>

      <UserFotter />
    </div>
  );
}
