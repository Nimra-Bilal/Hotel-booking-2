// // import React from 'react'
// // import Navbar from '../../components/hotelOwner/Navbar'
// // import Sidebar from '../../components/hotelOwner/Sidebar';
// // import { Outlet } from 'react-router-dom';
// // import { useAppContext } from './context/AppContext';
// // import { useEffect } from 'react';


// // const Layout = () => {
// //   const [isOwner , navigate] = useAppContext();

// //   useEffect(()=>{
// //     if(!isOwner){
// //       navigate("/");
// //     }
// //   },[isOwner])


// //   return (
// //     <div className='flex flex-col h-screen'>
// //       <Navbar/>
// //       <div className='flex h-4'>
// //         <Sidebar/>
// //         <div className='flex-1 p-4 pt-10 md:px-10 h-full'>
// //             <Outlet/>
// //         </div>
// //       </div>
// //     </div>
// //   )
// // }

// // export default Layout;



// import React, { useEffect } from 'react'
// import Navbar from '../../components/hotelOwner/Navbar'
// import Sidebar from '../../components/hotelOwner/Sidebar';
// import { Outlet } from 'react-router-dom';
// import { useAppContext } from '../../context/AppContext.jsx';

// const Layout = () => {

//   const { isOwner , navigate } = useAppContext();   // FIX

//   useEffect(() => {
//     if (!isOwner) {
//       navigate("/");
//     }
//   }, [isOwner, navigate]);  // FIX: added navigate to deps

//   return (
//     <div className='flex flex-col h-screen'>
//       <Navbar />
//       <div className='flex h-full'>   {/* FIX: h-4 ❌ */}
//         <Sidebar />
//         <div className='flex-1 p-4 pt-10 md:px-10 h-full'>
//           <Outlet />
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
  const { isOwner, navigate, user } = useAppContext();

  useEffect(() => {
    // Wait for user to load before checking
    if (user === undefined) return;
    
    if (!isOwner && user) {
      navigate("/");
    }
  }, [isOwner, navigate, user]);

  // Show loading while checking auth
  if (user === undefined) {
    return <div className="flex items-center justify-center h-screen">Loading...</div>;
  }

  if (!isOwner) {
    return null;
  }

  return (
    <div className='flex flex-col h-screen'>
      <Navbar />
      <div className='flex flex-1 overflow-hidden'>
        <Sidebar />
        <div className='flex-1 p-4 pt-10 md:px-10 overflow-y-auto'>
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default Layout;