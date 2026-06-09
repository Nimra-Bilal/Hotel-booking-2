// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";
// import {useNavigate} from "react-router-dom"
// import {useUser , useAuth} from "@clerk/clerk-react"
// import toast from "react-hot-toast"

// axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;
// const AppContext =  createContext();
// export const AppProvider = ({children})=>{

// const currency = import.meta.env.VITE_CURRENCY || "$";
// const navigate = useNavigate();
// const {user} = useUser();
// const {getToken} = useAuth();
// const [isOwner , setIsOwner] = useState(false);
// const [showHotelReg , setShowHotelReg] = useState(false);
// const [searchedCities, setSearchedCities] = useState([]);

// const fetchUser = async ()=>{
//     try {
//         const {data} = await axios.get('/api/user' , {headers: {Authorization: `Bearer ${await getToken()}`} } )
//    if (data.success) {
//     setIsOwner(data.role==="hotelOwner");
//     setSearchedCities(data.recentSearchedCities)
//    }
//    else{
//     //retry fetching user details after 5 secs
//     setTimeout(()=>{
//         fetchUser()

//     },5000)
//    }
//     } catch (error) {
//         toast.error(error.message)
//     }
// }

// useEffect(()=>{
// if(user){
//     fetchUser();
// }
// },[user])


//     const value = {
// user , navigate , getToken , currency , isOwner , setIsOwner, 
// axios , showHotelReg , setShowHotelReg , searchedCities , setSearchedCities 
//     }


// return(
// <AppContext.Provider value={value}>
// {children}
// </AppContext.Provider>
// )

// }

// export const useAppContext = ()=> useContext(AppContext) 


// import axios from "axios";
// import { createContext, useContext, useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useUser, useAuth } from "@clerk/clerk-react";
// import toast from "react-hot-toast";

// axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

// const AppContext = createContext();

// export const AppProvider = ({ children }) => {

//   const currency = import.meta.env.VITE_CURRENCY || "$";
//   const navigate = useNavigate();

//   const { user } = useUser();
//   const { getToken } = useAuth();

//   const [isOwner, setIsOwner] = useState(false);
//   const [showHotelReg, setShowHotelReg] = useState(false);
//   const [searchedCities, setSearchedCities] = useState([]);

//   const fetchUser = async () => {
//     try {
//       const token = await getToken();   // ✅ FIX 1: get token first

//       if (!token) return;               // ✅ safety check

//       const { data } = await axios.get('/api/user', {
//         headers: { Authorization: `Bearer ${token}` }
//       });

//       if (data.success) {
//         setIsOwner(data.role === "hotelOwner");
//         setSearchedCities(data.recentSearchedCities || []); // ✅ FIX 2
//       } else {
//         // retry after 5 sec
//         setTimeout(fetchUser, 5000);
//       }

//     } catch (error) {
//       toast.error(error?.message || "Error fetching user"); // ✅ FIX 3
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       fetchUser();
//     }
//   }, [user]);

//   const value = {
//     user,
//     navigate,
//     getToken,
//     currency,
//     isOwner,
//     setIsOwner,
//     axios,
//     showHotelReg,
//     setShowHotelReg,
//     searchedCities,
//     setSearchedCities
//   };

//   return (
//     <AppContext.Provider value={value}>
//       {children}
//     </AppContext.Provider>
//   );
// };

// export const useAppContext = () => useContext(AppContext);


import axios from "axios";
import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser, useAuth } from "@clerk/clerk-react";
import toast from "react-hot-toast";

axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;

const AppContext = createContext();

export const AppProvider = ({ children }) => {

  const currency = import.meta.env.VITE_CURRENCY || "$";
  const navigate = useNavigate();

  const { user } = useUser();
  const { getToken } = useAuth();

  const [isOwner, setIsOwner] = useState(false);
  const [showHotelReg, setShowHotelReg] = useState(false);
  const [searchedCities, setSearchedCities] = useState([]);

  const fetchUser = async () => {
    try {
      const token = await getToken();
      if (!token) return;

      // FIX: Backend returns role in data.role, not data.user.role
      const { data } = await axios.get('/api/user', {
        headers: { Authorization: `Bearer ${token}` }
      });

      if (data.success) {
        setIsOwner(data.role === "hotelOwner"); // ✅ Correct: data.role directly
        setSearchedCities(data.recentSearchedCities || []);
      }
    } catch (error) {
      console.error("Fetch user error:", error);
      // Don't show toast for 401 errors on initial load
      if (error.response?.status !== 401) {
        toast.error(error?.response?.data?.message || "Error fetching user");
      }
    }
  };

  useEffect(() => {
    if (user) {
      fetchUser();
    }
  }, [user]);

  const value = {
    user,
    navigate,
    getToken,
    currency,
    isOwner,
    setIsOwner,
    axios,
    showHotelReg,
    setShowHotelReg,
    searchedCities,
    setSearchedCities
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => useContext(AppContext);