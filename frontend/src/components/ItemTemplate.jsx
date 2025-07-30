import { useNavigate } from "react-router-dom";

export function ItemTemplate({ item }) {
  // console.log(item);
  const productId = item._id;
  const navigate = useNavigate();

  const handleAddToCart = async function () {
    try {
      if (!user) navigate("/login");
      const token = localStorage.getItem("user-jwt");

      if (!token || isTokenExpired(token)) {
        alert("Session expired. Please log in again.");
        logoutBuyer();
        navigate("/login");
        return;
      }

      const resp = await fetch(
        `http://localhost:8000/api/product/addToCart/${productId}`,
        {
          method: "PATCH",
          headers: {
            "Content-type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (!resp.ok) {
        throw new Error("Error adding cart");
      }
      window.alert("Added to cart");
      // const data = await resp.json();
      // console.log(data);
      // loginBuyer(data.data.user);
    } catch (err) {
      alert("Cannot add to cart, Product outta stock");
    }
  };
  return (
    <div
      className="flex-none w-40 h-56 md:w-60 md:h-80 rounded-lg md:rounded-2xl overflow-hidden bg-white"
      onClick={() => {
        navigate(`/getProduct/${productId}`);
      }}
    >
      <div className="w-full h-55p">
        <img
          src={`${item.productImage[0]}`}
          className="w-full h-full object-contain"
          alt="Boat Earbuds"
        />
      </div>

      <div className="text-base md:text-2xl mx-2 md:mt-2 text-left">
        {item.productName.slice(0, 14) + "..."}
      </div>
      <div className="mx-2 text-xs md:text-base md:h-6 text-left">
        ⭐ ⭐ ⭐ ⭐ ⭐ ({item.rating.$numberDecimal})
      </div>
      <div className="mt-1 text-sm md:text-xl mx-2 md:mt-2 text-left">
        {item.price - (item.price * item.discount) / 100}
      </div>

      <div className="flex flex-row h-6 md:h-9 items-center justify-evenly mt-1">
        <div
          className="bg-primary text-xs md:text-base h-90p w-40p flex justify-center items-center rounded-md md:rounded-lg font-bold"
          onClick={async () => {
            const cart = [];
            const aa = {
              product: {},
              quantity: 1,
            };
            const resp = await fetch(
              `http://127.0.0.1:8000/api/product/getProduct/${item._id}`,
              {
                method: "GET",
                headers: {
                  "Content-Type": "application/json",
                  Authorization: `Bearer ${localStorage.getItem("user-jwt")}`,
                },
              }
            );
            if (!resp.ok) throw new Error("Cannot buy right now");
            const data = await resp.json();
            aa.product = data.data.product;
            cart.push(aa);

            localStorage.setItem("cart", JSON.stringify(cart));
            navigate("/BuyNow");
          }}
        >
          Buy Now
        </div>
        <div
          onClick={handleAddToCart}
          className="border-2 text-xs md:text-base border-primary text-primary h-90p w-50p flex justify-center items-center rounded-md md:rounded-lg font-bold"
        >
          Add to cart
        </div>
      </div>
    </div>
  );
}
