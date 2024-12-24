import React from 'react'


const VehiclePanel = (props) => {
  
  return (
    <div>
        <h5 onClick={()=>
        props.setVehiclePanel(false)
      }
         className='p-1 text-center w-[93%] absolute top-0'>
          <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
          </h5>
        <h3 className='text-xl font-semibold mb-5'>Choose a Vehicle</h3>
        <div onClick={()=>{
          props.setConfirmRidePanel(true)
        }} 
        className='flex border-2 mb-2 active:border-black  rounded-xl p-3 w-full  items-center justify-between '>
          <img className='h-20' src="https://www.svgrepo.com/show/408292/car-white.svg" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'>Uber Go <span><i className="ri-user-fill"></i>4</span></h4>
            <h5 className='text-sm'>2 mins away</h5>
            <p className='text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>$193.20</h2>
        </div>
        <div
        onClick={()=>{
          props.setConfirmRidePanel(true)
        }} 
        className='flex border-2 mb-2 active:border-black rounded-xl p-3 w-full  items-center justify-between '>
          <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'>Uber Auto <span><i className="ri-user-fill"></i>3</span></h4>
            <h5 className='text-sm'>2 mins away</h5>
            <p className='text-xs text-gray-600'>Affordable, compact rides</p>
          </div>
          <h2 className='text-xl font-semibold'>$100.20</h2>
        </div>
        <div 
        onClick={()=>{
          props.setConfirmRidePanel(true)
        }} 
         className='flex border-2 active:border-black rounded-xl p-3 w-full  items-center justify-between '>
          <img className='h-14' src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png" alt="" />
          <div className=' w-1/2'>
            <h4 className='font-medium text-base'>Uber Moto <span><i className="ri-user-fill"></i>1</span></h4>
            <h5 className='text-sm'>3 mins away</h5>
            <p className='text-xs text-gray-600'>Affordable Motorcycle ride</p>
          </div>
          <h2 className='text-xl font-semibold'>$93.20</h2>
        </div>
    </div>
  )
}

export default VehiclePanel