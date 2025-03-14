import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const ResetPassword = () => {
  const navigate = useNavigate();
    const {isLoggedin,userData} = useContext(AppContext)
  const [email, setEmail] = useState('')


  // useEffect(()=>{
  //   isLoggedin && userData && userData.isAccountVerified && navigate('/')
  // },[isLoggedin, userData])

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-200 to-purple-400">
      <img
        src={assets.logo}
        alt="Logo"
        className="absolute left-5 sm:left-20 top-5 w-28 sm:w-32 cursor-pointer"
        onClick={() => navigate("/")}
      />

      <form
        // onSubmit={onSubmitHandler}
        className="bg-slate-900 p-8 rounded-lg shadow-lg w-96 text-sm"
       >
        <h1 className="text-white text-2xlfont-semibold text-center mb-4">
          Reset Password
        </h1>
        <p className="text-center mb-6 text-indigo-300">
          Enter your registered Email address
        </p>

        <div className="mb-4 flex items-center gap-3 w-full px-5 py-2.5 rounded-full bg-[#333A5C]">
          <img src={assets.mail_icon} alt="" className="w-3 h-3" />
          <input type="email" placeholder="Email ID" className="bg-transparent outline-none text-white"
          value={email} onChange={e=>setEmail(e.target.value)} required
          />
        </div>
        <button className="w-full py-2.5 bg-gradient-to-r from-indigo-500 to-indigo-900 text-white rounded-full mt-3">Submit</button>
      </form>
    </div>
  );
};

export default ResetPassword;
