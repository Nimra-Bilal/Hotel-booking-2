// import React, { useState } from 'react'
// import Title from '../../components/Title';
// import { assets } from '../../Assets/assets/assets';
// import {useAppContext} from '../context/AppContext'
// import toast from 'react-hot-toast';

// const AddRoom = () => {

// const [axios , getToken] = useAppContext();

//   const [images, setImages] = useState({
//     1: null,
//     2: null,
//     3: null,
//     4: null,
//   });

//   const [inputs, setInputs] = useState({
//     roomType: '',
//     pricePerNight: 0,
//     amenities: {
//       'Free Wifi': false,
//       'Free Breakfast': false,
//       'Room Service': false,
//       'Mountain View': false,
//       'Pool Access': false,
//     }
//   });

//   // Handle image upload
//   const handleImageChange = (key, file) => {
//     setImages(prev => ({
//       ...prev,
//       [key]: file
//     }));
//   };

//   // Handle text/number input changes
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInputs(prev => ({
//       ...prev,
//       [name]: name === 'pricePerNight' ? parseFloat(value) || 0 : value
//     }));
//   };

//   // Handle checkbox changes for amenities
//   const handleAmenityChange = (amenity) => {
//     setInputs(prev => ({
//       ...prev,
//       amenities: {
//         ...prev.amenities,
//         [amenity]: !prev.amenities[amenity]
//       }
//     }));
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form submitted:', { images, inputs });
//     // Add your submission logic here (API call, etc.)
//   };

//   const [loading , setLoading] = useState(false);

//   const onSubmitHandler = async (e)=>{
//     e.preventDefault(); 
//     //check if all inputs are filled
//     if(!inputs.roomType || !inputs.pricePerNight || !inputs.amenities || !Object.values(images).some(img => img !== null)) {
//       toast.error("Please fill all the details correctly");
//       return;
//     }
//     setLoading(true);

//  try {
//   const formData = new FormData()
//   formData.append('roomType' , inputs.roomType);
//   formData.append('pricePerNight',inputs.roompricePerNightType)
//   //converting amenities to array and keeping only enabled amenities 
//   const amenities = Object.keys(inputs.amenities).filter(key => inputs.amenities[key]);
// formData.append('amenities' , JSON.stringify(amenities))
// //add images to form data 
// Object.keys(images).forEach(key => {
// images[key] && formData.append('images', images[key])
// })


//   const {data} = await axios.post('/api/rooms/' , formData , {headers: {Authorization: `Bearer ${await getToken()}`} } )
//   if(data.success){
//     toast.success("Room added successfully");
//     setInputs({
//       roomType: '',
//       pricePerNight: 0,
//       amenities: {
//         'Free Wifi': false,
//         'Free Breakfast': false,
//         'Room Service': false,
//         'Mountain View': false,
//         'Pool Access': false,
//       }
//     })
//     setImages({
//       1: null,
//       2: null,
//       3: null,
//       4: null,
//     })
//   }
//   else{
//     toast.error("Failed to add room. Please try again." , data.message);
//   }



//  } catch (error) {
//   toast.error("Error occurred while submitting the form" , error.message);
//  } 
//  finally {
//   setLoading(false);
//  }

//       }
//     };


//   return (
//     <form onSubmit={onSubmitHandler} className="p-4 mb-10">
//       <Title
//         align='left'
//         title='Add Room'
//         subTitle='Fill in the details carefully and accurate room details, pricing and amenities, to enhance the user-booking experience'
//         font='outfit'
//       />

//       {/* Upload area for images */}
//       <p className='text-gray-800 mt-10'>Images</p>
//       <div className='grid grid-cols-2 sm:flex gap-4 my-2 flex-wrap'>
//         {Object.keys(images).map((key) => (
//           <label htmlFor={`roomImage${key}`} key={key} className="cursor-pointer">
//             <img
//               className='max-h-32 w-32 object-cover rounded-lg border border-gray-300'
//               src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea}
//               alt={`Room image ${key}`}
//             />
//             <input
//               type="file"
//               accept='image/*'
//               id={`roomImage${key}`}
//               onChange={(e) => handleImageChange(key, e.target.files[0])}
//               hidden
//             />
//           </label>
//         ))}
//       </div>

//       <div className='w-full max-sm:flex-col flex sm:gap-4 mt-4'>
//         <div className='flex-1 max-w-48'>
//           <p className='text-gray-800 mt-4'>Room Type</p>
//           <select
//             value={inputs.roomType}
//             onChange={handleInputChange}
//             name="roomType"
//             className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-full'
//           >
//             <option value="">Select Room Type</option>
//             <option value="Single Bed">Single Bed</option>
//             <option value="Double Bed">Double Bed</option>
//             <option value="Luxury Suite">Luxury Suite</option>
//             <option value="Family Suite">Family Suite</option>
//           </select>
//         </div>
//         <div className='flex-1 max-w-48'>
//           <p className='mt-4 text-gray-800'>
//             Price <span className='text-xs'>/Night</span>
//           </p>
//           <input
//             type="number"
//             name="pricePerNight"
//             value={inputs.pricePerNight}
//             onChange={handleInputChange}
//             className='border opacity-70 border-gray-300 mt-1 rounded p-2 w-24'
//             placeholder='0'
//             min="0"
//             step="0.01"
//           />
//         </div>
//       </div>

//       {/* Amenities Section - FIXED */}
//       <div className='mt-6'>
//         <p className='text-gray-800 mt-4'>Amenities</p>
//         <div className='flex flex-wrap flex-col mt-1 text-gray-400 max-w-sm gap-1'>
//           {Object.keys(inputs.amenities).map((amenity, index) => (
//             <div key={index} className="flex items-center">
//               <input
//                 type="checkbox"
//                 id={`amenity${index + 1}`}
//                 checked={inputs.amenities[amenity]}
//                 onChange={() => handleAmenityChange(amenity)}
//                 className="mr-2 text-blue-600"
//               />
//               <label htmlFor={`amenity${index + 1}`} className="text-gray-700">
//                 { amenity}
//               </label>
//             </div>
//           ))}
//         </div>
        
//         {/* Only ONE submit button */}
//       <button 
//   type="submit" 
//   className='bg-blue-600 text-white px-8 py-3 
//   rounded-lg mt-8 cursor-pointer hover:bg-blue-700 
//   transition font-medium text-base block w-full sm:w-auto border-2 border-gray-500' // Added red border
// >
//   Add Room
// </button>
//       </div>
//     </form>
//   )
// }

// export default AddRoom;


// import React, { useState } from 'react'
// import Title from '../../components/Title';
// import { assets } from '../../Assets/assets/assets';
// import { useAppContext } from '../../context/AppContext.jsx'
// import toast from 'react-hot-toast';

// const AddRoom = () => {

//   // FIX 1: correct destructuring (assuming object)
//   const { axios, getToken } = useAppContext();

//   const [images, setImages] = useState({
//     1: null,
//     2: null,
//     3: null,
//     4: null,
//   });

//   const [inputs, setInputs] = useState({
//     roomType: '',
//     pricePerNight: 0,
//     amenities: {
//       'Free Wifi': false,
//       'Free Breakfast': false,
//       'Room Service': false,
//       'Mountain View': false,
//       'Pool Access': false,
//     }
//   });

//   const [loading, setLoading] = useState(false);

//   // Handle image upload
//   const handleImageChange = (key, file) => {
//     setImages(prev => ({
//       ...prev,
//       [key]: file
//     }));
//   };

//   // Handle input change
//   const handleInputChange = (e) => {
//     const { name, value } = e.target;
//     setInputs(prev => ({
//       ...prev,
//       [name]: name === 'pricePerNight' ? parseFloat(value) || 0 : value
//     }));
//   };

//   // Handle amenities
//   const handleAmenityChange = (amenity) => {
//     setInputs(prev => ({
//       ...prev,
//       amenities: {
//         ...prev.amenities,
//         [amenity]: !prev.amenities[amenity]
//       }
//     }));
//   };

//   // FIXED SUBMIT FUNCTION
//   const onSubmitHandler = async (e) => {
//     e.preventDefault();

//     if (!inputs.roomType || !inputs.pricePerNight || !Object.values(images).some(img => img)) {
//       toast.error("Please fill all the details correctly");
//       return;
//     }

//     setLoading(true);

//     try {
//       const formData = new FormData();

//       formData.append('roomType', inputs.roomType);

//       // FIX 2: correct variable name
//       formData.append('pricePerNight', inputs.pricePerNight);

//       // Amenities array
//       const amenities = Object.keys(inputs.amenities).filter(
//         key => inputs.amenities[key]
//       );
//       formData.append('amenities', JSON.stringify(amenities));

//       // Images
//       Object.keys(images).forEach(key => {
//         if (images[key]) {
//           formData.append('images', images[key]);
//         }
//       });

//       const { data } = await axios.post(
//         '/api/rooms/',
//         formData,
//         {
//           headers: {
//             Authorization: `Bearer ${await getToken()}`
//           }
//         }
//       );

//       if (data.success) {
//         toast.success("Room added successfully");

//         // Reset
//         setInputs({
//           roomType: '',
//           pricePerNight: 0,
//           amenities: {
//             'Free Wifi': false,
//             'Free Breakfast': false,
//             'Room Service': false,
//             'Mountain View': false,
//             'Pool Access': false,
//           }
//         });

//         setImages({
//           1: null,
//           2: null,
//           3: null,
//           4: null,
//         });

//       } else {
//         toast.error(data.message || "Failed to add room");
//       }

//     } catch (error) {
//       toast.error(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form onSubmit={onSubmitHandler} className="p-4 mb-10">
//       <Title
//         align='left'
//         title='Add Room'
//         subTitle='Fill details carefully'
//         font='outfit'
//       />

//       {/* Images */}
//       <p className='mt-10'>Images</p>
//       <div className='flex gap-4 flex-wrap'>
//         {Object.keys(images).map((key) => (
//           <label key={key}>
//             <img
//               className='w-32 h-32'
//               src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea}
//               alt=""
//             />
//             <input
//               type="file"
//               hidden
//               onChange={(e) => handleImageChange(key, e.target.files[0])}
//             />
//           </label>
//         ))}
//       </div>

//       {/* Room Type */}
//       <select name="roomType" onChange={handleInputChange} value={inputs.roomType}>
//         <option value="">Select</option>
//         <option value="Single Bed">Single</option>
//         <option value="Double Bed">Double</option>
//       </select>

//       {/* Price */}
//       <input
//         type="number"
//         name="pricePerNight"
//         value={inputs.pricePerNight}
//         onChange={handleInputChange}
//       />

//       {/* Amenities */}
//       {Object.keys(inputs.amenities).map((a, i) => (
//         <div key={i}>
//           <input
//             type="checkbox"
//             checked={inputs.amenities[a]}
//             onChange={() => handleAmenityChange(a)}
//           />
//           {a}
//         </div>
//       ))}

//       <button type="submit">
//         {loading ? "Adding..." : "Add Room"}
//       </button>
//     </form>
//   )
// }

// export default AddRoom;


import React, { useState } from 'react'
import Title from '../../components/Title';
import { assets } from '../../Assets/assets/assets';
import { useAppContext } from '../../context/AppContext.jsx'
import toast from 'react-hot-toast';

const AddRoom = () => {

  const { axios, getToken, navigate } = useAppContext(); // Added navigate

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

  const [loading, setLoading] = useState(false);

  const handleImageChange = (key, file) => {
    setImages(prev => ({
      ...prev,
      [key]: file
    }));
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputs(prev => ({
      ...prev,
      [name]: name === 'pricePerNight' ? parseFloat(value) || 0 : value
    }));
  };

  const handleAmenityChange = (amenity) => {
    setInputs(prev => ({
      ...prev,
      amenities: {
        ...prev.amenities,
        [amenity]: !prev.amenities[amenity]
      }
    }));
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // Validation
    const hasImages = Object.values(images).some(img => img !== null);
    
    if (!inputs.roomType || !inputs.pricePerNight || !hasImages) {
      toast.error("Please fill all the details and upload at least one image");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append('roomType', inputs.roomType);
      formData.append('pricePerNight', inputs.pricePerNight);

      // FIX: Send amenities as array of selected amenities
      const selectedAmenities = Object.keys(inputs.amenities).filter(
        key => inputs.amenities[key]
      );
      formData.append('amenities', JSON.stringify(selectedAmenities));

      // Append images - backend expects files array with key 'images'
      const imageFiles = Object.values(images).filter(img => img !== null);
      imageFiles.forEach(file => {
        formData.append('images', file);
      });

      const token = await getToken();
      
      const { data } = await axios.post('/api/rooms', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token}`
        }
      });

      if (data.success) {
        toast.success("Room added successfully");
        
        // Reset form
        setInputs({
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
        setImages({
          1: null,
          2: null,
          3: null,
          4: null,
        });
        
        // Optional: Navigate to rooms list
        // navigate('/owner/rooms');
      } else {
        toast.error(data.message || "Failed to add room");
      }
    } catch (error) {
      console.error("Add room error:", error);
      toast.error(error.response?.data?.message || error.message || "Failed to add room");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="p-4 mb-10 max-w-2xl mx-auto">
      <Title
        align='left'
        title='Add Room'
        subTitle='Fill details carefully'
        font='outfit'
      />

      {/* Images Section */}
      <p className='mt-10 font-medium'>Images (at least 1 required)</p>
      <div className='flex gap-4 flex-wrap mt-2'>
        {Object.keys(images).map((key) => (
          <label key={key} className='cursor-pointer'>
            <img
              className='w-32 h-32 object-cover border rounded-lg'
              src={images[key] ? URL.createObjectURL(images[key]) : assets.uploadArea}
              alt="Upload"
            />
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => handleImageChange(key, e.target.files[0])}
            />
          </label>
        ))}
      </div>

      {/* Room Type */}
      <div className='mt-6'>
        <label className='font-medium'>Room Type</label>
        <select 
          name="roomType" 
          onChange={handleInputChange} 
          value={inputs.roomType}
          className='w-full p-2 border rounded mt-1'
          required
        >
          <option value="">Select Room Type</option>
          <option value="Single Bed">Single Bed</option>
          <option value="Double Bed">Double Bed</option>
          <option value="King Bed">King Bed</option>
          <option value="Suite">Suite</option>
        </select>
      </div>

      {/* Price */}
      <div className='mt-4'>
        <label className='font-medium'>Price Per Night ($)</label>
        <input
          type="number"
          name="pricePerNight"
          value={inputs.pricePerNight}
          onChange={handleInputChange}
          className='w-full p-2 border rounded mt-1'
          required
          min="0"
        />
      </div>

      {/* Amenities */}
      <div className='mt-4'>
        <label className='font-medium'>Amenities</label>
        <div className='grid grid-cols-2 gap-2 mt-1'>
          {Object.keys(inputs.amenities).map((a, i) => (
            <label key={i} className='flex items-center gap-2'>
              <input
                type="checkbox"
                checked={inputs.amenities[a]}
                onChange={() => handleAmenityChange(a)}
              />
              <span>{a}</span>
            </label>
          ))}
        </div>
      </div>

      <button 
        type="submit" 
        disabled={loading}
        className='mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:bg-gray-400'
      >
        {loading ? "Adding Room..." : "Add Room"}
      </button>
    </form>
  );
};

export default AddRoom;