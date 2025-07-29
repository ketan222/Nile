import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCont } from "../Context/Context";
export default function LoginSeller() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { loginSeller } = useCont();
  const navigate = useNavigate();

  // console.log(email, " ", password);
  async function handleLogin(e) {
    e.preventDefault();

    if (!email) {
      alert("Please Enter an email address");
      return;
    }
    if (password.length < 8) {
      alert("Please enter an password longer than 7 digits");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address");
      return;
    }

    try {
      const res = await fetch("http://127.0.0.1:8000/api/seller/login", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (!res.ok) {
        throw new Error("Error logging in seller");
      }
      const data = await res.json();
      // console.log(data);
      localStorage.setItem("seller-jwt", data.token);
      loginSeller(data.data.seller);
      alert("User created successfully");
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
          <div className="w-full h-15p flex justify-center items-end my-2 font-bold text-2xl">
            Login as Seller
          </div>
          <div className=" mx-auto w-90p border-b-2 border-gray-500 mb-6"></div>
          <div className="w-full h-70p flex items-center flex-col">
            <div className="w-5/6 h-30p flex flex-col justify-around">
              {/* <div className='text-xl text-left'>E m a i l</div> */}
              <input
                className="w-full h-50p text-2xl rounded-full border-2 border-gray-400 bg-gray-50 px-7"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
              ></input>
            </div>
            <div className="w-5/6 h-30p flex flex-col justify-around">
              {/* <div className='text-xl text-left'>P a s s w o r d</div> */}
              <input
                className="w-full h-50p text-2xl rounded-full border-2 border-gray-400 bg-gray-50 px-7"
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            </div>
            <div className="w-full h-15p flex justify-center items-center my-2 mt-7">
              <div
                onClick={handleLogin}
                className=" w-5/6 h-100p border-2 text-black hover:text-black hover:bg-white border-green-300 rounded-full flex justify-center items-center text-2xl transition-all duration-500 bg-primary"
              >
                L O G I N
              </div>
            </div>
            <div className="text-sm">
              Dont have seller account?{" "}
              <Link to={"/signUpSeller"} className="text-blue-500">
                Create Account
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="h-screen "></div>
    </div>
  );
}
