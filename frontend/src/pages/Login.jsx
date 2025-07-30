import { useState, useEffect } from "react";
// import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import { useCont } from "../Context/Context";
// import { login } from "../../../backend/controllers/sellerController";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { user, loginBuyer } = useCont();
  const navigate = useNavigate();
  useEffect(() => {
    // if (user) {
    async function chkToken() {
      try {
        // console.log("Checking token validity...");
        if (!localStorage.getItem("user-jwt")) {
          throw new Error("No token found");
        }
        const resp = await fetch(
          "https://nile-lime.vercel.app/api/user/getUser",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("user-jwt"),
            },
          }
        );
        if (!resp.ok) throw new Error("Token is not valid");
        const data = await resp.json();
        // console.log("Token is valid, user data:", data);
        // if (user !== data.data.user) throw new Error("User mismatch");
        loginBuyer(data.user);
        // console.log("User logged in:", data.user);
        navigate("/home");
      } catch (err) {
        // console.log(err.message);
        localStorage.removeItem("user-jwt");
      }
    }
    chkToken();
    // }
  }, []);

  // console.log("User in login:", user);

  return (
    <div className="flex justify-around w-screen h-screen bg-[url('/BG/LOGIN-BG.png')] bg-cover bg-center font-sans">
      <div className="h-screen w-6/12 flex justify-center items-center">
        <div className="w-6/12 h-3/4  shadow-lg">
          <div className="w-full h-15p flex justify-center items-center my-2 font-bold">
            {/* <Link
              to="/some-path"
              className="w-5/6 h-75p text-black shadow-md hover:text-black rounded-full flex justify-around px-3 items-center text-xl transition-all duration-500"
            >
              <div className='bg-[url("../public/logo/Google-logo-without-name.png")] bg-cover bg-center w-22p h-80p'></div>
              <div>Sign in with google</div>
            </Link> */}
          </div>
          <div className=" mx-auto w-90p border-b border-gray-500 mb-6"></div>
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
              <button
                onClick={async (e) => {
                  e.preventDefault();

                  if (!email) {
                    alert("Please enter your email");
                    return;
                  }
                  if (!password || password.length < 8) {
                    alert("Please enter your password");
                    return;
                  }
                  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                  if (!emailRegex.test(email)) {
                    alert("Please enter a valid email address");
                    return;
                  }

                  try {
                    const response = await fetch(
                      "https://nile-lime.vercel.app/api/user/login",
                      {
                        method: "POST",
                        credentials: "include",
                        headers: {
                          "Content-Type": "application/json",
                        },
                        body: JSON.stringify({
                          email,
                          password,
                        }),
                      }
                    );

                    if (!response.ok) {
                      throw new Error("Login failed");
                    }

                    const data = await response.json();

                    localStorage.setItem("user-jwt", data.token);
                    loginBuyer(data.data.user);
                    // console.log("Login successful:", user);
                    navigate("/");
                  } catch (error) {
                    console.error("Error during login:", error);
                    alert("Login failed. Please try again.");
                  }
                }}
                className="w-5/6 h-100p border-2 text-black hover:text-black hover:bg-white border-green-300 rounded-full flex justify-center items-center text-2xl transition-all duration-500 bg-primary"
              >
                L O G I N
              </button>
            </div>
            <div>
              Dont have account?{" "}
              <Link to="/signup" className="text-blue-500">
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
export default Login;
