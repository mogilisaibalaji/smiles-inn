import {Routes,Route, BrowserRouter} from "react-router-dom";
import NavBar from "./components/NavBar";
// import Bookings from "./pages/bookings"
import Home from "./pages/Home"
import {AddStudents,ViewStudents } from "./pages/students";
import  AddRooms  from "./pages/rooms";


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

        <Route path="/addStudents" element={<AddStudents />} />
        <Route path="/viewStudents" element={<ViewStudents />} />
        {/* <Route path="updateStudents" element={<UpdateStudents />} />
        <Route path="deleteStudents" element={<DeleteStudents />} /> */}
        
          {/* rooms route  */}

        <Route path="/addRooms" element={<AddRooms />} />
        {/* <Route path="/viewrooms" element={<Rooms />} /> */}
        {/* <Route path="/updaterooms" element={<Rooms />} /> */}
        {/* <Route path="/deleteRooms" element={<Rooms />} /> */}

          {/* bookings route */}

        {/* <Route path="/addBookings" element={<Bookings />}/> */}
        {/* <Route path="/viewBookings" element={<Bookings />}/>
        <Route path="/updateBookings" element={<Bookings />}/>
        <Route path="/deleteookings" element={<Bookings />}/> */}
      </Routes>
  </BrowserRouter>
      
  </>
  )
};