import React, { useState } from "react";
import { Link } from "react-router-dom";
import Students from "../pages/Students";
import "../styling/NavBar.css";

export default function NavBar(){
    const [studentOpen , setStudentOpen] = useState(false);
    const [roomsOpen , setRoomsOpen] = useState(false);
    const [BookingsOpen , setBookingsOpen] = useState(false);

    return (
        <>
            <nav>
                <h2 className="logo">Smlies in Pg services</h2>
                <ul >
                    {/* Students */}
                    <li
                        onMouseEnter = {()=> setStudentOpen(true)}
                        onMouseLeave = {()=> setStudentOpen(false)}
                     >
                        <span>Students ▾</span>
                        {studentOpen &&(
                            <ul>
                                <li><Link to="/Studnets/add">Add Student </Link></li>
                                <li><Link to = "/Students/view">View Students</Link></li>
                                <li> <Link to= "/Students/update">Update students</Link> </li>
                                <li> <Link to= "/Students/delete">delete students</Link> </li>
                            </ul>

                        )}
                        
                     </li>

        
                     {/* rooms */}

                        <li 
                        onMouseEnter={()=>setRoomsOpen(true)}
                        onMouseLeave={()=>setRoomsOpen(false)}
                        >
                            <span>rooms ▾</span>
                            {roomsOpen &&(
                                <ul>

                                    <li> <Link to= "/Rooms/add" >Add Rooms</Link> </li>
                                    <li> <Link to ="/Rooms/view">View rooms</Link> </li>
                                    <li> <Link to="/Rooms/update">Update Rooms</Link> </li> 
                                    <li> <Link to = "Rooms/delete">delete Rooms</Link></li>

                                </ul>
                        )}
                        </li>

                    {/* bookings   */}

                    <li 
                    onMouseEnter={()=>setBookingsOpen(true)}
                    onMouseLeave={()=>setBookingsOpen(false)}
                    >
                        <span>bookins ▾</span>
                        {BookingsOpen &&(
                            <ul>
                                <li> <Link to = "/Bookings/add">Add Bookings</Link> </li>
                                <li> <Link to = "/Bookings/view">My Bookings</Link> </li>
                                <li> <Link to= "/Bookingsupdate"> Update bookings</Link> </li>
                                <li> <Link to = "/Bookings/delete">Delete Bookings</Link> </li>
                            </ul>

                        )}

                    </li>

                    <li>   <Link to={"/Logout"}>Logout</Link></li>
                    <li>   <Link to={"/About"}>About</Link></li>
                </ul>
            </nav>                
        </>
    )
}
