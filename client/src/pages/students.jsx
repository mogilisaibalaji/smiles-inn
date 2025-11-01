import React, { useState} from "react";
import axios from "axios";

import "../styling/AddStudents.css";

export  function AddStudents() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [dept, setDept] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userData = { name, age, phone, city, dept };

    try {
      await axios.post("http://localhost:3000/api/v1/students/add", userData);

      setName("");
      setAge("");
      setPhone("");
      setCity("");
      setDept("");
    } catch (error) {
      console.error("Error adding student:", error);
      alert("Failed to add student");
    }
  };

  return (
    <div>
      <h2>Add Students</h2>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Student Name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          placeholder="Age"
          type="number"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />

        <input
          placeholder="Phone"
          type="number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />

        <input
          placeholder="City"
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        <input
          placeholder="Department"
          type="text"
          value={dept}
          onChange={(e) => setDept(e.target.value)}
        />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}


export function ViewStudents(){
  return (
    <>
    <input/>
    <button>search</button>
    </>
  );

}