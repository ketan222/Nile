import { useNavigate } from "react-router-dom";
import NavBarBuyer from "../components/NavBarBuyer";
import UserFotter from "../components/UserFotter";
import { useEffect, useState } from "react";
import RateProduct from "../components/RateProduct";

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();
  const [window, setWindow] = useState("");
  function closeWindow() {
    setWindow("");
  }
  useEffect(() => {
    try {
      async function getOrders() {
        const res = await fetch(
          "https://nile-r07t8zhyd-ketan222s-projects.vercel.app/api/user/myOrders",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("user-jwt")}`,
            },
          }
        );

        if (!res.ok) {
          throw new Error("Failed to fetch orders");
        }

        const data = await res.json(); // Correct way to parse JSON from response
        // console.log(data);
        setOrders([...data.data.orders].reverse());
      }
      getOrders();
    } catch (err) {
      alert("Cannot fetch orders, please try again later");
    }
  }, []);
  console.log(orders, " orders");
  if (orders.length === 0) {
    return (
      <div className="min-h-screen w-screen flex flex-col justify-between items-center border-2 border-black">
        <NavBarBuyer />
        <div className="text-2xl">No orders found. Loading..</div>
        <UserFotter />
      </div>
    );
  }
  // console.log(window + "+++++this");
  return (
    <div className="min-h-screen w-screen border-2 border-black flex flex-col justify-between items-center">
      <NavBarBuyer />
      {/* <div className="w-full h-full flex justify-center items-center relative"> */}
      <div className=" relative flex flex-col justify-between  flex-grow w-[90%] md:w-[70%] py-10">
        {window !== "" && (
          <RateProduct productId={window} closeWindow={closeWindow} />
        )}
        <div className="border-b-2 border-black text-2xl text-left px-5 py-3">
          Your Orders
        </div>
        <div className="flex-grow flex flex-col items-center gap-4 p-5">
          {orders.map((item) => (
            <div
              key={item._id}
              className="flex flex-row w-full h-[30%] border-b-2 border-gray-200 py-3 md:py-7 lg:py-10"
            >
              <div
                style={{
                  backgroundImage: `url(${item.product.productImage[0]})`,
                }}
                className=" w-24 md:w-[30%] bg-contain bg-no-repeat bg-center h-24 md:h-32"
              ></div>
              <div className=" flex flex-col flex-grow px-2 md:px-5 justify-evenly gap-1">
                <div className="text-base md:text-2xl text-left font-semibold">
                  {item.product.productName.split("").map((word, index) => {
                    if (index > 30) return null;
                    return word;
                  })}
                  ...
                </div>
                <div className="flex flex-row text-xs md:text-base">
                  <div>Status:</div>
                  <div>{item.paymentStatus}</div>
                </div>
                <div className="flex flex-row text-xs md:text-base">
                  <div>Order Placed:</div>
                  <div>
                    {new Date(item.orderDate).toLocaleDateString("en-IN", {
                      day: "2-digit",
                      month: "short",
                      year: "numeric",
                    })}
                  </div>
                </div>
                <div className="flex flex-row text-xs md:text-base">
                  <div>Total:</div>
                  <div>
                    {item.quantity * item.priceAtPurchase +
                      item.priceAtPurchase * item.quantity * 0.01}
                  </div>
                </div>
                <div className="flex flex-row text-xs md:text-base gap-3">
                  {/* <div className="py-1 px-3  flex flex-row justify-center items-center bg-secondary rounded-md">
                    Return
                  </div> */}
                  <div
                    className="py-1 px-3  text-xs md:text-base flex flex-row justify-center items-center   bg-primary rounded-md"
                    onClick={async () => {
                      // localStorage.setItem('cart', JSON.stringigy([]))
                      const cart = [];
                      const aa = {
                        quantity: 1,
                        product: {},
                      };
                      //   console.log(aa);
                      //   console.log(ItemTemplate.product._id);
                      const res = await fetch(
                        `https://nile-r07t8zhyd-ketan222s-projects.vercel.app/api/product/getProduct/${item.product._id}`,
                        {
                          method: "GET",
                          headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${localStorage.getItem(
                              "user-jwt"
                            )}`,
                          },
                        }
                      );
                      if (!res.ok) {
                        throw new Error("Failed to fetch product");
                      }
                      const data = await res.json();
                      aa.product = data.data.product;
                      cart.push(aa);
                      localStorage.setItem("cart", JSON.stringify(cart));
                      navigate("/BuyNow");
                    }}
                  >
                    Order Again
                  </div>
                </div>
              </div>
              <div className=" w-[20%] flex justify-center items-center text-base">
                <div
                  className="text-xs md:text-base rounded-md py-1 px-2 md:px-3 bg-secondary wrap-nowrap"
                  onClick={() => setWindow(item.product._id)}
                >
                  Rate Product
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* </div> */}
      <UserFotter />
    </div>
  );
}
export default Orders;
