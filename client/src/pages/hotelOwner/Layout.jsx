// import React from 'react'
// import Navbar from '../../components/hotelOwner/Navbar'
// import Sidebar from '../../components/hotelOwner/Sidebar';
// import { Outlet } from 'react-router-dom';
// import { useAppContext } from './context/AppContext';
// import { useEffect } from 'react';


// const Layout = () => {
//   const [isOwner , navigate] = useAppContext();

//   useEffect(()=>{
//     if(!isOwner){
//       navigate("/");
//     }
//   },[isOwner])


//   return (
//     <div className='flex flex-col h-screen'>
//       <Navbar/>
//       <div className='flex h-4'>
//         <Sidebar/>
//         <div className='flex-1 p-4 pt-10 md:px-10 h-full'>
//             <Outlet/>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Layout;



import React, { useEffect } from 'react'
import Navbar from '../../components/hotelOwner/Navbar'
import Sidebar from '../../components/hotelOwner/Sidebar';
import { Outlet } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext.jsx';

const Layout = () => {

  const { isOwner , navigate } = useAppContext();   // FIX

  useEffect(() => {
    if (!isOwner) {
      navigate("/");
    }
  }, [isOwner, navigate]);  // FIX: added navigate to deps

  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex h-full'>   {/* FIX: h-4 ❌ */}
        <Sidebar />
        <div className='flex-1 p-4 pt-10 md:px-10 h-full'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout;