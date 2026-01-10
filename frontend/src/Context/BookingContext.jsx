import React, {  createContext, useState } from 'react'
export const bookingDataContext = createContext()

function BookingContext({children}) {
    let [checkIn,setCheckIn]=useState("")
    let [checkOut,setCheckOut]=useState("")
    let [total,setTotal]=useState(0)
    let [night,setNight]=useState(0)
    let value={
        checkIn,setCheckIn,
        checkOut,setCheckOut,
        total,setTotal,
        night,setNight,
    }
  return (
    <div>
        <bookingDataContext.Provider value={value}>
            {children}
        </bookingDataContext.Provider>
    </div>
  )
}

export default BookingContext

