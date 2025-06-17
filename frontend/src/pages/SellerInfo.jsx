import UserFotter from "../components/UserFotter.jsx";
import NavBarSeller from "../components/NavBarSeller.jsx";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
// import TagComponent from "./TagComponent.jsx";
import AddProduct from "../components/AddProduct.jsx";
import UpdateProduct from "../components/UpdateProduct.jsx";
import isTokenExpired from "../utils/TokenExpired.js";
import { useCont } from "../Context/Context.jsx";

export default function SellerInfo() {
  const [seller, setSeller] = useState(null);
  const [window, setWindow] = useState("");
  const [isEditingEmail, setIsEditingEmail] = useState(false);
  const [isEditingAccountHolderName, setIsEditingAccountHolderName] =
    useState(false);
  const [isEditingAccountNumber, setIsEditingAccountNumber] = useState(false);
  const [isEditingIFSCcode, setIsEditingIFSCcode] = useState(false);
  const [chg, setChg] = useState(0);
  const { logoutSeller } = useCont();
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const func1 = async function () {
      try {
        const token = localStorage.getItem("seller-jwt");
        if (!token || isTokenExpired(token)) {
          alert("Session expired. Please log in again.");
          logoutSeller();
          navigate("/loginSeller");
          return;
        }
        const res = await fetch("http://127.0.0.1:8000/api/seller/myAccount", {
          method: "GET",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });
        if (!res.ok) {
          throw new Error("seller jwt issue");
        }
        const data = await res.json();
        console.log(data.data.seller);
        setSeller(data.data.seller);
      } catch (err) {
        console.log(err);
      }
    };
    func1();
  }, [chg]);

  function removeWindow() {
    setWindow("");
  }

  async function handlePasswordChange(e) {
    e.preventDefault();
    try {
      if (newPassword !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }
      const token = localStorage.getItem("seller-jwt");
      if (!token || isTokenExpired(token)) {
        alert("Session expired. Please log in again.");
        logoutSeller();
        navigate("/loginSeller");
        return;
      }
      const res = await fetch(
        "http://127.0.0.1:8000/api/seller/updatePassword",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            newPassword: newPassword,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Cannot update the password");
      }
      alert("Password updated");
      logoutSeller();
      localStorage.removeItem("seller-jwt");
      navigate("/loginSeller");
      setChg((s) => s + 1);
    } catch (err) {
      console.log(err);
    }
  }
  async function handleEmailChange(e) {
    e.preventDefault();
    try {
      const token = localStorage.getItem("seller-jwt");
      // console.log(token, isTokenExpired);
      if (!token || isTokenExpired(token)) {
        alert("Session expired. Please log in again.");
        logoutSeller();
        navigate("/loginSeller");
        return;
      }
      const res = await fetch("http://127.0.0.1:8000/api/seller/updateEmail", {
        method: "POST",
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          email: seller.email,
        }),
      });
      if (!res.ok) {
        throw new Error("Cannot update the email");
      }
      alert("Email updated");
      setChg((s) => s + 1);
    } catch (err) {
      console.log(err);
    }
  }
  async function handleAccountHolderNameChange(e) {
    e.preventDefault();
    try {
      const token = localStorage.getItem("seller-jwt");
      if (!token || isTokenExpired(token)) {
        alert("Session expired. Please log in again.");
        logoutSeller();
        navigate("/loginSeller");
        return;
      }
      const res = await fetch(
        "http://127.0.0.1:8000/api/seller/updateAccountHolderName",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            accountHolderName: seller.bankDetails.accountHolderName,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Cannot update the Account holder name");
      }
      alert("Account holder name updated");
      setChg((s) => s + 1);
    } catch (err) {
      console.log(err);
    }
  }
  async function handleAccountNumberChange(e) {
    e.preventDefault();
    try {
      const token = localStorage.getItem("seller-jwt");
      if (!token || isTokenExpired(token)) {
        alert("Session expired. Please log in again.");
        logoutSeller();
        navigate("/loginSeller");
        return;
      }
      const res = await fetch(
        "http://127.0.0.1:8000/api/seller/updateAccountNumber",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            accountNumber: seller.bankDetails.accountNumber,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Cannot update the Account Number");
      }
      alert("Account Number updated");
      setChg((s) => s + 1);
    } catch (err) {
      console.log(err);
    }
  }
  async function handleIFSCChange(e) {
    e.preventDefault();
    try {
      const token = localStorage.getItem("seller-jwt");
      if (!token || isTokenExpired(token)) {
        alert("Session expired. Please log in again.");
        logoutSeller();
        navigate("/loginSeller");
        return;
      }
      const res = await fetch(
        "http://127.0.0.1:8000/api/seller/updateIfscCode",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ifscCode: seller.bankDetails.ifscCode,
          }),
        }
      );
      if (!res.ok) {
        throw new Error("Cannot update the ifsc code");
      }
      alert("IFSC code updated");
      setChg((s) => s + 1);
    } catch (err) {
      console.log(err);
    }
  }

  if (seller == null) {
    return <div>loading...</div>;
  }
  return (
    <>
      <NavBarSeller setWindow={setWindow} />

      {window === "updateProduct" && (
        <UpdateProduct removeWindow={removeWindow} />
      )}
      {window === "addProduct" && <AddProduct removeWindow={removeWindow} />}

      <div className="h-auto w-screen md:py-10  px-7 md:px-14 ">
        <div className="flex flex-row border-b-2 border-gray-500 justify-between py-1 px-4 ">
          <div className="flex flex-row items-center justify-center gap-5">
            <div className="text-xl md:text-2xl lg:text-5xl flex justify-center items-end">
              Relliance Seller
            </div>
          </div>
        </div>
        <div className=" px-10 flex flex-col md:flex-row  lg:py-14 gap-10 items-center justify-between ">
          <div className="flex flex-col gap-2 items-start justify-center  w-full px-5 md:px-0 py-5 md:gap-8">
            <div className="flex flex-row items-center justify-between gap-5 w-full">
              <div className="text-base md:text-xl lg:text-3xl flex justify-center items-end whitespace-nowrap">
                Email:
                {isEditingEmail ? (
                  <input
                    type="email"
                    value={seller.email}
                    onChange={(e) =>
                      setSeller((s) => ({ ...s, email: e.target.value }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        if (e.target.value.trim().length > 0) {
                          handleEmailChange(e);
                        } else return;
                        setIsEditingEmail(false);
                      }
                    }}
                    autoFocus
                    className="border border-gray-300  px-2 py-1 text-sm md:text-base lg:text-xl outline-none bg-secondary rounded-md"
                  />
                ) : (
                  `${" " + seller.email}`
                )}
              </div>
              <div
                className="text-sm md:text-base lg:text-xl flex justify-center items-end text-primary cursor-pointer"
                onClick={() => {
                  setIsEditingEmail(true);
                  setIsEditingAccountHolderName(false);
                  setIsEditingAccountNumber(false);
                  setIsEditingIFSCcode(false);
                }}
              >
                edit
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-5 w-full">
              <div className="text-base md:text-xl lg:text-3xl flex justify-center items-end whitespace-nowrap">
                Account Holdername:
                {isEditingAccountHolderName ? (
                  <input
                    type="username"
                    value={seller.bankDetails.accountHolderName}
                    onChange={(e) =>
                      setSeller((s) => ({
                        ...s,
                        bankDetails: {
                          ...s.bankDetails,
                          accountHolderName: e.target.value,
                        },
                      }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        if (e.target.value.trim().length > 0)
                          handleAccountHolderNameChange(e);
                        else return;
                        setIsEditingAccountHolderName(false);
                      }
                    }}
                    autoFocus
                    className="border border-gray-300  px-2 py-1 text-sm md:text-base lg:text-xl outline-none bg-secondary rounded-md"
                  />
                ) : (
                  `${" " + seller.bankDetails.accountHolderName}`
                )}
              </div>
              <div
                className="text-sm md:text-base lg:text-xl flex justify-center items-end text-primary cursor-pointer"
                onClick={() => {
                  setIsEditingEmail(false);
                  setIsEditingAccountHolderName(true);
                  setIsEditingAccountNumber(false);
                  setIsEditingIFSCcode(false);
                }}
              >
                edit
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-5 w-full">
              <div className="text-base md:text-xl lg:text-3xl flex justify-center items-end whitespace-nowrap">
                Account Number:
                {isEditingAccountNumber ? (
                  <input
                    type="email"
                    value={seller.bankDetails.accountNumber}
                    onChange={(e) =>
                      setSeller((s) => ({
                        ...s,
                        bankDetails: {
                          ...s.bankDetails,
                          accountNumber: e.target.value,
                        },
                      }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        if (e.target.value.trim().length > 0)
                          handleAccountNumberChange(e);
                        else return;
                        setIsEditingAccountNumber(false);
                      }
                    }}
                    autoFocus
                    className="border border-gray-300  px-2 py-1 text-sm md:text-base lg:text-xl outline-none bg-secondary rounded-md"
                  />
                ) : (
                  `${" " + seller.bankDetails.accountNumber}`
                )}
              </div>
              <div
                className="text-sm md:text-base lg:text-xl flex justify-center items-end text-primary cursor-pointer"
                onClick={() => {
                  setIsEditingEmail(false);
                  setIsEditingAccountHolderName(false);
                  setIsEditingAccountNumber(true);
                  setIsEditingIFSCcode(false);
                }}
              >
                edit
              </div>
            </div>
            <div className="flex flex-row items-center justify-between gap-5 w-full">
              <div className="text-base md:text-xl lg:text-3xl flex justify-center items-end whitespace-nowrap">
                IFSC Code:
                {isEditingIFSCcode ? (
                  <input
                    type="email"
                    value={seller.bankDetails.ifscCode}
                    onChange={(e) =>
                      setSeller((s) => ({
                        ...s,
                        bankDetails: {
                          ...s.bankDetails,
                          ifscCode: e.target.value,
                        },
                      }))
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        if (e.target.value.trim().length > 0)
                          handleIFSCChange(e);
                        else return;
                        setIsEditingIFSCcode(false);
                      }
                    }}
                    autoFocus
                    className="border border-gray-300  px-2 py-1 text-sm md:text-base lg:text-xl outline-none bg-secondary rounded-md"
                  />
                ) : (
                  `${" " + seller.bankDetails.ifscCode}`
                )}
              </div>
              <div
                className="text-sm md:text-base lg:text-xl flex justify-center items-end text-primary cursor-pointer"
                onClick={() => {
                  setIsEditingEmail(false);
                  setIsEditingAccountHolderName(false);
                  setIsEditingAccountNumber(false);
                  setIsEditingIFSCcode(true);
                }}
              >
                edit
              </div>
            </div>
          </div>
          <div className="flex w-full flex-col justify-between items-center rounded-md shadow-gray-300 shadow-md gap-3 py-5 px-5 max-w-sm mb-10">
            <div className="text-xl lg:text-3xl">Change Password</div>
            <input
              className="bg-secondary rounded-md w-full h-10 lg:h-11 px-5 text-sm lg:text-base text-center outline-none"
              placeholder="New password"
              type="password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
            ></input>
            <input
              className="bg-secondary rounded-md w-full h-10 lg:h-11 px-5 text-sm lg:text-base text-center outline-none"
              placeholder="Confirm password"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            ></input>
            <div
              onClick={(e) => handlePasswordChange(e)}
              className="bg-primary w-full rounded-md h-8 flex lg:h-11 justify-center items-center text-base lg:text-lg"
            >
              Update Password
            </div>
          </div>
        </div>
      </div>
      <UserFotter />
    </>
  );
}
