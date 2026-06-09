// import React, { useState } from 'react'
// import { assets, dashboardDummyData } from '../../Assets/assets/assets';
// import Title from '../../components/Title';


// const Dashboard = () => {

// const[dashboardData ] = useState(dashboardDummyData);
// // const[dashboardData , setDashboardData] = useState(dashboardDummyData);

//   return (
//     <div>
//     <Title align='left' font='outfit' title='Dashboard' subTitle ='Monitor your room listings, 
//     track bookings , and analyze revenue-all 
//     in one place .Stay updated with real-time insights to ensure smooth operations.' />

// <div className='flex gap-4 my-8'>
//   {/* total bookings */}
//   <div className='bg-primary/3 border border-primary/10  rounded flex p-4 pr-8 '>
//   <img src={assets.totalBookingIcon} alt="tbi" className='max-sm:hidden h-10' />


//   <div className='flex flex-col sm:ml-4 font-medium '>
//     <p className='text-blue-500 text-lg'>Total Bookings</p>
//     <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
//   </div>
  
//   </div>

// {/* total revenue */}
//  <div className='bg-primary/3 border border-primary/10  rounded flex p-4 pr-8 '>
//   <img src={assets.totalRevenueIcon} alt="tbi" className='max-sm:hidden h-10' />


//   <div className='flex flex-col sm:ml-4 font-medium '>
//     <p className='text-blue-500 text-lg'>Total Revenue</p>
//     <p className='text-neutral-400 text-base'>$ {dashboardData.totalRevenue}</p>
//   </div>
  
//   </div>

// </div>

// <h2 className=' text-blue-950/70 text-xl font-medium mb-5 '>Recent Bookings</h2>

// <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll '>
//   <table className='w-full mb-20px'>
//     <thead className='bg-gray-50'>
// <tr>
//   <th className='py-3 px-4 text-gray-800 font-medium'>
//     User Name
//   </th>
//   <th className='py-3 px-4 max-sm:hidden text-gray-800 font-medium'>
//     Room Name
//   </th>
//   <th className='py-3 px-4 text-center text-gray-800 font-medium'>
//     Total Amount
//   </th>
//   <th className='py-3 text-center px-4 text-gray-800 font-medium'>
//     Payment Status
//   </th>

// </tr>
//     </thead>

//     <tbody className='text-sm'>
// {dashboardData.bookings.map((item,index)=>(
//   <tr key={index}>
//     <td className='px-3 py-4 text-gray-700 border-t border-gray-300'>
//       {item.user.username}
//     </td>
//       <td className='px-3 max-sm:hidden py-4 text-gray-700 border-t border-gray-300'>
//       {item.room.roomType}
//     </td>
//     <td className='px-3 text-center py-4 text-gray-700 border-t border-gray-300'>
//       $ {item.totalPrice}
//     </td>
//     <td className='px-3 flex py-4 border-t border-gray-300'>
// <button className={`py-1 px-3 text-xs rounded-full mx-auto ${item.isPaid ? 'bg-green-200 text-green-600' : 'bg-amber-200 text-yellow-600' } `}>
//   {item.isPaid ? 'Completed' : 'Pending' }
// </button>
//     </td>

//   </tr>
// ))}
//     </tbody>

//   </table>
// </div>


//     </div>
//   )
// }

// export default Dashboard;



import React, { useState, useEffect } from 'react'
import { assets } from '../../Assets/assets/assets';
import Title from '../../components/Title';
import { useAppContext } from '../../context/AppContext';

const Dashboard = () => {
  const { axios, getToken } = useAppContext();
  const [dashboardData, setDashboardData] = useState({
    totalBookings: 0,
    totalRevenue: 0,
    bookings: []
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const fetchDashboardData = async () => {
    try {
      const token = await getToken();
      const { data } = await axios.get('/api/bookings/hotel', {
        headers: { Authorization: `Bearer ${token}` }
      });
      if (data.success) {
        setDashboardData({
          totalBookings: data.totalBookings,
          totalRevenue: data.totalRevenue,
          bookings: data.bookings || []
        });
      }
    } catch (error) {
      console.error("Error fetching dashboard:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <div className="p-8 text-center">Loading dashboard...</div>;
  }

  return (
    <div>
      <Title align='left' font='outfit' title='Dashboard' subTitle='Monitor your room listings, track bookings, and analyze revenue-all in one place. Stay updated with real-time insights to ensure smooth operations.' />

      <div className='flex gap-4 my-8'>
        {/* total bookings */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img src={assets.totalBookingIcon} alt="tbi" className='max-sm:hidden h-10' />
          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Total Bookings</p>
            <p className='text-neutral-400 text-base'>{dashboardData.totalBookings}</p>
          </div>
        </div>

        {/* total revenue */}
        <div className='bg-primary/3 border border-primary/10 rounded flex p-4 pr-8'>
          <img src={assets.totalRevenueIcon} alt="tbi" className='max-sm:hidden h-10' />
          <div className='flex flex-col sm:ml-4 font-medium'>
            <p className='text-blue-500 text-lg'>Total Revenue</p>
            <p className='text-neutral-400 text-base'>$ {dashboardData.totalRevenue}</p>
          </div>
        </div>
      </div>

      <h2 className='text-blue-950/70 text-xl font-medium mb-5'>Recent Bookings</h2>

      <div className='w-full max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-scroll'>
        <table className='w-full mb-20px'>
          <thead className='bg-gray-50 sticky top-0'>
            <tr>
              <th className='py-3 px-4 text-gray-800 font-medium'>User Name</th>
              <th className='py-3 px-4 max-sm:hidden text-gray-800 font-medium'>Room Name</th>
              <th className='py-3 px-4 text-center text-gray-800 font-medium'>Total Amount</th>
              <th className='py-3 text-center px-4 text-gray-800 font-medium'>Payment Status</th>
            </tr>
          </thead>
          <tbody className='text-sm'>
            {dashboardData.bookings.length === 0 ? (
              <tr>
                <td colSpan="4" className="text-center py-8 text-gray-500">
                  No bookings yet
                </td>
              </tr>
            ) : (
              dashboardData.bookings.map((item, index) => (
                <tr key={index}>
                  <td className='px-3 py-4 text-gray-700 border-t border-gray-300'>
                    {item.user?.username || 'Unknown'}
                  </td>
                  <td className='px-3 max-sm:hidden py-4 text-gray-700 border-t border-gray-300'>
                    {item.room?.roomType || 'N/A'}
                  </td>
                  <td className='px-3 text-center py-4 text-gray-700 border-t border-gray-300'>
                    $ {item.totalPrice}
                  </td>
                  <td className='px-3 py-4 border-t border-gray-300'>
                    <button className={`py-1 px-3 text-xs rounded-full mx-auto block ${item.isPaid ? 'bg-green-200 text-green-600' : 'bg-amber-200 text-yellow-600'}`}>
                      {item.isPaid ? 'Completed' : 'Pending'}
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Dashboard;