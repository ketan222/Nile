import NavBarBuyer from "../components/NavBarBuyer";
import UserFotter from "../components/UserFotter";
import { useEffect } from "react";
import { useCont } from "../Context/Context.jsx";
import { useNavigate } from "react-router-dom";
function BuyNow() {
  const navigate = useNavigate();
  const currCart = JSON.parse(localStorage.getItem("cart"));
  console.log(currCart);
  if (!currCart) console.log("No cart found");
  useEffect(() => {
    return () => {
      localStorage.removeItem("cart");
    };
  }, []);
  const deliverTo = {
    name: "",
    phone: "",
    street: "",
    apt: "",
    city: "",
    state: "",
    postalCode: "",
    country: "",
  };
  async function handleBuyNow() {
    if (!currCart || currCart.length === 0) {
      console.log("No items in cart");
      return;
    }

    try {
      // Step 1: Validate stock
      for (const product of currCart) {
        console.log(product, " product");
        const res = await fetch(
          `http://localhost:8000/api/product/getProduct/${product.product._id}`
        );
        if (!res.ok) {
          throw new Error(`Failed to fetch product: ${product.product._id}`);
        }
        const latest = await res.json();

        if (product.quantity > latest.stock) {
          throw new Error(
            `Insufficient stock for ${latest.name}. In stock: ${latest.stock}, Requested: ${product.quantity}`
          );
        }
      }

      // Step 2: Place order
      const orderPromises = currCart.map((product) =>
        fetch(
          `http://localhost:8000/api/product/orderPlaced/${product.product._id}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${localStorage.getItem("user-jwt")}`,
            },
            body: JSON.stringify({
              name: deliverTo.name,
              phoneNo: deliverTo.phone,
              quantity: product.quantity,
              paymentMethod: "COD",
              paymentStatus: "Pending",
              shippingAddress: {
                street: deliverTo.street,
                city: deliverTo.city,
                state: deliverTo.state,
                postalCode: deliverTo.postalCode,
                country: deliverTo.country,
                apt: deliverTo.apt,
              },
            }),
          }
        ).then((resp) => {
          if (!resp.ok) {
            throw new Error(
              `Failed to place order for product: ${product.product._id}`
            );
          }
          alert("Order placed successfully for product:", product.product._id);
          navigate("/home");
        })
      );

      const results = await Promise.all(orderPromises);
      console.log("All orders placed successfully:", results);
      localStorage.removeItem("cart");
    } catch (error) {
      alert("Error placing order: " + error.message);
    }
  }

  if (currCart.length === 0) {
    navigate("/cart");
    // return (
    //   <div className="min-h-screen w-screen flex flex-col justify-center items-center border-2 border-black">
    //     <NavBarBuyer />
    //     <div className="text-2xl">loading</div>
    //     <UserFotter />
    //   </div>
    // );
  }

  return (
    <div className="min-h-screen w-screen flex flex-col justify-center items-center border-2 border-black">
      <NavBarBuyer />
      <div className="flex flex-col md:flex-row justify-evenly items-center flex-grow w-screen">
        <div className="h-full  w-[95%] md:w-[55%]  flex flex-col justify-center items-start gap-2">
          <div className="text-lg md:text-2xl font-bold">Deliver to.</div>
          <div className="w-full h-full border-2 border-gray-300 rounded-md flex flex-col gap-1 md:gap-2 p-2 md:p-4">
            <div className="text-lg flex flex-col items-start p-2 md:p-4">
              <div className="font-semibold text-lg md:text-2xl">
                Personal Details
              </div>
              <div className="flex flex-row justify-start items-start gap-3">
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-md px-2 py-1 w-full text-sm md:text-lg bg-secondary"
                  placeholder="Name"
                  onChange={(e) => (deliverTo.name = e.target.value)}
                  required={true}
                />
                <input
                  type="text"
                  className="border-2 border-gray-300 rounded-md px-2 py-1 w-full text-sm md:text-lg bg-secondary"
                  placeholder="Phone No."
                  onChange={(e) => (deliverTo.phone = e.target.value)}
                  required={true}
                />
              </div>
            </div>
            <div className="text-lg p-2 md:p-4 flex flex-col items-start">
              <div className="font-semibold text-lg md:text-2xl">Address</div>
              <div className="grid grid-cols-10 gap-4">
                <input
                  type="text"
                  className="col-span-5 border-2 border-gray-300 rounded-md px-2 py-1 w-full text-sm md:text-lg bg-secondary"
                  placeholder="Street Address"
                  onChange={(e) => (deliverTo.street = e.target.value)}
                  required={true}
                />
                <input
                  type="text"
                  className="col-span-5 border-2 border-gray-300 rounded-md px-2 py-1 w-full text-sm md:text-lg bg-secondary"
                  placeholder="Apt, Suite, etc."
                  onChange={(e) => (deliverTo.apt = e.target.value)}
                  required={true}
                />
                <input
                  type="text"
                  className="col-span-2 border-2 border-gray-300 rounded-md px-2 py-1 w-full text-sm md:text-lg bg-secondary"
                  placeholder="City"
                  onChange={(e) => (deliverTo.city = e.target.value)}
                  required={true}
                />
                <input
                  type="text"
                  className="col-span-3 border-2 border-gray-300 rounded-md px-2 py-1 w-full text-sm md:text-lg bg-secondary"
                  placeholder="State"
                  onChange={(e) => (deliverTo.state = e.target.value)}
                  required={true}
                />
                <input
                  type="text"
                  className="col-span-2 border-2 border-gray-300 rounded-md px-2 py-1 w-full text-sm md:text-lg bg-secondary"
                  placeholder="Postal Code"
                  onChange={(e) => (deliverTo.postalCode = e.target.value)}
                  required={true}
                />
                <input
                  type="text"
                  className="col-span-3 border-2 border-gray-300 rounded-md px-2 py-1 w-full text-sm md:text-lg bg-secondary"
                  placeholder="Country"
                  onChange={(e) => (deliverTo.country = e.target.value)}
                  required={true}
                />
              </div>
            </div>

            <div className="text-lg flex flex-col items-start p-2 md:p-4 gap-1 md:gap-2">
              <div className="font-semibold text-lg md:text-2xl">
                Payment Method
              </div>
              <div className="font-semibold text-sm md:text-lg bg-primary px-3 py-1 rounded-md">
                Cash On Delivery
              </div>
            </div>
          </div>
        </div>
        <div className="h-full w-[90%] md:w-[25%]  flex-col justify-between gap-4 ">
          <div className="text-2xl text-left">Summary</div>
          <div>
            <div className="flex flex-row justify-between  py-2 text-lg">
              <div>Subtotal</div>
              <div>
                {currCart.reduce(
                  (acc, item) => acc + item.product.price * item.quantity,
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
                {currCart
                  .reduce(
                    (acc, item) =>
                      acc + item.product.price * item.quantity * 0.01,
                    0
                  )
                  .toFixed(2)}
              </div>
            </div>
          </div>
          <div className="flex flex-row justify-between py-2 border-b-2 border-gray-400 border-t-2 text-xl">
            <div>Total</div>
            <div>
              {currCart.reduce(
                (acc, item) => acc + item.product.price * item.quantity,
                0
              ) +
                currCart.reduce(
                  (acc, item) =>
                    acc + item.product.price * item.quantity * 0.01,
                  0
                )}
            </div>
          </div>
          <div
            className="flex flex-row justify-center items-center bg-primary rounded-full py-2 my-2 text-xl "
            onClick={() => handleBuyNow()}
          >
            Order
          </div>
        </div>
      </div>
      <UserFotter />
    </div>
  );
}
export default BuyNow;
