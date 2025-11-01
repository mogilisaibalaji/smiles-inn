import { useState } from "react";
import axios from "axios";
import "./rooms.css";

export default function AddRooms() {
  const [roomNo, setRoomNo] = useState("");
  const [floor, setFloor] = useState("");
  const [type, setType] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const roomData = { roomNo, floor, type, price };
    try {
      const res = await axios.post("http://localhost:3000/api/v1/rooms/add", roomData);
      console.log(res.data);
      alert("Room added successfully!");
      setRoomNo("");
      setFloor("");
      setType("");
      setPrice("");
    } catch (err) {
      console.error("Error:", err);
      alert("Failed to add room");
    }
  }

  return (
    <div>
      <h2>Allocate Rooms</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Room No"
          type="number"
          value={roomNo}
          onChange={(e) => setRoomNo(e.target.value)}
        /><br />

        <input
          placeholder="Floor"
          type="number"
          value={floor}
          onChange={(e) => setFloor(e.target.value)}
        /><br />

        <input
          placeholder="Type"
          type="text"
          value={type}
          onChange={(e) => setType(e.target.value)}
        /><br />

        <input
          placeholder="Price"
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        /><br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
