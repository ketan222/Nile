import { useNavigate } from "react-router-dom";
import { useCont } from "../Context/Context";
import "../index.css";
import { useRef, useState } from "react";
function SearchBar() {
  const inputRef = useRef(null);
  const [val, setValue] = useState("");
  const { setSearchProduct } = useCont();
  const navigate = useNavigate();
  return (
    <div className="w-40p md:w-40p lg:w-50p h-60p border-2 border-primary rounded-full flex justify-between items-center px-1">
      <input
        ref={inputRef}
        type="text"
        placeholder="Search"
        value={val}
        onChange={(e) => setValue(e.target.value)}
        className=" text-left w-80p h-70p caret-textPrimary rounded-full pl-3 focus:outline-none focus:border-transparent text-textPrimary"
      />
      <div
        className=" h-70p flex justify-center items-center rounded-full cursor-pointer"
        onClick={() => {
          if (inputRef.current.value === null) {
            inputRef.current.focus();
          } else {
            setSearchProduct(val);
            navigate("/searchPage");
          }
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-5 text-primary md:size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
      </div>
    </div>
  );
}

export default SearchBar;
