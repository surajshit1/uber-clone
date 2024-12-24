import React from 'react'
import logo from '../assets/logo.png'
import {Link} from 'react-router-dom'
import { IoArrowForward } from "react-icons/io5";

const   Start = () => {
  return (
    <div>
        <div className='bg-[url("/src/assets/light.jpg")] bg-cover bg-left-top h-screen w-full flex justify-between flex-col pt-8 '>
            <img className='w-20 ml-8 ' src={logo} alt="logo" />
            <div className='bg-white pb-7 py-4 px-4'>
                <h2 className='text-3xl font-bold'>Get Started with Uber</h2>
                <Link to={'/login'} className='flex items-center justify-center w-full bg-black text-white py-3 rounded mt-5'>Continue <IoArrowForward className='items-center ml-2 size-5'/></Link>
            </div>
        </div>
    </div>
  )
}

export default Start