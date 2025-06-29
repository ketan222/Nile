import React, { createContext, useState, useEffect, useContext } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const [seller, setSeller] = useState(null);

  const [productId, setProductId] = useState("");

  const [search, setSearch] = useState("");

  function setSearchProduct(value) {
    setSearch(value);
  }
  function clearSearchProduct() {
    setSearch("");
  }
  // Sync state to localStorage on login
  function loginBuyer(userData) {
    setUser(userData);
    // localStorage.setItem("user", JSON.stringify(userData));
    setSeller(null);
    // localStorage.removeItem("seller");
  }

  function logoutBuyer() {
    setUser(null);
    // localStorage.removeItem("user");
  }

  function loginSeller(sellerData) {
    setSeller(sellerData);
    // localStorage.setItem("seller", JSON.stringify(sellerData));
    setUser(null);
    // localStorage.removeItem("user");
  }

  function logoutSeller() {
    setSeller(null);
    localStorage.removeItem("seller");
  }

  function setProductIdFunc(id) {
    setProductId(id);
  }

  function removeProductId() {
    setProductId(null);
  }

  return (
    <Context.Provider
      value={{
        user,
        seller,
        loginBuyer,
        loginSeller,
        logoutBuyer,
        logoutSeller,
        productId,
        setProductIdFunc,
        removeProductId,
        search,
        clearSearchProduct,
        setSearchProduct,
      }}
    >
      {children}
    </Context.Provider>
  );
}

function useCont() {
  return useContext(Context);
}

export { ContextProvider, useCont };
