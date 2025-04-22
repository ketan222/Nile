

export default function Ratings(){
    return (
        <div className="w-100p h-100p flex flex-row justify-evenly items-center font-sans">
            <div className="w-30p h-90p flex flex-col justify-center items-center">
                <div className="flex flex-row justify-center items-center gap-1">
                    <div className="text-4xl ">4.2</div>
                    <div className=" flex justify-center items-end"><ion-icon name="star" size='large'></ion-icon>
                </div>
                </div>
                <div className="text-xs text-textSecondary font-bold">233 ratings &</div>
                <div className="text-xs text-textSecondary font-bold">29 reviews</div>
            </div>
            <div className="w-70p h-90p gap-1 flex flex-col justify-center items-center">

                <div className="flex flex-row justify-center items-center h-10p gap-4 w-full">
                    <div className="flex flex-row justify-center items-center gap-1 ">
                        <div className="flex justify-center items-center text-sm text-textSecondary">5</div>
                        <div className="text-[12px] flex justify-center items-center">
                            <ion-icon name="star"></ion-icon>
                        </div>

                    </div>
                    <div className="w-60p h-30p bg-secondary rounded-full">
                        <div className="w-70p h-full bg-primary rounded-full"></div>
                    </div>
                </div>      

                <div className="flex flex-row justify-center items-center h-10p gap-4 w-full">
                    <div className="flex flex-row justify-center items-center gap-1 ">
                        <div className="flex justify-center items-center text-sm text-textSecondary">4</div>
                        <div className="text-[12px] flex justify-center items-center">
                            <ion-icon name="star"></ion-icon>
                        </div>

                    </div>
                    <div className="w-60p h-30p bg-secondary rounded-full">
                        <div className="w-70p h-full bg-primary rounded-full"></div>
                    </div>
                </div>      
                <div className="flex flex-row justify-center items-center h-10p gap-4 w-full">
                    <div className="flex flex-row justify-center items-center gap-1 ">
                        <div className="flex justify-center items-center text-sm text-textSecondary">3</div>
                        <div className="text-[12px] flex justify-center items-center">
                            <ion-icon name="star"></ion-icon>
                        </div>

                    </div>
                    <div className="w-60p h-30p bg-secondary rounded-full">
                        <div className="w-3p h-full bg-red-500 rounded-full"></div>
                    </div>
                </div>      
                <div className="flex flex-row justify-center items-center h-10p gap-4 w-full">
                    <div className="flex flex-row justify-center items-center gap-1 ">
                        <div className="flex justify-center items-center text-sm text-textSecondary">2</div>
                        <div className="text-[12px] flex justify-center items-center">
                            <ion-icon name="star"></ion-icon>
                        </div>

                    </div>
                    <div className="w-60p h-30p bg-secondary rounded-full">
                        <div className="w-25p h-full bg-red-500 rounded-full"></div>
                    </div>
                </div>      
                <div className="flex flex-row justify-center items-center h-10p gap-4 w-full">
                    <div className="flex flex-row justify-center items-center gap-1 ">
                        <div className="flex justify-center items-center text-sm text-textSecondary">1</div>
                        <div className="text-[12px] flex justify-center items-center">
                            <ion-icon name="star"></ion-icon>
                        </div>

                    </div>
                    <div className="w-60p h-30p bg-secondary rounded-full">
                        <div className="w-15p h-full bg-red-500 rounded-full"></div>
                    </div>
                </div>      
               
                
            </div>
        </div>
    )
}