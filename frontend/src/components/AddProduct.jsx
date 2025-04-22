/* eslint-disable */


import TagComponent from "./TagComponent.jsx";
import { useState } from "react";

export default function AddProduct({removeWindow}) {
    const [tags, setTags] = useState([]);
    const [fileName, setFileName] = useState([]);
    return (
        <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[85vw] md:w-[70vw] h-[80vh] bg-white shadow-lg rounded-xl flex flex-col p-10">
            <div className='flex flex-row justify-end items-center '>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-10 cursor-pointer" onClick={() => removeWindow()}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                </svg>
            </div>
            <div className='border-b-2 border-black h-8p text-3xl font-bold flex justify-center items-end'>Product</div>
            <div className='h-88p grid grid-rows-8 grid-cols-1 md:grid-rows-4 md:grid-cols-2  p-6 gap-4'>

                <input className='px-3 h-full rounded-lg bg-secondary text-xs md:text-base lg:text-lg outline-none' placeholder='Product Name'></input>
                <textarea className='px-3 py-2 h-full rounded-lg bg-secondary text-xs md:text-base lg:text-lg row-span-2 resize-none outline-none'placeholder='Product Specification'></textarea>                    
                <div className=' w-full h-full flex flex-row justify-between gap-6 text-xs md:text-base lg:text-lg' >
                    <input className='px-3 h-full w-50p rounded-lg bg-secondary  outline-none' placeholder='Brand Name'></input>
                    <input className='px-3 h-full w-50p rounded-lg bg-secondary  outline-none' placeholder='Gender'></input>
                </div>
                
                <TagComponent tags={tags} setTags={setTags} usage={"text"}/>

                <input className='px-3 h-full rounded-lg bg-secondary text-xs md:text-base lg:text-lg outline-none' placeholder='Product Description'></input>

                <div className='  w-full h-full flex flex-row justify-between gap-6 text-xs md:text-base lg:text-lg' >
                    <input className='px-3 h-full w-50p rounded-lg bg-secondary outline-none' placeholder='Price'></input>
                    <input className='px-3 h-full w-50p rounded-lg bg-secondary outline-none' placeholder='Discount%'></input>
                </div>
                <div className='  w-full h-full flex flex-row justify-between gap-6' > 
                    <div className='pl-3 h-full w-50p rounded-lg bg-secondary text-lg text-gray-400 flex justify-center items-center'>
                        <TagComponent tags={fileName} setTags={setFileName} usage={"file"}/>
                    </div>
                    <div className='px-3 h-full w-50p rounded-lg bg-primary text-sm md:text-base lg:text-xl font-bold flex justify-center items-center'>Add Product</div>
                </div>
            </div>
        </div>
    )
}