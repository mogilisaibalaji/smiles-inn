import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(){
    return (
        <>
            <nav>
                <h2 className="logo">Smlies in Pg services</h2>
                <ul className="nav-links">
                    <li>   <Link to={"/Students"}>Students</Link> </li>
                    <li>   <Link to={"/Rooms"}>Rooms</Link></li>
                    <li>   <Link to = {"/Bookings"}>Bookings</Link></li>
                    <li>   <Link to={"/Logout"}>Logout</Link></li>
                    <li>   <Link to={"/About"}>About</Link></li>
                </ul>
            </nav>                
        </>
    )
}
