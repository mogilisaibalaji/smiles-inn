const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;


mongoose.connect("mongodb+srv://saibalajimogili_db_user:admin123@cluster123.5cb5zgu.mongodb.net/Smiles_inn")
  .then(() => console.log(" MongoDB connected successfully"))
  .catch(err => console.error(" MongoDB connection error:", err));


const students = new Schema({
  name: String,
  age: Number,
  phone: Number,
  address: String,
  city: String,
  dept: String
});

const rooms = new Schema({
  roomNo: Number,
  floor: Number,
  type: String,
  price : Number
});

const bookings = new Schema({
  bookingId: ObjectId,
  phone: Number,
  room: Number,
  date: {type : Date , default : Date.now},
  amount: Number
});


const studentsModel = mongoose.model("students", students);
const roomsModel = mongoose.model("rooms", rooms);
const bookingsModel = mongoose.model("bookings", bookings);


module.exports = {
  studentsModel,
  roomsModel,
  bookingsModel
};
