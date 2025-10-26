import React from "react";
import {Routes,Route } from "react-router-dom";
 import Students from "./pages/Students.jsx";
 import Rooms from "./pages/Rooms.jsx";
 import Bookings from "./pages/Bookings.jsx";
 import NavBar from "./components/NavBar.jsx";



export default function App() {
  return (
    <>
      <div>
           <NavBar />
          <Routes>
            <Route path="/Students" element = {<Students/>} />
            <Route path="/Rooms" element = {<Rooms/>} />
            <Route path="/Bookings" element = {<Bookings/>} />
            {/* <Route path ="/About" element =  {<About/>} /> */}
          </Routes> 

          

      </div>
    </>
  );
}