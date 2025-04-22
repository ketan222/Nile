export default function RatingStars({ rating }) {
    let numbers = [1, 2, 3, 4, 5];


    return(
        <div className="flex flex-row justify-start items-center gap-8">
            <div className="text-[28px] flex justify-evenly items-center gap-1">
                {numbers.map((num) => {
                    if(rating - num >= 0){
                        return(
                            <ion-icon name="star" key={num}></ion-icon>
                        )
                    }
                    else if(rating - num < 0 && rating - num > -1){
                        return(
                            <ion-icon name="star-half" key={num}></ion-icon>
                        )
                    }
                    return(
                        <ion-icon name="star-outline" key={num}></ion-icon>
                    )
                })}
            </div>
            <div className="text-xl flex items-end justify-center">
                <div className={`bg-${rating>3?'primary':'red-500'} rounded-lg px-3 text-lg`}>{rating}</div>
            </div>
        </div>
    )
}