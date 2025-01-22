import { useState } from 'react';
import './index.css';
import {Link} from 'react-router-dom';

function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [bg, setBg] = useState('#8ce99a');
    const [bg1, setBg1] = useState('#8ce99a');

    console.log(email, " " , password);
    return (
        <div className="flex justify-center items-center w-screen h-screen bg-[url('../public/BG/LOGIN-BG.png')] bg-cover bg-center">
            <div className='w-2/4 h-5/6 shadow-lg bg-white rounded-2xl '>
                <div className='w-full h-1/5 flex justify-center'>
                    <img
                        src="../public/logo/NILE-LOGO-WITH-NAME-BG-REMOVED.png"
                        alt="Styled Image"
                        className="h-full rounded-lg"
                        />
                </div>
                <div className='w-full h-3/4  flex justify-center font-sans'>
                    <div className=' w-4/5 h-full py-3'>
                        <div className='w-full' >
                            <h1 className='text-4xl font-sans'>L O G I N</h1>  
                        </div> 

                        <div  className='w-full  h-1/4  flex justify-center flex-col px-2 items-center my-'> 
                            <h1 className='w-5/6 text-xl font-sans py-3 text-left px-2'>e m a i l</h1> 
                            <input className='w-5/6 h-4/6 text-2xl rounded-lg	 border-2 border-gray-400 bg-gray-50 px-2' type="email" name="email" placeholder="Enter your email" required onChange={(e)=>setEmail(e.target.value)}></input>
                        </div>

                        <div  className='w-full h-1/4  flex justify-center flex-col px-2 items-center'>
                            <h3 className='w-5/6 text-xl font-sans py-3 text-left px-2'>p a s s w o r d</h3>
                            <input className='w-5/6 h-4/6 text-2xl rounded-lg	 border-2 border-gray-400 bg-gray-50 px-2' type="password" name="password" placeholder="Enter your password" required onChange={(e) => setPassword(e.target.value)}></input>
                        </div>

                        <div  className='w-full h-1/4 flex justify-center items-center my-2 font-bold'>
                            <Link to="/some-path" style={{'background-color':`${bg}`}} className='w-9/12 h-4/6 border-2 text-black hover:text-black border-green-300 rounded-lg flex justify-center items-center text-2xl transition-all duration-500' onMouseEnter={()=>setBg('#aff0b8')} onMouseOut={() => setBg('#8ce99a')}>
                                L O G I N
                            </Link>
                        </div>
                        <div  className='w-full h-1/4 flex justify-center items-center -my-5 text-black font-bold ' >
                            <Link to="/some-path" style={{'background-color':`${bg1}`}} className='w-9/12 h-4/6 border-2 border-green-300 rounded-lg flex justify-center items-center text-2xl transition-all duration-500' onMouseEnter={()=>setBg1('#aff0b8')} onMouseOut={() => setBg1('#8ce99a')}>
                                C R E A T E ?
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Login