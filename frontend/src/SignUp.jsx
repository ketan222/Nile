import { useState } from 'react';
import './index.css';
import {Link} from 'react-router-dom';

function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [bg, setBg] = useState('#8ce99a');
    // const [bg1, setBg1] = useState('#8ce99a');

    console.log(email, " " , password);
    return (
        <div className="flex justify-around w-screen h-screen bg-[url('../public/BG/LOGIN-BG.png')] bg-cover bg-center font-sans">
            <div className='h-screen w-6/12 flex justify-center items-center'>
                <div className='w-6/12 h-3/4  shadow-lg'>
                    <div  className='w-full h-15p flex justify-center items-center my-2 font-bold'>
                        <Link to="/some-path" className='w-5/6 h-75p text-black shadow-md hover:text-black rounded-full flex justify-around px-3 items-center text-xl transition-all duration-500'>
                            <div className='bg-[url("../public/logo/Google-logo-without-name.png")] bg-cover bg-center w-22p h-80p'></div>
                            <div>Sign up with google</div>
                        </Link>
                    </div>
                    <div className=' mx-auto w-90p border-b border-gray-500 mb-6'></div>
                    <div className='w-full h-70p flex items-center flex-col'>
                        <div className='w-5/6 h-30p flex flex-col justify-around'>
                            <div className='text-xl text-left'>E m a i l</div>                            <input className='w-full h-50p text-2xl rounded-full border-2 border-gray-400 bg-gray-50 px-7' type="email" name="email" placeholder="Enter your email" required onChange={(e)=>setEmail(e.target.value)}></input>

                        </div>
                        <div className='w-5/6 h-30p flex flex-col justify-around'>
                            <div className='text-xl text-left'>P a s s w o r d</div>
                            <input className='w-full h-50p text-2xl rounded-full border-2 border-gray-400 bg-gray-50 px-7' type="password" name="password" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)}></input>
                        </div>
                        <div  className='w-full h-15p flex justify-center items-center my-2 mt-7'>
                            <Link to="/some-path" className=' w-5/6 h-100p border-2 text-black hover:text-black hover:bg-white border-green-300 rounded-full flex justify-center items-center text-2xl transition-all duration-500 bg-primary'>
                                C R E A T E
                            </Link>
                        </div>
                        <div>Already have an account? Sign-in</div>
                    </div>
                </div>
            </div>
            <div className='h-screen '></div>
        </div>
    )
}
export default SignUp