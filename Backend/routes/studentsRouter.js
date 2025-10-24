const { Router }  = require("express");
const studentsRouter =  Router();
const { studentsModel} = require("../db");
 
studentsRouter.post("/add" , async function (req,res){
    const {name , age ,phone , address , city , dept } = req.body
    
     const newStudent = new studentsModel({
      name,
      age,
      phone,
      location,
      city,
      dept,
    });

    await newStudent.save();
    res.json({ message: "Student added successfully" });

     
});

studentsRouter.get("/get" ,(req,res)=>{
    const {}

});

studentsRouter.put("/update" ,(req,res)=>{

});

studentsRouter.delete("/delete" , (req,res)=>{

});



module.exports = studentsRouter;