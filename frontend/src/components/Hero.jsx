export default function Hero() {
    return (
        <div className="w-screen h-auto border-2 border-black flex flex-row items-center justify-center px-5 gap-5 md:px-10 ">
            {/* <div className="relative h-72p w-72p">
                <img src="/hero-section/furniture.png" alt="Furniture" className="border-2 border-black h-full w-full" />
                <div className="absolute text-xs top-3/4 left-1/4 transform -translate-x-1/2 h-10p w-35p bg-primary flex justify-center items-center">
                    Shop now
                </div>
            </div> */}
            <div className="w-50p  border-2 border-black flex  items-start flex-col gap-5 py-5 md:gap-10 max-h-80p">
                <div className="text-xs md:text-xl  lg:text-3xl font-tcoctober">Step into confidence and style with our stunning collection of women's dresses—designed to make you shine, only on our website!</div>
                <div className=" text-xs md:text-sm lg:text-xl h-auro py-1 rounded-sm mx-3  md:mx-6 ]lg:mx-8 font-bold w-auto px-3 md:px-5 bg-primary flex justify-center items-center">
                    Shop now
                </div>

            </div>
            <div className="w-50p h-full border-2 border-black flex justify-center items-center">
                <img src="/hero-section/women-fashion.png" alt="Furniture" className="border-2 border-black h-83p w-83p" />
            </div>
        </div>
    );
}
