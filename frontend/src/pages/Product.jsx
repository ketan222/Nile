import Hero from "../components/Hero";
import NavBarBuyer from "../components/NavBarBuyer.jsx";
import Assurances from "../components/Assurances.jsx";
import Category from "../components/Category.jsx";
import Recommendations from "../components/Recommendations.jsx";
import UserFotter from "../components/UserFotter.jsx";
import { useState } from "react";
import Ratings from "../components/Ratings.jsx";
import RatingStars from "../components/RatingStars.jsx";
import RatingWithReviewOverviewer from "../components/RatingWithReviewOverviewer.jsx";
export default function Product() {
  // const {reviews, setReviews} = useState([]);
  let images = [
    "../../public/hero-section/women-fashion.png",
    "../../public/hero-section/Men-fashion.png",
    "../../public/hero-section/furniture.png",
  ];
  let [currentImage, setCurrentImage] = useState(0);
  function handleImgNavigation(index) {
    setCurrentImage(index);
  }
  return (
    <div className="w-screen h-screen flex flex-col overflow-y-scroll">
      <NavBarBuyer />

      <div className=" flex-grow md:overflow-y-auto flex flex-col md:flex-row justify-evenly items-center">
        <div className="flex flex-col h-auto md:h-full w-full md:w-35p justify-center items-center py-6">
          <div className="relative  w-80p h-80p">
            <img
              src={images[currentImage]}
              alt=""
              className="w-full h-full object-contain transition-all"
            />

            {/* Position heart at top-right */}
            <div className="absolute top-2 right-2 text-xl">💗</div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-red-600">
              <div className="flex flex-row gap-1 items-center justify-between text-[16px]">
                {images.map((image, index) => {
                  if (index === currentImage) {
                    return (
                      <ion-icon
                        name="ellipse"
                        key={index}
                        onClick={() => handleImgNavigation(index)}
                      ></ion-icon>
                    );
                  }
                  return (
                    <ion-icon
                      name="ellipse-outline"
                      key={index}
                      onClick={() => handleImgNavigation(index)}
                    ></ion-icon>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-row justify-between items-center w-80p h-15p gap-5">
            <div className="bg-secondary flex-grow rounded-lg py-3 text-base whitespace-nowrap md:text-base lg:text-xl px-3 font-bold">
              Add to Cart
            </div>
            <div className="bg-primary   flex-grow rounded-lg py-3 text-base whitespace-nowrap md:text-base lg:text-xl px-3 font-bold">
              Buy Now
            </div>
          </div>
        </div>
        <div className="flex flex-col  h-full w-full md:w-50p py-4 gap-6 overflow-y-scroll scrollbar-hidden">
          <div className="flex flex-col justify-center items-start  py-2 px-6">
            <div className="text-4xl font-bold">Black Tshirt</div>
            {/* <div className='text-xl flex flex-col justify-evenly items-start'>
                        <RatingStars rating={3.1}/>
                        <div className=''>
                            4.2   (233 ratings and 24 reviews)
                        </div> 
                    </div> */}
            <RatingWithReviewOverviewer
              rating={4.2}
              ratingsCount={233}
              reviewsCount={29}
            />
            <div className="py-4 flex flex-row justify-start items-end gap-4">
              <div className="text-4xl font-bold">18000$</div>{" "}
              {/* Final Price */}
              <div className="flex flex-row gap-2">
                <div className="text-xl relative text-gray-500 w-fit h-auto">
                  20000$
                  <div className=" absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-500 "></div>
                </div>
                <div className="text-xl text-green-600 font-semibold">
                  10% off
                </div>{" "}
                {/* Discount */}
              </div>
            </div>
          </div>
          {/* <div className='flex flex-col justify-center items-start gap-2 py-6'>
                    <div className='text-5xl font-bold'>$20,000</div>
                </div> */}
          <div className="px-6">
            <div className="text-xl md:text-2xl font-bold text-left">
              Description
            </div>
            <div className="text-base md:text-lg text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              odio quis explicabo deserunt quisquam voluptatem maiores similique
              perspiciatis saepe, tempore quas sunt tenetur exercitationem
              sapiente totam a in accusamus pariatur culpa nam aperiam. Harum
              sit dolor mollitia ad nesciunt doloremque repellat nam dicta
              veritatis molestiae laboriosam, et voluptas quos in?
            </div>
          </div>
          <div className="px-6">
            <div className="text-xl md:text-2xl font-bold text-left">
              Specification
            </div>
            <div className="text-base md:text-lg text-left">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Porro
              odio quis explicabo deserunt quisquam voluptatem maiores similique
              perspiciatis saepe, tempore quas sunt tenetur exercitationem
              sapiente totam a in accusamus pariatur culpa nam aperiam. Harum
              sit dolor mollitia ad nesciunt doloremque repellat nam dicta
              veritatis molestiae laboriosam, et voluptas quos in?
            </div>
          </div>
          <div className="border-2 mt-6 border-secondary">
            <div className=" h-60 flex flex-col justify-center items-center border-b-2 border-secondary">
              <div className="text-xl">Rattings and Reviews</div>
              <div className=" h-80p flex flex-row w-full items-center justify-center">
                <div className="h-90p w-70p ">
                  <Ratings />
                </div>
                <div className="h-90p w-30p  flex justify-center items-center">
                  <div className="bg-secondary text-sm lg:text-xl py-3 lg:py-5 px-6 lg:px-10 rounded-full">
                    Rate Now
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full h-auto border-b-2 border-secondary flex flex-col justify-center items-center py-4 px-6 gap-2">
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <div className="bg-primary rounded-lg px-3 text-lg">4.2</div>
              </div>
              <div className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda atque officia rem. Quo tenetur rem, inventore veniam
                fugiat deleniti a possimus! Sapiente, iusto obcaecati.
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <div className="w-60p md:w-45p flex flex-row justify-between items-center">
                  <div className="whitespace-nowrap">Sandeep Kumar</div>
                  <div className="whitespace-nowrap">2 months ago</div>
                </div>
                <div className="w-30p flex flex-row justify-evenly items-center">
                  <div className="text-[12px]  flex flex-row justify-center items-center gap-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill=""
                      className="size-6"
                    >
                      <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                    </svg>
                    <div>3</div>
                  </div>
                  <div className="text-[12px]  flex flex-row justify-center items-center gap-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill=""
                      className="size-6"
                    >
                      <path d="M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" />
                    </svg>
                    <div>4</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-auto border-b-2 border-secondary flex flex-col justify-center items-center py-4 px-6 gap-2">
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <div className="bg-primary rounded-lg px-3 text-lg">4.2</div>
              </div>
              <div className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda atque officia rem. Quo tenetur rem, inventore veniam
                fugiat deleniti a possimus! Sapiente, iusto obcaecati.
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <div className="w-60p md:w-45p flex flex-row justify-between items-center">
                  <div className="whitespace-nowrap">Sandeep Kumar</div>
                  <div className="whitespace-nowrap">2 months ago</div>
                </div>
                <div className="w-30p flex flex-row justify-evenly items-center">
                  <div className="text-[12px]  flex flex-row justify-center items-center gap-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill=""
                      className="size-6"
                    >
                      <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                    </svg>
                    <div>3</div>
                  </div>
                  <div className="text-[12px]  flex flex-row justify-center items-center gap-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill=""
                      className="size-6"
                    >
                      <path d="M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" />
                    </svg>
                    <div>4</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-auto border-b-2 border-secondary flex flex-col justify-center items-center py-4 px-6 gap-2">
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <div className="bg-primary rounded-lg px-3 text-lg">4.2</div>
              </div>
              <div className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda atque officia rem. Quo tenetur rem, inventore veniam
                fugiat deleniti a possimus! Sapiente, iusto obcaecati.
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <div className="w-60p md:w-45p flex flex-row justify-between items-center">
                  <div className="whitespace-nowrap">Sandeep Kumar</div>
                  <div className="whitespace-nowrap">2 months ago</div>
                </div>
                <div className="w-30p flex flex-row justify-evenly items-center">
                  <div className="text-[12px]  flex flex-row justify-center items-center gap-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill=""
                      className="size-6"
                    >
                      <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                    </svg>
                    <div>3</div>
                  </div>
                  <div className="text-[12px]  flex flex-row justify-center items-center gap-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill=""
                      className="size-6"
                    >
                      <path d="M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" />
                    </svg>
                    <div>4</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-auto border-b-2 border-secondary flex flex-col justify-center items-center py-4 px-6 gap-2">
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <div className="bg-primary rounded-lg px-3 text-lg">4.2</div>
              </div>
              <div className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda atque officia rem. Quo tenetur rem, inventore veniam
                fugiat deleniti a possimus! Sapiente, iusto obcaecati.
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <div className="w-60p md:w-45p flex flex-row justify-between items-center">
                  <div className="whitespace-nowrap">Sandeep Kumar</div>
                  <div className="whitespace-nowrap">2 months ago</div>
                </div>
                <div className="w-30p flex flex-row justify-evenly items-center">
                  <div className="text-[12px]  flex flex-row justify-center items-center gap-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill=""
                      className="size-6"
                    >
                      <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                    </svg>
                    <div>3</div>
                  </div>
                  <div className="text-[12px]  flex flex-row justify-center items-center gap-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill=""
                      className="size-6"
                    >
                      <path d="M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" />
                    </svg>
                    <div>4</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-auto border-b-2 border-secondary flex flex-col justify-center items-center py-4 px-6 gap-2">
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <div className="bg-primary rounded-lg px-3 text-lg">4.2</div>
              </div>
              <div className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda atque officia rem. Quo tenetur rem, inventore veniam
                fugiat deleniti a possimus! Sapiente, iusto obcaecati.
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <div className="w-60p md:w-45p flex flex-row justify-between items-center">
                  <div className="whitespace-nowrap">Sandeep Kumar</div>
                  <div className="whitespace-nowrap">2 months ago</div>
                </div>
                <div className="w-30p flex flex-row justify-evenly items-center">
                  <div className="text-[12px]  flex flex-row justify-center items-center gap-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill=""
                      className="size-6"
                    >
                      <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                    </svg>
                    <div>3</div>
                  </div>
                  <div className="text-[12px]  flex flex-row justify-center items-center gap-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill=""
                      className="size-6"
                    >
                      <path d="M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" />
                    </svg>
                    <div>4</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-auto border-b-2 border-secondary flex flex-col justify-center items-center py-4 px-6 gap-2">
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <div className="bg-primary rounded-lg px-3 text-lg">4.2</div>
              </div>
              <div className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda atque officia rem. Quo tenetur rem, inventore veniam
                fugiat deleniti a possimus! Sapiente, iusto obcaecati.
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <div className="w-60p md:w-45p flex flex-row justify-between items-center">
                  <div className="whitespace-nowrap">Sandeep Kumar</div>
                  <div className="whitespace-nowrap">2 months ago</div>
                </div>
                <div className="w-30p flex flex-row justify-evenly items-center">
                  <div className="text-[12px]  flex flex-row justify-center items-center gap-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill=""
                      className="size-6"
                    >
                      <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                    </svg>
                    <div>3</div>
                  </div>
                  <div className="text-[12px]  flex flex-row justify-center items-center gap-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill=""
                      className="size-6"
                    >
                      <path d="M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" />
                    </svg>
                    <div>4</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-auto border-b-2 border-secondary flex flex-col justify-center items-center py-4 px-6 gap-2">
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <div className="bg-primary rounded-lg px-3 text-lg">4.2</div>
              </div>
              <div className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda atque officia rem. Quo tenetur rem, inventore veniam
                fugiat deleniti a possimus! Sapiente, iusto obcaecati.
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <div className="w-60p md:w-45p flex flex-row justify-between items-center">
                  <div className="whitespace-nowrap">Sandeep Kumar</div>
                  <div className="whitespace-nowrap">2 months ago</div>
                </div>
                <div className="w-30p flex flex-row justify-evenly items-center">
                  <div className="text-[12px]  flex flex-row justify-center items-center gap-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill=""
                      className="size-6"
                    >
                      <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                    </svg>
                    <div>3</div>
                  </div>
                  <div className="text-[12px]  flex flex-row justify-center items-center gap-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill=""
                      className="size-6"
                    >
                      <path d="M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" />
                    </svg>
                    <div>4</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full h-auto border-b-2 border-secondary flex flex-col justify-center items-center py-4 px-6 gap-2">
              <div className="w-full flex flex-row justify-start items-center gap-2">
                <div className="bg-primary rounded-lg px-3 text-lg">4.2</div>
              </div>
              <div className="text-left">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda atque officia rem. Quo tenetur rem, inventore veniam
                fugiat deleniti a possimus! Sapiente, iusto obcaecati.
              </div>
              <div className="flex flex-row justify-between items-center w-full">
                <div className="w-60p md:w-45p flex flex-row justify-between items-center">
                  <div className="whitespace-nowrap">Sandeep Kumar</div>
                  <div className="whitespace-nowrap">2 months ago</div>
                </div>
                <div className="w-30p flex flex-row justify-evenly items-center">
                  <div className="text-[12px]  flex flex-row justify-center items-center gap-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill=""
                      className="size-6"
                    >
                      <path d="M7.493 18.5c-.425 0-.82-.236-.975-.632A7.48 7.48 0 0 1 6 15.125c0-1.75.599-3.358 1.602-4.634.151-.192.373-.309.6-.397.473-.183.89-.514 1.212-.924a9.042 9.042 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75A.75.75 0 0 1 15 2a2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H14.23c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23h-.777ZM2.331 10.727a11.969 11.969 0 0 0-.831 4.398 12 12 0 0 0 .52 3.507C2.28 19.482 3.105 20 3.994 20H4.9c.445 0 .72-.498.523-.898a8.963 8.963 0 0 1-.924-3.977c0-1.708.476-3.305 1.302-4.666.245-.403-.028-.959-.5-.959H4.25c-.832 0-1.612.453-1.918 1.227Z" />
                    </svg>
                    <div>3</div>
                  </div>
                  <div className="text-[12px]  flex flex-row justify-center items-center gap-1 text-black">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill=""
                      className="size-6"
                    >
                      <path d="M15.73 5.5h1.035A7.465 7.465 0 0 1 18 9.625a7.465 7.465 0 0 1-1.235 4.125h-.148c-.806 0-1.534.446-2.031 1.08a9.04 9.04 0 0 1-2.861 2.4c-.723.384-1.35.956-1.653 1.715a4.499 4.499 0 0 0-.322 1.672v.633A.75.75 0 0 1 9 22a2.25 2.25 0 0 1-2.25-2.25c0-1.152.26-2.243.723-3.218.266-.558-.107-1.282-.725-1.282H3.622c-1.026 0-1.945-.694-2.054-1.715A12.137 12.137 0 0 1 1.5 12.25c0-2.848.992-5.464 2.649-7.521C4.537 4.247 5.136 4 5.754 4H9.77a4.5 4.5 0 0 1 1.423.23l3.114 1.04a4.5 4.5 0 0 0 1.423.23ZM21.669 14.023c.536-1.362.831-2.845.831-4.398 0-1.22-.182-2.398-.52-3.507-.26-.85-1.084-1.368-1.973-1.368H19.1c-.445 0-.72.498-.523.898.591 1.2.924 2.55.924 3.977a8.958 8.958 0 0 1-1.302 4.666c-.245.403.028.959.5.959h1.053c.832 0 1.612-.453 1.918-1.227Z" />
                    </svg>
                    <div>4</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-end items-center w-full px-6 py-3">
              <div className="bg-primary px-6 py-3 rounded-xl">View more</div>
            </div>
          </div>
        </div>
      </div>

      <UserFotter />
    </div>
  );
}
