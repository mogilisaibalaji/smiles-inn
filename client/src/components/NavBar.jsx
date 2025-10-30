import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../styling/NavBar.css"

export default function NavBar() {
  const [openStudent, setOpenStudent] = useState(false);
  const [openRooms, setOpenRooms] = useState(false);
  const [openBookings, setOpenBookings] = useState(false);

  return (
    <nav className="navbar">
      <ul className="nav-list">
        <Link to={"/"}>Smiles Inn Services</Link>

        {/* Students */}
        <li
          className="nav-item"
          onMouseEnter={() => setOpenStudent(true)}
          onMouseLeave={() => setOpenStudent(false)}
        >
          <span>Students </span>
          {openStudent && (
            <ul className="dropdown">
              <li><Link to="/addStudents">Add Student</Link></li>
              <li><Link to="/viewStudents">View Student</Link></li>
              <li><Link to="/updateStudents">Update Student</Link></li>
              <li><Link to="/deleteStudents">Delete Student</Link></li>
            </ul>
          )}
        </li>

        {/* Rooms */}
        <li
          className="nav-item"
          onMouseEnter={() => setOpenRooms(true)}
          onMouseLeave={() => setOpenRooms(false)}
        >
          <span>Rooms </span>
          {openRooms && (
            <ul className="dropdown">
              <li><Link to="/addRooms">Add Room</Link></li>
              <li><Link to="/viewRooms">View Rooms</Link></li>
              <li><Link to="/updateRooms">Update Room</Link></li>
              <li><Link to="/deleteRooms">Delete Room</Link></li>
            </ul>
          )}
        </li>

        {/* Bookings */}
        <li
          className="nav-item"
          onMouseEnter={() => setOpenBookings(true)}
          onMouseLeave={() => setOpenBookings(false)}
        >
          <span>Bookings </span>
          {openBookings && (
            <ul className="dropdown">
              <li><Link to="/addBookings">Add Booking</Link></li>
              <li><Link to="/viewBookings">View Bookings</Link></li>
              <li><Link to="/updateBookings">Update Booking</Link></li>
              <li><Link to="/deleteBookings">Delete Booking</Link></li>
            </ul>
          )}
        </li>
      </ul>
    </nav>
  );
}
