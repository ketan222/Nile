import RatingWithReviewOverviewer from "./RatingWithReviewOverviewer.jsx";
import { useState } from "react";
export default function SearchPageComponent({ product, onClick }) {
  let numbers = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(4.5);
  const [ratingsCount, setRatingsCount] = useState(100);
  const [reviewsCount, setReviewsCount] = useState(50);
  return (
    <div
      onClick={onClick}
      className="flex flex-row border-b-2 border-black w-full p-2 md:p-6 lg:p-10 gap-2 md:gap-6 lg:gap-10 justify-evenly items-center cursor-pointer"
    >
      <div className="min-h-28 max-h-28 md:min-h-40 md:max-h-40 md:h-40 min-w-28 max-w-28 md:min-w-40 md:max-w-40 md:w-40 ">
        <img
          src={`${product.productImage[0]}`}
          alt="Product"
          className="w-full h-full object-contain"
        />
      </div>
      <div className=" flex flex-col w-60p ">
        <header className="flex flex-col  items-start gap-1 h-40">
          <div className="text-lg md:text-xl lg:text-2xl font-bold ">
            {product.productName}
          </div>
          <div className="flex flex-col lg:flex-row lg:gap-5 ">
            <div className="text-[14px] md:text-[16px] lg:text-[20px] flex justify-start items-center lg:gap-1">
              {numbers.map((num) => {
                if (product.rating.$numberDecimal - num >= 0) {
                  return <ion-icon name="star" key={num}></ion-icon>;
                } else if (
                  product.rating.$numberDecimal - num < 0 &&
                  product.rating.$numberDecimal - num > -1
                ) {
                  return <ion-icon name="star-half" key={num}></ion-icon>;
                }
                return <ion-icon name="star-outline" key={num}></ion-icon>;
              })}
              {product.rating.$numberDecimal}
            </div>
            <div className="text-[10px] md:text-[14px] lg:text-[18px] text-textSecondary flex justify-center whitespace-nowrap items-end">
              {`${product.numberOfRatings} ratings and ${product.reviews.length} reviews`}
            </div>
          </div>
          <div className="text-xs md:text-sm lg:text-base text-left overflow-scroll scrollbar-hidden">
            {product.description}
          </div>
        </header>
      </div>
      <div className="flex flex-col flex-grow h-40 justify-start items-center">
        <div className="text-xl md:text-2xl lg:text-4xl font-bold w-full flex flex-row justify-start items-center">
          {product.price - (product.price * product.discount) / 100}$
        </div>
        <div className="flex flex-row gap-2 w-full justify-start items-center">
          <div className="text-xs md:text-base lg:text-xl relative text-gray-500 w-fit h-auto">
            {product.price}$
            <div className=" absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-500 "></div>
          </div>
          <div className="text-xs md:text-base lg:text-xl whitespace-nowrap text-green-600 font-semibold">
            {product.discount}% off
          </div>
        </div>
        <div className="text-xs md:text-sm lg:text-base flex flex-row justify-start items-center w-full">
          Free Delivery
        </div>
      </div>
    </div>
  );
}
