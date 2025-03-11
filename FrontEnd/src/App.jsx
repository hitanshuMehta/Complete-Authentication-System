// import React from "react";
// import { Route, Routes, Navigate } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import EmailVerify from "./pages/EmailVerify";
// import ResetPassword from "./pages/ResetPassword";
// import { ToastContainer } from "react-toastify";
// import { useContext } from "react";
// import { AppContext } from "./context/AppContext";

// // Protected Route Component
// const ProtectedRoute = ({ children }) => {
//   const { isLoggedin } = useContext(AppContext);

//   // Redirect to /login if not logged in
//   return isLoggedin ? children : <Navigate to="/" replace />;
// };

// const App = () => {
//   return (
//     <div>
//       <ToastContainer />
//       <Routes>
//         {/* Public Routes */}
//         <Route path="/" element={<Home />} />
//         <Route path="/login" element={<Login />} />
//         <Route path="/reset-password" element={<ResetPassword />} />

//         {/* Protected Routes */}
//         <Route
//           path="/email-verify"
//           element={
//             <ProtectedRoute>
//               <EmailVerify />
//             </ProtectedRoute>
//           }
//         />
//       </Routes>
//     </div>
//   );
// };

// export default App;

import React, { useContext } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import EmailVerify from "./pages/EmailVerify";
import ResetPassword from "./pages/ResetPassword";
import { ToastContainer } from "react-toastify";
import { AppContext } from "./context/AppContext";

const App = () => {
  const { isLoggedin } = useContext(AppContext);

  return (
    <div>
      <ToastContainer />
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Home />} />

        {/* Restrict /login when user is already logged in */}
        <Route
          path="/login"
          element={isLoggedin ? <Navigate to="/" replace /> : <Login />}
        />

        {/* Restrict /reset-password when user is already logged in */}
        <Route
          path="/reset-password"
          element={isLoggedin ? <Navigate to="/" replace /> : <ResetPassword />}
        />

h
        {/* Protected Route (Only Add If Logged In) */}
        {isLoggedin ? (
          <Route path="/email-verify" element={<EmailVerify />} />
        ) : (
          <Route path="/email-verify" element={<Navigate to="/" replace />} />
        )}
      </Routes>
    </div>
  );
};

export default App;
