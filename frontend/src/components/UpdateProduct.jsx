/* eslint-disable */
import { Link } from "react-router-dom";

export default function AddProduct({removeWindow}) {
    return (
        <div className=" fixed top-1/2 -translate-x-1/2 left-1/2 -translate-y-1/2 w-[80vw] h-[80vh] bg-white shadow-lg rounded-xl flex flex-col items-center">
                <div className='w-full flex flex-row justify-end items-center'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6 md:size-8 lg:size-10 cursor-pointer" onClick={() => removeWindow()}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                    </svg>
                </div>
                <div className="w-88p h-6p border-b-2 border-black flex flex-row items-end ">
                    <div className=' text-xs md:text-lg lg:text-2xl w-40p lg:w-32p'>Products</div>
                    <div className=' text-xs md:text-lg lg:text-2xl w-15p lg:w-17p'>Stock</div>
                    <div className=' text-xs md:text-lg lg:text-2xl w-15p lg:w-17p'>Price</div>
                    <div className=' text-xs md:text-lg lg:text-2xl w-15p lg:w-17p'>Discount(%)</div>
                    <div className=' text-xs md:text-lg lg:text-2xl w-15p lg:w-17p'>Final Rs</div>
                </div>
                <div className="w-88p h-70p overflow-y-scroll flex-none flex-col">
                    
                    <div className='w-full h-30p  flex flex-row '>

                        <div className=' w-40p lg:w-32p flex flex-row items-center justify-start gap-2 pl-4 lg:pl-8'>
                            <div className=" w-30p h-80p">
                                {/* <img src="../../public/category/men-fashion-category.png" alt="product" className="w-full h-full object-contain"/> */}
                                <img src="../../public/hero-section/women-fashion.png" alt="product" className="w-full h-full object-contain"/>
                            </div>
                            <div className="flex-none flex-col gap-1 md:gap-2 w-50p ">
                                <div className="text-xs md:text-lg lg:text-xl text-left  ">Black Shirt</div>
                                <div className="text-xs md:text-base lg:text-base text-left ">Brand: H&M</div>
                                <div className="text-xs md:text-base lg:text-sm text-left text-red-700 ">Out of Stock</div>
                            </div>
                        </div>

                        <div className='text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>
                            <div className="flex flex-row border-2 border-gray-500 w-90p  rounded-full p-1 overflow-hidden justify-center items-center">
                                <div className="text-black font-bold w-25p hidden md:flex items-center justify-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>

                                </div>
                                <input className="w-80p md:w-50p text-center outline-none" value="500000000" ></input>
                                <div className="text-black hidden font-bold w-25p md:flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className=' text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>
                            <div className="flex flex-row border-2 border-gray-500 w-90p  rounded-full p-1 overflow-hidden justify-center items-center">
                                
                                <input className="w-90p text-center outline-none" value="5000000" ></input>
                                
                            </div>
                        </div>
                        <div className=' text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>
                            <div className="flex flex-row border-2 border-gray-500 w-80p  rounded-full p-1 overflow-hidden justify-center items-center">
                                <div className="text-black font-bold w-25p hidden md:flex items-center justify-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>

                                </div>
                                <input className="w-80p md:w-50p text-center outline-none" value="100" ></input>
                                <div className="text-black font-bold w-25p hidden md:flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className='text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>1000rs</div>
                    </div>
                    <div className='w-full h-30p  flex flex-row'>

                        <div className=' w-40p lg:w-32p flex flex-row items-center justify-start gap-2 pl-4 lg:pl-8'>
                            <div className=" w-30p h-80p">
                                {/* <img src="../../public/category/men-fashion-category.png" alt="product" className="w-full h-full object-contain"/> */}
                                <img src="../../public/hero-section/women-fashion.png" alt="product" className="w-full h-full object-contain"/>
                            </div>
                            <div className="flex-none flex-col gap-1 md:gap-2 w-50p ">
                                <div className="text-xs md:text-lg lg:text-xl text-left  ">Black Shirt</div>
                                <div className="text-xs md:text-base lg:text-base text-left ">Brand: H&M</div>
                                <div className="text-xs md:text-base lg:text-sm text-left text-red-700 ">Out of Stock</div>
                            </div>
                        </div>

                        <div className='text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>
                            <div className="flex flex-row border-2 border-gray-500 w-90p  rounded-full p-1 overflow-hidden justify-center items-center">
                                <div className="text-black font-bold w-25p hidden md:flex items-center justify-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>

                                </div>
                                <input className="w-80p md:w-50p text-center outline-none" value="500000000" ></input>
                                <div className="text-black hidden font-bold w-25p md:flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className=' text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>
                            <div className="flex flex-row border-2 border-gray-500 w-90p  rounded-full p-1 overflow-hidden justify-center items-center">
                                
                                <input className="w-90p text-center outline-none" value="5000000" ></input>
                                
                            </div>
                        </div>
                        <div className=' text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>
                            <div className="flex flex-row border-2 border-gray-500 w-80p  rounded-full p-1 overflow-hidden justify-center items-center">
                                <div className="text-black font-bold w-25p hidden md:flex items-center justify-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>

                                </div>
                                <input className="w-80p md:w-50p text-center outline-none" value="100" ></input>
                                <div className="text-black font-bold w-25p hidden md:flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className='text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>1000rs</div>
                    </div>
                    <div className='w-full h-30p  flex flex-row'>

                        <div className=' w-40p lg:w-32p flex flex-row items-center justify-start gap-2 pl-4 lg:pl-8'>
                            <div className=" w-30p h-80p">
                                {/* <img src="../../public/category/men-fashion-category.png" alt="product" className="w-full h-full object-contain"/> */}
                                <img src="../../public/hero-section/women-fashion.png" alt="product" className="w-full h-full object-contain"/>
                            </div>
                            <div className="flex-none flex-col gap-1 md:gap-2 w-50p ">
                                <div className="text-xs md:text-lg lg:text-xl text-left  ">Black Shirt</div>
                                <div className="text-xs md:text-base lg:text-base text-left ">Brand: H&M</div>
                                <div className="text-xs md:text-base lg:text-sm text-left text-red-700 ">Out of Stock</div>
                            </div>
                        </div>

                        <div className='text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>
                            <div className="flex flex-row border-2 border-gray-500 w-90p  rounded-full p-1 overflow-hidden justify-center items-center">
                                <div className="text-black font-bold w-25p hidden md:flex items-center justify-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>

                                </div>
                                <input className="w-80p md:w-50p text-center outline-none" value="500000000" ></input>
                                <div className="text-black hidden font-bold w-25p md:flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className=' text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>
                            <div className="flex flex-row border-2 border-gray-500 w-90p  rounded-full p-1 overflow-hidden justify-center items-center">
                                
                                <input className="w-90p text-center outline-none" value="5000000" ></input>
                                
                            </div>
                        </div>
                        <div className=' text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>
                            <div className="flex flex-row border-2 border-gray-500 w-80p  rounded-full p-1 overflow-hidden justify-center items-center">
                                <div className="text-black font-bold w-25p hidden md:flex items-center justify-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>

                                </div>
                                <input className="w-80p md:w-50p text-center outline-none" value="100" ></input>
                                <div className="text-black font-bold w-25p hidden md:flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className='text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>1000rs</div>
                    </div>
                    <div className='w-full h-30p  flex flex-row'>

                        <div className=' w-40p lg:w-32p flex flex-row items-center justify-start gap-2 pl-4 lg:pl-8'>
                            <div className=" w-30p h-80p">
                                {/* <img src="../../public/category/men-fashion-category.png" alt="product" className="w-full h-full object-contain"/> */}
                                <img src="../../public/hero-section/women-fashion.png" alt="product" className="w-full h-full object-contain"/>
                            </div>
                            <div className="flex-none flex-col gap-1 md:gap-2 w-50p ">
                                <div className="text-xs md:text-lg lg:text-xl text-left  ">Black Shirt</div>
                                <div className="text-xs md:text-base lg:text-base text-left ">Brand: H&M</div>
                                <div className="text-xs md:text-base lg:text-sm text-left text-red-700 ">Out of Stock</div>
                            </div>
                        </div>

                        <div className='text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>
                            <div className="flex flex-row border-2 border-gray-500 w-90p  rounded-full p-1 overflow-hidden justify-center items-center">
                                <div className="text-black font-bold w-25p hidden md:flex items-center justify-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>

                                </div>
                                <input className="w-80p md:w-50p text-center outline-none" value="500000000" ></input>
                                <div className="text-black hidden font-bold w-25p md:flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className=' text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>
                            <div className="flex flex-row border-2 border-gray-500 w-90p  rounded-full p-1 overflow-hidden justify-center items-center">
                                
                                <input className="w-90p text-center outline-none" value="5000000" ></input>
                                
                            </div>
                        </div>
                        <div className=' text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>
                            <div className="flex flex-row border-2 border-gray-500 w-80p  rounded-full p-1 overflow-hidden justify-center items-center">
                                <div className="text-black font-bold w-25p hidden md:flex items-center justify-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>

                                </div>
                                <input className="w-80p md:w-50p text-center outline-none" value="100" ></input>
                                <div className="text-black font-bold w-25p hidden md:flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className='text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>1000rs</div>
                    </div>
                    <div className='w-full h-30p  flex flex-row'>

                        <div className=' w-40p lg:w-32p flex flex-row items-center justify-start gap-2 pl-4 lg:pl-8'>
                            <div className=" w-30p h-80p">
                                {/* <img src="../../public/category/men-fashion-category.png" alt="product" className="w-full h-full object-contain"/> */}
                                <img src="../../public/hero-section/women-fashion.png" alt="product" className="w-full h-full object-contain"/>
                            </div>
                            <div className="flex-none flex-col gap-1 md:gap-2 w-50p ">
                                <div className="text-xs md:text-lg lg:text-xl text-left  ">Black Shirt</div>
                                <div className="text-xs md:text-base lg:text-base text-left ">Brand: H&M</div>
                                <div className="text-xs md:text-base lg:text-sm text-left text-red-700 ">Out of Stock</div>
                            </div>
                        </div>

                        <div className='text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>
                            <div className="flex flex-row border-2 border-gray-500 w-90p  rounded-full p-1 overflow-hidden justify-center items-center">
                                <div className="text-black font-bold w-25p hidden md:flex items-center justify-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>

                                </div>
                                <input className="w-80p md:w-50p text-center outline-none" value="500000000" ></input>
                                <div className="text-black hidden font-bold w-25p md:flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className=' text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>
                            <div className="flex flex-row border-2 border-gray-500 w-90p  rounded-full p-1 overflow-hidden justify-center items-center">
                                
                                <input className="w-90p text-center outline-none" value="5000000" ></input>
                                
                            </div>
                        </div>
                        <div className=' text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>
                            <div className="flex flex-row border-2 border-gray-500 w-80p  rounded-full p-1 overflow-hidden justify-center items-center">
                                <div className="text-black font-bold w-25p hidden md:flex items-center justify-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>

                                </div>
                                <input className="w-80p md:w-50p text-center outline-none" value="100" ></input>
                                <div className="text-black font-bold w-25p hidden md:flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className='text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>1000rs</div>
                    </div>
                    <div className='w-full h-30p  flex flex-row'>

                        <div className=' w-40p lg:w-32p flex flex-row items-center justify-start gap-2 pl-4 lg:pl-8'>
                            <div className=" w-30p h-80p">
                                {/* <img src="../../public/category/men-fashion-category.png" alt="product" className="w-full h-full object-contain"/> */}
                                <img src="../../public/hero-section/women-fashion.png" alt="product" className="w-full h-full object-contain"/>
                            </div>
                            <div className="flex-none flex-col gap-1 md:gap-2 w-50p ">
                                <div className="text-xs md:text-lg lg:text-xl text-left  ">Black Shirt</div>
                                <div className="text-xs md:text-base lg:text-base text-left ">Brand: H&M</div>
                                <div className="text-xs md:text-base lg:text-sm text-left text-red-700 ">Out of Stock</div>
                            </div>
                        </div>

                        <div className='text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>
                            <div className="flex flex-row border-2 border-gray-500 w-90p  rounded-full p-1 overflow-hidden justify-center items-center">
                                <div className="text-black font-bold w-25p hidden md:flex items-center justify-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>

                                </div>
                                <input className="w-80p md:w-50p text-center outline-none" value="500000000" ></input>
                                <div className="text-black hidden font-bold w-25p md:flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className=' text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>
                            <div className="flex flex-row border-2 border-gray-500 w-90p  rounded-full p-1 overflow-hidden justify-center items-center">
                                
                                <input className="w-90p text-center outline-none" value="5000000" ></input>
                                
                            </div>
                        </div>
                        <div className=' text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>
                            <div className="flex flex-row border-2 border-gray-500 w-80p  rounded-full p-1 overflow-hidden justify-center items-center">
                                <div className="text-black font-bold w-25p hidden md:flex items-center justify-center ">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14" />
                                    </svg>

                                </div>
                                <input className="w-80p md:w-50p text-center outline-none" value="100" ></input>
                                <div className="text-black font-bold w-25p hidden md:flex items-center justify-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                    </svg>

                                </div>
                            </div>
                        </div>
                        <div className='text-xs md:text-lg lg:text-2xl w-15p lg:w-17p flex items-center justify-center'>1000rs</div>
                    </div>
                    
                </div>
                <div className="w-[88%] h-[15%] border-t-2 border-black flex items-center justify-end px-4">
                    <Link 
                        className="rounded-lg border-2 border-primary bg-primary text-black whitespace-nowrap py-1 px-3 md:py-2 md:px-6 text-sm md:text-base lg:text-lg max-w-fit"
                    >
                        Update Products
                    </Link>
                </div>
            </div>
    )
}