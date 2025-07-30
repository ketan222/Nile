import Hero from "../components/Hero";
import NavBarBuyer from "../components/NavBarBuyer.jsx";
import Assurances from "../components/Assurances.jsx";
import Category from "../components/Category.jsx";
import Recommendations from "../components/Recommendations.jsx";
import UserFotter from "../components/UserFotter.jsx";
import { useState, useEffect } from "react";
import Ratings from "../components/Ratings.jsx";
import RatingStars from "../components/RatingStars.jsx";
import RatingWithReviewOverviewer from "../components/RatingWithReviewOverviewer.jsx";
import { motion, AnimatePresence } from "framer-motion";
import { useCont } from "../Context/Context.jsx";
import { useNavigate } from "react-router-dom";
import isTokenExpired from "../utils/TokenExpired.js";

import { useParams } from "react-router-dom";
// import { Console } from "console";
// import { log } from "console";
export default function Product() {
  const navigate = useNavigate();
  const productId = useParams().productId;
  const [product, setProduct] = useState(null);
  const [reviewCount, setReviewCount] = useState(1);
  const { user, loginBuyer } = useCont();
  const { logoutBuyer } = useCont();

  // console.log(user);
  const handleAddToWishList = async function () {
    try {
      if (!user) navigate("/login");
      const token = localStorage.getItem("user-jwt");
      // const token = localStorage.getItem("user-jwt");

      if (!token || isTokenExpired(token)) {
        alert("Session expired. Please log in again.");
        logoutBuyer();
        navigate("/login");
        return;
      }

      const response = await fetch(
        `https://nile-4d52m5q2a-ketan222s-projects.vercel.app/api/product/addToWishlist/${productId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            productId: productId,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("Couldn't add to wishlist");
      }
      const data = await response.json();
      loginBuyer(data.data.user);
    } catch (err) {
      console.log(err);
    }
  };
  const removeFromWishlist = async function () {
    try {
      if (!user) navigate("/login");
      const token = localStorage.getItem("user-jwt");
      if (!token || isTokenExpired(token)) {
        alert("Session expired. Please log in again.");
        logoutBuyer();
        navigate("/login");
        return;
      }

      const response = await fetch(
        `https://nile-4d52m5q2a-ketan222s-projects.vercel.app/api/product/removeFromWishlist/${productId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ productId }),
        }
      );

      if (!response.ok) {
        throw new Error("Couldn't remove from wishlist");
      }
      const data = await response.json();
      loginBuyer(data.data.user);
    } catch (err) {
      console.log(err);
    }
  };
  const handleAddToCart = async function () {
    try {
      if (!user) navigate("/login");
      const token = localStorage.getItem("user-jwt");

      if (!token || isTokenExpired(token)) {
        alert("Session expired. Please log in again.");
        logoutBuyer();
        navigate("/login");
        return;
      }

      const resp = await fetch(
        `https://nile-4d52m5q2a-ketan222s-projects.vercel.app/api/product/addToCart/${productId}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!resp.ok) {
        throw new Error("Error adding cart");
      }
      window.alert("Added to cart");
      // const data = await resp.json();
      // console.log(data);
      // loginBuyer(data.data.user);
    } catch (err) {
      alert("Cannot add to cart, Product outta stock");
    }
  };

  // console.log(productId);
  useEffect(() => {
    const fetchProduct = async function () {
      try {
        const response = await fetch(
          `https://nile-4d52m5q2a-ketan222s-projects.vercel.app/api/product/getProduct/${productId}`,
          {
            method: "GET",
          }
        );
        if (!response.ok) {
          throw new Error("Couldn't fetch the product");
        }
        // console.log("here");
        const data = await response.json();
        // console.log(data);
        setProduct(data.data.product);
      } catch (err) {
        console.log(err);
      }
    };
    fetchProduct();
  }, [productId]);
  // console.log(product);

  let [currentImage, setCurrentImage] = useState(0);
  // if (!user) navigate("/login");
  if (!product) return <div>Loading...</div>;
  // console.log(product.reviews);

  // const {reviews, setReviews} = useState([]);
  let images = [...product.productImage];
  console.log(product);
  function handleImgNavigation(index) {
    setCurrentImage(index);
  }
  return (
    <div className="w-screen h-screen flex flex-col overflow-y-scroll">
      <NavBarBuyer />

      <div className=" flex-grow md:overflow-y-auto flex flex-col md:flex-row justify-evenly items-center">
        <div className="flex flex-col h-auto md:h-full w-full md:w-35p justify-center items-center py-6">
          <div className="relative  w-80p h-80p">
            {console.log(images[currentImage] + " HERE")}
            <img
              src={images[currentImage]}
              alt=""
              className="w-full h-full object-contain transition-all"
            />

            {user != null && user.wishList.includes(productId) ? (
              <div className="absolute top-2 right-2 text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  // fill="currentColor"
                  onClick={removeFromWishlist}
                  className="size-6 fill-green-400"
                >
                  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                </svg>
              </div>
            ) : (
              <div className="absolute top-2 right-2 text-xl">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  onClick={handleAddToWishList}
                  // stroke="currentColor"
                  className="size-6 stroke-green-400 "
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z"
                  />
                </svg>
              </div>
            )}
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
            {product.stock >= 1 && (
              <div
                onClick={handleAddToCart}
                className="bg-secondary flex-grow rounded-lg py-3 text-base whitespace-nowrap md:text-base lg:text-xl px-3 font-bold"
              >
                Add to Cart
              </div>
            )}
            {product.stock >= 1 && (
              <div
                className="bg-primary   flex-grow rounded-lg py-3 text-base whitespace-nowrap md:text-base lg:text-xl px-3 font-bold"
                onClick={async () => {
                  const cart = [];
                  const aa = {
                    product: {},
                    quantity: 1,
                  };
                  const resp = await fetch(
                    `https://nile-4d52m5q2a-ketan222s-projects.vercel.app/api/product/getProduct/${product._id}`,
                    {
                      method: "GET",
                      headers: {
                        "Content-Type": "application/json",
                        Authorization: `Bearer ${localStorage.getItem(
                          "user-jwt"
                        )}`,
                      },
                    }
                  );
                  if (!resp.ok) throw new Error("Cannot buy right now");
                  const data = await resp.json();
                  aa.product = data.data.product;
                  cart.push(aa);

                  localStorage.setItem("cart", JSON.stringify(cart));
                  navigate("/BuyNow");
                }}
              >
                Buy Now
              </div>
            )}
            {product.stock <= 0 && (
              <div className="bg-red-500   flex-grow rounded-lg py-3 text-base whitespace-nowrap md:text-base lg:text-xl px-3 font-bold">
                Out Of stock
              </div>
            )}
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
              rating={product.rating.$numberDecimal}
              ratingsCount={product.numberOfRatings}
              reviewsCount={product.reviews.length}
            />
            <div className="py-4 flex flex-row justify-start items-end gap-4">
              <div className="text-4xl font-bold">
                {product.price - (product.price * product.discount) / 100}$
              </div>{" "}
              {/* Final Price */}
              <div className="flex flex-row gap-2">
                <div className="text-xl relative text-gray-500 w-fit h-auto">
                  {product.price}$
                  <div className=" absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-500 "></div>
                </div>
                <div className="text-xl text-green-600 font-semibold">
                  {product.discount}% off
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
              <div className=" h-80p flex flex-row w-full items-center justify-center px-4 md:px-6 lg:px-10">
                <div className="h-90p w-70p ">
                  <Ratings
                    ratings={product.rating.$numberDecimal}
                    numberOf5StarRatings={product.numberOf5StarRatings}
                    numberOf4StarRatings={product.numberOf4StarRatings}
                    numberOf3StarRatings={product.numberOf3StarRatings}
                    numberOf2StarRatings={product.numberOf2StarRatings}
                    numberOf1StarRatings={product.numberOf1StarRatings}
                    reviews={product.reviews}
                    numberOfRatings={product.numberOfRatings}
                  />
                </div>
                {/* <div className="h-90p w-30p  flex justify-center items-center">
                  <div className="bg-secondary text-sm lg:text-xl py-3 lg:py-5 px-6 lg:px-10 rounded-full">
                    Rate Now
                  </div>
                </div> */}
              </div>
            </div>
            {/* {console.log("These are the product reviews" + product.reviews[0])} */}
            <AnimatePresence>
              {product.reviews.slice(0, reviewCount).map((review) => (
                // console.log("here" + review),
                <motion.div
                  key={review._id}
                  className="w-full h-auto border-b-2 border-secondary flex flex-col justify-center items-start py-4 px-6 gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.4 }}
                >
                  <div
                    key={review._id}
                    className="w-full h-auto border-b-2 border-secondary flex flex-col justify-center items-start md:py-4 px-2 gap-2"
                  >
                    <div className="w-full flex flex-row justify-start items-center gap-2">
                      <div
                        className={`${
                          review.rating > 3
                            ? "bg-primary"
                            : review.rating >= 2
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        } rounded-lg px-4 text-lg`}
                      >
                        {review.rating}
                      </div>
                    </div>
                    <div className="text-left ">{review.review}</div>
                    <div className="flex flex-row justify-between items-center w-full">
                      <div className="w-60p md:w-45p flex flex-row justify-between items-center">
                        <div className="whitespace-nowrap text-textSecondary">
                          {review.user.username}
                        </div>
                        <div className="whitespace-nowrap text-textSecondary">
                          2 months ago
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {reviewCount < product.reviews.length && (
              <div className="flex flex-row justify-end items-center w-full px-6 py-3">
                <div
                  className="bg-primary px-6 py-3 rounded-xl"
                  onClick={() => setReviewCount((e) => e * 2)}
                >
                  View more
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <UserFotter />
    </div>
  );
}
