import UserFotter from "./UserFotter.jsx";
import NavBarSeller from "./NavBarSeller.jsx";
import { Link } from "react-router-dom";
import { useState } from "react";
// import TagComponent from "./TagComponent.jsx";
import AddProduct from "./AddProduct.jsx";
import UpdateProduct from "./UpdateProduct.jsx";

export default function SellerInfo(){
    const [window, setWindow] = useState('');
    const [isEditingEmail, setIsEditingEmail] = useState(false);
    const [email, setEmail] = useState("seller0@gmail.com");
    const [accountHoldername , setAccoutHolder] = useState("Jayesh Chanvla");
    const [ifscCode, setIfscCode] = useState("283838383928");
    const [accountNumber, setAccountNumber] = useState("8193248284");

    const handleEditClick = () => {
        setIsEditingEmail(true);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleBlur = () => {
        setIsEditingEmail(false);
    };
    
    function removeWindow(){
        setWindow('');
    }
    return (
        <>
            <NavBarSeller setWindow={setWindow}/>

            {window === "updateProduct" && <UpdateProduct removeWindow={removeWindow}/>}
            {window === "addProduct" && <AddProduct removeWindow={removeWindow}/>}



            <div className="h-auto w-screen md:py-10  px-7 md:px-14 ">
                
                <div className="flex flex-row border-b-2 border-gray-500 justify-between py-1 px-4 ">
                    <div className="flex flex-row items-center justify-center gap-5">
                        <div className="text-xl md:text-2xl lg:text-5xl flex justify-center items-end">Relliance Seller</div>
                        <div className='text-base md:text-lg lg:text-3xl flex justify-center items-end text-primary'>edit</div>
                    </div>
                    <div className="">⭐⭐⭐⭐⭐(233)</div>
                </div>
                <div className=" px-10 flex flex-col md:flex-row  lg:py-14 gap-10 items-center justify-between ">
                    <div className="flex flex-col gap-2 items-start justify-center  w-full px-5 md:px-0 py-5 md:gap-8">
                    <div className="flex flex-row items-center justify-between gap-5 w-full">
                        <div className="text-base md:text-xl lg:text-3xl flex justify-center items-end whitespace-nowrap">
                            Email:
                            {isEditingEmail ? (
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                onBlur={handleBlur}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter") {
                                        if(e.target.value.trim().length > 0) handleEmailChange(e);
                                        else return;
                                        setIsEditingEmail(false);
                                    }
                                  }}
                                autoFocus
                                className="border border-gray-300  px-2 py-1 text-sm md:text-base lg:text-xl outline-none bg-secondary rounded-md"
                            />
                            ) : (
                            `${email}`
                            )}
                        </div>
                        <div
                            className="text-sm md:text-base lg:text-xl flex justify-center items-end text-primary cursor-pointer"
                            onClick={handleEditClick}
                        >
                            edit
                        </div>
                    </div>
                        
                        <div className="flex flex-row items-center justify-between gap-5 w-full ">
                            <div className="text-base md:text-xl flex  lg:text-3xl justify-center items-end whitespace-nowrap">Account Holdername: Jayesh Chanvla</div>
                            <div className='text-sm md:text-base flex lg:text-xl  justify-center items-end text-primary'>edit</div>
                        </div>
                        
                        <div className="flex flex-row items-center justify-between gap-5 w-full ">
                            <div className="text-base md:text-xl lg:text-3xl flex justify-center items-end whitespace-nowrap">Account Number: 8193248284</div>
                            <div className='text-sm md:text-base lg:text-xl flex justify-center items-end text-primary'>edit</div>
                        </div>
                        
                        <div className="flex flex-row items-center justify-between gap-5 w-full ">
                            <div className="text-base md:text-lg lg:text-3xl flex justify-center items-end whitespace-nowrap">IFSC Code: 283838383928</div>
                            <div className='text-sm md:text-base lg:text-xl flex justify-center items-end text-primary'>edit</div>
                        </div>
                    </div>
                    <div className="flex w-full flex-col justify-between items-center rounded-md shadow-gray-300 shadow-md gap-3 py-5 px-5 max-w-sm mb-10" >
                        <div className="text-xl lg:text-3xl">Change Password</div>
                        <input className="bg-secondary rounded-md w-full h-10 lg:h-11 px-5 text-sm lg:text-base text-center outline-none" placeholder="New password"></input>
                        <input className="bg-secondary rounded-md w-full h-10 lg:h-11 px-5 text-sm lg:text-base text-center outline-none" placeholder="Confirm password"></input>
                        <div className='bg-primary w-full rounded-md h-8 flex lg:h-11 justify-center items-center text-base lg:text-lg'>Update Password</div>
                    </div>
                </div>
            </div>
            <UserFotter/>
        </>
    )
}