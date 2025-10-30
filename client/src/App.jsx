import {Routes,Route, BrowserRouter, Link} from "react-router-dom";
import Students from "./pages/students";
import NavBar from "./components/NavBar";
import Rooms from "./pages/rooms";
import Bookings from "./pages/bookings"
import Home from "./pages/Home"


export default function App(){
  return (
  <>

  <BrowserRouter>
       <nav>
        <NavBar />
      </nav>

      <Routes>
        <Route path="/" element={<Home />}>Home</Route>

        {/* students route */}

        <Route path="/addStudents" element={<Students />} />
        {/* <Route path="viewStudents" element={<ViewStudents />} />
        <Route path="updateStudents" element={<UpdateStudents />} />
        <Route path="deleteStudents" element={<DeleteStudents />} /> */}
        
          {/* rooms route  */}

        <Route path="/addRooms" element={<Rooms />} />
        {/* <Route path="/viewrooms" element={<Rooms />} />
        <Route path="/updaterooms" element={<Rooms />} />
        <Route path="/deleteRooms" element={<Rooms />} /> */}

          {/* bookings route */}

        <Route path="/addBookings" element={<Bookings />}/>
        {/* <Route path="/viewBookings" element={<Bookings />}/>
        <Route path="/updateBookings" element={<Bookings />}/>
        <Route path="/deleteookings" element={<Bookings />}/> */}
      </Routes>
  </BrowserRouter>
      
  </>
  )
};