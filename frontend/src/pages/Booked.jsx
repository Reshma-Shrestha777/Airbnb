import React, { useContext } from 'react'
import { GiConfirmed } from "react-icons/gi";
import { bookingDataContext } from '../Context/bookingContext';


function Booked() {
  let { bookingData } = useContext(bookingDataContext)
  return (
    <div className='w-[100vw] min-h-[100vh] flex items-center justify-center gap-[30px] bg-slate-200 flex-col'>
      <div className='w-[95%] max-w-[500px] h-[400px] bg-[white] flex items-center justify-center border-[1px] border-[#b5b5b5] flex-col gap-[20px] p-[20px] md:w-[80%] rounded-lg'>
        <div className='w-[100%] h-[50%] text-[20px] flex items-center flex-col gap-[20px] font-semibold'><GiConfirmed className='w-[100px] h-[80px] text-[green]' />Booking Confirmed</div>
        <div className='w-[100%] flex items-center justify-between text-[16px] md:text-[18px]'><span>Booking Id:</span><span>{bookingData._id}</span></div>
        <div className='w-[100%] flex items-center justify-between text-[16px] md:text-[18px]'><span>Owner Detail:</span><span>{bookingData.host?.email}</span></div>
        <div className='w-[100%] flex items-center justify-between text-[16px] md:text-[18px]'><span>Total Rent</span><span>{bookingData.totalRent}</span></div>
      </div>
    </div>
  )
}

export default Booked