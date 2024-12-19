import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'


const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler= (e)=>{
    e.preventDefault();
    setUserData({email, password});
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

        <p className='text-center'>New Here? <Link to={'/signup'} className='text-blue-600'>Create new Account</Link></p>
      </form>
      </div>
      <div>
        <Link to={'/captain-login'} className='text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg bg-[#10b461] hover:bg-[#59c58f] flex items-center justify-center'>Sign in as Captain</Link>
      </div>
    </div>
  )
}

export default UserLogin