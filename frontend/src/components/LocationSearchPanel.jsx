import React from 'react'

const LocationSearchPanel = (props) => {
    //sample array for loaction
    const locations=[
        'Dada dev mandir Dwarka Sector-8, New Delhi, 110077',
        'Ayushman Hospital, Dwarka Sector-10, New Delhi, 110077',
        'Manipal Hospital, Dwarka Sector-3, New Delhi, 110077'
    ];
  return (
    <div>
        {/* sample loaction sample data */}
        {
            locations.map(function(elem, idx){
                return <div key={idx} onClick={()=>{
                    props.setVehiclePanel(true)
                    props.setPanelOpen(false)
                    }} className='flex gap-4 items-center my-2 justify-start border-2 p-3 rounded-xl  border-gray-100 active:border-black '>
                <h2 className='bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full'>
                    <i className="ri-map-pin-fill "></i></h2>
                <h4 className='font-medium'>{elem}</h4>
            </div>
            })
        }
        
    </div>
  )
}

export default LocationSearchPanel