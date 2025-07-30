import { useState } from "react";
export default function RateProduct({ productId, closeWindow }) {
  const ratings = [1, 2, 3, 4, 5];
  const [rating, setRating] = useState(-1);
  const [review, setReview] = useState("");
  async function handleSubmit() {
    try {
      if (rating == -1) return;
      //   setRating((prev) => prev + 1);
      const resp = await fetch(
        `http://127.0.0.1:8000/api/product/addReview/${productId}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("user-jwt"),
          },
          body: JSON.stringify({ rating: rating + 1, review }),
        }
      );
      //   setRating((prev) => prev - 1);
      closeWindow();
      if (!resp.ok) throw new Error("You've already rated this product!");
    } catch (err) {
      alert(err.message);
    }
  }
  console.log(productId);
  return (
    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] md:w-[40vw] lg:w-[30vw] bg-white shadow-lg rounded-xl flex flex-col p-5">
      <div className="flex flex-row justify-end items-center ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-7 cursor-pointer"
          onClick={() => closeWindow()}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6 18 18 6M6 6l12 12"
          />
        </svg>
      </div>
      <div className="border-b-2 border-black h-8p text-lg font-bold flex justify-center items-end">
        Rate Product
      </div>
      <div className=" flex-grow flex flex-col p-2 gap-4 justify-evenly items-center">
        <div className=" h-auto w-[80%] flex flex-row justify-evenly items-center">
          {ratings.map((item, index) => {
            if (index <= rating)
              return (
                <ion-icon
                  name="star"
                  size="large"
                  key={index} //   onHover = {setCurrRating(index)}
                  //   onHoverOut ={setCurrRating(-1)}
                  onClick={() => setRating(index)}
                ></ion-icon>
              );
            else
              return (
                <ion-icon
                  name="star-outline"
                  size="large"
                  key={index}
                  //   onHover = {setCurrRating(index)}
                  //   onHoverOut ={setCurrRating(-1)}
                  onClick={() => setRating(index)}
                ></ion-icon>
              );
          })}
        </div>
        <textarea
          placeholder="Write a review"
          className="w-[95%] rounded-md bg-secondary p-2 outline-none"
          onChange={(e) => setReview(e.target.value)}
        ></textarea>
      </div>
      <div className="flex justify-center items-center">
        <div
          className="bg-primary py-2 w-[91%] rounded-lg font-semibold"
          onClick={handleSubmit}
        >
          Submit
        </div>
      </div>
    </div>
  );
}
