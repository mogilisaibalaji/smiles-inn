const express = require("express");
const { studentsModel , roomsModel , bookingsModel }= require("./db");
const studentsRouter =  require("./routes/studentsRouter");
const roomsRouter = require("./routes/roomsRouter");
const bookingsRouter = require("./routes/bookingsRouter");

const app = express();

app.use("/api/v1/studentsRouter", studentsRouter);
app.use("/api/v1/roomsRouter",roomsRouter);
app.use("api/v1/bookingsRouter",bookingsRouter);

app.listen(3000, ()=>{
    console.log("The server is running in the port 3000")
});
