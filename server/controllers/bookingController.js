import Booking from "../models/Booking.js";
import Room from "../models/Room.js";
import Hotel from "../models/Hotel.js";

//func to check room availability
const checkAvailability = async ({room, checkInDate, checkOutDate}) => {
    try {
        const bookings = await Booking.find({
            room,
         checkInDate : { $lte: checkOutDate },
            checkOutDate: { $gte: checkInDate },
        });
        const isAvailable = bookings.length === 0;
        return isAvailable;
    } catch (error) {
        console.error("Error checking room availability:", error);
        throw error;        

    }
}

//api to check room availability
//POST /api/bookings/check-availability
export const checkAvailabilityApi = async (req, res) => {
    try {
        const {room, checkInDate, checkOutDate} = req.body;
        const isAvailable = await checkAvailability({room, checkInDate, checkOutDate});
        res.json({ success: true, isAvailable });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
}


//api to create new booking
//POST /api/bookings/book
export const createBooking = async (req, res) => {
    try {
        const {room, hotel, checkInDate, checkOutDate, guests} = req.body;
        const user = req.user._id;
        //before booking check availability
        const isAvailable = await checkAvailability({room, checkInDate, checkOutDate});
        if (!isAvailable) {
            return res.status(400).json({ success: false, message: "Room is not available for the selected dates" });
        }
        //get totalPrice from room 
const roomData = await Room.findById(room).populate("hotel");
let totalPrice = roomData.pricePerNight;

//calc totalPrice based on nights
const checkIn = new Date(checkInDate);
const checkOut = new Date(checkOutDate);
const timeDiff = checkOut.getTime() - checkIn.getTime();
const nights = Math.ceil(timeDiff / (1000 * 3600 * 24));
totalPrice *= nights;
const booking = await Booking.create(
    { user, 
        room, 
        hotel:roomData.hotel._id, 
        checkInDate, 
        checkOutDate,
         guests:+guests, 
         totalPrice });
        res.json({ success: true, message: "Booking created successfully", booking });
    } catch (error) {
        console.error("Error creating booking:", error);
        res.status(500).json({ success: false, message: error.message });
    }
}

//api to get all bookings from a user
//GET /api/bookings/user
export const getUserBookings = async (req, res) => {
    try {
        const user = req.user._id;
        const bookings = await Booking.find({user}).populate("room").populate("room hotel").sort({ createdAt: -1 });
        res.json({ success: true, bookings });
    } catch (error) {
        res.status(500).json({ success: false, message: "failed to fetch bookings" });
    }
}

export const getHotelBookings = async (req, res) => {
    try {
        const hotel = await Hotel.findOne({ owner: req.auth.userId });
        if (!hotel) {
            return res.status(404).json({ success: false, message: "No Hotel found" });
        }
        const bookings = await Booking.find({ hotel: hotel._id }).populate("room hotel user").sort({ createdAt: -1 });
        //total bookings
        const totalBookings = bookings.length;
        //total revenue
        const totalRevenue = bookings.reduce((acc, booking) => acc + booking.totalPrice, 0);
        res.json({ success: true, bookings, totalBookings, totalRevenue });
    } catch (error) {
        res.status(500).json({ success: false,dashboardData: {totalBookings, totalRevenue , bookings }, message: "failed to fetch bookings" });
    }
}

//api to cancel a booking
//POST /api/bookings/cancel
export const cancelBooking = async (req, res) => {
    try {
        const { bookingId } = req.body;
        const booking = await Booking.find
        if (!booking) {
            return res.status(404).json({ success: false, message: "Booking not found" });
        }
        booking.status = "cancelled";
        await booking.save();
        res.json({ success: true, message: "Booking cancelled successfully" });
    } catch (error) {
        res.status(500).json({ success: false, message: "failed to cancel booking" });      
    }
    }
