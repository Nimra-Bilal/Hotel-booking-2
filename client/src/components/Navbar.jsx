//ooper wala chlta hai yehi 
import React, { useEffect, useState }  from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {assets} from "../Assets/assets/assets"
import { useClerk, useUser , UserButton } from "@clerk/clerk-react";


const BookIcon = ()=>(
    <svg className="w-4 h-4 text-gray-700" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" >
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 19V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v13H7a2 2 0 0 0-2 2Zm0 0a2 2 0 0 0 2 2h12M9 3v14m7 0v4" />
</svg>
)

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Hotels', path: '/rooms' },
        { name: 'Experience', path: '/experience' },
        { name: 'About', path: '/about' },
    ];
    
  const { openSignIn } = useClerk();
    const {user} = useUser();
    const navigate = useNavigate();
    const location = useLocation();
    // const [isScrolled, setIsScrolled] = useState(false);
     // Initialize state based on current pathname
  const [isScrolled, setIsScrolled] = useState(location.pathname !== '/');
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
   
   
   
  

   useEffect(() => {

if (location.pathname !== '/') {
    setIsScrolled(true);
    return;
}
else{
    setIsScrolled(false);

}

setIsScrolled(prev => location.pathname!== '/' ? true : prev );


        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
       
            <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

                {/* Logo */}
                <Link to='/' >
                <img src={assets.logo} alt="logo" className={`h-9 ${isScrolled && "invert opacity-80"}`} />
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-4 lg:gap-8">
                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} className={`group flex flex-col gap-0.5 ${isScrolled ? "text-gray-700" : "text-white"}`}>
                            {link.name}
                            <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                        </a>
                    ))}
                    <button onClick={()=>navigate('/owner')} className={`border px-4 py-1 text-sm font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-white'} transition-all`}>
                        Dashboard
                    </button>
                </div>

                {/* Desktop Right */}
                <div className="hidden md:flex items-center gap-4">
                   <img src={assets.searchIcon} alt="searchIcon" className={`h-7  transition-all duration-500 ${isScrolled && 'invert'}`} />
            {user ? ( <UserButton>
                <UserButton.MenuItems>
                    <UserButton.Action   label="My Bookings" labelIcon={ <BookIcon/> } onClick={()=> navigate('/my-bookings')}  />
                    </UserButton.MenuItems>    
                  </UserButton>) : 
            ( <button onClick={() => openSignIn()} className={`px-8 py-2.5 rounded-full ml-4 transition-all duration-500 ${isScrolled ? "text-white bg-black" : "bg-white text-black"}`}>
                        Login
                    </button>) }
                    
                </div>

                {/* Mobile Menu Button */}
                <div className="flex items-center gap-3 md:hidden">
                     {user && <UserButton>
                <UserButton.MenuItems>
                    <UserButton.Action   label="My Bookings" labelIcon={ <BookIcon/> } onClick={()=> navigate('/my-bookings')}  />
                    </UserButton.MenuItems>    
                  </UserButton>
                  }
                 <img src={assets.menuIcon} onClick={() => setIsMenuOpen(true)} alt="menuIcon" className={`h-4  ${isScrolled && 'invert'}`} />
                </div>

                {/* Mobile Menu */}

                <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                     
                    <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                  
                        <img src={assets.closeIcon} alt="closeIcon" className="h-6.5" />
                    
                    </button>

                    {navLinks.map((link, i) => (
                        <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                            {link.name}
                        </a>
                    ))}

                  { user && <button onClick={()=>navigate('/owner')} className="border px-4 py-1 text-sm font-light rounded-full cursor-pointer transition-all">
                       Dashboard
                    </button>}

                   { !user &&  <button onClick={() => openSignIn()} className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                        Login
                    </button>}
                </div>
            </nav>
       
    );
}

export default Navbar;




// import React from "react";
// import { Link } from "react-router-dom";
// import logo from "../Assets/assets/logo.svg";

// const Navbar = () => {
//   const navLinks = [
//     { name: "Home", path: "/" },
//     { name: "Products", path: "/" },
//     { name: "Contact", path: "/" },
//     { name: "About", path: "/" },
//   ];

//   const [isScrolled, setIsScrolled] = React.useState(false);
//   const [isMenuOpen, setIsMenuOpen] = React.useState(false);

//   React.useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 10);
//     };
//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <nav
//       className={`fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 ${
//         isScrolled
//           ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4"
//           : "bg-indigo-500 text-white py-4 md:py-6"
//       }`}
//     >

//   <Link to='/' >
//   <img
//     src={logo}
//     alt="logo"
//     className={`h-9 ${isScrolled && "invert opacity-80" }`}
//   />
// </Link>


//       {/* Desktop Nav */}
//       <div className="hidden md:flex items-center gap-6">
//         {navLinks.map((link, i) => (
//           <a
//             key={i}
//             href={link.path}
//             className={`hover:underline ${
//               isScrolled ? "text-gray-700" : "text-white"
//             }`}
//           >
//             {link.name}
//           </a>
//         ))}
//         <button
//           className={`border px-4 py-1 rounded-full ${
//             isScrolled ? "text-black" : "text-white"
//           }`}
//         >
//           New Launch
//         </button>
//       </div>

//       {/* Desktop Right Buttons */}
//       <div className="hidden md:flex items-center gap-4">
//         <button
//           className={`px-6 py-2 rounded-full transition ${
//             isScrolled ? "bg-black text-white" : "bg-white text-black"
//           }`}
//         >
//           Login
//         </button>
//       </div>

//       {/* Mobile Menu Button */}
//       <div className="md:hidden">
//         <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
//           <svg
//             className={`w-6 h-6 ${isScrolled ? "text-black" : "text-white"}`}
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <line x1="4" y1="6" x2="20" y2="6" />
//             <line x1="4" y1="12" x2="20" y2="12" />
//             <line x1="4" y1="18" x2="20" y2="18" />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`fixed top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-6 text-gray-800 text-lg transition-transform duration-300 md:hidden ${
//           isMenuOpen ? "translate-x-0" : "-translate-x-full"
//         }`}
//       >
//         <button
//           className="absolute top-4 right-4"
//           onClick={() => setIsMenuOpen(false)}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             strokeWidth="2"
//             viewBox="0 0 24 24"
//           >
//             <line x1="6" y1="6" x2="18" y2="18" />
//             <line x1="6" y1="18" x2="18" y2="6" />
//           </svg>
//         </button>

//         {navLinks.map((link, i) => (
//           <a
//             key={i}
//             href={link.path}
//             onClick={() => setIsMenuOpen(false)}
//             className="hover:underline"
//           >
//             {link.name}
//           </a>
//         ))}

//         <button className="border px-4 py-1 rounded-full">New Launch</button>
//         <button className="bg-black text-white px-6 py-2 rounded-full">
//           Login
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar


// //  {/* Logo */}
// //       <Link to='/'>
// //         <img src={logo} alt="logo" className={`h-9 ${isScrolled && "invert opacity-80"}`} />
// //         MyLogo
// //       </Link>