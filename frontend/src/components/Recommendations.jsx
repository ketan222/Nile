import { ItemTemplate } from "./ItemTemplate";

function Recommendations(){
    return (
        <div className="flex flex-col items-center justify-center h-auto w-screen gap-5 md:gap-10 py-10 ">
            <div className="test-xl md:text-3xl font-bold">Top Recommendation</div>
            <div className="flex flex-row items-center justify-center bg-secondary w-full p-4 gap-5">
                <div className="flex flex-row items-center justify-start w-90p h-96p gap-5 md:gap-10 overflow-x-hidden pl-5 md:pl-10">
                    <ItemTemplate/>
                    <ItemTemplate/>
                    <ItemTemplate/>
                    <ItemTemplate/>
                    <ItemTemplate/>
                    <ItemTemplate/>
                </div>
                <div className="border-2 border-primary bg-primary text-center text-xs md:text-base font-bold rounded-md px-2 hover:bg-secondary text-black hover:text-primary transition-all ">View All</div>
            </div>
        </div>
    )   
}
export default Recommendations;