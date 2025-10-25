const { Router } = require("express");
const {  roomsModel } = require("../db");
const roomsRouter = Router();

roomsRouter.post("/add", async (req,res)=>{
    const {roomNo , floor ,type ,price} = req.body;

    const newRoom = new roomsModel({
        roomNo,
        floor,
        type,
        price
    });
    
    await newRoom.save();
    res.json({
        message : " Room added successfully "
    });

    
});
roomsRouter.get("/get",async (req,res)=>{
    try{
    const { roomNo , floor } = req.query;

    let rooms;

    if (roomNo){
        const rooms = await roomsModel.find({ roomNo: Number(roomNo) });
         return res.json(rooms);

    }
    if (floor){
        const rooms = await roomsModel.find({ floor: Number(floor)})
        return res.json(rooms);
    }
    else{
        const rooms = await roomsModel.find();
        return  res.json(rooms);

    }

}
    catch(err){
        res.status(500).json({
            error : " Error fetching rooms "
        });
    }

})

roomsRouter.put("/update/:id" ,async (req,res)=>{
    try{
    const {id} = req.params;
    const {roomNo ,floor, type, price} = req.body;

    const roomsData = await roomsModel.findByIdAndUpdate(
        id,
        { roomNo,floor,type,price },
        {new : true}
    );
    
    res.json({
        message : " Room updated successfully ",
        roomsData : roomsData
    });
} catch(err){
    res.status(500).json({
        error : " Error updating room "
    });
}

});

roomsRouter.delete("/delete/:id" , async (req,res)=>{
    try{
    const {id} = req.params;
    const deleteRooms = await roomsModel.findByIdAndDelete(id);
    if (!deleteRooms){
        return res.status(404).json({
            message : " No room found to delete "
        });
    } 
    else{
        return res.json({
            message : " Room deleted successfully "
        });
    }
} catch(err){
    res.status(500).json({
        error : " Error deleting room "
    }); 
}

});


module.exports= roomsRouter;

