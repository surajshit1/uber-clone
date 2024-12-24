import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { CaptainDataContext } from '../context/CaptainContext';



const CaptainLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const {captain, setCaptain}=React.useContext(CaptainDataContext);

  const navigate= useNavigate();
  

  const submitHandler= async(e)=>{
    e.preventDefault();
    const captain= {email, password};

    const response= await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

    if(response.status===200){
      const data= response.data;
      setCaptain(data.captain);
      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }
    setEmail('');
    setPassword('');
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-10 ' src={logo} alt="logo" />
      <form onSubmit={submitHandler}>
        <h3 className='text-lg font-medium mb-2'>What's your email</h3>
        <input 
         required 
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         type="email" 
         placeholder='email@example.com' 
         className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
         />
        <h3 className='text-lg font-medium mb-2'>Enter Password</h3>
        <input 
         required
         value={password}
         onChange={(e)=> setPassword(e.target.value)}
         type="password" 
         placeholder='password' 
         className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
         />
        <button className='bg-[#111] text-white font-semibold mb-7 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Login</button>

        <p className='text-center'>Join as Captain? <Link to={'/captain-signup'} className='text-blue-600'>Register as a Captain
        </Link></p>
      </form>
      </div>
      <div>
        <Link to={'/login'} className='text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg bg-[#c559b9] hover:bg-[#c167b6] flex items-center justify-center'>Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin