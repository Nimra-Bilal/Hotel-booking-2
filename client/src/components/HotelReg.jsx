import React, { useState } from 'react'
import { assets, cities } from '../Assets/assets/assets'
import { useAppContext } from '../context/AppContext'
import toast from 'react-hot-toast'

const HotelReg = () => {

const {setShowHotelReg , axios , getToken , setIsOwner }= useAppContext();

const [name , setName] = useState("");
const [address , setAddress] = useState("");
const [contact , setContact] = useState("");
const [city , setCity] = useState("");

const onSubmitHandler = async (event)=>{
  try {
    event.preventDefault();
    const {data} = await axios.post(`/api/hotels/` , {name , address , contact , city} , {headers: {Authorization: `Bearer ${await getToken()}`} } )
    if (data.success) {
      toast.success(data.message);
      setIsOwner(true);
      setShowHotelReg(false);
    }
    else{ 
      toast.error(data.message)
    }


  } catch (error) {
       toast.error(error.message)
  }
}


  return (
    <div onClick={setShowHotelReg(false)} className='fixed top-0 bottom-0 left-0 right-0 z-50 flex items-center justify-center bg-black/70'>
      <form onSubmit={onSubmitHandler} onClick={(e)=>e.stopPropagation()} className='flex bg-white rounded-xl max-w-4xl max-md:mx-2'>
        <img src={assets.regImage} alt="reg-image" className='w-1/2 rounded-xl hidden md:block' />
        
        <div className='relative flex flex-col items-center md:w-1/2 p-8 md:p-10 w-full'>
          <img 
            className='absolute top-4 right-4 w-4 h-4 cursor-pointer' 
            src={assets.closeIcon} 
            alt="close-icon"  onClick={()=>setShowHotelReg(false)}
          />
          <p className='text-2xl font-semibold mt-6 mb-8 self-start'>
            Register your Hotel
          </p>

          {/* hotel name */}
          <div className='w-full mb-4'>
            <label htmlFor="name" className='font-medium text-gray-500 block'>
              Hotel Name
            </label>
            <input 
            onChange={(e)=>setName(e.target.value)}
              id='name' 
              type="text" 
              value={name}
              placeholder='Type here' 
              required 
              className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light'
            />
          </div>

          {/* contact */}
          <div className='w-full mb-4'>
            <label htmlFor="contact" className='font-medium text-gray-500 block'>
              Phone:
            </label>
            <input 
              onChange={(e)=>setContact(e.target.value)}
              value={contact}
              id='contact' 
              type="text" 
              placeholder='Type here' 
              required 
              className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light'
            />
          </div>

          {/* address */}
          <div className='w-full mb-4'>
            <label htmlFor="address" className='font-medium text-gray-500 block'>
              Address:
            </label>
            <input onChange={(e)=>setAddress(e.target.value)} 
              id='address' 
              type="text" 
              value={address}
              placeholder='Type here' 
              required 
              className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light'
            />
          </div>

          {/* select city dropdown */}
          <div className='w-full mb-6'>
            <label htmlFor="city" className='font-medium text-gray-500 block'>
              City
            </label>
            <select  onChange={(e)=>setCity(e.target.value)}
              className='border border-gray-200 rounded w-full px-3 py-2.5 mt-1 outline-indigo-500 font-light' 
              required
              id="city"
              value={city}
            >
              <option value="">Select City</option>
              {cities.map((city) => (
                <option key={city} value={city}>{city}</option>
              ))}
            </select>
          </div>

          <button 
            type='button'
            className='bg-indigo-500 hover:bg-indigo-600 transition-all text-white px-6 py-2.5 rounded cursor-pointer mt-2 w-full'
          >
            Register
          </button>
        </div>
      </form>
    </div>
  )
}

export default HotelReg