import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const AppContext = createContext(); // Fix naming consistency

export const AppContextProvider = ({ children }) => {

    axios.defaults.withCredentials = true


  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [isLoggedin, setisLoggedin] = useState(false);
  const [userData, setUserData] = useState(null); // Change false to null for better handling


  const getAuthState = async ()=>{
    try {
        const {data} = await axios.get(backendUrl + '/api/auth/is-auth')
        if(data.success){
            setisLoggedin(true)
            getUserData()
        }
    } catch (error) {
       toast.error(error.message) 
    }
  }

  const getUserData = async ()=>{
    try {
        const {data} = await axios.get(backendUrl+'/api/user/data')
        data.success ? setUserData(data.userData) : toast.error(data.message)
    } catch (error) {
        toast.error(error.message)
    }
  }

useEffect(()=>{
    getAuthState();
},[])

  const value = {
    backendUrl,
    isLoggedin,
    setisLoggedin,
    userData,
    setUserData,
    getUserData
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};
