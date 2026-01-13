import React, { useState } from 'react'
import Title from '../../components/Title';
import { assets } from '../../Assets/assets/assets';

const AddRoom = () => {
  const [images, setImages] = useState({
    1: null,
    2: null,
    3: null,
    4: null,
  });

  const [inputs, setInputs] = useState({
    roomType: '',
    pricePerNight: 0,
    amenities: {
      'Free Wifi': false,
      'Free Breakfast': false,
      'Room Service': false,
      'Mountain View': false,
      'Pool Access': false,
    }
  });

  // Handle image upload
  const handleImageChange = (key, file) => {
    setImages(prev => ({
      ...prev,
      [key]: file
    }));
  };

  // Handle text/number input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: name === 'pricePerNight' ? parseFloat(value) || 0 : value
    }));
  };

  // Handle checkbox changes for amenities
  const handleAmenityChange = (amenity) => {
    setInputs(prev => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [amenity]: !prev.amenities[amenity]
      }
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', { images, inputs });
    // Add your submission logic here (API call, etc.)
  };

  return (
    <form className="p-4 mb-10" onSubmit={handleSubmit}>
      <Title
        align='left'
        title='Add Room'
        subTitle='Fill in the details carefully and accurate room details, pricing and amenities, to enhance the user-booking experience'
        font='outfit'
      />

      {/* Upload area for images */}
      <p className='text-gray-800 mt-10'>Images</p>
      <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
        {Object.keys(images).map((key) => (
          <label htmlFor={`roomImage${key}`} key={key} className="cursor-pointer">
            <img
              className='max-h-32 w-32 object-cover rounded-lg border border-gray-300'
              src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea}
              alt={`Room image ${key}`}
            />
            <input
              type="file"
              accept='image/*'
              id={`roomImage${key}`}
              onChange={(e) => handleImageChange(key, e.target.files[0])}
              hidden
            />
          </label>
        ))}
      </div>

      <div className='w-full max-sm:flex-col flex sm:gap-4 mt-4'>
        <div className='flex-1 max-w-48'>
          <p className='text-gray-800 mt-4'>Room Type</p>
          <select
            value={inputs.roomType}
            onChange={handleInputChange}
            name="roomType"
            className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'
          >
            <option value="">Select Room Type</option>
            <option value="Single Bed">Single Bed</option>
            <option value="Double Bed">Double Bed</option>
            <option value="Luxury Suite">Luxury Suite</option>
            <option value="Family Suite">Family Suite</option>
          </select>
        </div>
        <div className='flex-1 max-w-48'>
          <p className='mt-4 text-gray-800'>
            Price <span className='text-xs'>/Night</span>
          </p>
          <input
            type="number"
            name="pricePerNight"
            value={inputs.pricePerNight}
            onChange={handleInputChange}
            className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-24'
            placeholder='0'
            min="0"
            step="0.01"
          />
        </div>
      </div>

      {/* Amenities Section - FIXED */}
      <div className='mt-6'>
        <p className='text-gray-800 mt-4'>Amenities</p>
        <div className='flex flex-wrap flex-col mt-1 text-gray-400 max-w-sm gap-1'>
          {Object.keys(inputs.amenities).map((amenity, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={`amenity${index + 1}`}
                checked={inputs.amenities[amenity]}
                onChange={() => handleAmenityChange(amenity)}
                className="mr-2 text-blue-600"
              />
              <label htmlFor={`amenity${index + 1}`} className="text-gray-700">
                { amenity}
              </label>
            </div>
          ))}
        </div>
        
        {/* Only ONE submit button */}
      <button 
  type="submit" 
  className='bg-blue-600 text-white px-8 py-3 
  rounded-lg mt-8 cursor-pointer hover:bg-blue-700 
  transition font-medium text-base block w-full sm:w-auto border-2 border-gray-500' // Added red border
>
  Add Room
</button>
      </div>
    </form>
  )
}

export default AddRoom;