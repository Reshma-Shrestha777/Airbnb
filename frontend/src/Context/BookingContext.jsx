import axios from 'axios'
import React, { createContext, useContext, useState } from 'react'
import { authDataContext } from './authContext'
import { userDataContext } from './userContext'
import { listingDataContext } from './listingContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
export const bookingDataContext = createContext()

function BookingContext({ children }) {
    let [checkIn, setCheckIn] = useState("")
    let [checkOut, setCheckOut] = useState("")
    let [total, setTotal] = useState(0)
    let [night, setNight] = useState(0)
    let { serverUrl } = useContext(authDataContext)
    let { getCurrentUser } = useContext(userDataContext)
    let { getListing } = useContext(listingDataContext)
    let [bookingData, setBookingData] = useState(null)
    let navigate = useNavigate()

    const handleBooking = async (id) => {
        try {
            let result = await axios.post(serverUrl + `/api/booking/create/${id}`, { checkIn, checkOut, totalRent: total }, { withCredentials: true })
            await getCurrentUser()
            await getListing()
            setBookingData(result.data)
            console.log(result.data)
            // setBookingData(false) <-- Removed to prevent clearing data
            navigate("/booked")
            toast.success("Booking Successful")

        } catch (error) {
            console.log(error)
            setBookingData(null)
            toast.error(error.response.data.message)
        }
    }

    const cancelBooking = async (id) => {
        try {
            let result = await axios.delete(serverUrl + `/api/booking/cancel/${id}`, { withCredentials: true })
            await getCurrentUser()
            await getListing()
            console.log(result.data)
            toast.success("Booking Cancelled Successfully")

        } catch (error) {
            console.log(error)
            toast.error(error.response.data.message)
        }

    }

    let value = {
        checkIn, setCheckIn,
        checkOut, setCheckOut,
        total, setTotal,
        night, setNight,
        bookingData, setBookingData,
        handleBooking, cancelBooking

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

