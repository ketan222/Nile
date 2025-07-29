import React, { createContext, useState, useEffect, useContext } from "react";

const Context = createContext();

function ContextProvider({ children }) {
  const [user, setUser] = useState(null);

  const [seller, setSeller] = useState(null);

  const [productId, setProductId] = useState("");

  const [search, setSearch] = useState("");

  const [cart, setCart] = useState([]);

  function setProductToBuy(product) {
    setCart(product);
  }
  function emptyProductToBuy() {
    setCart([]);
  }

  function setSearchProduct(value) {
    setSearch(value);
  }
  function clearSearchProduct() {
    setSearch("");
  }
  // Sync state to localStorage on login
  function loginBuyer(userData) {
    setUser(userData);
    console.log("User logged in:", userData);
    setSeller(null);
  }

  function logoutBuyer() {
    console.log("User logged out");
    setUser(null);
  }

  function loginSeller(sellerData) {
    console.log("Seller logged in:", sellerData);
    setSeller(sellerData);
    setUser(null);
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
        emptyProductToBuy,
        setProductToBuy,
        cart,
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
