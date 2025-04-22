export default function Hero() {
    return (
        <div className="w-screen h-auto flex flex-row items-center justify-center px-5 gap-5 md:px-10">
            <div className="w-[50%] flex items-start flex-col gap-5 py-5 md:gap-10 max-h-[80%]">
                <div className="text-xs md:text-xl lg:text-3xl font-tcoctober">
                    Step into confidence and style with our stunning collection of women's dresses—designed to make you shine, only on our website!
                </div>
                <div className="text-xs md:text-sm lg:text-xl h-auto py-1 rounded-sm mx-3 md:mx-6 lg:mx-8 font-bold w-auto px-3 md:px-5 bg-primary flex justify-center items-center">
                    Shop now
                </div>
                {/* <div>
                    <div className="text-xs md:text-sm lg:text-xl font-bold text-primary">Exclusive Offer</div>
                    <div className="text-xs md:text-sm lg:text-xl font-bold text-primary">50% Off on First Order</div>
                </div> */}
            </div>
            <div className="w-[50%] h-full flex justify-center items-center">
                <img src="/hero-section/women-fashion.png" alt="Women Fashion" className="h-[83%] w-[83%]" />
            </div>
        </div>
    );
}
