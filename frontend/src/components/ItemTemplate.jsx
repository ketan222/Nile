export function ItemTemplate() {
    return (
        <div className="flex-none w-40 h-56 md:w-60 md:h-80 rounded-lg md:rounded-2xl overflow-hidden bg-white">
            <div className="w-full h-55p">
                <img src="/category/tws-earbuds-category.png" className="w-full h-full object-cover" alt="Boat Earbuds" />
            </div>

            <div className="text-base md:text-2xl mx-2 md:mt-2 text-left">Boat earbuds</div>
            <div className="mx-2 text-xs md:text-base md:h-6 text-left">⭐ ⭐ ⭐ ⭐ ⭐ (20)</div>
            <div className="mt-1 text-sm md:text-xl mx-2 md:mt-2 text-left">500rs</div>

            <div className="flex flex-row h-6 md:h-9 items-center justify-evenly mt-1">
                <div className="bg-primary text-xs md:text-base h-90p w-40p flex justify-center items-center rounded-md md:rounded-lg font-bold">Buy Now</div>
                <div className="border-2 text-xs md:text-base border-primary text-primary h-90p w-50p flex justify-center items-center rounded-md md:rounded-lg font-bold">Add to cart</div>
            </div>
        </div>
    );
}
