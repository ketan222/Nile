import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCont } from "../Context/Context";
import { useEffect } from "react";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();
  const { user, loginBuyer } = useCont();

  // console.log({ name, email, password, confirmPassword });

  useEffect(() => {
    // if (user) {
    async function chkToken() {
      try {
        console.log("Checking token validity...");
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
        console.log("Token is valid, user data:", data);
        // if (user !== data.data.user) throw new Error("User mismatch");
        loginBuyer(data.user);
        // console.log("User logged in:", data.user);
        navigate("/home");
      } catch (err) {
        console.log(err.message);
        localStorage.removeItem("user-jwt");
      }
    }
    chkToken();
    // }
  }, []);

  const handleSignUp = async (e) => {
    e.preventDefault();

    if (!name || !email || !password || !confirmPassword) {
      alert("Please fill in all fields.");
      return;
    }

    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // 🔐 Submit form logic goes here (e.g., fetch to backend)
    // console.log("Ready to send data:", { name, email, password });
    try {
      const user = await fetch("https://nile-lime.vercel.app/api/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          password: password,
          email: email,
          passwordConfirm: confirmPassword,
        }),
      });
      if (!user.ok) {
        throw new Error("Error creating user");
      }
      const data = await user.json();
      // console.log(data);
      localStorage.setItem("user-jwt", data.token);
      loginBuyer(data.data.user);
      alert("User created successfully");
      navigate("/");
    } catch (err) {
      console.error("Error during sign-up:", err);
      alert("An error occurred. Please try again.");
    }
  };

  return (
    <div className="flex justify-around w-screen h-screen bg-[url('/BG/LOGIN-BG.png')] bg-cover bg-center font-sans">
      <div className="h-screen w-6/12 flex justify-center items-center">
        <div className="w-6/12 h-3/4 shadow-lg">
          <div className="w-full h-15p flex justify-center items-center my-2 font-bold">
            <Link
              to="/some-path"
              className="w-5/6 h-75p text-black shadow-md hover:text-black rounded-full flex justify-around px-3 items-center text-xl transition-all duration-500"
            >
              <div className='bg-[url("/logo/Google-logo-without-name.png")] bg-cover bg-center w-22p h-80p'></div>
              <div>Sign up with google</div>
            </Link>
          </div>

          <div className="mx-auto w-90p border-b border-gray-500 mb-6"></div>

          <form
            onSubmit={handleSignUp}
            className="w-full h-70p flex items-center flex-col"
          >
            {/* Name */}
            <div className="w-5/6 h-30p flex flex-col justify-around">
              <input
                className="w-full h-70p text-2xl rounded-full border-2 border-gray-400 bg-gray-50 px-7"
                type="text"
                name="name"
                placeholder="Enter your name"
                required
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email */}
            <div className="w-5/6 h-30p flex flex-col justify-around">
              <input
                className="w-full h-70p text-2xl rounded-full border-2 border-gray-400 bg-gray-50 px-7"
                type="email"
                name="email"
                placeholder="Enter your email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Password */}
            <div className="w-5/6 h-30p flex flex-col justify-around">
              <input
                className="w-full h-70p text-2xl rounded-full border-2 border-gray-400 bg-gray-50 px-7"
                type="password"
                name="password"
                placeholder="Enter your password"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Confirm Password */}
            <div className="w-5/6 h-30p flex flex-col justify-around">
              <input
                className="w-full h-70p text-2xl rounded-full border-2 border-gray-400 bg-gray-50 px-7"
                type="password"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </div>

            <div className="w-full h-20p flex justify-center items-center my-2 mt-7">
              <button
                type="submit"
                className="w-5/6 h-100p border-2 text-black hover:text-black hover:bg-white border-green-300 rounded-full flex justify-center items-center text-2xl transition-all duration-500 bg-primary"
              >
                C R E A T E
              </button>
            </div>
            <div>
              Already have an account? <Link to="/login">Sign-in</Link>
            </div>
          </form>
        </div>
      </div>
      <div className="h-screen "></div>
    </div>
  );
}

export default SignUp;
