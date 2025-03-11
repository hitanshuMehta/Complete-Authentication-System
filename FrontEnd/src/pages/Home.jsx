import React, { useContext, useEffect } from "react";
import NavBar from "../components/NavBar";
import Header from "../components/Header";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Home = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { isLoggedin } = useContext(AppContext);

  // useEffect(() => {
  //   // Redirect non-logged-in users to "/" if they try to access any other route except "/login"
  //   if (!isLoggedin && location.pathname !== "/login") {
  //     navigate("/");
  //   }
  // }, [isLoggedin, location.pathname, navigate]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <NavBar />
      <Header />
    </div>
  );
};

export default Home;
