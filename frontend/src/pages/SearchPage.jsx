import NavBarBuyer from "../components/NavBarBuyer.jsx";
import UserFotter from "../components/UserFotter.jsx";
import RatingWithReviewOverviewer from "../components/RatingWithReviewOverviewer.jsx";
import { useState } from "react";

export default function SearchPage() {
  let numbers = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(4.5);
  const [ratingsCount, setRatingsCount] = useState(100);
  const [reviewsCount, setReviewsCount] = useState(50);
  return (
    <div className="h-screen w-screen flex flex-col">
      <NavBarBuyer />

      {/* Main content */}
      <div className="flex flex-grow justify-center items-start ">
        <div className=" w-1/5 h-full bg-secondary p-4 overflow-y-scroll">
          left
        </div>
        <div className=" flex flex-col w-3/4 h-full p-4 overflow-y-scroll">
        
          <div className="flex flex-row border-b-2 border-black w-full p-2 md:p-6 lg:p-10 gap-2 md:gap-6 lg:gap-10 justify-evenly items-center">
            <div className="min-h-28 max-h-28 md:min-h-40 md:max-h-40 md:h-40 min-w-28 max-w-28 md:min-w-40 md:max-w-40 md:w-40 ">
              <img
                src="../../public/hero-section/women-fashion.png"
                alt="Product"
                className="w-full h-full object-contain"
              />
            </div>
            <div className=" flex flex-col w-60p ">
              <header className="flex flex-col  items-start gap-1 h-40 overflow-y-scroll scrollbar-hidden">
                <div className="text-lg md:text-xl lg:text-2xl font-bold ">
                  Black tShirt
                </div>
                <div className="flex flex-col lg:flex-row lg:gap-5 ">
                  <div className="text-[14px] md:text-[16px] lg:text-[20px] flex justify-start items-center lg:gap-1">
                    {numbers.map((num) => {
                      if (rating - num >= 0) {
                        return <ion-icon name="star" key={num}></ion-icon>;
                      } else if (rating - num < 0 && rating - num > -1) {
                        return <ion-icon name="star-half" key={num}></ion-icon>;
                      }
                      return (
                        <ion-icon name="star-outline" key={num}></ion-icon>
                      );
                    })}
                    {rating}
                  </div>
                  <div className="text-[10px] md:text-[14px] lg:text-[18px] text-textSecondary flex justify-center whitespace-nowrap items-end">
                    {`${ratingsCount} ratings and ${reviewsCount} reviews`}
                  </div>
                </div>
                <div className="text-xs md:text-sm lg:text-base text-left">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
                  nemo doloremque dolorem illum iure? Culpa tenetur magni modi.
                  Sit autem ea necessitatibus qui eligendi amet quas animi
                  consequatur, repellat voluptates adipisci nemo accusamus ullam
                  ipsam facere fugit corrupti vero inventore ratione
                  reprehenderit enim, voluptatibus quos? Commodi temporibus
                  dolorem cupiditate asperiores eius. Facilis, soluta. Autem
                  distinctio consectetur vero explicabo veritatis nisi earum
                  voluptatibus tempore dolore laboriosam, unde error atque illo,
                  at eum ipsa sunt voluptates. Alias ab voluptas fuga minus
                  mollitia. ipsum, dolor sit amet consectetur adipisicing elit.
                  Dolorum sapiente consequuntur earum asperiores voluptatum
                  architecto voluptas eaque aspernatur itaque alias, ea
                  laboriosam optio praesentium vitae iusto, ipsa cum. Cum nobis
                  quis sunt amet maiores.
                </div>
              </header>
            </div>
            <div className="flex flex-col flex-grow h-40 justify-start items-center">
              <div className="text-xl md:text-2xl lg:text-4xl font-bold w-full flex flex-row justify-start items-center">
                18000$
              </div>
              <div className="flex flex-row gap-2 w-full justify-start items-center">
                <div className="text-xs md:text-base lg:text-xl relative text-gray-500 w-fit h-auto">
                  20000$
                  <div className=" absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-500 "></div>
                </div>
                <div className="text-xs md:text-base lg:text-xl whitespace-nowrap text-green-600 font-semibold">
                  10% off
                </div>
              </div>
              <div className="text-xs md:text-sm lg:text-base flex flex-row justify-start items-center w-full">
                Free Delivery
              </div>
            </div>
          </div>
        </div>
      </div>

      <UserFotter />
    </div>
  );
}
