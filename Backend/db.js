const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ObjectId = mongoose.ObjectId;

mongoose.connect("mongodb+srv://saibalajimogili_db_user:admin123@cluster123.5cb5zgu.mongodb.net/Smiles_inn");



const students = new Schema({
    name : String,
    age : Number,
    phone : Number,
    location : String,
    city : String,
    dept : String
});

const rooms = new Schema({
    roomNo : Number,
    floor : Number,
    type : String,
    ac : Boolean
});

const bookings = new Schema({
    bookingId : ObjectId,
    phone : Number,
    room : Number,
    date : Date,
    amount : Number

    
});

const studentsModel = mongoose.model("students",students);
const roomsModel = mongoose.model("rooms",rooms);
const bookingsModel = mongoose.model("bookings",bookings);

module.exports={
    studentsModel,
    roomsModel,
    bookingsModel
};