import NavBarBuyer from "../components/NavBarBuyer";
import UserFooter from "../components/UserFotter";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Cart() {
  const [cart, setCart] = useState([]);
  const navigator = useNavigate();
  useEffect(() => {
    try {
      const getCart = async () => {
        const response = await fetch(
          "https://nile-r07t8zhyd-ketan222s-projects.vercel.app/api/user/myCart",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("user-jwt")}`,
            },
          }
        );
        if (!response.ok) {
          throw new Error("Failed to fetch cart");
        }
        const data = await response.json();
        // cart = data.cart;
        setCart(data.cart);
      };
      getCart();
    } catch (error) {
      console.error(error);
    }
  }, []);
  const [loading, setLoading] = useState(false);

  function handleQuantityChange(id, quantity) {
    try {
      setLoading(true);
      async function updateQuantity() {
        const fetchCart = await fetch(
          `https://nile-r07t8zhyd-ketan222s-projects.vercel.app/api/user/CartProductChgQuantity/${id}`,
          {
            method: "PATCH",
            headers: {
              "Content-Type": "application/json",
              Authorization: "Bearer " + localStorage.getItem("user-jwt"),
            },
            body: JSON.stringify({ quantity }),
          }
        );
        if (!fetchCart.ok) {
          throw new Error("Failed to update quantity");
        }
        const updatedCart = await fetchCart.json();
        setCart(updatedCart.cart);
      }
      updateQuantity();
    } catch (err) {
      console.error("Error updating quantity:", err);
    } finally {
      setLoading(false);
    }
  }
  // console.log(cart, " cart");
  if (loading) {
    return (
      <div className="min-h-screen w-screen flex flex-col justify-between items-center">
        <NavBarBuyer />
        <div className="text-2xl">Loading...</div>
        <UserFooter />
      </div>
    );
  }
  if (cart.length === 0) {
    return (
      <div className="min-h-screen w-screen flex flex-col justify-between items-center">
        <NavBarBuyer />
        <div className="text-2xl">Your cart is empty</div>
        <UserFooter />
      </div>
    );
  }
  return (
    <div className="min-h-screen w-screen  flex flex-col justify-between items-center">
      <NavBarBuyer />
      <div className="flex flex-col md:flex-row justify-evenly py-10 items-start border-b-2 border-gray-200 flex-grow w-[90%]">
        <div className="  flex flex-col justify-between items-center h-[90%] w-[100%] md:w-[60%]">
          <div className="bg-gray-200 w-[100%] md:w-[95%] px-2 md:px-6 py-3 text-left text-lg">{`Your cart: ${cart.length}`}</div>
          <div className="w-[90%] px-1 md:px-7 py-3 flex flex-col gap-5">
            {cart.map((item, index) => (
              <div
                className="flex flex-row w-full h-[10%] border-b-2 border-gray-200"
                key={item._id}
              >
                {/* {console.log(item.product.productImage[0], " image")} */}
                <div
                  className="w-[20%] bg-contain bg-no-repeat bg-center h-24"
                  style={{
                    backgroundImage: `url(${item.product.productImage[0]})`,
                  }}
                ></div>

                <div className=" flex flex-col flex-grow px-1 md:px-5 justify-evenly">
                  <div className="text-lg md:text-xl text-left">
                    {item.product.productName.split(" ").map((word, index) => {
                      if (index > 3) return null;
                      if (word.length < 10) {
                        return word + " ";
                      }
                    })}
                    ...
                  </div>
                  <div className="flex flex-row gap-3 ">
                    <div className="flex flex-row justify-evenly items-center bg-gray-200 px-3 py-1 gap-2 rounded-full ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-3 md:size-6"
                        onClick={() => handleQuantityChange(item._id, -1)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M5 12h14"
                        />
                      </svg>

                      <div className="text-xs md:text-sm ">{item.quantity}</div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-3 md:size-6"
                        onClick={() => handleQuantityChange(item._id, 1)}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 4.5v15m7.5-7.5h-15"
                        />
                      </svg>
                    </div>
                    <div
                      className="bg-gray-200 py-1 px-3 rounded-lg text-xs md:text-sm "
                      onClick={() =>
                        handleQuantityChange(item._id, -item.quantity)
                      }
                    >
                      Remove
                    </div>
                  </div>
                </div>
                <div className=" w-[20%] flex justify-center items-center text-base">
                  {item.product.price *
                    ((100 - item.product.discount) / 100) *
                    item.quantity}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="h-[90%] w-[100%] md:w-[30%] flex flex-col justify-center items-center ">
          <div className="flex w-[80%] md:w-full flex-col  h-full justify-between gap-4 ">
            <div className="text-2xl text-left">Summary</div>
            <div>
              <div className="flex flex-row justify-between  py-2 text-lg">
                <div>Subtotal</div>
                <div>
                  {cart.reduce(
                    (acc, item) =>
                      acc +
                      item.product.price *
                        ((100 - item.product.discount) / 100) *
                        item.quantity,
                    0
                  )}
                </div>
              </div>
              <div className="flex flex-row justify-between  py-2 text-lg">
                <div>Shipping</div>
                <div> 0</div>
              </div>
              <div className="flex flex-row justify-between  py-2 text-lg">
                <div>Estimated Tax</div>
                <div>
                  {cart
                    .reduce(
                      (acc, item) =>
                        acc +
                        item.product.price *
                          ((100 - item.product.discount) / 100) *
                          item.quantity *
                          0.01,
                      0
                    )
                    .toFixed(2)}
                </div>
              </div>
            </div>
            <div className="flex flex-row justify-between py-2 border-b-2 border-gray-400 border-t-2 text-xl">
              <div>Total</div>
              <div>
                {cart.reduce(
                  (acc, item) =>
                    acc +
                    item.product.price *
                      ((100 - item.product.discount) / 100) *
                      item.quantity,
                  0
                ) +
                  cart.reduce(
                    (acc, item) =>
                      acc +
                      item.product.price *
                        ((100 - item.product.discount) / 100) *
                        item.quantity *
                        0.01,
                    0
                  )}
              </div>
            </div>
            <div
              className="flex flex-row justify-center items-center bg-primary rounded-full py-2 text-xl"
              onClick={() => {
                // console.log(cart, " cart");
                localStorage.setItem("cart", JSON.stringify(cart));

                navigator("/BuyNow");
              }}
            >
              Checkout
            </div>
          </div>
        </div>
      </div>
      <UserFooter />
    </div>
  );
}
export default Cart;
