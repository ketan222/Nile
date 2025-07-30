/* eslint-disable */
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import UpdateProductComponent from "../components/UpdateProductComponent.jsx";
// import { triggerAsyncId } from "async_hooks";
export default function AddProduct({ removeWindow }) {
  const [products, setProducts] = useState([]);
  const [chg, setChg] = useState(false);
  useEffect(() => {
    async function fetchProducts() {
      try {
        const resp = await fetch(
          "https://nile-r07t8zhyd-ketan222s-projects.vercel.app/api/product/getProductsOfSeller",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("seller-jwt"),
            },
          }
        );
        if (!resp) throw new Error("Couldn't login");
        const data = await resp.json();
        console.log(data.data.products);
        setProducts(data.data.products);
      } catch (err) {
        console.log(err);
      }
    }
    fetchProducts();
  }, []);

  if (products.length === 0) {
    return <div>Loading...</div>;
  }

  async function handleUpdate() {
    let flag = true;
    for (const product of products) {
      try {
        console.log(product._id);
        console.log(product);
        const resp = await fetch(
          `https://nile-r07t8zhyd-ketan222s-projects.vercel.app/api/product/updateProduct/${product._id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(product),
          }
        );
        if (!resp.ok) {
          flag = false;
          throw new Error("Cannot update the product");
        }
      } catch (err) {
        alert(err.message);
      }
    }
    if (flag) alert("All products updated");
    removeWindow();
  }

  return (
    <div className=" fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-white shadow-lg rounded-xl flex flex-col items-center">
      <div className="w-full flex flex-row justify-end items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6 md:size-8 lg:size-10 cursor-pointer"
          onClick={() => removeWindow()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="w-88p h-6p border-b-2 border-black flex flex-row items-end ">
        <div className=" text-xs md:text-lg lg:text-2xl w-40p lg:w-32p">
          Products
        </div>
        <div className=" text-xs md:text-lg lg:text-2xl w-15p lg:w-17p">
          Stock
        </div>
        <div className=" text-xs md:text-lg lg:text-2xl w-15p lg:w-17p">
          Price
        </div>
        <div className=" text-xs md:text-lg lg:text-2xl w-15p lg:w-17p">
          Discount(%)
        </div>
        <div className=" text-xs md:text-lg lg:text-2xl w-15p lg:w-17p">
          Final Rs
        </div>
      </div>
      <div className="w-88p h-70p overflow-y-scroll flex-none flex-col">
        {products.map((item) => (
          // <div
          //   key={item._id}
          //   className="w-full h-30p  flex flex-row border-2 border-black "
          // >
          //   <div className=" w-40p lg:w-32p flex flex-row items-center justify-start gap-2 pl-4 lg:pl-8">
          //     <div className=" w-30p h-80p">
          //       {/* <img src="../../public/category/men-fashion-category.png" alt="product" className="w-full h-full object-contain"/> */}
          //       <img
          //         src={`${item.productImage[0]}`}
          //         alt="product"
          //         className="w-full h-full object-contain"
          //       />
          //     </div>
          //     <div className="flex-none flex-col gap-1 md:gap-2 w-50p ">
          //       <div className="text-xs md:text-lg lg:text-xl text-left  ">
          //         {item.productName.split("").map((item, index) => {
          //           if (index > 10) return;
          //           return item;
          //         })}
          //         ...
          //       </div>
          //       <div className="text-xs md:text-base lg:text-base text-left ">
          //         Brand: {item.brand}
          //       </div>
          //       {item.stock <= 0 && (
          //         <div className="text-xs md:text-base lg:text-sm text-left text-red-700 ">
          //           Out of Stock
          //         </div>
          //       )}
          //     </div>
          //   </div>

          //   <div className="text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center">
          //     <div className="flex flex-row border-2 border-gray-500 w-90p  rounded-full p-1 overflow-hidden justify-center items-center">
          //       <div className="text-black font-bold w-25p hidden md:flex items-center justify-center ">
          //         <svg
          //           xmlns="http://www.w3.org/2000/svg"
          //           fill="none"
          //           viewBox="0 0 24 24"
          //           strokeWidth={1.5}
          //           stroke="currentColor"
          //           className="size-4 lg:size-6"
          //           onClick={() => {
          //             setChg(true);
          //             item.stock--;
          //           }}
          //         >
          //           <path
          //             strokeLinecap="round"
          //             strokeLinejoin="round"
          //             d="M5 12h14"
          //           />
          //         </svg>
          //       </div>
          //       <input
          //         className="w-80p text-xs md:text-base lg:text-lg md:w-50p text-center outline-none"
          //         value={item.stock}
          //         onChange={(e) => {
          //           item.stock = e.target.value;
          //         }}
          //       ></input>
          //       <div className="text-black hidden font-bold w-25p md:flex items-center justify-center">
          //         <svg
          //           xmlns="http://www.w3.org/2000/svg"
          //           fill="none"
          //           viewBox="0 0 24 24"
          //           strokeWidth={1.5}
          //           stroke="currentColor"
          //           className="size-4 md:size-6"
          //           onClick={() => {
          //             // console.log("addition");
          //             setChg(true);
          //             item.stock++;
          //           }}
          //         >
          //           <path
          //             strokeLinecap="round"
          //             strokeLinejoin="round"
          //             d="M12 4.5v15m7.5-7.5h-15"
          //           />
          //         </svg>
          //       </div>
          //     </div>
          //   </div>
          //   <div className=" text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center">
          //     <div className="flex flex-row border-2 border-gray-500 w-90p  rounded-full p-1 overflow-hidden justify-center items-center">
          //       <input
          //         className="w-90p text-xs md:text-base lg:text-lg text-center outline-none"
          //         value="5000000"
          //       ></input>
          //     </div>
          //   </div>
          //   <div className=" text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center">
          //     <div className="flex flex-row border-2 border-gray-500 w-80p  rounded-full p-1 overflow-hidden justify-center items-center">
          //       <div className="text-black font-bold w-25p hidden md:flex items-center justify-center ">
          //         <svg
          //           xmlns="http://www.w3.org/2000/svg"
          //           fill="none"
          //           viewBox="0 0 24 24"
          //           strokeWidth={1.5}
          //           stroke="currentColor"
          //           className="size-6"
          //         >
          //           <path
          //             strokeLinecap="round"
          //             strokeLinejoin="round"
          //             d="M5 12h14"
          //           />
          //         </svg>
          //       </div>
          //       <input
          //         className="w-80p text-xs md:text-base lg:text-lg md:w-50p text-center outline-none"
          //         value="100"
          //       ></input>
          //       <div className="text-black font-bold w-25p hidden md:flex items-center justify-center">
          //         <svg
          //           xmlns="http://www.w3.org/2000/svg"
          //           fill="none"
          //           viewBox="0 0 24 24"
          //           strokeWidth={1.5}
          //           stroke="currentColor"
          //           className="size-6"
          //         >
          //           <path
          //             strokeLinecap="round"
          //             strokeLinejoin="round"
          //             d="M12 4.5v15m7.5-7.5h-15"
          //           />
          //         </svg>
          //       </div>
          //     </div>
          //   </div>
          //   <div className="text-xs md:text-base lg:text-lg w-15p lg:w-17p flex items-center justify-center">
          //     1000rs
          //   </div>
          // </div>

          <UpdateProductComponent key={item._id} item={item} />
        ))}
      </div>
      <div className="w-[88%] h-[15%] border-t-2 border-black flex items-center justify-end px-4">
        <Link
          onClick={handleUpdate}
          className="rounded-lg border-2 border-primary bg-primary text-black whitespace-nowrap py-1 px-3 md:py-2 md:px-6 text-sm md:text-base lg:text-lg max-w-fit"
        >
          Update Products
        </Link>
      </div>
    </div>
  );
}
