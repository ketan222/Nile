export default function Ratings({
  ratings,
  numberOf5StarRatings,
  numberOf4StarRatings,
  numberOf3StarRatings,
  numberOf2StarRatings,
  numberOf1StarRatings,
  reviews,
  numberOfRatings,
}) {
  //   console.log("++" + ratings);
  //   console.log(numberOf5StarRatings);
  //   console.log(reviews);
  //   console.log(numberOfRatings);
  const getPercentage = (count) =>
    numberOfRatings === 0 ? 0 : (count / numberOfRatings) * 100;
  const fiveStarPercentage = getPercentage(numberOf5StarRatings).toFixed(0) * 1;
  const fourStarPercentage = getPercentage(numberOf4StarRatings).toFixed(0) * 1;
  const threeStarPercentage =
    getPercentage(numberOf3StarRatings).toFixed(0) * 1;
  const twoStarPercentage = getPercentage(numberOf2StarRatings).toFixed(0) * 1;
  const oneStarPercentage = getPercentage(numberOf1StarRatings).toFixed(0) * 1;

  //   console.log(
  //     fiveStarPercentage,
  //     fourStarPercentage,
  //     threeStarPercentage,
  //     twoStarPercentage,
  //     oneStarPercentage
  //   );
  return (
    <div className="w-100p h-100p flex flex-row justify-evenly items-center font-sans ">
      <div className="w-30p h-90p flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center gap-1">
          <div className="text-4xl ">{ratings}</div>
          <div className=" flex justify-center items-end">
            <ion-icon name="star" size="large"></ion-icon>
          </div>
        </div>
        <div className="text-xs text-textSecondary font-bold">
          {numberOfRatings} ratings &
        </div>
        <div className="text-xs text-textSecondary font-bold">
          {reviews.length} reviews
        </div>
      </div>
      <div className="w-70p h-90p gap-1 flex flex-col justify-center items-center">
        <div className="flex flex-row justify-center items-center h-10p gap-4 w-full">
          <div className="flex flex-row justify-center items-center gap-1 ">
            <div className="flex justify-center items-center text-sm text-textSecondary">
              5
            </div>
            <div className="text-[12px] flex justify-center items-center">
              <ion-icon name="star"></ion-icon>
            </div>
          </div>
          <div className="w-60p h-30p bg-secondary rounded-full">
            <div
              style={{ width: `${fiveStarPercentage}%` }}
              className={`h-full ${
                fiveStarPercentage > 40
                  ? "bg-primary"
                  : fiveStarPercentage > 10
                  ? "bg-yellow-500"
                  : "bg-red-500"
              } rounded-full`}
            ></div>
          </div>
        </div>

        <div className="flex flex-row justify-center items-center h-10p gap-4 w-full">
          <div className="flex flex-row justify-center items-center gap-1 ">
            <div className="flex justify-center items-center text-sm text-textSecondary">
              4
            </div>
            <div className="text-[12px] flex justify-center items-center">
              <ion-icon name="star"></ion-icon>
            </div>
          </div>
          <div className="w-60p h-30p bg-secondary rounded-full">
            <div
              style={{ width: `${fourStarPercentage}%` }}
              className={`h-full ${
                fourStarPercentage > 40
                  ? "bg-primary"
                  : fourStarPercentage > 10
                  ? "bg-yellow-500"
                  : "bg-red-500"
              } rounded-full`}
            ></div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center h-10p gap-4 w-full">
          <div className="flex flex-row justify-center items-center gap-1 ">
            <div className="flex justify-center items-center text-sm text-textSecondary">
              3
            </div>
            <div className="text-[12px] flex justify-center items-center">
              <ion-icon name="star"></ion-icon>
            </div>
          </div>
          <div className="w-60p h-30p bg-secondary rounded-full">
            <div
              style={{ width: `${threeStarPercentage}%` }}
              className={`h-full ${
                threeStarPercentage > 40
                  ? "bg-primary"
                  : threeStarPercentage > 10
                  ? "bg-yellow-500"
                  : "bg-red-500"
              } rounded-full`}
            ></div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center h-10p gap-4 w-full">
          <div className="flex flex-row justify-center items-center gap-1 ">
            <div className="flex justify-center items-center text-sm text-textSecondary">
              2
            </div>
            <div className="text-[12px] flex justify-center items-center">
              <ion-icon name="star"></ion-icon>
            </div>
          </div>
          <div className="w-60p h-30p bg-secondary rounded-full">
            <div
              style={{ width: `${twoStarPercentage}%` }}
              className={`h-full ${
                twoStarPercentage > 40
                  ? "bg-primary"
                  : twoStarPercentage > 10
                  ? "bg-yellow-500"
                  : "bg-red-500"
              } rounded-full`}
            ></div>
          </div>
        </div>
        <div className="flex flex-row justify-center items-center h-10p gap-4 w-full">
          <div className="flex flex-row justify-center items-center gap-1 ">
            <div className="flex justify-center items-center text-sm text-textSecondary">
              1
            </div>
            <div className="text-[12px] flex justify-center items-center">
              <ion-icon name="star"></ion-icon>
            </div>
          </div>
          <div className="w-60p h-30p bg-secondary rounded-full">
            <div
              style={{ width: `${oneStarPercentage}%` }}
              className={`h-full ${
                oneStarPercentage > 40
                  ? "bg-primary"
                  : oneStarPercentage > 10
                  ? "bg-yellow-500"
                  : "bg-red-500"
              } rounded-full`}
            ></div>
          </div>
        </div>
      </div>
      {/* {console.log("HERE")} */}
    </div>
  );
}
