const { Router }  = require("express");
const studentsRouter =  Router();
const { studentsModel } = require("../db");
 
studentsRouter.post("/add" , async function (req,res){
    const name  = req.body.name;
    const age = req.body.age;
    const phone = req.body.phone;
    const location = req.body.location;
    const city = req.body.city;
    const dept = req.body.dept;

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

studentsRouter.put("/update" ,(req,res)=>{

});

studentsRouter.delete("/delete" , (req,res)=>{

});

studentsRouter.get("/get" ,(req,res)=>{

});

module.exports = studentsRouter;