import Booking from "../model/booking.model.js"
import Listing from "../model/listing.model.js"
import User from "../model/user.model.js"

export const createBooking = async (req, res) => {
  try {
    let { id } = req.params
    let { checkIn, checkOut, totalRent } = req.body

    let listing = await Listing.findById(id)
    if (!listing) {
      return res.status(404).json({ message: "Sorry! Listing not found." })
    }
    if (new Date(checkIn) >= new Date(checkOut)) {
      return res.status(400).json({ message: "Invalid checkIn/checkOut date" })
    }
    if (listing.isBooked) {
      return res.status(400).json({ message: "Sorry! listing is already Booked." })
    }
    let booking = await Booking.create({
      checkIn,
      checkOut,
      totalRent,
      host: listing.host,
      guest: req.userId,
      listing: listing._id
    })
    await booking.populate("host", "email");
    let user = await User.findByIdAndUpdate(req.userId, {
      $push: { booking: booking._id }
    }, { new: true })
    if (!user) {
      return res.status(404).json({ message: "Sorry! User not found." })
    }
    listing.guest = req.userId
    listing.isBooked = true
    await listing.save()
    return res.status(201).json(booking)

  } catch (error) {

    return res.status(500).json({ message: `Booking error! ${error}` })
  }
}

export const cancelBooking = async (req, res) => {
  try {
    let { id } = req.params

    if (id === "undefined") {
      return res.status(400).json({ message: "Invalid ID provided" })
    }

    let booking = null;

    // 1. Try finding booking directly
    try {
      booking = await Booking.findById(id)
    } catch (e) {
      // Ignore cast error here, might be a valid ID for listing but not booking? No, ObjectIds format is same. 
      // But if id is invalid format, findById throws.
      // We catch it and proceed to try listing lookup if needed, though usually same format.
    }

    // 2. If not found, try finding listing and getting active booking
    if (!booking) {
      try {
        let listing = await Listing.findById(id)
        if (listing && listing.isBooked) {
          booking = await Booking.findOne({ listing: listing._id, status: "booked" })
        }
      } catch (e) { }
    }

    if (!booking) {
      return res.status(404).json({ message: "Booking not found" })
    }

    let listing = await Listing.findByIdAndUpdate(booking.listing, { isBooked: false, guest: null })
    // Remove booking from user's list
    let user = await User.findByIdAndUpdate(booking.guest, {
      $pull: { booking: booking._id }
    }, { new: true })

    await Booking.findByIdAndDelete(booking._id)

    if (!user) {
      return res.status(404).json({ message: "Sorry! User not found." })
    }
    return res.status(200).json({ message: "Booking cancelled successfully" })
  } catch (error) {
    return res.status(500).json({ message: `Booking error! ${error}` })
  }
}