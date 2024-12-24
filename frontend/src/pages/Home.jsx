import React from 'react'
import logo from '../assets/logo.png'
import { useState, useRef } from 'react'
import { useGSAP} from '@gsap/react'
import gsap from 'gsap'
import 'remixicon/fonts/remixicon.css'
import LocationSearchPanel from '../components/LocationSearchPanel'
import VehiclePanel from '../components/VehiclePanel'
import ConfirmRide from '../components/ConfirmRide'
import LookingForDriver from '../components/LookingForDriver'
import WaitingForDriver from '../components/WaitingForDriver'



const Home = () => {
  const [pickup, setPickup]=useState('');
  const [destination, setDestination]=useState('');
  const [panelOpen, setPanelOpen]=useState(false);
  const panelRef= useRef(null);
  const panelCloseRef= useRef(null);
  const vehiclePanelRef= useRef(null);
  const [vehiclePanelOpen, setVehiclePanelOpen]= useState(false);
  const confirmRidePanelRef= useRef(null);
  const [confirmRidePanel, setConfrimRidePanel]= useState(false);
  const [vehicleFound, setVehicleFound]= useState(false);
  const vehicleFoundRef= useRef(null);
  const [waitingForDriver, setWaitingForDriver]= useState(false);
  const waitingForDriverRef= useRef(null);
  const submitHandler=(e)=>{
    e.preventDefault()
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current, {
          height: '70%',
          opacity: 1,
          padding:24
      })
      gsap.to(panelCloseRef.current, {
        opacity: 1
      })
    }else{
      gsap.to(panelRef.current, {
        height: '0%',
        opacity: 0
      })
      gsap.to(panelCloseRef.current, {
        opacity: 0
      })
    }
  }, [panelOpen])

  useGSAP(function(){
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current, {
        transform:'translateY(0)'
      })
    } else{
      gsap.to(vehiclePanelRef.current, {
        transform:'translateY(100%)'
      })
    }
    

  }, [vehiclePanelOpen])

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current, {
        transform:'translateY(0)'
      })
    } else{
      gsap.to(confirmRidePanelRef.current, {
        transform:'translateY(100%)'
      })
    }
  }, [confirmRidePanel])

  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current, {
        transform:'translateY(0)'
      })
    } else{
      gsap.to(vehicleFoundRef.current, {
        transform:'translateY(100%)'
      })
    }
  }, [vehicleFound])

  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current, {
        transform:'translateY(0)'
      })
    } else{
      gsap.to(waitingForDriverRef.current, {
        transform:'translateY(100%)'
      })
    }
  }, [waitingForDriver])

  return (
    <div className='h-screen relative overflow-hidden'>
      <img className='w-16 absolute left-6 top-5 ' src={logo} alt="logo" />
      <div  className='h-screen w-screen'>
        <img className='h-full w-full object-cover' 
        src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className=' flex flex-col justify-end h-screen absolute top-0 w-full '>
        <div className='h-[30%] p-6 bg-white relative'>

          <h5 ref={panelCloseRef} 
          onClick={()=>setPanelOpen(false)} 
          className='absolute top-3 right-2 text-2xl opacity-0 '>
          <i className="ri-arrow-down-wide-line"></i>
          </h5>
        <h4 className='text-2xl font-semibold'>Find a trip</h4>
        <form onSubmit={(e)=>{
          submitHandler(e);
        }}>
          <div className='line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full'></div>
          <input
          onClick={(e)=>{
            setPanelOpen(true);
          }}
          value={pickup}
          onChange={(e)=>{
            setPickup(e.target.value);
          }}
          className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5' 
          type="text" 
          placeholder='Add your pick up location'
          />
          <input 
           onClick={(e)=>{
            setPanelOpen(true);
          }}
          value={destination}
          onChange={(e)=>{
            setDestination(e.target.value);
          }}
          className='bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3' 
          type="text" 
          placeholder='Enter your destination'
          />
        </form>
        </div>
        <div ref={panelRef} className=' bg-white h-0'>
          <LocationSearchPanel  setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanelOpen}/>

        </div>
      </div>
      <div ref={vehiclePanelRef} 
      className='fixed w-full z-10 bottom-0 px-3 py-10 translate-y-full bg-white pt-12'>
      <VehiclePanel setConfirmRidePanel={setConfrimRidePanel} setVehiclePanel={setVehiclePanelOpen} />

      </div>
      <div ref={confirmRidePanelRef} 
      className='fixed w-full z-10 bottom-0 px-3 py-6 translate-y-full bg-white pt-12'>
      <ConfirmRide setConfirmRidePanel={setConfrimRidePanel} setVehicleFound={setVehicleFound} />
      </div>
      <div ref={vehicleFoundRef}
      className='fixed w-full z-10 bottom-0 px-3 py-6 translate-y-full bg-white pt-12'>
        <LookingForDriver setVehicleFound={setVehicleFound}/>
      </div>
      <div ref={waitingForDriverRef}
      className='fixed w-full z-10 bottom-0 px-3 py-6 translate-y-full bg-white pt-12'>
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver}/>
      </div>
      
    </div>
  ) 
}

export default Home