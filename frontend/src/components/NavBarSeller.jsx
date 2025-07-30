import "../index.css";
import { Link } from "react-router-dom";
import { useCont } from "../Context/Context";
function NavBar({ setWindow }) {
  const { logoutSeller } = useCont();
  return (
    <div className="w-screen max-h-24 flex flex-row justify-between items-center font-sans  font-bold text-xs overflow-visible md:text-base lg:text-lg px-3 md:px-10 md:h-100p lg:px-14 ">
      <Link
        to="/some-path"
        className="w-16 h-16 md:w-24 md:h-24 lg:w-48 lg:h-48  flex justify-center items-center "
      >
        <img
          src="/logo/NILE-LOGO-WITH-NAME-BG-REMOVED.png"
          className="w-full h-full object-contain md:w-24 lg:w-32"
          alt="Logo"
        />
      </Link>

      <div className="h-full  flex  justify-between items-center pr-2 md:gap-10 lg:gap-16 gap-4">
        <Link className="" onClick={() => setWindow("updateProduct")}>
          Update Stock
        </Link>
        <Link className="" onClick={() => setWindow("addProduct")}>
          Add Product
        </Link>
        <Link
          to={"/loginSeller"}
          className="rounded-full bg-primary px-3 py-1 md:px-6 md:py-2"
          onClick={() => {
            localStorage.clear();
            logoutSeller;
          }}
        >
          Logout
        </Link>
      </div>
    </div>
  );
}

export default NavBar;
