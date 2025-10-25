const { Router }= require("express");
const { bookingsModel } = require("../db")
const bookingsRouter = Router();

bookingsRouter.post("/add" ,async (req,res)=>{
    const {bookingId ,studentId,roomId,name, phone , room , date , amount} = req.body;

    const newBooking = new bookingsModel({
        bookingId,
        studentId,
        roomId,
        name,
        phone,
        room,
        date,
        amount
    }); 
    await newBooking.save();
    res.json({
        message : " Booking added successfully "
    });
    
});

bookingsRouter.get("/get",async (req,res)=>{
    try{
        const {bookingId ,phone, room} = req.query;
        let bookings;

        if (bookingId){
         const   bookings = await bookingsModel.find({ bookingId: bookingId });
            return res.json(bookings);
        }
         if (studentId){
         const   bookings = await bookingsModel.find({ studentId :studentId});
            return res.json(bookings);
        }
        if (phone){
          const   bookings = await bookingsModel.find({phone : Number(phone)});
            return res.json(bookings);
        }
        if (room){
            const   bookings = await bookingsModel.find({ room: Number(room)});
            return res.json(bookings);
        }

        else{
            const  bookings = await bookingsModel.find();
            return res.json(bookings);
        };
    

    }

    catch(err){
    res.status(500).json({
        error : " Error fetching bookings "
    });

    }
});
bookingsRouter.put("/update/:id" ,async (req,res)=>{
    try{
        const {id} = req.params;
        const {bookingId , phone , room , date , amount} = req.body;
        const bookingsData = await bookingsModel.findByIdAndUpdate(
            id,
            { bookingId, phone, room, date, amount },
            {new : true}
        );
        res.json({
            message : " Booking updated successfully ",
            data : bookingsData
        });
    }    
    catch(err){
        res.status(500).json({
            error : " Error updating booking "
        });
}   
});

bookingsRouter.delete("/delete/:id" , async (req,res)=>{
    try{
        const {id} = req.params;
        const deleteBooking = await bookingsModel.findByIdAndDelete(id);    
        if (!deleteBooking){
            return res.status(404).json({
                message : " No booking found to delete "
            });
        }
    }
    catch(err){
        res.status(500).json({
            error : " Error deleting booking "
    });
}   
});

module.exports= bookingsRouter

