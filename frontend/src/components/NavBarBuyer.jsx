import '../index.css';
import {Link} from 'react-router-dom';
// import {useRef} from 'react'
import SearchBar from './SearchBar';

function NavBar(){
    // const inputRef = useRef(null);

//   const handleLinkClick = (e) => {
//     e.preventDefault(); // Prevent the default link navigation if necessary
//     inputRef.current?.focus(); // Focus the input field
//   };

    return(
        <div className='w-screen h-10 flex justify-between items-center font-san  font-bold text-xs md:text-base lg:text-lg px-2 md:px-5 md:h-100p lg:px-7 '>
            <Link to="/some-path" className="w-20  flex justify-center items-center">
                <img src="../../public/logo/NILE-LOGO-WITH-NAME-BG-REMOVED.png" 
                    className="w-full h-full object-contain md:w-24 lg:w-32" alt="Logo"/>
            </Link>


            <div className='h-full w-75p flex  justify-between items-center pr-2 md:w-60p lg:w-60p'>
                <SearchBar/> 
                <Link className=''>My Shop</Link>
                <Link className=''>My Account</Link>
                <Link className='rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5 md:size-7 text-primary">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>
                </Link>
            </div>
        </div>
    )

}

export default NavBar;