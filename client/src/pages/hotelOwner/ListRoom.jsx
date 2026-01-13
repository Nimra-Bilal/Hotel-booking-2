import React, { useState } from 'react'
import { roomsDummyData } from '../../Assets/assets/assets';
import Title from '../../components/Title';

const ListRoom = () => {
  const [rooms, setRooms] = useState(roomsDummyData);
  
  // Handle toggle availability
  const handleToggleAvailability = (index) => {
    const updatedRooms = [...rooms];
    updatedRooms[index] = {
      ...updatedRooms[index],
      isAvailable: !updatedRooms[index].isAvailable
    };
    setRooms(updatedRooms);
  };

  // Handle delete room
  const handleDelete = (index) => {
    if (window.confirm('Are you sure you want to delete this room?')) {
      const updatedRooms = rooms.filter((_, i) => i !== index);
      setRooms(updatedRooms);
    }
  };

  return (
    <div>
      <Title 
        align='left' 
        font='outfit' 
        title='Room Listings' 
        subTitle='View, edit, or manage all listed rooms. Keep the information up-to-date to provide the best experience for users.'
      />

      <p className='text-gray-500 mt-8'>All Rooms</p>

      <div className='w-full mt-3 max-w-3xl text-left border border-gray-300 rounded-lg max-h-80 overflow-y-auto'>
        <table className='w-full'>
          <thead className='bg-gray-50 sticky top-0'>
            <tr>
              <th className='py-3 px-4 text-gray-800 font-medium'>
                Room Type
              </th>
              <th className='py-3 px-4 max-sm:hidden text-gray-800 font-medium'>
                Amenities
              </th>
              <th className='py-3 px-4 text-center text-gray-800 font-medium'>
                Price/Night
              </th>
              <th className='py-3 px-4 text-gray-800 font-medium text-center'>
                Available
              </th>
              <th className='py-3 px-4 text-gray-800 font-medium'>
                Actions
              </th>
            </tr>
          </thead>

          <tbody className='text-sm'>
            {rooms.map((item, index) => (
              <tr key={index} className='border-t border-gray-200 hover:bg-gray-50'>
                <td className='py-3 px-4 text-gray-700 border-t border-gray-300'>
                  {item.roomType || item.type || 'Not specified'}
                </td>

                <td className='py-3 px-4 max-sm:hidden border-t border-gray-300 text-gray-700'>
                  {item.amenities && item.amenities.length > 0 
                    ? (Array.isArray(item.amenities) 
                      ? item.amenities.join(', ') 
                      : Object.entries(item.amenities || {})
                          .filter(([ value]) => value === true)
                          .map(([key]) => key)
                          .join(', '))
                    : 'No amenities'}
                </td>

                <td className='py-3 px-4 text-gray-700 border-t border-gray-300 text-center'>
                  ${item.pricePerNight || item.price || 0}
                </td>

                <td className='py-3 px-4 border-t border-gray-300 text-center'>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input 
                      type="checkbox" 
                      className='sr-only peer' 
                      checked={item.isAvailable || false}
                      onChange={() => handleToggleAvailability(index)}
                      name={`available-${index}`}
                      id={`available-${index}`}
                    />
                    <div className='w-12 h-6 bg-slate-300 rounded-full peer peer-checked:bg-blue-600 transition-colors duration-200 relative'>
                      <span className='dot absolute left-1 top-1/2 -translate-y-1/2 w-5 h-5 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-5'></span>
                    </div>
                  </label>
                </td>

                <td className='py-3 px-4 border-t border-gray-300'>
                  <div className='flex gap-2'>
                    <button className='px-3 py-1 bg-blue-100 text-blue-700 rounded text-xs hover:bg-blue-200 transition-colors'>
                      Edit
                    </button>
                    <button 
                      onClick={() => handleDelete(index)}
                      className='px-3 py-1 bg-red-100 text-red-700 rounded text-xs hover:bg-red-200 transition-colors'
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default ListRoom;