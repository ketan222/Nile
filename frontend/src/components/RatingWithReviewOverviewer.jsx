import RatingStars from "./RatingStars";

export default function RatingWithReviewOverviewer({
  rating,
  ratingsCount,
  reviewsCount,
}) {
  return (
    <>
      <div className="text-xl flex flex-col justify-evenly items-start">
        <RatingStars rating={rating} />
        <div className="">
          {`${ratingsCount} ratings and ${reviewsCount} reviews`}
        </div>
      </div>
    </>
  );
}
