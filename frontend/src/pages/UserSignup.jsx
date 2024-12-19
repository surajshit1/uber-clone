import React from 'react'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const UserSignup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});
  

  const submitHandler= (e)=>{
    e.preventDefault();
    setUserData({
      fullName:{
        firstName: firstName,
        lastName: lastName
      },
      email: email,
      password: password
    })
    
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
   
  }
  return (
    <div className='p-7 h-screen flex flex-col justify-between'>
      <div>
      <img className='w-16 mb-10 ' src={logo} alt="logo" />
      <form onSubmit={submitHandler}>
        <h3 className='text-base font-medium mb-2'>What's your name</h3>
        <div className='flex gap-4 mb-5'>
        <input 
         required 
         type="text" 
         placeholder='Firstname'
         value={firstName}
         onChange={(e)=>setFirstName(e.target.value)}
         className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
         />
         <input 
         required 
         type="text" 
         placeholder='Lastname'
         value={lastName}
         onChange={(e)=>setLastName(e.target.value)}
         className='bg-[#eeeeee]  rounded px-4 py-2 border w-1/2 text-lg placeholder:text-sm'
         />
        </div>

        <h3 className='text-base font-medium mb-2'>What's your email</h3>
        <input 
         required 
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         type="email" 
         placeholder='email@example.com' 
         className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
         />
        <h3 className='text-base font-medium mb-2'>Enter Password</h3>
        <input 
         required
         value={password}
         onChange={(e)=> setPassword(e.target.value)}
         type="password" 
         placeholder='password' 
         className='bg-[#eeeeee] mb-5 rounded px-4 py-2 border w-full text-lg placeholder:text-sm'
         autoComplete='on'
         />
        <button className='bg-[#111] text-white font-semibold mb-5 rounded px-4 py-2  w-full text-lg placeholder:text-base'>Sign Up</button>

        <p className='text-center'>Already have an account? <Link to={'/login'} className='text-blue-600'>Login here</Link></p>
      </form>
      </div>
      <div>
        <Link to={'/captain-login'} className='text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg bg-[#10b461] hover:bg-[#59c58f] flex items-center justify-center'>Sign Up as Captain</Link>
      </div>
    </div>
  )
}

export default UserSignup