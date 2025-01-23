import '../index.css';
import {Link} from 'react-router-dom';
import {useRef} from 'react'

function NavBar(){
    const inputRef = useRef(null);

  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent the default link navigation if necessary
    inputRef.current?.focus(); // Focus the input field
  };

    return(
        <div className='w-screen h-20 flex justify-between items-center font-san pl-12 font-bold'>
            <Link to="/some-path" className="w-8p h-20 bg-[url('../../public/logo/NILE-LOGO-WITH-NAME-BG-REMOVED.png')] bg-cover bg-center"></Link>
            <div className='h-full w-65p flex px-10 justify-between items-center'>
                <Link to="/some-path" className='bg-primary text-lg w-12p h-15 flex justify-center items-center rounded-full'>My Shop</Link>
                <div className="bg-primary w-55p h-15 rounded-full flex justify-between px-1 py-1 items-center">
                    <Link 
                        to="/some-path" 
                        onClick={handleLinkClick} 
                        className="w-7p h-100p flex justify-center items-center"
                    >
                        <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.5} 
                        stroke="currentColor" 
                        className="size-9"
                        >
                        <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" 
                        />
                        </svg>
                    </Link>

                    <input
                        ref={inputRef} // Attach ref to the input element
                        className="text-xl bg-secondary w-92p focus:outline-none h-100p rounded-full px-7"
                        type="email"
                        name="email"
                        placeholder="Search your interests..."
                    />
                </div>
                <Link to="/some-path" className='bg-primary text-lg w-15p h-15 flex justify-center items-center rounded-full'>My account</Link>
                <Link to="/some-path" className='w-15 h-15 bg-primary flex justify-center items-center rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#343a40" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </Link>
                <Link to="/some-path" className='w-15 h-15 bg-primary flex justify-center items-center rounded-full'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#343a40" className="size-6">
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                        />
                    </svg>
                </Link>
            </div>
        </div>
    )

}

export default NavBar;