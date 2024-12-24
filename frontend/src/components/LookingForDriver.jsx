import React from 'react'

const LookingForDriver = (props) => {
  return (
    <div>
    <h5
      onClick={() => props.setVehicleFound(false)}
      className="p-1 text-center w-[93%] absolute top-0"
    >
      <i className="ri-arrow-down-wide-line text-3xl text-gray-200"></i>
    </h5>
    <h3 className="text-2xl font-semibold mb-5">Looking for a Driver</h3>
    <div className="flex flex-col gap-4 items-center ">
      {/* Car Image */}
      <img className='h-20' src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg" alt="" />
      {/* Location Info Pickup */}
      <div className="flex flex-col w-full  ">
        <div className="flex items-center gap-5 p-3 border-b-2">
        <i className="ri-map-pin-range-fill"></i>
          <div>
            <h3 className="text-lg font-medium">Dada dev Mandir</h3>
            <p className="text-sm -mt-1 text-gray-600">Dwarka, New Delhi</p>
          </div>
        </div>
        {/* Location Info Drop */}
        <div className="flex flex-col w-full gap-5 p-3 border-b-2">
        <div className="flex items-center gap-3">
        <i className="ri-map-pin-range-line"></i>
          <div>
            <h3 className="text-lg font-medium">Ayushman Hospital</h3>
            <p className="text-sm -mt-1 text-gray-600">Dwarka, New Delhi</p>
          </div>
        </div>
      </div>

        {/* Payment Info */}
        <div className="flex items-center gap-5  p-3 ">
        <i className="ri-bank-card-fill"></i>
          <div>
            <h3 className="text-lg font-medium">$193.20</h3>
            <p className="text-sm -mt-1 text-gray-600">Cash: Cash</p>
          </div>
        </div>
      </div>
    </div>
    
  </div>
  )
}

export default LookingForDriver