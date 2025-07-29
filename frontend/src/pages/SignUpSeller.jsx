import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCont } from "../Context/Context";
import { useEffect } from "react";
export default function SignUpSeller() {
  const navigate = useNavigate();
  const { loginSeller } = useCont();
  const [seller, setSeller] = useState({
    username: "",
    email: "",
    password: "",
    businessName: "",
    accountHolderName: "",
    accountNumber: "",
    ifscCode: "",
  });
  async function handleSignUp(e) {
    e.preventDefault();
    if (seller.username.length > 20) {
      alert("Enter smaller username");
      return;
    }
    if (!seller.businessName) {
      alert("Enter businessName");
      return;
    }
    if (!seller.email) {
      alert("Please Enter your email");
      return;
    }
    if (!seller.password || seller.password.length < 8) {
      alert("Please enter your password");
      return;
    }
    if (seller.accountNumber.length > 8) {
      alert("Enter valid accountNumber");
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(seller.email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/api/seller/signup", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          username: seller.username,
          email: seller.email,
          password: seller.password,
          businessName: seller.businessName,
          bankDetails: {
            accountHolderName: seller.accountHolderName,
            accountNumber: seller.accountNumber,
            ifscCode: seller.ifscCode,
          },
        }),
      });
      if (!res.ok) {
        throw new Error("Cannot signup a new seller");
      }
      const data = await res.json();
      // console.log(data);
      localStorage.setItem("seller-jwt", data.token);
      loginSeller(data.data.seller);
      alert("Seller created successfully");
      navigate("/sellerInfo");
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    // if (user) {
    async function chkToken() {
      try {
        console.log("Checking token validity...");
        if (!localStorage.getItem("seller-jwt")) {
          throw new Error("No token found");
        }
        const resp = await fetch("http://127.0.0.1:8000/api/seller/myAccount", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer " + localStorage.getItem("seller-jwt"),
          },
        });
        if (!resp.ok) throw new Error("Token is not valid");
        const data = await resp.json();
        console.log("Token is valid, seller data:", data);
        // if (user !== data.data.user) throw new Error("User mismatch");
        loginSeller(data.data.seller);
        console.log("seller logged in:", data.data.seller);
        navigate("/sellerInfo");
      } catch (err) {
        console.log(err.message);
        localStorage.removeItem("seller-jwt");
      }
    }
    chkToken();
    // }
  }, []);

  return (
    <div className="flex justify-around w-screen h-screen bg-[url('../public/BG/LOGIN-BG.png')] bg-cover bg-center font-sans">
      <div className="h-screen w-6/12 flex justify-center items-center">
        <div className="w-6/12 h-3/4  shadow-lg">
          <div className="w-full h-15p flex justify-center items-center my-2 font-bold">
            <Link
              to="/some-path"
              className="w-5/6 h-75p text-black shadow-md hover:text-black rounded-full flex justify-around px-3 items-center text-xl transition-all duration-500"
            >
              <div className='bg-[url("../public/logo/Google-logo-without-name.png")] bg-cover bg-center w-22p h-80p'></div>
              <div>Sign in with google</div>
            </Link>
          </div>
          <div className=" mx-auto w-90p border-b border-gray-500 mb-4"></div>
          <div className="w-full h-75p flex items-center flex-col">
            <div className="w-5/6 h-15p flex flex-col justify-around">
              {/* <div className='text-xl text-left'>P a s s w o r d</div> */}
              <input
                className="w-full h-80p text-base rounded-full border-2 border-gray-400 bg-gray-50 px-3"
                type="text"
                name="username"
                placeholder="Username"
                required
                onChange={(e) =>
                  setSeller((s) => ({ ...s, username: e.target.value }))
                }
              ></input>
            </div>
            <div className="w-5/6 h-15p flex flex-col justify-around">
              {/* <div className='text-xl text-left'>E m a i l</div> */}
              <input
                className="w-full h-80p text-base rounded-full border-2 border-gray-400 bg-gray-50 px-3"
                type="email"
                name="email"
                placeholder="Email"
                required
                onChange={(e) =>
                  setSeller((s) => ({ ...s, email: e.target.value }))
                }
              ></input>
            </div>
            <div className="w-5/6 h-15p flex flex-col justify-around">
              {/* <div className='text-xl text-left'>P a s s w o r d</div> */}
              <input
                className="w-full h-80p text-base rounded-full border-2 border-gray-400 bg-gray-50 px-3"
                type="text"
                name="password"
                placeholder="Password"
                required
                onChange={(e) =>
                  setSeller((s) => ({ ...s, password: e.target.value }))
                }
              ></input>
            </div>
            <div className="w-5/6 h-15p flex flex-col justify-around">
              {/* <div className='text-xl text-left'>P a s s w o r d</div> */}
              <input
                className="w-full h-80p text-base rounded-full border-2 border-gray-400 bg-gray-50 px-3"
                type="text"
                name="businessName"
                placeholder="Bussiness Name"
                required
                onChange={(e) =>
                  setSeller((s) => ({ ...s, businessName: e.target.value }))
                }
              ></input>
            </div>
            <div className="w-5/6 h-15p flex flex-col justify-around">
              {/* <div className='text-xl text-left'>P a s s w o r d</div> */}
              <input
                className="w-full h-80p text-base rounded-full border-2 border-gray-400 bg-gray-50 px-3"
                type="text"
                name="accountHolderName"
                placeholder="Account Holdername"
                required
                onChange={(e) =>
                  setSeller((s) => ({
                    ...s,
                    accountHolderName: e.target.value,
                  }))
                }
              ></input>
            </div>
            <div className="w-5/6 h-15p flex flex-col justify-around">
              {/* <div className='text-xl text-left'>P a s s w o r d</div> */}
              <input
                className="w-full h-80p text-base rounded-full border-2 border-gray-400 bg-gray-50 px-3"
                type="text"
                name="accountNumber"
                placeholder="Account Number"
                required
                onChange={(e) =>
                  setSeller((s) => ({ ...s, accountNumber: e.target.value }))
                }
              ></input>
            </div>
            <div className="w-5/6 h-15p flex flex-col justify-around">
              {/* <div className='text-xl text-left'>P a s s w o r d</div> */}
              <input
                className="w-full h-80p text-base rounded-full border-2 border-gray-400 bg-gray-50 px-3"
                type="text"
                name="IFSC"
                placeholder="IFSC Code"
                required
                onChange={(e) =>
                  setSeller((s) => ({ ...s, ifscCode: e.target.value }))
                }
              ></input>
            </div>
            <div className="w-full h-15p flex justify-center items-center my-2 mt-3">
              <div
                onClick={handleSignUp}
                className=" w-5/6 h-100p border-2 text-black hover:text-black hover:bg-white border-green-300 rounded-full flex justify-center items-center text-2xl transition-all duration-500 bg-primary"
              >
                C R E A T E
              </div>
            </div>
            <div className="text-sm">
              Already have an account?{" "}
              <Link to="/loginSeller" className="text-blue-500">
                Login
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen "></div>
    </div>
  );
}
