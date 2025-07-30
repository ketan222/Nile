import { useState } from "react";
export default function UpdateProductComponent({ item }) {
  const [chg, setChg] = useState(false);
  //   console.log(item);
  return (
    <div key={item._id} className="w-full h-30p  flex flex-row ">
      <div className=" w-40p lg:w-32p flex flex-row items-center justify-start gap-2 pl-4 lg:pl-8">
        <div className=" w-30p h-80p">
          {/* <img src="../../public/category/men-fashion-category.png" alt="product" className="w-full h-full object-contain"/> */}
          <img
            src={`${item.productImage[0]}`}
            alt="product"
            className="w-full h-full object-contain"
          />
        </div>
        <div className="flex-none flex-col gap-1 md:gap-2 w-50p ">
          <div className="text-xs md:text-lg lg:text-xl text-left  ">
            {item.productName.split("").map((item, index) => {
              if (index > 10) return;
              return item;
            })}
            ...
          </div>
          <div className="text-xs md:text-base lg:text-base text-left ">
            Brand: {item.brand}
          </div>
          {item.stock <= 0 && (
            <div className="text-xs md:text-base lg:text-sm text-left text-red-700 ">
              Out of Stock
            </div>
          )}
        </div>
      </div>

      <div className="text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center">
        <div className="flex flex-row border-2 border-gray-500 w-90p  rounded-full p-1 overflow-hidden justify-center items-center">
          <div className="text-black font-bold w-25p hidden md:flex items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 lg:size-6"
              onClick={() => {
                if (item.stock <= 0) return;
                setChg((prev) => !chg);
                item.stock--;
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </div>
          <input
            className="w-80p text-xs md:text-base lg:text-lg md:w-50p text-center outline-none"
            value={item.stock}
            onChange={(e) => {
              setChg((prev) => !chg);

              item.stock = e.target.value;
            }}
          ></input>
          <div className="text-black hidden font-bold w-25p md:flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-4 md:size-6"
              onClick={() => {
                // console.log("addition");
                // setChg(true);
                setChg((prev) => !chg);

                item.stock++;
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className=" text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center">
        <div className="flex flex-row border-2 border-gray-500 w-90p  rounded-full p-1 overflow-hidden justify-center items-center">
          <input
            className="w-90p text-xs md:text-base lg:text-lg text-center outline-none"
            value={item.price}
            onChange={(e) => {
              setChg((prev) => !chg);

              item.price = e.target.value;
            }}
          ></input>
        </div>
      </div>
      <div className=" text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center">
        <div className="flex flex-row border-2 border-gray-500 w-80p  rounded-full p-1 overflow-hidden justify-center items-center">
          <div className="text-black font-bold w-25p hidden md:flex items-center justify-center ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              onClick={(e) => {
                console.log("sub");
                if (item.discount <= 0) return;
                item.discount--;
                setChg((prev) => !chg);
              }}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
            </svg>
          </div>
          <input
            className="w-80p text-xs md:text-base lg:text-lg md:w-50p text-center outline-none"
            value={item.discount}
            onChange={(e) => {
              //   if (item.discount <= 0) return;
              item.discount = e.target.value;
              setChg((prev) => !chg);
            }}
          ></input>
          <div className="text-black font-bold w-25p hidden md:flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
              onClick={(e) => {
                if (item.discount >= 100) return;
                item.discount++;
                setChg((prev) => !chg);
              }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4.5v15m7.5-7.5h-15"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="text-xs md:text-base lg:text-lg w-15p lg:w-17p flex items-center justify-center">
        {(item.price * (100 - item.discount)) / 100}
      </div>
    </div>
  );
}
