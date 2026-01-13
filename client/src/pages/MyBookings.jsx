// // import React, { useState } from 'react'
// // import Title from '../components/Title'
// // import { assets } from '../Assets/assets/assets';
// // import { userBookingsDummyData } from '../Assets/assets/assets';

// // const MyBookings = () => {

// // const [bookings,setBookings] = useState(userBookingsDummyData);


// //   return (
// //     <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32  '>
// //       <Title title='My Bookings' align='left' subTitle='Easily manage your past , present and future upcoming 
// //       hotel reservations in one place .Plan your trips seamlessly with just a few clicks ' />

// // <div className='max-w-6xl mt-8 w-full text-gray-800'>
// //     <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] 
// //     w-full border-b border-gray-300 font-medium text-base py-3  '>
// //         <div className='w-1/3'>
// //             Hotels
// //         </div>
// //         <div className='w-1/3'>
// //             Date and Timings 
// //         </div>
// //         <div className='w-1/3'>
// //            Payment
// //         </div>

// // {bookings.map((booking)=>(
// //     <div className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t ' key={booking._id}>

// // {/* hoteldetails */}
// // <div className='flex flex-col md:flex-row '>
// // <img className='md:w-44 rounded shadow object-cover' src={booking.room.images[0]} alt="hi" />
// // <div className='flex flex-col gap-1.5 max-md:mt-3 md:ml-4  '>
// //     <p className='font-playfair text-2xl'> 
// // {booking.hotel.name}
// //   <span className='font-inter text-sm'>
// // {booking.room.roomType}
// //     </span>  
// //     </p>
// //     <div className='flex items-center gap-1 text-sm text-gray-500 '>
// //         <img className='' src={assets.locationIcon} alt="li" />
// //         <span className=''>{booking.hotel.address}</span>
// //     </div>

// //        <div className='flex items-center gap-1 text-sm text-gray-500 '>
// //         <img className='' src={assets.guestsIcon} alt="li" />
// //         <span className=''>{booking.guests}</span>
// //     </div>

// //     <p className='text-base '>Total: ${booking.totalPrice}</p>
    
// // </div>
// // </div>

// // {/* date n time */}
// // <div>

// // </div>

// // {/* Pay status */}
// // <div>

// //     <div></div>

// // </div>

// //     </div>
// // ))}


// //     </div>
// // </div>


// //     </div>
// //   )
// // }

// // export default MyBookings


// import React, { useState } from 'react'
// import Title from '../components/Title'
// import { assets } from '../Assets/assets/assets';
// import { userBookingsDummyData } from '../Assets/assets/assets';

// const MyBookings = () => {
//     const [bookings, setBookings] = useState(userBookingsDummyData);

//     return (
//         <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
//             <Title 
//                 title='My Bookings' 
//                 align='left' 
//                 subTitle='Easily manage your past, present and future upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks.' 
//             />

//             <div className='max-w-6xl mt-8 w-full text-gray-800'>
//                 {/* Header Row */}
//                 <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] 
//                     w-full border-b border-gray-300 font-medium text-base py-3'>
//                     <div>Hotels</div>
//                     <div>Date and Timings</div>
//                     <div>Payment</div>
//                 </div>

//                 {/* Booking Items */}
//                 {bookings.map((booking) => (
//                     <div 
//                         className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] 
//                             w-full border-b border-gray-300 py-6 first:border-t' 
//                         key={booking._id}
//                     >
//                         {/* Hotel details */}
//                         <div className='flex flex-col md:flex-row'>
//                             <img 
//                                 className='w-full md:w-44 h-48 md:h-32 rounded shadow object-cover' 
//                                 src={booking.room.images[0]} 
//                                 alt="hotel" 
//                             />
//                             <div className='flex flex-col gap-1.5 max-md:mt-3 md:ml-4'>
//                                 <p className='font-playfair text-2xl'>
//                                     {booking.hotel.name}
//                                     <span className='font-inter text-sm ml-2 text-gray-600'>
//                                          ({booking.room.roomType})
//                                     </span>  
//                                 </p>
//                                 <div className='flex items-center gap-1 text-sm text-gray-500'>
//                                     <img src={assets.locationIcon} alt="location" className='w-4 h-4' />
//                                     <span>{booking.hotel.address}</span>
//                                 </div>
//                                 <div className='flex items-center gap-1 text-sm text-gray-500'>
//                                     <img src={assets.guestsIcon} alt="guests" className='w-4 h-4' />
//                                     <span>Guests: {booking.guests}</span>
//                                 </div>
//                                 <p className='text-base font-medium'>Total: ${booking.totalPrice}</p>
//                             </div>
//                         </div>

//                         {/* Date and Time */}
//                         <div className='flex flex-row md:items-center md:gap-12 gap-8 mt-3 '>
//                             <div className='flex flex-col'>
//                                 <p className='font-medium'>Check-In:</p>
//                                 <p className='text-gray-500 text-sm'>{new Date(booking.checkInDate).toDateString() }</p>
//                                 {/* <p className='text-sm text-gray-500'>{booking.checkInTime}</p> */}
//                             </div>


//                              <div className='flex flex-col'>
//                                 <p className='font-medium'>Check-Ou:</p>
//                                 <p className='text-gray-500 text-sm'>{new Date(booking.checkOutDate).toDateString() }</p>
//                                 {/* <p className='text-sm text-gray-500'>{booking.checkInTime}</p> */}
//                             </div>
//                         </div>

//                         {/* Payment Status */}
//                         <div className='flex flex-col items-center justify-center pt-3'>
//                             <div className='flex items-center gap-2 '>
//                                 <div className={`h-3 w-3 rounded-full ${
//                                 booking.isPaid ? ' bg-green-500'
//                                     : 'bg-red-500' 
//                             }`}>
//                                     <p className={`text-sm ${
//                                 booking.isPaid ? ' text-green-500'
//                                     : 'text-red-500' 
//                             }`}>
// {booking.isPaid ? "Paid " : "Unpaid "}
//                                     </p>
//                                 </div>
//                                 {booking.paymentStatus}
//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>
//         </div>
//     );
// }

// export default MyBookings;



import React, { useState } from 'react'
import Title from '../components/Title'
import { assets } from '../Assets/assets/assets';
import { userBookingsDummyData } from '../Assets/assets/assets';

const MyBookings = () => {
    const [bookings, setBookings] = useState(userBookingsDummyData);

    return (
        <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
            <Title 
                title='My Bookings' 
                align='left' 
                subTitle='Easily manage your past, present and future upcoming hotel reservations in one place. Plan your trips seamlessly with just a few clicks.' 
            />

            <div className='max-w-6xl mt-8 w-full text-gray-800'>
                {/* Header Row */}
                <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] 
                    w-full border-b border-gray-300 font-medium text-base py-3'>
                    <div className='pl-4'>Hotels</div>
                    <div>Date and Timings</div>
                    <div>Payment</div>
                </div>

                {/* Booking Items */}
                {bookings.map((booking) => (
                    <div 
                        className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] 
                            w-full border-b border-gray-300 py-6 first:border-t' 
                        key={booking._id}
                    >
                        {/* Hotel details */}
                        <div className='flex flex-col md:flex-row'>
                            <img 
                                className='w-full md:w-44 h-48 md:h-32 rounded-lg shadow-md object-cover' 
                                src={booking.room.images[0]} 
                                alt="hotel" 
                            />
                            <div className='flex flex-col gap-1.5 max-md:mt-3 md:ml-6'>
                                <p className='font-playfair text-2xl'>
                                    {booking.hotel.name}
                                    <span className='font-inter text-sm ml-2 text-gray-600'>
                                         ({booking.room.roomType})
                                    </span>  
                                </p>
                                <div className='flex items-center gap-1 text-sm text-gray-500'>
                                    <img src={assets.locationIcon} alt="location" className='w-4 h-4' />
                                    <span>{booking.hotel.address}</span>
                                </div>
                                <div className='flex items-center gap-1 text-sm text-gray-500'>
                                    <img src={assets.guestsIcon} alt="guests" className='w-4 h-4' />
                                    <span>Guests: {booking.guests}</span>
                                </div>
                                <p className='text-base font-medium mt-2'>Total: ${booking.totalPrice}</p>
                            </div>
                        </div>

                        {/* Date and Time */}
                        <div className='flex flex-col md:flex-row md:items-center md:gap-12 gap-4 mt-4 md:mt-0 md:pl-4'>
                            <div className='flex flex-col'>
                                <p className='font-medium text-gray-700'>Check-In:</p>
                                <p className='text-gray-600 text-sm font-medium'>{new Date(booking.checkInDate).toDateString()}</p>
                                <p className='text-xs text-gray-500'>Check-in time: {booking.checkInTime}</p>
                            </div>
                            <div className='flex flex-col'>
                                <p className='font-medium text-gray-700'>Check-Out:</p>
                                <p className='text-gray-600 text-sm font-medium'>{new Date(booking.checkOutDate).toDateString()}</p>
                                <p className='text-xs text-gray-500'>Check-out time: {booking.checkOutTime}</p>
                            </div>
                        </div>

                        {/* Payment Status */}
                        <div className='flex flex-col items-start md:items-center justify-center pt-4 md:pt-0'>
                            <div className='flex items-center gap-2'>
                                <div className={`h-3 w-3 rounded-full ${
                                    booking.isPaid ? 'bg-green-500' : 'bg-red-500' 
                                }`}></div>
                                <p className={`text-sm font-medium ${
                                    booking.isPaid ? 'text-green-600' : 'text-red-600' 
                                }`}>
                                    {booking.isPaid ? "Paid" : "Unpaid"}
                                </p>
                            </div>
                            {!booking.isPaid && (
                                <button className='px-4 py-1.5 mt-4 text-xs border
                                 border-gray-400 rounded-full hover:bg-gray-50 transition-all cursor-pointer'>
Pay Now 
                                </button>
                            )}
                            <p className='text-xs text-gray-500 mt-1 md:text-center'>
                                {booking.isPaid ? `Paid on ${new Date(booking.paymentDate).toLocaleDateString()}` : "Pending payment"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default MyBookings;